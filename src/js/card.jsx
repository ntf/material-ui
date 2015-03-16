var React = require('react'),
  Classable = require('./mixins/classable');

var Card = React.createClass({

  mixins: [Classable],

  propTypes: {
    zDepth: React.PropTypes.oneOf([0,1,2,3,4,5]),
    openImmediately: React.PropTypes.bool
  },

  getInitialState: function() {
    return {
      open: this.props.openImmediately || true
    };
  },

  getDefaultProps: function() {
    return {
      zDepth: 1,
      openImmediately: true
    };
  },

  render: function() {
    var {
      className,
      zDepth,
      ...other } = this.props,
      classes = this.getClasses(
        'mui-paper ' +
        'mui-card ' +
        'mui-z-depth-' + this.props.zDepth, {
        'mui-rounded': true,
        'mui-is-open': this.state.open
      });

    return (<div {...other} className={classes}>
          {this.props.children}
        </div>);
  },

  isOpen: function() {
    return this.state.open;
  },

  dismiss: function() {
    this.setState({ open: false });
    if (this.props.onDismiss) this.props.onDismiss();
  },
});


var CardView = React.createClass({

  mixins: [Classable],
  propTypes: {
  },

  getDefaultProps: function() {
    return {
    };
  },

  render: function() {
    var {
      className,
      ...other } = this.props,
      classes = this.getClasses(
        'mui-card-view'
      );

    return (
      <div {...other} className={classes}>
          {this.props.children}
      </div>
    );
  },

});

Card.Actions = React.createClass({

  mixins: [Classable],

  propTypes: {

  },

  getDefaultProps: function() {
    return {

    };
  },

  render: function() {
    var {
      className,
      ...other } = this.props,
      classes = this.getClasses(
        'mui-card-actions');

    return (
      <div {...other} className={classes}>
          {this.props.children}
      </div>
    );
  },

});

Card.Content = React.createClass({

  mixins: [Classable],

  propTypes: {
  },

  getDefaultProps: function() {
    return {
    };
  },

  render: function() {
    var {
      className,
      ...other } = this.props,
      classes = this.getClasses(
        'mui-card-content');
    return (
      <div {...other} className={classes}>
          {this.props.children}
      </div>
    );
  },

  getInnerContainer: function() {
    return this.refs.innerContainer;
  }

});


Card.View = CardView;
module.exports = Card;
