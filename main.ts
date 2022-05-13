input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let PUNTUAA: game.LedSprite = null
PUNTUAA.set(LedSpriteProperty.X, 2)
PUNTUAA.set(LedSpriteProperty.Y, 4)
basic.forever(function () {
    let Jokalari: game.LedSprite = null
    if (input.buttonIsPressed(Button.A)) {
        Jokalari.change(LedSpriteProperty.X, 1)
    }
    if (input.buttonIsPressed(Button.B)) {
        Jokalari.change(LedSpriteProperty.X, -1)
    }
    if (input.buttonIsPressed(Button.AB)) {
    	
    }
})
