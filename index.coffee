
module.exports = (game, opts) -> new ZenPlugin game, opts
module.exports.pluginInfo =
  clientOnly: true

class ZenPlugin
  constructor: (@game, opts) ->
    throw 'voxel-zen requires "kb-bindings" as game.buttons' if not @game.buttons.down?

    @zenMode = false
    @enable()

  enter: () ->
    document.getElementById('logo')?.style?.visibility = 'hidden'
    @zenMode = true

  leave: () ->
    document.getElementById('logo')?.style?.visibility = ''
    @zenMode = false

  toggle: () ->
    if @zenMode
      @leave()
    else
      @enter()

  enable: () ->
    @game.buttons.down.on 'zen', @down = () =>
      @toggle()

  disable: () ->
    @game.buttons.down.remove 'zen', @down

