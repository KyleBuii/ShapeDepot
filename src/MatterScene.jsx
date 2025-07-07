import Matter from 'matter-js';
import { useEffect, useRef } from 'react';

const strokeStyle = 'black';
const lineWidth = 2;
const shapeCreators = {
    square: (x, y) =>
        Matter.Bodies.rectangle(x, y, 50, 50, {
        render: { fillStyle: 'transparent', strokeStyle, lineWidth },
    }),
    
    rectangle: (x, y) =>
        Matter.Bodies.rectangle(x, y, 80, 40, {
        render: { fillStyle: 'transparent', strokeStyle, lineWidth },
    }),
    
    circle: (x, y) =>
        Matter.Bodies.circle(x, y, 25, {
        render: { fillStyle: 'transparent', strokeStyle, lineWidth },
    }),
    
    triangle: (x, y) =>
        Matter.Bodies.polygon(x, y, 3, 30, {
        render: { fillStyle: 'transparent', strokeStyle, lineWidth },
    }),
    
    rhombus: (x, y) =>
        Matter.Bodies.rectangle(x, y, 50, 50, {
        angle: Math.PI / 4,
        render: { fillStyle: 'transparent', strokeStyle, lineWidth },
    }),
    
    hexagon: (x, y) =>
        Matter.Bodies.polygon(x, y, 6, 30, {
        render: { fillStyle: 'transparent', strokeStyle, lineWidth },
    }),
    
    octagon: (x, y) =>
        Matter.Bodies.polygon(x, y, 8, 30, {
        render: { fillStyle: 'transparent', strokeStyle, lineWidth },
    }),
};

const MatterScene = ({ storage }) => {
    const sceneRef = useRef(null);
    
    useEffect(() => {
        const {
            Engine,
            Render,
            Runner,
            MouseConstraint,
            Mouse,
            Composite,
            Bodies,
            Render: MatterRender,
        } = Matter;
        
        const width = window.innerWidth;
        const height = window.innerHeight;

        const engine = Engine.create();
        const world = engine.world;
        
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                wireframes: false,
                background: '#ffffff',
            }
        });

        Render.run(render);
        
        const runner = Runner.create();
        Runner.run(runner, engine);
        
        const shapes = [];

        Object.entries(storage).forEach(([shapeType, count]) => {
            const createShape = shapeCreators[shapeType];
            if (!createShape) return;

            for (let i = 0; i < count; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height * 0.5;
                shapes.push(createShape(x, y));
            };
        });
        
        Composite.add(world, shapes);
        
        Composite.add(world, [
            Bodies.rectangle(width / 2, 0, width, 1, { isStatic: true }),
            Bodies.rectangle(width / 2, height, width, 1, { isStatic: true }),
            Bodies.rectangle(width, height / 2, 1, height, { isStatic: true }),
            Bodies.rectangle(0, height / 2, 1, height, { isStatic: true })
        ]);
        
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        
        Composite.add(world, mouseConstraint);
        
        render.mouse = mouse;
        
        MatterRender.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: width, y: height }
        });
        
        return () => {
            Render.stop(render);
            Runner.stop(runner);
            Composite.clear(world);
            Engine.clear(engine);
            if (render.canvas) {
                render.canvas.remove();
            }
            render.textures = {};
        };
    }, []);
    
    return (
        <div ref={sceneRef}/>
    );
};

export default MatterScene;