import React, { Component } from 'react'

export default class scene extends Component {

    componentDidMount(){
        const width = this.container.getBoundingClientRect().width;
        const height = this.container.getBoundingClientRect().height;

        this.ctx = this.mount.getContext('2d');
        this.ctx.canvas.width = width;
        this.ctx.canvas.height = height;
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, width, height);
        this.ctx.globalCompositeOperation='destination-out';
    }

    mouseMove(e){
        if(!this.mount || !this.ctx) return;

        this.x = e.pageX - this.mount.offsetLeft;
        this.y = e.pageY - this.mount.offsetTop;
  
        this.drawCircle(this.x, this.y, 60);
    }

    drawCircle(x, y, radius){
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        this.ctx.fill();
    }

    render() {
        return (
            <div className="scene" onMouseMove={(e) => {this.mouseMove(e)}} ref={ref => { this.container = ref}}>
                <canvas className="canvas" ref={ref => this.mount = ref}></canvas>
                <img className="img" src="./images/background.jpg"></img>
            </div>
        )
    }
}
