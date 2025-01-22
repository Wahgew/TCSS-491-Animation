const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Sprites/running.png");
ASSET_MANAGER.queueDownload("./Sprites/walk.png");
ASSET_MANAGER.queueDownload("./Sprites/idle.png");
ASSET_MANAGER.queueDownload("./Sprites/attack_1.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new Samurai(gameEngine));

	let walkSamurai= new Samurai(gameEngine);
	let idleSamurai = new Samurai(gameEngine);
	let atkSamurai = new Samurai(gameEngine);

	walkSamurai.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/walk.png"), 20, 0, 128,128, 8, 0.2);
	walkSamurai.x = 0;
	walkSamurai.y = 200;
	walkSamurai.speed = 100;

	idleSamurai.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/idle.png"), 20, 0, 128,128, 6, 0.15);
	idleSamurai.x = 0;
	idleSamurai.y = 400;
	idleSamurai.speed = 0;

	atkSamurai.animator = new Animator(ASSET_MANAGER.getAsset("./Sprites/attack_1.png"), 20, 0, 128,128, 6, 0.1);
	atkSamurai.x = 200;
	atkSamurai.y = 400;
	atkSamurai.speed = 0;

	gameEngine.addEntity(walkSamurai);
	gameEngine.addEntity(idleSamurai);
	gameEngine.addEntity(atkSamurai);

	gameEngine.init(ctx);

	gameEngine.start();
});
