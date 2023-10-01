const config = {
    segmentNumber: 10,
    segmentWidthRange: {
        min: 10,
        max: 20
    }
}

function fRandomRange(min, max) {
    return Math.random() * (max - min) + min;
}

function createCrack(canvas, configuration = config) {
    let context = canvas.getContext("2d")
    let width = canvas.width
    let height = canvas.height

    let segmentHeight = height / configuration.segmentNumber
    for (let i = 0; i < configuration.segmentNumber; i += 1) {
        context
    }
}