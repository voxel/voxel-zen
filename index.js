// Generated by CoffeeScript 1.7.0
(function() {
  var ZenPlugin;

  module.exports = function(game, opts) {
    return new ZenPlugin(game, opts);
  };

  module.exports.pluginInfo = {
    clientOnly: true
  };

  ZenPlugin = (function() {
    function ZenPlugin(game, opts) {
      this.game = game;
      if (this.game.buttons.down == null) {
        throw 'voxel-zen requires "kb-bindings" as game.buttons';
      }
      this.zenMode = false;
      this.enable();
    }

    ZenPlugin.prototype.enter = function() {
      var _ref, _ref1, _ref2, _ref3;
      if ((_ref = document.getElementById('logo')) != null) {
        if ((_ref1 = _ref.style) != null) {
          _ref1.visibility = 'hidden';
        }
      }
      this.game.plugins.disable('voxel-inventory-hotbar');
      if ((_ref2 = this.getDatgui()) != null) {
        if ((_ref3 = _ref2.style) != null) {
          _ref3.visibility = 'hidden';
        }
      }
      return this.zenMode = true;
    };

    ZenPlugin.prototype.leave = function() {
      var _ref, _ref1, _ref2, _ref3;
      if ((_ref = document.getElementById('logo')) != null) {
        if ((_ref1 = _ref.style) != null) {
          _ref1.visibility = '';
        }
      }
      this.game.plugins.enable('voxel-inventory-hotbar');
      if ((_ref2 = this.getDatgui()) != null) {
        if ((_ref3 = _ref2.style) != null) {
          _ref3.visibility = '';
        }
      }
      return this.zenMode = false;
    };

    ZenPlugin.prototype.getDatgui = function() {
      var a;
      a = document.getElementsByClassName('dg');
      if (a != null) {
        return a[0];
      }
    };

    ZenPlugin.prototype.toggle = function() {
      if (this.zenMode) {
        return this.leave();
      } else {
        return this.enter();
      }
    };

    ZenPlugin.prototype.enable = function() {
      return this.game.buttons.down.on('zen', this.down = (function(_this) {
        return function() {
          return _this.toggle();
        };
      })(this));
    };

    ZenPlugin.prototype.disable = function() {
      return this.game.buttons.down.remove('zen', this.down);
    };

    return ZenPlugin;

  })();

}).call(this);
