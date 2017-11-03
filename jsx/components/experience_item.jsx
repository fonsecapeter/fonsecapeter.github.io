"use strict";

const React = require('react');
const Link = require('react-router').Link;

const ExperienceItem = React.createClass({
  getInitialState () {
    return ({
      aboutDropClass: 'arrow drop-down',
      experienceBulletExpandClass: 'hidden'
    })
  },

  expand () {
    this.setState({
      aboutDropClass: 'arrow pull-up',
      experienceBulletExpandClass: 'experience-item-bullets'
    })
  },

  hide () {
    this.setState({
      aboutDropClass: 'arrow drop-down',
      experienceBulletExpandClass: 'hidden'
    })
  },

  toggleDrop () {
    if (this.props.experience.bullets.length > 0) {
      if (this.state.aboutDropClass === 'arrow drop-down') {
        this.expand();
      } else {
        this.hide();
      }
    }
  },

  render () {
    let dropArrow = null;
    let titleClassName
    if (this.props.experience.bullets.length > 0) {
      dropArrow = <img className={ this.state.aboutDropClass } src='public/img/icons/arrow.svg'></img>;
      titleClassName = 'experience-item-title';
    } else {
      titleClassName = 'experience-item-title-no-pointer';
    }

    let primary = null;
    if (this.props.experience.primary) {
      primary = <p>{ this.props.experience.primary }</p>;
    }

    return (
      <div className="experience-item">
        <div className="experience-item-content">
          <div className="experience-item-left">
            <img src={ this.props.experience.icon } className="experience-item-icon"></img>
          </div>
          <div className="experience-item-right">
            <h3 className={ titleClassName } onClick={ this.toggleDrop }>
              { this.props.experience.title }
              { dropArrow }
            </h3>
            <p>
              <span className="experience-item-date">
                { this.props.experience.date }
              </span>
              <span className="experience-item-dot">·</span>
              <a className="experience-item-org" href={ this.props.experience.link } target="blank">{ this.props.experience.org }</a>
            </p>
            { primary }
            <div>
              <ul className={ this.state.experienceBulletExpandClass }>
                {
                  this.props.experience.bullets.map( (bullet, idx) => {
                    return (
                      <li key={ idx } dangerouslySetInnerHTML={{__html: bullet}}></li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = ExperienceItem;
