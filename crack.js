const config = {
    segmentNumber: 16,
    segmentWidthRange: {
        min: 10,
        max: 20
    }
}

function fRandomRange(min, max) {
    return Math.random() * (max - min) + min
}

function iRandomRange(min, max) {
    return Math.floor(fRandomRange(min, max))
}

function createCrack(canvas, configuration = config) {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    let context = canvas.getContext("2d")
    let width = canvas.width
    let height = canvas.height

    let segmentHeight = height / configuration.segmentNumber
    context.lineWidth = width / 5
    context.moveTo(0, 0)
    for (let i = 1; i < configuration.segmentNumber + 2; i += 1) {
        if ((i % 2) == 0) {
            context.lineTo(0 + context.lineWidth, i * segmentHeight)
        } else {
            context.lineTo(width - context.lineWidth, i * segmentHeight)
        }
        continue
        if ((i % 2) == 0) {
            context.lineTo(iRandomRange(0, width / 2), i * segmentHeight)
            continue
        }

        context.lineTo(iRandomRange(width / 2, width), i * segmentHeight)
    }

    context.stroke()
}