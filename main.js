const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("Sprites/running.png");
//ASSET_MANAGER.queueDownload("Sprites/walking.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Samurai(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
