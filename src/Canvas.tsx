import React, { useEffect, useRef } from 'react';

class Canvas extends React.Component {
    canvas!: HTMLCanvasElement;
    context!: CanvasRenderingContext2D;

    componentDidMount() {

        let canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if (canvas === null) {
            throw new Error("cannot find canvas");
        }
        let context = canvas.getContext("2d") as CanvasRenderingContext2D;

        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = 1;

        this.canvas = canvas;
        this.context = context;
    }
    render() {

        return (
            <canvas
                id="canvas"
                width={640}
                height={480}
            >
            </canvas>
        )
    }

}

export default Canvas;