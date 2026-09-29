const Game = (() => {
    const canvas = document.getElementById('Canvas');
    const ctx = canvas.getContext('2d');

    const config = {
        TILESET_SIZE: 16,
        TILE_SIZE: 48,
        MAP_WIDTH: 100,
        MAP_HEIGHT: 100,
        SEED: Math.floor(Math.random() * 10000),
        SCALE: 0.1,
        MINIMAP_WIDTH: 200,
        MINIMAP_HEIGHT: 200,
        MINIMAP_PADDING: 10,
        MINIMAP_TILE_SIZE: 0,
    };

    config.MINIMAP_TILE_SIZE = Math.min(
        config.MINIMAP_WIDTH / config.MAP_WIDTH,
        config.MINIMAP_HEIGHT / config.MAP_HEIGHT
    );

    const state = {
        posX: 0,
        posY: 0,
        inventory: [
            { name: 'wood', tile: [2, 4], count: 500 },
            { name: 'meat', tile: [4, 1], count: 500 },
            { name: 'wheat', tile: [5, 1], count: 500 },
            { name: 'gold', tile: [5, 2], count: 500 },
            { name: 'rock', tile: [1, 2], count: 500 },
            { name: 'brick', tile: [0, 2], count: 500 },
        ],
        keys: {},
        mouseX: 0,
        mouseY: 0,
        onclick: false,
        leftClick: false,
        rightClick: false,
        roll: false,
        rolldirection: 0,
        notchs: 0,
        rollMode: 'building',
        buildID: [0, 0, 0],
        cursorSize: [1, 1],
        cursorBlock: [0, 0],
        cursorMultiplier: 1,
        Loop: 0,
        FullscreenCooldown: 0,
        rightClickCooldown: 0,
        edgeDetectionSize: 0,
        startTime: performance.now(),
        elapsedTime: 0,
        fps: 0,
        lastFrameTime: performance.now(),
    };

    state.edgeDetectionSize = config.TILE_SIZE * 3;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function getRuntime() {
        return {
            canvas,
            ctx,
            config,
            state,
            resizeCanvas,
        };
    }

    return {
        canvas,
        ctx,
        config,
        state,
        resizeCanvas,
        getRuntime,
    };
})();

window.Game = Game;
