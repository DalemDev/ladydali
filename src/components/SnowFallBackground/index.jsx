import React, { useEffect } from 'react';
import './index.css';

const SnowfallBackground = () => {
    useEffect(() => {
        const canvas = document.getElementById('snowfall');
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const maxFlakes = 100;
        const flakes = [];

        class Flake {
            constructor(x, y, speedX, speedY, size) {
                this.x = x;
                this.y = y;
                this.speedX = speedX;
                this.speedY = speedY;
                this.size = size;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.y > height) {
                    this.y = 0;
                    this.x = Math.random() * width;
                }

                if (this.x > width) {
                    this.x = 0;
                    this.y = Math.random() * height;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }

        const initFlakes = () => {
            for (let i = 0; i < maxFlakes; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const speedX = Math.random() * 2 - 1;
                const speedY = Math.random() * 1 + 0.5; // Velocidad vertical reducida para una caída más lenta
                const size = Math.random() * 3 + 2;
                flakes.push(new Flake(x, y, speedX, speedY, size));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            for (const flake of flakes) {
                flake.update();
                flake.draw();
            }
            requestAnimationFrame(animate);
        };

        initFlakes();
        animate();

        window.addEventListener('resize', () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            flakes.length = 0;
            initFlakes();
        });
    }, []);

    return <canvas id="snowfall" />;
};

export default SnowfallBackground;
