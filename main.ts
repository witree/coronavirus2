enum ActionKind {
    Walking,
    Idle,
    Jumping,
    runleft,
    runright,
    runup
}
namespace SpriteKind {
    export const person = SpriteKind.create()
    export const equipment = SpriteKind.create()
    export const nurse = SpriteKind.create()
    export const obstacle = SpriteKind.create()
    export const Plaguebearer = SpriteKind.create()
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
    if (Math.percentChance(50)) {
        bat.ax = 10
        if (Math.percentChance(50)) {
            bat.vx = Math.randomRange(20, 60)
        } else {
            bat.vx = Math.randomRange(-20, -60)
        }
    } else {
        bat.ay = 10
        if (Math.percentChance(50)) {
            bat.ay = Math.randomRange(20, 60)
        } else {
            bat.ay = Math.randomRange(-20, -60)
        }
    }
}
function initAnimate () {
    heroleft = animation.createAnimation(ActionKind.runleft, 1000)
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
    heroright = animation.createAnimation(ActionKind.runright, 1000)
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
    heroup = animation.createAnimation(ActionKind.runup, 1000)
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
}
scene.onHitWall(SpriteKind.Plaguebearer, function (sprite) {
    if (sprite.vx > 0) {
        sprite.vx = Math.randomRange(-20, -60)
        sprite.vy = Math.randomRange(-30, 30)
    } else {
        sprite.vx = Math.randomRange(20, 60)
        sprite.vy = Math.randomRange(-30, 30)
    }
    if (sprite.vy > 0) {
        sprite.vx = Math.randomRange(-60, 80)
        sprite.vy = Math.randomRange(-20, -60)
    } else {
        sprite.vy = Math.randomRange(20, 60)
        sprite.vx = Math.randomRange(-80, 60)
    }
})
sprites.onOverlap(SpriteKind.person, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    personnum += -1
    sicknum += 1
    sprite.say("Monster！", 1000)
    sprite.startEffect(effects.coolRadial)
    sprite.setKind(SpriteKind.Plaguebearer)
    sprite.setFlag(SpriteFlag.StayInScreen, false)
    display()
})
function initlocation () {
    for (let value of tiles.getTilesByType(myTiles.tile3)) {
        if (Math.percentChance(20)) {
            xper = sprites.create(persons[Math.randomRange(0, 4)].image, SpriteKind.person)
            personnum += 1
            xper.setFlag(SpriteFlag.BounceOnWall, false)
            tiles.placeOnTile(xper, value)
            if (Math.percentChance(50)) {
                xper.ax = 10
                if (Math.percentChance(50)) {
                    xper.vx = Math.randomRange(20, 60)
                } else {
                    xper.vx = Math.randomRange(-20, -60)
                }
            } else {
                xper.ay = 10
                if (Math.percentChance(50)) {
                    xper.ay = Math.randomRange(20, 60)
                } else {
                    xper.ay = Math.randomRange(-20, -60)
                }
            }
        }
    }
    for (let index = 0; index < 4; index++) {
        xpet = sprites.create(pets[Math.randomRange(0, 1)].image, SpriteKind.person)
        tiles.placeOnRandomTile(xpet, sprites.castle.tileGrass2)
    }
    for (let index = 0; index < 4; index++) {
        xpet = sprites.create(pets[Math.randomRange(0, 1)].image, SpriteKind.person)
        tiles.placeOnRandomTile(xpet, myTiles.tile3)
    }
}
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    if (sprite.vx > 0) {
        sprite.vx = Math.randomRange(-20, -60)
        sprite.vy = Math.randomRange(-30, 30)
    } else {
        sprite.vx = Math.randomRange(20, 60)
        sprite.vy = Math.randomRange(-30, 30)
    }
    if (sprite.vy > 0) {
        sprite.vx = Math.randomRange(-60, 80)
        sprite.vy = Math.randomRange(-20, -60)
    } else {
        sprite.vy = Math.randomRange(20, 60)
        sprite.vx = Math.randomRange(-80, 60)
    }
})
sprites.onOverlap(SpriteKind.person, SpriteKind.Plaguebearer, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    personnum += -1
    sicknum += 1
    sprite.say("I'm sick.", 2000)
    sprite.startEffect(effects.coolRadial)
    sprite.setKind(SpriteKind.Plaguebearer)
    sprite.setFlag(SpriteFlag.StayInScreen, false)
    display()
})
scene.onHitWall(SpriteKind.person, function (sprite) {
    if (sprite.vx > 0) {
        sprite.vx = Math.randomRange(-20, -60)
        sprite.vy = Math.randomRange(-30, 30)
    } else {
        sprite.vx = Math.randomRange(20, 60)
        sprite.vy = Math.randomRange(-30, 30)
    }
    if (sprite.vy > 0) {
        sprite.vx = Math.randomRange(-60, 80)
        sprite.vy = Math.randomRange(-20, -60)
    } else {
        sprite.vy = Math.randomRange(20, 60)
        sprite.vx = Math.randomRange(-80, 60)
    }
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
    persons = sprites.allOfKind(SpriteKind.Player)
    persons = [sprites.create(img`
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
`, SpriteKind.Player), sprites.create(img`
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
`, SpriteKind.Player), sprites.create(img`
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
`, SpriteKind.Player), sprites.create(img`
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
`, SpriteKind.Player), sprites.create(img`
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
`, SpriteKind.Player)]
    pets = sprites.allOfKind(SpriteKind.Player)
    pets = [sprites.create(img`
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
`, SpriteKind.Player), sprites.create(img`
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
`, SpriteKind.Player)]
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
`, SpriteKind.equipment)
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
`, SpriteKind.equipment)
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
`, SpriteKind.equipment)
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
let obstacle2: Sprite = null
let desk: Sprite = null
let bed: Sprite = null
let pets: Sprite[] = []
let xpet: Sprite = null
let persons: Sprite[] = []
let xper: Sprite = null
let sicknum = 0
let personnum = 0
let heroup: animation.Animation = null
let heroright: animation.Animation = null
let heroleft: animation.Animation = null
let site = 0
let bat: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`20002000370338383838383838383838383838383838383838383838383838383838383837032019191919191920191919191920191919191919191920191919191919383703201919191919192019191919192019191919191919192019191919191938370320191919191919201919191919201919191919191919201919191919193837032020201e1e2020201e2020201e2020201e1e20202020201e24201919193837090505050605050505060505050a050505060605050505050508202020203837032020202020202020202020200320202020202020202020200320191919383703201919191919191919191920032019191919201919191920032019191938370320191919191919191919192003331919191920191919193303201919193837032019191919191919191919200933191919192019191919330820191919383703201919191919191919191920032019191919201919191920093219191938370320202020201e1e202020202003202020202020202020202009331919193837090505050505060605050505050c0505050505050505050505082019191938370314141414141414141414141403262626262626262626262603201919193837031417171717171717171717140329191919191919191919280320191919383703141717171717171717171714032919192c2c2c2c1919192809331919193837031417171717171717171717140329191919191919191919280932191919383703141717171212121217171714032919191919191919191928032019191938370314171717171717171717171403291919191919191919192803201919193837031414141414242414141414140327272727242b242727272703201919193837090505050505060605050505050c05050505060a060505050508201919193837032e2e2e2e2e2e2e2e2e2e2e2e03313131313124313131313103331919193837032e1a1a1a1a1a1a1a1a1a1a2e0331451a1a1a1a1a1a1a163109331919193837032e1a1a1a1a1a1a1a1a1a1a2e09321a1a1a1a15441a1a1a3303201919193837032e1a1a1a1a1a1a1a1a1a1a2e03331a1a1a1a43421a1a1a3308201919193837032e1a1a1a1a1a1a1a1a1a1a2e0331461a1a1a1a1a1a1a433103201919193837032e2e2e2e2e1e1e2e2e2e2e2e0331313131311e3131313131032020202038050605050a0a0a06060a050a0a0a060a0a0a0a0a060a050a0a0a060a0a05050538393a3a3a3a3a3a3a3a3a3a3a01013a3a3a3a3a3a3a3a3a01013a3a3a3a3e38383b010101010140404040010101010101010101010101010101010101013f38383c3d3d3d3d3d3d3d3d3d3d3d3d3d0101013d3d3d3d3d3d3d0101013d3d3d383838383838383838383838383838383838383838383838383838383838383838`,
            img`
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . . 2 . . . . . 2 . . . . . . . . 2 . . . . . . 2 
2 . 2 . . . . . . 2 . . . . . 2 . . . . . . . . 2 . . . . . . 2 
2 . 2 . . . . . . 2 . . . . . 2 . . . . . . . . 2 . . . . . . 2 
2 . 2 2 2 . . 2 2 2 . 2 2 2 . 2 2 2 . . 2 2 2 2 2 . . 2 . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . 2 . . . . 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . . . . . . 2 . . . . . . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . . . . . . 2 . . . . . . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . 2 . . . . 2 . . . . . 2 
2 . 2 2 2 2 2 . . 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . . . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . . . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . 2 . . . 2 
2 . 2 2 2 2 2 . . 2 2 2 2 2 . 2 2 2 2 . . . 2 2 2 2 . 2 . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 . . . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . . . . . 2 
2 . 2 . . . . . . . . . . 2 . . . . . . 2 2 . . . . . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . . . . . . 2 2 . . . . . 2 . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 . . . . . . . . . 2 . 2 . . . 2 
2 . 2 2 2 2 2 . . 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 . 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.builtin.field0,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn3,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection3,sprites.dungeon.hazardSpike,sprites.dungeon.buttonTealDepressed,sprites.builtin.field1,sprites.castle.shrub,sprites.castle.rock1,sprites.castle.rock0,sprites.castle.rock2,sprites.castle.saplingPine,sprites.builtin.crowd0,sprites.builtin.brick,sprites.dungeon.doorLockedWest,sprites.dungeon.doorOpenWest,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,sprites.dungeon.floorDark0,sprites.dungeon.floorLight4,sprites.dungeon.stairNorth,sprites.dungeon.purpleOuterWest2,sprites.dungeon.floorLight0,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.builtin.forestTiles21,sprites.dungeon.stairSouth,sprites.castle.saplingOak,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterNorth2,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorLight3,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight5,sprites.dungeon.stairEast,sprites.dungeon.stairWest,sprites.dungeon.stairLarge,sprites.builtin.forestTiles22,sprites.builtin.forestTiles3,sprites.builtin.forestTiles20,sprites.builtin.forestTiles4,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.builtin.crowd2,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedWest,sprites.dungeon.doorLockedEast,sprites.dungeon.doorClosedSouth,sprites.dungeon.doorOpenNorth],
            TileScale.Sixteen
        ))
initperson()
initlocation()
initequipment()
creatvirus()
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
let hero = sprites.create(img`
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
display()
game.onUpdateInterval(20000, function () {
    creatvirus()
})
