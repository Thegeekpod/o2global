import React, { Component } from 'react';

class SocialWall extends Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.scriptId = `wallsio-script-${Math.random().toString(36).substr(2, 9)}`;
  }

  componentDidMount() {
    const container = this.containerRef.current;

    if (container) {
      if (!document.getElementById(this.scriptId)) {
        const script = document.createElement('script');
        script.id = this.scriptId;
        script.src = 'https://walls.io/js/wallsio-widget-1.2.js';
        script.async = true;
        script.dataset.wallurl = 'https://my.walls.io/d3arz?nobackground=1&layout=carousel&show_header=0&show_post_info=1&accessibility=0';
        script.dataset.title = 'My social wall';
        script.dataset.width = '100%';
        script.dataset.height = '308';
        script.dataset.lazyload = '1';
        script.onerror = () => console.error('Failed to load Walls.io widget script.');

        container.appendChild(script);
      }
    } else {
      console.error('Container element not found.');
    }
  }

  render() {
    return <div ref={this.containerRef}>{/* This div will hold the social wall widget */}</div>;
  }
}

export default SocialWall;
