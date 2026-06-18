export interface LevelMeta {
  id: string;
  index: number;
  title: string;
  chapter: string;
  chapterIndex: number;
  chapterLevel: number;
  final: boolean;
}

const CHAPTERS = [
  "Brassroot Verge",
  "Glassberry Lift",
  "Windmill Tangle",
  "Moonlit Gearway",
  "Aurora Conservatory",
  "The Warden's Crown",
] as const;

const LEVELS_PER_CHAPTER = 7;

export const LEVEL_META: readonly LevelMeta[] = [
  ...CHAPTERS.flatMap((chapter, chapterIndex) =>
    Array.from({ length: LEVELS_PER_CHAPTER }, (_unused, levelIndex) => {
      const index = chapterIndex * LEVELS_PER_CHAPTER + levelIndex;
      const chapterLevel = levelIndex + 1;
      return {
        id: `level-${String(index + 1).padStart(2, "0")}`,
        index,
        title: `${chapter} ${String(chapterLevel).padStart(2, "0")}`,
        chapter,
        chapterIndex,
        chapterLevel,
        final: false,
      };
    }),
  ),
  {
    id: "final-crown",
    index: CHAPTERS.length * LEVELS_PER_CHAPTER,
    title: "Final Challenge: Crown of Turning Leaves",
    chapter: "The Warden's Crown",
    chapterIndex: CHAPTERS.length - 1,
    chapterLevel: LEVELS_PER_CHAPTER + 1,
    final: true,
  },
] as const;

export const LEVEL_COUNT = LEVEL_META.length;

export interface CampaignProgress {
  completed: number;
  total: number;
  percent: number;
  label: string;
  complete: boolean;
}

export function campaignProgress(bestTimes: Record<string, number>): CampaignProgress {
  const completed = LEVEL_META.reduce(
    (count, meta) => count + (Object.hasOwn(bestTimes, meta.id) ? 1 : 0),
    0,
  );
  const percent = Math.round((completed / LEVEL_COUNT) * 100);

  return {
    completed,
    total: LEVEL_COUNT,
    percent,
    label: `${completed}/${LEVEL_COUNT} cleared (${percent}%)`,
    complete: completed >= LEVEL_COUNT,
  };
}

export function clampLevelIndex(index: number): number {
  return Math.max(0, Math.min(Math.floor(Number.isFinite(index) ? index : 0), LEVEL_COUNT - 1));
}

export function clampUnlockedLevel(index: number): number {
  return clampLevelIndex(index);
}

export function getLevelMetaByIndex(index: number): LevelMeta {
  return LEVEL_META[clampLevelIndex(index)]!;
}

export function levelIsUnlocked(index: number, unlockedLevel: number): boolean {
  return clampLevelIndex(index) <= clampUnlockedLevel(unlockedLevel);
}

export function levelIndexFromSearch(search: string, fallback: number): number {
  const params = new URLSearchParams(search);
  const raw = params.get("level");
  if (!raw) {
    return clampLevelIndex(fallback);
  }

  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) {
    return clampLevelIndex(fallback);
  }
  return clampLevelIndex(parsed > 0 ? parsed - 1 : parsed);
}
