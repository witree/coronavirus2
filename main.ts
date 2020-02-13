enum ActionKind {
    Walking,
    Idle,
    Jumping,
    runleft,
    runright,
    runup,
    rundown,
    runleftattack,
    runrigthattack,
    runupattack,
    rundownattack
}
namespace SpriteKind {
    export const person = SpriteKind.create()
    export const equipment = SpriteKind.create()
    export const nurse = SpriteKind.create()
    export const obstacle = SpriteKind.create()
    export const Plaguebearer = SpriteKind.create()
    export const pet = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
3 b b b b b b 3 3 b b b b b b 3 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
3 b b b b b b 3 3 b b b b b b 3 
3 b b b b b b 3 3 b b b b b b 3 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
b 1 1 1 1 1 1 b b 1 1 1 1 1 1 b 
3 b b b b b b 3 3 b b b b b b 3 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
c d d d d d d d d d d d d d d c 
d c d d d d d d d d d d d d c d 
d d c d d d d d d d d d d c d d 
d d d c d d d d d d d d c d d d 
d d d d c d d d d d d c d d d d 
d d d d d c d d d d c d d d d d 
d d d d d d c d d c d d d d d d 
d d d d d d d c c d d d d d d d 
d d d d d d d c c d d d d d d d 
d d d d d d c d d c d d d d d d 
d d d d d c d d d d c d d d d d 
d d d d c d d d d d d c d d d d 
d d d c d d d d d d d d c d d d 
d d c d d d d d d d d d d c d d 
d c d d d d d d d d d d d d c d 
c d d d d d d d d d d d d d d c 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
}
function creatvirus () {
    bat = sprites.create(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c c . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f c 3 b c 3 b c f b b c c c . 
f c b b b b b b c f b c b c c . 
c c 1 b b b 1 b c b b c b b c . 
c b b b b b b b b b c c c b c . 
c b 1 f f 1 c b b c c c c c . . 
c f 1 f f 1 f b b b b f c . . . 
f f f f f f f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 2 b b b c f . . . . 
. . f 2 2 2 b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    site = Math.randomRange(0, 3)
    if (site == 0) {
        tiles.placeOnTile(bat, tiles.getTileLocation(1, 0))
    } else if (site == 1) {
        tiles.placeOnTile(bat, tiles.getTileLocation(0, 27))
    } else if (site == 2) {
        tiles.placeOnTile(bat, tiles.getTileLocation(31, 27))
    } else if (site == 3) {
        tiles.placeOnTile(bat, tiles.getTileLocation(21, 24))
    }
    dorun(bat)
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(hero, ActionKind.Idle)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.nurse, function (sprite, otherSprite) {
    playersick = 0
    music.magicWand.play()
    sprite.startEffect(effects.smiles, 500)
    otherSprite.startEffect(effects.hearts, 500)
    info.setLife(3)
})
scene.onHitWall(SpriteKind.Plaguebearer, function (sprite) {
    doknock(sprite)
})
sprites.onOverlap(SpriteKind.Plaguebearer, SpriteKind.obstacle, function (sprite, otherSprite) {
    doknock(sprite)
})
sprites.onOverlap(SpriteKind.person, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    personnum += -1
    sicknum += 1
    music.pewPew.play()
    sprite.say("Monster！", 1000)
    sprite.startEffect(effects.coolRadial)
    sprite.setKind(SpriteKind.Plaguebearer)
    sprite.setFlag(SpriteFlag.StayInScreen, false)
    display()
})
function initAnimate () {
    heroleft = animation.createAnimation(ActionKind.runleft, 80)
    heroleft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . 3 
`)
    heroleft.addAnimationFrame(img`
. . . . . f f f f f f . . . . . 
. . . . f 2 f e e e e f f . . . 
. . . f 2 2 2 f e e e e f f . . 
. . . f e e e e f f e e e f . . 
. . f e 2 2 2 2 e e f f f f . . 
. . f 2 e f f f f 2 2 2 e f . . 
. . f f f e e e f f f f f f f . 
. . f e e 4 4 f b e 4 4 e f f . 
. . f f e d d f 1 4 d 4 e e f . 
. f d d f d d d d 4 e e e f . . 
. f b b f e e e 4 e e f f . . . 
. f b b e d d 4 2 2 2 f . . . . 
. . f b e d d e 2 2 2 e . . . . 
. . . f f e e f 4 4 4 f . . . . 
. . . . . f f f f f f . . . . . 
. . . . . . . f f f . . . . . . 
`)
    animation.attachAnimation(hero, heroleft)
    heroright = animation.createAnimation(ActionKind.runright, 80)
    heroright.addAnimationFrame(img`
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . f f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . . e 2 2 2 e d d e b f . . 
. . . . f 4 4 4 f e e f f . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
`)
    heroright.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`)
    animation.attachAnimation(hero, heroright)
    heroup = animation.createAnimation(ActionKind.runup, 80)
    heroup.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`)
    heroup.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`)
    animation.attachAnimation(hero, heroup)
    herodown = animation.createAnimation(ActionKind.rundown, 80)
    herodown.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f f . 
. . e f e 4 d d d d 4 e f f d f 
. . e 4 d d e 2 2 2 2 f e f b f 
. . . e d d e 2 2 2 2 f 4 f b f 
. . . . e e f 5 5 4 4 f . f c f 
. . . . . f f f f f f f . f f . 
. . . . . . . . . f f f . . . . 
`)
    herodown.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. f f e 4 1 f d d f 1 4 e f . . 
f d f f e 4 d d d d 4 e f e . . 
f b f e f 2 2 2 2 e d d 4 e . . 
f b f 4 f 2 2 2 2 e d d e . . . 
f c f . f 4 4 5 5 f e e . . . . 
. f f . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`)
    animation.attachAnimation(hero, herodown)
}
function initattention () {
    game.setDialogFrame(img`
c c c c c c c c c c c c c c c c 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
c c c c c c c c c c c c c c c c 
`)
    game.setDialogTextColor(8)
    game.showLongText("按A可以攻击蝙蝠，" + "按B捡起口罩可以保护自己！", DialogLayout.Top)
    game.showLongText("按B捡起汽车可以作为障碍物！", DialogLayout.Top)
    game.showLongText("可以按B把受到感染的人带到医院里进行救治", DialogLayout.Top)
    game.showLongText("如果自己被感染了，可以找护士救治", DialogLayout.Top)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.obstacle, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        carry = otherSprite
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    carry = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
})
function initlocation () {
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
        if (Math.percentChance(20)) {
            xper = sprites.create(persons[Math.randomRange(0, 4)], SpriteKind.person)
            personnum += 1
            xper.setFlag(SpriteFlag.BounceOnWall, false)
            tiles.placeOnTile(xper, value)
            dorun(xper)
        }
    }
    for (let index = 0; index < 4; index++) {
        xpet = sprites.create(pets[Math.randomRange(0, 1)], SpriteKind.pet)
        tiles.placeOnRandomTile(xpet, sprites.castle.tileGrass2)
        xpet.setFlag(SpriteFlag.BounceOnWall, true)
        dorun(xpet)
    }
    for (let index = 0; index < 4; index++) {
        xpet = sprites.create(pets[Math.randomRange(0, 1)], SpriteKind.pet)
        tiles.placeOnRandomTile(xpet, myTiles.tile3)
        xpet.setFlag(SpriteFlag.BounceOnWall, true)
        dorun(xpet)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.obstacle, function (sprite, otherSprite) {
    doknock(sprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.baDing.play()
    sprite.destroy(effects.fire, 500)
})
function doSomething () {
    animation.setAction(hero, ActionKind.runright)
}
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    doknock(sprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 1) {
        music.playTone(698, music.beat(BeatFraction.Eighth))
        animation.setAction(hero, ActionKind.runleftattack)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . b . . . . . . . . . . 
. . . . b 1 . . . . . . . . . . 
. . . . 1 . . . . . . . . . . . 
. . . b 1 . . . . . . . . . . . 
. . . b 1 . . . . . . . . . . . 
. . . b 1 . . . . . . . . . . . 
. . . b b . . . . . . . . . . . 
. . . . 1 . . . . . . . . . . . 
. . . . b 1 . . . . . . . . . . 
. . . . . b 1 . . . . . . . . . 
. . . . . . b . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, -80, 0)
        projectile.setKind(SpriteKind.Projectile)
    } else if (direction == 2) {
        music.playTone(698, music.beat(BeatFraction.Eighth))
        animation.setAction(hero, ActionKind.runrigthattack)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b . . . . . 
. . . . . . . . . . 1 b . . . . 
. . . . . . . . . . . 1 . . . . 
. . . . . . . . . . . 1 b . . . 
. . . . . . . . . . . 1 b . . . 
. . . . . . . . . . . 1 b . . . 
. . . . . . . . . . . 1 b . . . 
. . . . . . . . . . . 1 . . . . 
. . . . . . . . . . 1 b . . . . 
. . . . . . . . . 1 b . . . . . 
. . . . . . . . . b . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 80, 0)
        projectile.setKind(SpriteKind.Projectile)
    } else if (direction == 3) {
        music.playTone(698, music.beat(BeatFraction.Eighth))
        animation.setAction(hero, ActionKind.runupattack)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . b b . . . . . . . 
. . . . . b 1 1 1 1 b . . . . . 
. . . . . b . . . 1 b . . . . . 
. . . . b 1 . . . . 1 b . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 0, -80)
        projectile.setKind(SpriteKind.Projectile)
    } else if (direction == 4) {
        music.playTone(698, music.beat(BeatFraction.Eighth))
        animation.setAction(hero, ActionKind.rundownattack)
        projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 1 . . . . . . . . . . . 
. . . . b 1 . . . . . b . . . . 
. . . . b 1 . . . . 1 b . . . . 
. . . . . b 1 1 1 1 b . . . . . 
. . . . . . . b b . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, hero, 0, 80)
        projectile.setKind(SpriteKind.Projectile)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (direction == 1) {
            if (sprite.x - otherSprite.x >= 0) {
                music.baDing.play()
                otherSprite.destroy(effects.fire, 500)
            }
        } else if (direction == 2) {
            if (sprite.x - otherSprite.x <= 0) {
                music.baDing.play()
                otherSprite.destroy(effects.fire, 500)
            }
        } else if (direction == 3) {
            if (sprite.y - otherSprite.y >= 0) {
                music.baDing.play()
                otherSprite.destroy(effects.fire, 500)
            }
        } else if (direction == 4) {
            if (sprite.y - otherSprite.y <= 0) {
                music.baDing.play()
                otherSprite.destroy(effects.fire, 500)
            }
        }
    } else {
        playersick = 1
        sprite.startEffect(effects.coolRadial)
        info.changeLifeBy(-1)
        pause(1000)
    }
})
function dorun (mySprite: Sprite) {
    if (Math.percentChance(50)) {
        mySprite.ax = 10
        if (Math.percentChance(50)) {
            mySprite.vx = Math.randomRange(20, 60)
        } else {
            mySprite.vx = Math.randomRange(-20, -60)
        }
    } else {
        mySprite.ay = 10
        if (Math.percentChance(50)) {
            mySprite.ay = Math.randomRange(20, 60)
        } else {
            mySprite.ay = Math.randomRange(-20, -60)
        }
    }
}
sprites.onOverlap(SpriteKind.person, SpriteKind.Plaguebearer, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    personnum += -1
    sicknum += 1
    music.pewPew.play()
    sprite.say("I'm sick.", 2000)
    sprite.startEffect(effects.coolRadial)
    sprite.setKind(SpriteKind.Plaguebearer)
    sprite.setFlag(SpriteFlag.StayInScreen, false)
    display()
})
scene.onHitWall(SpriteKind.person, function (sprite) {
    doknock(sprite)
})
function display () {
    game.setDialogFrame(img`
c c c c c c c c c c c c c c c c 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
c c c c c c c c c c c c c c c c 
`)
    game.setDialogTextColor(8)
    game.showLongText("健康" + personnum + "生病" + sicknum, DialogLayout.Bottom)
}
function initperson () {
    persons = [img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`, img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, img`
. . . . . f f f f . . . . . 
. . . f f 5 5 5 5 f f . . . 
. . f 5 5 5 5 5 5 5 5 f . . 
. f 5 5 5 5 5 5 5 5 5 5 f . 
. f 5 5 5 d b b d 5 5 5 f . 
f 5 5 5 b 4 4 4 4 b 5 5 5 f 
f 5 5 c c 4 4 4 4 c c 5 5 f 
f b b f b f 4 4 f b f b b f 
f b b 4 1 f d d f 1 4 b b f 
. f b f d d d d d d f b f . 
. f e f e 4 4 4 4 e f e f . 
. e 4 f 6 9 9 9 9 6 f 4 e . 
. 4 d c 9 9 9 9 9 9 c d 4 . 
. 4 f b 3 b 3 b 3 b b f 4 . 
. . f f 3 b 3 b 3 3 f f . . 
. . . . f f b b f f . . . . 
`, img`
. . . . f f f f . . . . 
. . f f e e e e f f . . 
. f f e e e e e e f f . 
f f f f 4 e e e f f f f 
f f f 4 4 4 e e f f f f 
f f f 4 4 4 4 e e f f f 
f 4 e 4 4 4 4 4 4 e 4 f 
f 4 4 f f 4 4 f f 4 4 f 
f e 4 d d d d d d 4 e f 
. f e d d b b d d e f . 
. f f e 4 4 4 4 e f f . 
e 4 f b 1 1 1 1 b f 4 e 
4 d f 1 1 1 1 1 1 f d 4 
4 4 f 6 6 6 6 6 6 f 4 4 
. . . f f f f f f . . . 
. . . f f . . f f . . . 
`, img`
. . . . . . 5 . 5 . . . . . . . 
. . . . . f 5 5 5 f f . . . . . 
. . . . f 1 5 2 5 1 6 f . . . . 
. . . f 1 6 6 6 6 6 1 6 f . . . 
. . . f 6 6 f f f f 6 1 f . . . 
. . . f 6 f f d d f f 6 f . . . 
. . f 6 f d f d d f d f 6 f . . 
. . f 6 f d 3 d d 3 d f 6 f . . 
. . f 6 6 f d d d d f 6 6 f . . 
. f 6 6 f 3 f f f f 3 f 6 6 f . 
. . f f d 3 5 3 3 5 3 d f f . . 
. . f d d f 3 5 5 3 f d d f . . 
. . . f f 3 3 3 3 3 3 f f . . . 
. . . f 3 3 5 3 3 5 3 3 f . . . 
. . . f f f f f f f f f f . . . 
. . . . . f f . . f f . . . . . 
`]
    pets = [img`
. . 4 4 4 . . . . 4 4 4 . . . . 
. 4 5 5 5 e . . e 5 5 5 4 . . . 
4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
. e e 5 5 5 5 5 5 5 5 e e . . . 
. . e 5 f 5 5 5 5 f 5 e . . . . 
. . f 5 5 5 4 4 5 5 5 f . . f f 
. . f 4 5 5 f f 5 5 6 f . f 5 f 
. . . f 6 6 6 6 6 6 4 4 f 5 5 f 
. . . f 4 5 5 5 5 5 5 4 4 5 f . 
. . . f 5 5 5 5 5 4 5 5 f f . . 
. . . f 5 f f f 5 f f 5 f . . . 
. . . f f . . f f . . f f . . . 
`, img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`]
}
function initequipment () {
    bed = sprites.create(img`
. . . b b c c c c c c b b . . . 
. . b d d d d d d d d 1 d b . . 
. b d d b b b b b b b b d d b . 
. c d b 1 1 1 1 1 1 1 1 b d c . 
. c b c d b b b b b b d c b c . 
. f b c c 1 1 1 1 1 1 c c b f . 
. f b c d 1 1 1 1 1 1 d c b f . 
f 6 6 c d d 1 1 1 1 d d c 6 6 f 
f 6 6 c c b b b b b b c c 6 6 f 
f c b b 3 3 3 3 3 3 3 3 b b c f 
f b b 3 3 3 3 3 3 3 3 3 3 b b f 
f b b 3 d 1 1 1 1 1 1 d 3 b b f 
f b d 1 1 1 1 1 1 1 1 1 1 d b f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 d b b b b d 1 1 d d f 
c d b b d d d d d d d d b b d f 
c b d d d d d d d d d d d d b c 
c d d d d d d d d d d d d d d c 
. c c c c c c c c c c c c c c . 
. f b b f b b b b b b f b b f . 
. . f f . . . . . . . . f f . . 
`, SpriteKind.equipment)
    tiles.placeOnTile(bed, tiles.getTileLocation(3, 14))
    bed = sprites.create(img`
. . . b b c c c c c c b b . . . 
. . b d d d d d d d d 1 d b . . 
. b d d b b b b b b b b d d b . 
. c d b 1 1 1 1 1 1 1 1 b d c . 
. c b c d b b b b b b d c b c . 
. f b c c 1 1 1 1 1 1 c c b f . 
. f b c d 1 1 1 1 1 1 d c b f . 
f 6 6 c d d 1 1 1 1 d d c 6 6 f 
f 6 6 c c b b b b b b c c 6 6 f 
f c b b 3 3 3 3 3 3 3 3 b b c f 
f b b 3 3 3 3 3 3 3 3 3 3 b b f 
f b b 3 d 1 1 1 1 1 1 d 3 b b f 
f b d 1 1 1 1 1 1 1 1 1 1 d b f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 d b b b b d 1 1 d d f 
c d b b d d d d d d d d b b d f 
c b d d d d d d d d d d d d b c 
c d d d d d d d d d d d d d d c 
. c c c c c c c c c c c c c c . 
. f b b f b b b b b b f b b f . 
. . f f . . . . . . . . f f . . 
`, SpriteKind.equipment)
    tiles.placeOnTile(bed, tiles.getTileLocation(6, 14))
    bed = sprites.create(img`
. . . b b c c c c c c b b . . . 
. . b d d d d d d d d 1 d b . . 
. b d d b b b b b b b b d d b . 
. c d b 1 1 1 1 1 1 1 1 b d c . 
. c b c d b b b b b b d c b c . 
. f b c c 1 1 1 1 1 1 c c b f . 
. f b c d 1 1 1 1 1 1 d c b f . 
f 6 6 c d d 1 1 1 1 d d c 6 6 f 
f 6 6 c c b b b b b b c c 6 6 f 
f c b b 3 3 3 3 3 3 3 3 b b c f 
f b b 3 3 3 3 3 3 3 3 3 3 b b f 
f b b 3 d 1 1 1 1 1 1 d 3 b b f 
f b d 1 1 1 1 1 1 1 1 1 1 d b f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 d b b b b d 1 1 d d f 
c d b b d d d d d d d d b b d f 
c b d d d d d d d d d d d d b c 
c d d d d d d d d d d d d d d c 
. c c c c c c c c c c c c c c . 
. f b b f b b b b b b f b b f . 
. . f f . . . . . . . . f f . . 
`, SpriteKind.equipment)
    tiles.placeOnTile(bed, tiles.getTileLocation(9, 14))
    bed = sprites.create(img`
. . . b b c c c c c c b b . . . 
. . b d d d d d d d d 1 d b . . 
. b d d b b b b b b b b d d b . 
. c d b 1 1 1 1 1 1 1 1 b d c . 
. c b c d b b b b b b d c b c . 
. f b c c 1 1 1 1 1 1 c c b f . 
. f b c d 1 1 1 1 1 1 d c b f . 
f 6 6 c d d 1 1 1 1 d d c 6 6 f 
f 6 6 c c b b b b b b c c 6 6 f 
f c b b 3 3 3 3 3 3 3 3 b b c f 
f b b 3 3 3 3 3 3 3 3 3 3 b b f 
f b b 3 d 1 1 1 1 1 1 d 3 b b f 
f b d 1 1 1 1 1 1 1 1 1 1 d b f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 1 1 1 1 1 1 1 1 d d f 
f d d 1 1 d b b b b d 1 1 d d f 
c d b b d d d d d d d d b b d f 
c b d d d d d d d d d d d d b c 
c d d d d d d d d d d d d d d c 
. c c c c c c c c c c c c c c . 
. f b b f b b b b b b f b b f . 
. . f f . . . . . . . . f f . . 
`, SpriteKind.equipment)
    tiles.placeOnTile(bed, tiles.getTileLocation(12, 14))
    desk = sprites.create(img`
. c c c c c c c c c c c c c c c c c c c c c c . 
c b d d d d d d d d d d d d d d d d d d d d b c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c b d d d d d d d d d d d d d d d d d d d d b c 
c c b b b b b b b b b b b b b b b b b b b b c c 
c c f f f f f f f f f f f f f f f f f f f f c c 
c b c c 3 3 c 6 c 4 4 c 3 c 7 c 6 6 c 3 c c b c 
c b c c 3 3 c 6 c 4 4 c 3 c 7 c 6 6 c 3 c c b c 
f b c c 3 3 c 6 c 4 4 c c c 7 c 6 6 c 3 c c b f 
f d c c c c c c c c c c c c c c c c c c c c d f 
f d c b b d d d d d d d d d d d d d d b b c d f 
f d f f f f f f f f f f f f f f f f f f f f d f 
f d c c c 6 c 3 3 c 4 c 6 c 4 4 c 3 c 7 c c d f 
f d c c c 6 c 3 3 c 4 c 6 c 4 4 c 3 c 7 c c d f 
f d c c c 6 c 3 3 c c c 6 c 4 4 c c c 7 c c d f 
f d c c c c c c c c c c c c c c c c c c c c d f 
f d c b b d d d d d d d d d d d d d d b b c d f 
f d c b b d d d d d d d d d d d d d d b b c d f 
f d f f f f f f f f f f f f f f f f f f f f d f 
f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.obstacle)
    tiles.placeOnTile(desk, tiles.getTileLocation(6, 17))
    desk = sprites.create(img`
. c c c c c c c c c c c c c c c c c c c c c c . 
c b d d d d d d d d d d d d d d d d d d d d b c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c d d d d d d d d d d d d d d d d d d d d d d c 
c b d d d d d d d d d d d d d d d d d d d d b c 
c c b b b b b b b b b b b b b b b b b b b b c c 
c c f f f f f f f f f f f f f f f f f f f f c c 
c b c c 3 3 c 6 c 4 4 c 3 c 7 c 6 6 c 3 c c b c 
c b c c 3 3 c 6 c 4 4 c 3 c 7 c 6 6 c 3 c c b c 
f b c c 3 3 c 6 c 4 4 c c c 7 c 6 6 c 3 c c b f 
f d c c c c c c c c c c c c c c c c c c c c d f 
f d c b b d d d d d d d d d d d d d d b b c d f 
f d f f f f f f f f f f f f f f f f f f f f d f 
f d c c c 6 c 3 3 c 4 c 6 c 4 4 c 3 c 7 c c d f 
f d c c c 6 c 3 3 c 4 c 6 c 4 4 c 3 c 7 c c d f 
f d c c c 6 c 3 3 c c c 6 c 4 4 c c c 7 c c d f 
f d c c c c c c c c c c c c c c c c c c c c d f 
f d c b b d d d d d d d d d d d d d d b b c d f 
f d c b b d d d d d d d d d d d d d d b b c d f 
f d f f f f f f f f f f f f f f f f f f f f d f 
f f f f f f f f f f f f f f f f f f f f f f f f 
`, SpriteKind.obstacle)
    tiles.placeOnTile(desk, tiles.getTileLocation(9, 17))
    desk = sprites.create(img`
. . . c c c c c c c c c c c c c c c c c c . . . 
. . c d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d c . . 
. c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c . 
. c 5 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 5 c . 
. c 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 c . 
. c 5 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 5 c . 
c 3 3 3 c c c c c c c c c c c c c c c c 3 3 3 c 
c 5 5 c 3 5 5 5 5 5 5 5 5 5 5 5 5 5 5 3 c 5 5 c 
c 5 5 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 5 5 c 
c 5 5 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 5 5 c 
c 5 5 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 5 5 c 
c 3 5 c 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 c 5 3 c 
c c 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c c 
c c 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
. . c b b c . . . . . . . . . . . . c b b c . . 
`, SpriteKind.obstacle)
    tiles.placeOnTile(desk, tiles.getTileLocation(16, 14))
    obstacle2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 6 6 . . 
. . . . . 6 c 6 6 6 6 6 6 9 6 . 
. . . . 6 c c 6 6 6 6 6 6 9 c 6 
. . d 6 9 c c 6 9 9 9 9 9 9 c c 
. d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
. 6 6 6 9 b 8 8 b b b 8 b b 8 6 
. 6 6 6 6 6 8 b b b b 8 b b b 8 
. 6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
. 6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
. d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
. 8 8 8 8 8 8 8 f f f 8 8 8 8 8 
. 8 8 8 8 f f f 8 8 8 8 f f f f 
. . . 8 f f f f f 8 8 f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.obstacle)
    tiles.placeOnTile(obstacle2, tiles.getTileLocation(3, 22))
    obstacle2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 3 3 3 3 3 3 3 3 . . 
. . . . . 3 c 3 3 3 3 3 3 d 3 . 
. . . . 3 c c 3 3 3 3 3 3 d c 3 
. . d 3 d c c 3 d d d d d d c c 
. d 3 3 d c b a a a a a a a 3 c 
. 3 3 3 d b a a b b b a b b a 3 
. 3 3 3 3 3 a b b b b a b b b a 
. 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
. 3 d d 3 a f a a a f a a a a a 
. d d 3 a a a f a a f a a a a a 
. a a a a a a a f f f a a a a a 
. a a a a f f f a a a a f f f f 
. . . a f f f f f a a f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.obstacle)
    tiles.placeOnTile(obstacle2, tiles.getTileLocation(5, 24))
    obstacle2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . 3 d 3 3 3 3 3 3 c 3 . . . 
. . 3 c d 3 3 3 3 3 3 c c 3 . . 
. 3 c c d d d d d d 3 c c d 3 d 
. 3 c 3 a a a a a a a b c d 3 3 
. 3 3 a b b a b b b a a b d 3 3 
. 3 a b b b a b b b b a 3 3 3 3 
. a a 3 3 3 a 3 3 3 3 3 a 3 3 3 
. a a a a a a f a a a f a 3 d d 
. a a a a a a f a a f a a a 3 d 
. a a a a a a f f f a a a a a a 
. a f f f f a a a a f f f a a a 
. . f f f f f a a f f f f f a . 
. . . f f f . . . . f f f f . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.obstacle)
    tiles.placeOnTile(obstacle2, tiles.getTileLocation(4, 23))
    obstacle2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . 2 c 2 2 2 2 2 2 4 2 . 
. . . . 2 c c 2 2 2 2 2 2 4 c 2 
. . d 2 4 c c 2 4 4 4 4 4 4 c c 
. d 2 2 4 c b e e e e e e e 2 c 
. 2 2 2 4 b e e b b b e b b e 2 
. 2 2 2 2 2 e b b b b e b b b e 
. 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
. 2 d d 2 e f e e e f e e e e e 
. d d 2 e e e f e e f e e e e e 
. e e e e e e e f f f e e e e e 
. e e e e f f f e e e e f f f f 
. . . e f f f f f e e f f f f f 
. . . . f f f f . . . . f f f . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.obstacle)
    tiles.placeOnTile(obstacle2, tiles.getTileLocation(6, 24))
}
sprites.onOverlap(SpriteKind.person, SpriteKind.obstacle, function (sprite, otherSprite) {
    doknock(sprite)
})
function doknock (mySprite: Sprite) {
    if (mySprite.vx > 0) {
        mySprite.vx = Math.randomRange(-20, -60)
        mySprite.vy = Math.randomRange(-30, 30)
    } else {
        mySprite.vx = Math.randomRange(20, 60)
        mySprite.vy = Math.randomRange(-30, 30)
    }
    if (mySprite.vy > 0) {
        mySprite.vx = Math.randomRange(-60, 80)
        mySprite.vy = Math.randomRange(-20, -60)
    } else {
        mySprite.vy = Math.randomRange(20, 60)
        mySprite.vx = Math.randomRange(-80, 60)
    }
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        direction = 1
        animation.setAction(hero, ActionKind.runleft)
    } else if (controller.right.isPressed()) {
        direction = 2
        animation.setAction(hero, ActionKind.runright)
    } else if (controller.up.isPressed()) {
        direction = 3
        animation.setAction(hero, ActionKind.runup)
    } else if (controller.down.isPressed()) {
        direction = 4
        animation.setAction(hero, ActionKind.rundown)
    } else {
        animation.setAction(hero, ActionKind.Idle)
    }
})
function initAnimateAttack () {
    heroleftattack = animation.createAnimation(ActionKind.runleftattack, 100)
    heroleftattack.addAnimationFrame(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . c c . . . f e e e e f f e e e f . 
. . . . . . . c d c . f e 2 2 2 2 e e f f f f . 
. . . . . . . c d d c f 2 e f f f f 2 2 2 e f . 
. . . . . . . . c d d c f f e e e f f f f f f f 
. . . . . . . . . c d d c e 4 4 f b e 4 4 e f f 
. . . . . . . . . . c d c e d d f 1 4 d 4 e e f 
. . . . . . . . . . c c c d e d d d 4 e e e f . 
. . . . . . . . . . . e d d 4 e 4 4 e e f f . . 
. . . . . . . . . . . . e e 4 4 2 2 2 2 f . . . 
. . . . . . . . . . . . . f 2 e 2 2 2 2 f . . . 
. . . . . . . . . . . . . f 5 5 4 4 4 4 f . . . 
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . . . . f f f . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    heroleftattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f . . . . . . . 
. . . . . . . . . . . . . f 2 f f f f f . . . . 
. . . . . . . . . . . f f 2 2 e e e e e f f . . 
. . . . . . . . . . f f 2 2 2 e e e e e e f f . 
. . . . . . . . . . f e e e e f f f e e e e f . 
. . . . . . . . . f e 2 2 2 2 e e e f f f f f . 
. . . . . . . . . f 2 e f f f f f 2 2 2 e f f f 
. . c c . . . . . f f f e e e f f f f f f f f f 
. . c d c c . . . f e e 4 4 f b b e 4 4 e f e f 
. . c c d d c c . . f e d d f b b 4 d 4 e e f . 
. . . . c d d d c e e f d d d d d 4 e e e f . . 
. . . . . c c d c d d e e 2 2 2 2 2 2 2 f . . . 
. . . . . . c c c d d 4 4 e 5 4 4 4 4 4 f . . . 
. . . . . . . . . e e e e f f f f f f f f . . . 
. . . . . . . . . . . . . f f . . . f f f . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    heroleftattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . f f . . . . . . . 
. . . . . . . . . . . . . f f 2 f f f f . . . . 
. . . . . . . . . . . . f f 2 f e e e e f f . . 
. . . . . . . . . . . f f 2 2 f e e e e e f f . 
. . . . . . . . . . . f e e e e f f e e e e f . 
. . . . . . . . . . f e 2 2 2 2 e e f f f f f . 
. . . . . . . . . . f 2 e f f f f 2 2 2 e f f f 
. . . . . . . . . . f f f e e e f f f f f f f f 
. . . . . . . . . . f e e 4 4 f b e 4 4 e f e f 
. . . . . . . . . . . f e d d f b 4 d 4 e e f . 
. . . . . . . . . . c . e e d d d 4 e e e f . . 
. . . . c c c c c c c e d d e e 2 2 2 2 f . . . 
. . . . . d d d d d c e d d 4 4 e 4 4 4 f . . . 
. . . . . . c c c c c . e e e e f f f f f . . . 
. . . . . . . . . . c . . . f f f f f f f f . . 
. . . . . . . . . . . . . . . f f . . f f f . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    heroleftattack.addAnimationFrame(img`
. . . . . . . . . . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . f 2 f e e e e f f . . 
. . . . . . . . . . . . f 2 2 2 f e e e e f f . 
. . . . . . . . . . . . f e e e e f f e e e f . 
. . . . . . . . . . . f e 2 2 2 2 e e f f f f . 
. . . . . . . . . . . f 2 e f f f f 2 2 2 e f . 
. . . . . . . . . . . f f f e e e f f f f f f f 
. . . . . . . . . . . f e e 4 4 f b e 4 4 e f f 
. . . . . . . . . . . . f e d d f 1 4 d 4 e e f 
. . . . . . . . . . . . . f d d d d 4 e e e f . 
. . . . . . . . . . . . . f e 4 4 4 e d d f . . 
. . . . . . . . . . . . . c c c 2 2 e d d f . . 
. . . . . . . . . . . . . c d c 2 2 f e e . . . 
. . . . . . . . . . . . c d d c 4 4 4 4 f . . . 
. . . . . . . . . . . c d d c f f f f f . . . . 
. . . . . . . . . . c d d c . . f f f . . . . . 
. . . . . . . . . . c d c . . . . . . . . . . . 
. . . . . . . . . . c c . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    animation.attachAnimation(hero, heroleftattack)
    herorightattack = animation.createAnimation(ActionKind.runrigthattack, 100)
    herorightattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . c c . . . . . . . 
. f f f f e e 2 2 2 2 e f . c d c . . . . . . . 
. f e 2 2 2 f f f f e 2 f c d d c . . . . . . . 
f f f f f f f e e e f f c d d c . . . . . . . . 
f f e 4 4 e b f 4 4 e c d d c . . . . . . . . . 
f e e 4 d 4 1 f d d e c d c . . . . . . . . . . 
. f e e e 4 d d d e d c c c . . . . . . . . . . 
. . f f e e 4 4 e 4 d d e . . . . . . . . . . . 
. . . f 2 2 2 2 4 4 e e . . . . . . . . . . . . 
. . . f 2 2 2 2 e 2 f . . . . . . . . . . . . . 
. . . f 4 4 4 4 5 5 f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    herorightattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . f f f f f 2 f . . . . . . . . . . . . . 
. . f f e e e e e 2 2 f f . . . . . . . . . . . 
. f f e e e e e e 2 2 2 f f . . . . . . . . . . 
. f e e e e f f f e e e e f . . . . . . . . . . 
. f f f f f e e e 2 2 2 2 e f . . . . . . . . . 
f f f e 2 2 2 f f f f f e 2 f . . . . . . . . . 
f f f f f f f f f e e e f f f . . . . . c c . . 
f e f e 4 4 e b b f 4 4 e e f . . . c c d c . . 
. f e e 4 d 4 b b f d d e f . . c c d d c c . . 
. . f e e e 4 d d d d d f e e c d d d c . . . . 
. . . f 2 2 2 2 2 2 2 e e d d c d c c . . . . . 
. . . f 4 4 4 4 4 5 e 4 4 d d c c c . . . . . . 
. . . f f f f f f f f e e e e . . . . . . . . . 
. . . f f 3 . . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    herorightattack.addAnimationFrame(img`
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . . . . . 
. f e e e e f f e e e e f . . . . . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
f f f f f f f f e e e f f f . . . . . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . . . . . 
. . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
. . . f 4 4 4 e 4 4 d d e c d d d d d . . . . . 
. . . f f f f f e e e e . c c c c c . . . . . . 
. . f f f f f f f f . . . c . . . . . . . . . . 
. . f f f . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    herorightattack.addAnimationFrame(img`
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . . . . . . . . . . 
. f f f f e e 2 2 2 2 e f . . . . . . . . . . . 
. f e 2 2 2 f f f f e 2 f . . . . . . . . . . . 
f f f f f f f e e e f f f . . . . . . . . . . . 
f f e 4 4 e b f 4 4 e e f . . . . . . . . . . . 
f e e 4 d 4 1 f d d e f . . . . . . . . . . . . 
. f e e e 4 d d d d f . . . . . . . . . . . . . 
. . f d d e 4 4 4 e f . . . . . . . . . . . . . 
. . f d d e 2 2 c c c . . . . . . . . . . . . . 
. . . e e f 2 2 c d c . . . . . . . . . . . . . 
. . . f 4 4 4 4 c d d c . . . . . . . . . . . . 
. . . . f f f f f c d d c . . . . . . . . . . . 
. . . . . f f f . . c d d c . . . . . . . . . . 
. . . . . . . . . . . c d c . . . . . . . . . . 
. . . . . . . . . . . . c c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    animation.attachAnimation(hero, herorightattack)
    heroupattack = animation.createAnimation(ActionKind.runupattack, 100)
    heroupattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . . . . . . . . . 
. . . . f f e e e e f f . . . . . . . . . . . . 
. . . f e e e f f e e e f . . . . . . . . . . . 
. . f f f f f 2 2 f f f f f . . . . . . . . . . 
. . f f e 2 e 2 2 e 2 e f f . . . . c c c . . . 
. . f e 2 f 2 f f 2 f 2 e f . . . c d d c . . . 
. . f f f 2 2 e e 2 2 f f f . . c d d c . . . . 
. f f e f 2 f e e f 2 f e f f c d d c . . . . . 
. f e e f f e e e e f e e e f d d c . . . . . . 
. . f e e e e e e e e e e f d d c . . . . . . . 
. . . f e e e e e e e e f d d c . . . . . . . . 
. . e 4 f f f f f f f f 4 e d . . . . . . . . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . . . . . . . . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    heroupattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . c . . . . . . . . . 
. . . . . . . . . . . . . c 1 . . . . . . . . . 
. . . . . . . . . . . . . c 1 c . . . . . . . . 
. . . . . . . . . . . . . c 1 d . . . . . . . . 
. . . . . . . . . . . . . d 1 c . . . . . . . . 
. . . . . . . . . . . . . c 1 c . . . . . . . . 
. . . . . . . . . . . . . d 1 c . . . . . . . . 
. . . . . f f f f . . . . c 1 d . . . . . . . . 
. . . f f e e e e f f . . c 1 c . . . . . . . . 
. . f e e e f f e e e f . c 1 d . . . . . . . . 
. . f f f f 2 2 f f f f . d 1 c . . . . . . . . 
. f f e 2 e 2 2 e 2 e f f c 1 c . . . . . . . . 
. f e 2 f 2 f f f 2 f e f d 1 c . . . . . . . . 
. f f f 2 f e e 2 2 f f f c 1 d . . . . . . . . 
. f e 2 f f e e 2 f e e f d 1 c . . . . . . . . 
f f e f f e e e f e e e f f 1 1 c . . . . . . . 
f f e e e e e e e e e e f 1 f . . . . . . . . . 
. . f e e e e e e e e f f b f . . . . . . . . . 
. . e f f f f f f f f 4 f b f . . . . . . . . . 
. . 4 f 2 2 2 2 2 e d d f c f . . . . . . . . . 
. . e f f f f f f e e 4 f f . . . . . . . . . . 
. . . f f f . . . . . . . . . . . . . . . . . . 
`)
    heroupattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . c c . . . . . . . . . . . . . . . . . . 
. . . . d d . . . . . . . . . . . . . . . . . . 
. . . . c d c . . . . . . . . . . . . . . . . . 
. . . . . d d c . . . . . . . . . . . . . . . . 
. . . . . c f f f f . . . . . . . . . . . . . . 
. . . . f f e e e e f f . . . . . . . . . . . . 
. . . f e e e f f e e e f . . . . . . . . . . . 
. . f f f f f 2 2 f f f f f . . . . . . . . . . 
. . f f e 2 e 2 2 e 2 e f f . . . . . . . . . . 
. . f e 2 f 2 f f 2 f 2 e f . . . . . . . . . . 
. . f f f 2 2 e e 2 2 f f f . . . . . . . . . . 
. f f e f 2 f e e f 2 f e f f . . . . . . . . . 
. f e e f f e e e e f e e e f . . . . . . . . . 
. . f e e e e e e e e e e f d c . . . . . . . . 
. . . f e e e e e e e e f d c . . . . . . . . . 
. . e 4 f f f f f f f f 4 e . . . . . . . . . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . . . . . . . . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . . . . . . . . . 
. . . . . f f f f f f . . . . . . . . . . . . . 
. . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    heroupattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f e e e e f f . . . . . . . . . . . . . 
. . f e e e f f e e e f . 8 . . . . . . . . . . 
. . f f f f 2 2 f f f f . . . . . . . . . . . . 
. f f e 2 e 2 2 e 2 e f f . 8 . 8 . . . . . . . 
. f e f 2 f f f 2 f 2 e f . . . . . . . . . . . 
. f f f 2 2 e e f 2 f f f c . . 8 . . . . . . . 
. f e e f 2 e e f f 2 e f 1 c . . . . . . . . . 
. f e e e f e e e f f e f f c . . 8 . . . . . . 
. f e e e e e e e e e e f f 1 c . . . . . . . . 
. f f e e e e e e e e f 1 1 c . 8 . . . . . . . 
. f 4 f f f f f f f f e c . . . . . . . . . . . 
. f d d e 2 2 2 2 2 f 4 . . . . . . . . . . . . 
. f 4 e e f f f f f f e . . . . . . . . . . . . 
. . . . . . . . f f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    animation.attachAnimation(hero, heroupattack)
    herodownattack = animation.createAnimation(ActionKind.rundownattack, 100)
    herodownattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    herodownattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . . . . . . . . . 
. . . . f f f 2 2 f f f . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f e e e e e e f f f . . . . . . . . . . 
. . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . 
. . f e 2 f f f f f f 2 e f . . . . . . . . . . 
. . f f f f e e e e f f f f . . . . . . . . . . 
. f f e f b f 4 4 f b f e f f . . . . . . . . . 
. f e e 4 1 f d d f 1 4 e e f . . . . . . . . . 
f d f e e d d d d d 4 e f f . . . . . . . . . . 
f b f f e e 4 4 4 e d d 4 e . . . . . . . . . . 
f b f 4 f 2 2 2 2 e d d e . . . . . . . . . . . 
f c f . f 2 2 c c c e e . . . . . . . . . . . . 
. f f . f 4 4 c d c 4 f . . . . . . . . . . . . 
. . . . f f f d d c f f . . . . . . . . . . . . 
. . . . . f d d c f f . . . . . . . . . . . . . 
. . . . c d d c . . . . . . . . . . . . . . . . 
. . . . c d c . . . . . . . . . . . . . . . . . 
. . . . c c . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    herodownattack.addAnimationFrame(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . . f f 2 2 f f . . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f f f 2 2 2 2 2 2 f f f . . . . . . . . . . 
. . f e e e e e e e e e e f f . . . . . . . . . 
. f f e 2 2 2 2 2 2 2 2 e f f . . . . . . . . . 
. f f f f f e e e e f f f f f . . . . . . . . . 
f d f e f b f 4 4 f b f e f f . . . . . . . . . 
f b f e 4 1 f d d f 1 4 e f . . . . . . . . . . 
f b f f e 4 d d d d 4 e f e . . . . . . . . . . 
f c f e f 2 2 2 2 2 f 4 e . . . . . . . . . . . 
. f f 4 f 4 4 5 5 4 f 4 e . . . . . . . . . . . 
. . . . f f f f f f d d e . . . . . . . . . . . 
. . . . . f f f f e d d e . . . . . . . . . . . 
. . . . . . . . . . e e . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . . . . 
. . . . . . . . c c 1 c c . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
`)
    herodownattack.addAnimationFrame(img`
. . . . . . f f f f . . . . . . . . . . . . . . 
. . . . f f f 2 2 f f f . . . . . . . . . . . . 
. . . f f f 2 2 2 2 f f f . . . . . . . . . . . 
. . f f f e e e e e e f f f . . . . . . . . . . 
. . f f e 2 2 2 2 2 2 e e f . . . . . . . . . . 
. . f e 2 f f f f f f 2 e f . . . . . . . . . . 
. . f f f f e e e e f f f f . . . . . . c c c . 
. f f e f b f 4 4 f b f e f f . . . . c d d c . 
. f f e f b f 4 4 f b f e f f . . . c d d c . . 
. f e e 4 d d d d d d 4 e e f . c c d d c . . . 
f d f e e d d d d d 4 e e f f e c d d c . . . . 
f b f f e e 4 4 4 4 e e 4 f d d c c c . . . . . 
f b f 4 f 2 2 2 2 2 2 f 1 e d d e . . . . . . . 
f c f . f 2 2 2 2 2 2 f 4 4 e e . . . . . . . . 
. f f . f 4 4 5 5 4 4 f . . . . . . . . . . . . 
. . . . f f f f f f f f . . . . . . . . . . . . 
. . . . . f f . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    animation.attachAnimation(hero, herodownattack)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.person, function (sprite, otherSprite) {
    if (playersick == 1) {
        scene.cameraShake(4, 500)
        personnum += -1
        sicknum += 1
        music.pewPew.play()
        otherSprite.say("I'm sick.", 1000)
        otherSprite.startEffect(effects.coolRadial)
        otherSprite.setKind(SpriteKind.Plaguebearer)
        display()
    }
})
let herodownattack: animation.Animation = null
let heroupattack: animation.Animation = null
let herorightattack: animation.Animation = null
let heroleftattack: animation.Animation = null
let obstacle2: Sprite = null
let desk: Sprite = null
let bed: Sprite = null
let projectile: Sprite = null
let pets: Image[] = []
let xpet: Sprite = null
let persons: Image[] = []
let xper: Sprite = null
let herodown: animation.Animation = null
let heroup: animation.Animation = null
let heroright: animation.Animation = null
let heroleft: animation.Animation = null
let sicknum = 0
let personnum = 0
let site = 0
let bat: Sprite = null
let carry: Sprite = null
let playersick = 0
let direction = 0
let hero: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`20002000370338383838383838383838383838383838383838383838383838383838383837032019191919191920191919191920191919191919191920191919191919383703201919191919192019191919192019191919191919192019191919191938370320191919191919201919191919201919191919191919201919191919193837090720201e1e2020201e242020202020201e1e20202020201e24201919193837090605050605050505060505050a0a0505060605050505050508202020203837032020202020202020202020200948202020202020202020200320191919383703201919191919191919191920032019191919201919191920032019191938370320191919191919191919192003331919191920191919193303201919193837032019191919191919191919200933191919192019191919330820191919383703201919191919191919191920032019191919201919191920093219191938370907202020201e1e202020202009072020202020202020204708331919193837090605050505060605050505050c0605050505050505050506082019191938370314141414141414141414141403262626262626262626262603201919193837031417171717171717171717140329191919191919191919280320191919383703141717171717171717171714032919192c2c2c2c1919192809331919193837031417171717171717171717140329191919191919191919280932191919383703141717171212121217171714032919191919191919191928032019191938370314171717171717171717171403291919191919191919192803201919193837031414141414242414141414140327272727242b242727272703201919193837090a0505050506060505050a050c05050505060a060505050a0820191919383709482e2e2e2e2e2e2e2e2e030c03313131313124313131310303331919193837032e1a1a1a1a1a1a1a1a2e09050831451a1a1a1a1a1a16310309331919193837032e1a1a1a1a1a1a1a1a2e033809321a1a1a15441a1a1a330803201919193837032e1a1a1a1a1a1a1a1a2e033803331a1a1a43421a1a1a330803201919193837032e1a1a1a1a1a1a1a1a2e09050831461a1a1a1a1a1a4331030320191919383709072e2e2e2e1e1e2e2e2e030c0331313131311e31313131030320202020380506060505050506060505050605060505050505060505050506060505050505382d2d2d3a3a3a3a3a3a3a3a2d2d2d2d3a3a3a3a3a3a3a3a01013a3a2d2d2d38383b010101010140404040010101010101010101010101010101010101013f38383c3d3d3d3d3d3d3d3d3d3d3d3d3d0101013d3d3d3d3d3d3d0101013d3d3d383838383838383838383838383838383838383838383838383838383838383838`,
            img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . 2 . . . . . 2 . . . . . . . . 2 . . . . . . 2 
2 . 2 . . . . . . 2 . . . . . 2 . . . . . . . . 2 . . . . . . 2 
2 . 2 . . . . . . 2 . . . . . 2 . . . . . . . . 2 . . . . . . 2 
2 . . 2 2 . . 2 2 2 . . 2 2 2 2 2 2 . . 2 2 2 2 2 . . 2 . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . 2 . . . . 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . . . . . . 2 . . . . . . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . . . . . . 2 . . . . . . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . 2 . . . . 2 . . . . . 2 
2 . . 2 2 2 2 . . 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . . . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . . . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . 2 . . . 2 
2 . 2 2 2 2 2 . . 2 2 2 2 2 . 2 2 2 2 . . . 2 2 2 2 . 2 . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 . 2 2 2 2 . . . . . . 2 
2 . 2 . . . . . . . . 2 . . . 2 . . . . . . . . 2 . . . . . . 2 
2 . 2 . . . . . . . . 2 . 2 . . . . . 2 2 . . . . . . 2 . . . 2 
2 . 2 . . . . . . . . 2 . 2 . . . . . 2 2 . . . . . . 2 . . . 2 
2 . 2 . . . . . . . . 2 . . . 2 . . . . . . . . 2 . . 2 . . . 2 
2 . . 2 2 2 2 . . 2 2 2 . . . 2 2 2 2 2 . 2 2 2 2 . . 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 . . . . . . . . 2 2 2 2 . . . . . . . . . . . . 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.builtin.field0,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection3,sprites.dungeon.hazardSpike,sprites.dungeon.buttonTealDepressed,sprites.builtin.field1,sprites.castle.shrub,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,sprites.castle.saplingPine,sprites.builtin.crowd0,sprites.builtin.brick,sprites.dungeon.doorLockedWest,sprites.dungeon.doorOpenWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.dungeon.floorDark0,sprites.dungeon.floorLight4,sprites.dungeon.stairNorth,sprites.dungeon.purpleOuterWest2,sprites.dungeon.floorLight0,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.builtin.forestTiles21,sprites.dungeon.stairSouth,sprites.castle.saplingOak,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterNorth2,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight3,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.dungeon.stairLarge,sprites.builtin.forestTiles22,sprites.builtin.forestTiles3,sprites.builtin.forestTiles20,sprites.builtin.forestTiles4,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.builtin.crowd2,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedWest,sprites.dungeon.doorLockedEast,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorOpenNorth,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn4],
            TileScale.Sixteen
        ))
let nurse2 = sprites.create(img`
. . 1 1 1 1 1 2 1 1 1 1 . . . . 
. . 1 1 1 1 2 2 2 1 1 1 1 . . . 
. . . 1 1 1 1 2 1 1 1 1 1 . . . 
. . f 1 1 1 1 1 1 1 1 1 b f . . 
. . f 3 1 3 3 3 3 3 3 1 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.nurse)
tiles.placeOnTile(nurse2, tiles.getTileLocation(8, 16))
nurse2 = sprites.create(img`
. . 1 1 1 1 1 2 1 1 1 1 . . . . 
. . 1 1 1 1 2 2 2 1 1 1 1 . . . 
. . . 1 1 1 1 2 1 1 1 1 1 . . . 
. . f 1 1 1 1 1 1 1 1 1 b f . . 
. . f 3 1 3 3 3 3 3 3 1 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.nurse)
tiles.placeOnTile(nurse2, tiles.getTileLocation(5, 14))
hero = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(hero)
scene.cameraFollowSprite(hero)
game.splash("新冠状病毒")
initperson()
initlocation()
initequipment()
creatvirus()
initattention()
initAnimate()
initAnimateAttack()
display()
info.setLife(12)
direction = 0
playersick = 0
carry = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
game.onUpdate(function () {
    if (direction == 1) {
        carry.setPosition(hero.x + -18, hero.y + 0)
    } else if (direction == 2) {
        carry.setPosition(hero.x + 18, hero.y + 0)
    } else if (direction == 3) {
        carry.setPosition(hero.x + 0, hero.y + -18)
    } else if (direction == 4) {
        carry.setPosition(hero.x + 0, hero.y + 18)
    }
})
game.onUpdateInterval(20000, function () {
    creatvirus()
})
