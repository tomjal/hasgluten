var Events = require('../utils/events.js'),
  Dom = require('../utils/dom.js');

module.exports = {

  //When the component mounts, listen to click events and check if we need to
  //Call the componentClickAway function.
  componentDidMount: function() {
    Events.on(document, 'click', this._checkClickAway);
  },

  componentWillUnmount: function() {
    Events.off(document, 'click', this._checkClickAway);
  },

  _checkClickAway: function(e) {
    var el = this.getDOMNode();

    // Check if the target is inside the current component
    if (this.isMounted() && 
      e.target != el &&
      !Dom.isDescendant(el, e.target)) {
      if (this.componentClickAway) this.componentClickAway();
    }
  }

}