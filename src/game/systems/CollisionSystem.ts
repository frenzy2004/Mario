import Phaser from "phaser";

export function oneWayPlatformProcess(
  playerObject: unknown,
  platformObject: unknown,
): boolean {
  const playerBody = getBody(playerObject) as Phaser.Physics.Arcade.Body | undefined;
  const platformBody = getBody(platformObject);
  if (!playerBody || !platformBody) {
    return false;
  }
  const playerBottom = playerBody.y + playerBody.height;
  const platformTop = platformBody.y + 6;
  return playerBody.velocity.y >= 0 && playerBottom <= platformTop;
}

export function isStomp(
  player: Phaser.Physics.Arcade.Sprite,
  target: Phaser.Physics.Arcade.Sprite,
): boolean {
  const playerBody = player.body as Phaser.Physics.Arcade.Body;
  const targetBody = target.body as Phaser.Physics.Arcade.Body;
  return playerBody.velocity.y > 60 && playerBody.bottom <= targetBody.top + 18;
}

function getBody(object: unknown): Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody | undefined {
  if (!object || typeof object !== "object") {
    return undefined;
  }
  if ("velocity" in object && "height" in object && "y" in object) {
    return object as Phaser.Physics.Arcade.Body;
  }
  if ("body" in object) {
    return (object as { body?: Phaser.Physics.Arcade.Body | Phaser.Physics.Arcade.StaticBody }).body;
  }
  return undefined;
}
