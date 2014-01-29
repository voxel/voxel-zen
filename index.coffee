
module.exports = (game, opts) -> new ZenPlugin game, opts

class ZenPlugin
  constructor: (@game, opts) ->
    throw 'voxel-zen requires "kb-bindings" as game.buttons' if not @game.buttons.down?
    @enable()

  enable: () ->
    @game.buttons.down.on 'zen', @down = () =>
      console.log 'zen'

  disable: () ->
    @game.buttons.down.remove 'zen', @down

