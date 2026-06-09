import { beforeEach, describe, expect, it, vi } from "vitest";
import { SaveSystem } from "../../src/game/systems/SaveSystem";

describe("SaveSystem", () => {
  beforeEach(() => {
    const store = new Map<string, string>();
    Object.defineProperty(globalThis, "localStorage", {
      configurable: true,
      value: {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => store.set(key, value),
        removeItem: (key: string) => store.delete(key),
        clear: () => store.clear(),
        key: (index: number) => Array.from(store.keys())[index] ?? null,
        get length() {
          return store.size;
        },
      },
    });
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-09T00:00:00Z"));
  });

  it("records best times and unlocks later levels", () => {
    const saveSystem = new SaveSystem();
    const save = saveSystem.recordCompletion("level-01", 0, 12_000, 5000);
    expect(save.unlockedLevel).toBe(1);
    expect(save.bestTimes["level-01"]).toBe(12_000);
    const improved = saveSystem.recordCompletion("level-01", 0, 11_000, 4500);
    expect(improved.bestTimes["level-01"]).toBe(11_000);
  });
});
