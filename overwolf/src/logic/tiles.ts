import { getTileCacheKey } from './tileCache';

const width = 224;
const height = 225;
const tileWidth = 256;
const tileHeight = 256;
const gameMapWidth = 14336;
const gameMapHeight = 14400;

export function getTileCoordinatesForWorldCoordinate(worldPos: Vector2) {
    const totalWidth = width * tileWidth;
    const totalHeight = height * tileHeight;

    const imageX = worldPos.x / gameMapWidth * totalWidth;
    const imageY = (gameMapHeight - worldPos.y) / gameMapHeight * totalHeight;

    const tileX = Math.floor(imageX / tileWidth);
    const tileY = Math.floor(imageY / tileHeight);

    return { x: tileX, y: tileY - 1 };
}

export function getTileCacheKeyFromWorldCoordinate(worldPos: Vector2) {
    const tilePos = getTileCoordinatesForWorldCoordinate(worldPos);
    return getTileCacheKey(tilePos);
}

export function getDimensions(screenWidth: number, screenHeight: number, angle?: number) {
    if (!angle) {
        angle = 0;
    }

    const x = Math.ceil(screenWidth / tileWidth / 2) * 2 + 1;
    const y = Math.ceil(screenHeight / tileHeight / 2) * 2 + 1;

    if (angle === 0) {
        return { x, y };
    }

    // TODO: Improve map loading.

    return { x, y };
}

export function toMinimapCoordinate(playerWorldPos: Vector2, worldPos: Vector2, screenWidth: number, screenHeight: number) {
    const dimensions = getDimensions(screenWidth, screenHeight);
    const totalWidth = tileWidth * width;
    const totalHeight = tileHeight * height;
    const { x: tileX, y: tileY } = getTileCoordinatesForWorldCoordinate(playerWorldPos);

    const pixelX = Math.floor(worldPos.x / gameMapWidth * totalWidth);
    const pixelY = Math.floor((gameMapHeight - worldPos.y) / gameMapHeight * totalHeight);

    const imageX = pixelX - ((tileX - Math.floor(dimensions.x / 2)) * tileWidth);
    const imageY = pixelY - ((tileY - Math.floor(dimensions.y / 2) + 1) * tileHeight);

    return { x: imageX, y: imageY };
}
