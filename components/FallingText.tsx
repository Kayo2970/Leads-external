"use client";

import React, { useRef, useEffect, useState } from "react";
import Matter from "matter-js";

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  highlightClass?: string;
  trigger?: "click" | "hover" | "auto" | "scroll";
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  fontSize?: string;
  mouseConstraintStiffness?: number;
  className?: string;
}

export default function FallingText({
  text = "",
  highlightWords = [],
  highlightClass = "highlighted",
  trigger = "click",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 0.84,
  fontSize = "2rem",
  mouseConstraintStiffness = 1.4,
  className = "",
}: FallingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(trigger === "auto");

  useEffect(() => {
    if (!hasTriggered || !containerRef.current || !textRef.current) return;

    const {
      Engine,
      Render,
      World,
      Bodies,
      Runner,
      Mouse,
      MouseConstraint,
      Composite,
    } = Matter;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 400;

    const engine = Engine.create();
    engine.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current || container,
      engine: engine,
      options: {
        width,
        height,
        wireframes,
        background: backgroundColor,
      },
    });

    const wordSpans = textRef.current.querySelectorAll<HTMLSpanElement>(".falling-word");
    const wordBodies: { body: Matter.Body; elem: HTMLSpanElement }[] = [];

    const containerRect = container.getBoundingClientRect();

    wordSpans.forEach((span) => {
      const rect = span.getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        restitution: 0.6,
        friction: 0.1,
        frictionAir: 0.01,
        angle: (Math.random() - 0.5) * 0.2,
      });

      span.style.position = "absolute";
      span.style.left = "0px";
      span.style.top = "0px";
      span.style.width = `${rect.width}px`;
      span.style.height = `${rect.height}px`;
      span.style.transform = `translate3d(${x - rect.width / 2}px, ${y - rect.height / 2}px, 0px)`;
      span.style.pointerEvents = "auto";
      span.style.userSelect = "none";

      wordBodies.push({ body, elem: span });
      World.add(engine.world, body);
    });

    // Floor and walls
    const floor = Bodies.rectangle(width / 2, height + 25, width * 2, 50, {
      isStatic: true,
    });
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height * 2, {
      isStatic: true,
    });
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height * 2, {
      isStatic: true,
    });
    World.add(engine.world, [floor, leftWall, rightWall]);

    // Mouse control
    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    let animId: number;
    const update = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        const angle = body.angle;
        const w = parseFloat(elem.style.width);
        const h = parseFloat(elem.style.height);
        elem.style.transform = `translate3d(${x - w / 2}px, ${y - h / 2}px, 0px) rotate(${angle}rad)`;
      });
      animId = requestAnimationFrame(update);
    };
    animId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(animId);
      Runner.stop(runner);
      Render.stop(render);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [hasTriggered, gravity, backgroundColor, wireframes, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!hasTriggered) {
      setHasTriggered(true);
    }
  };

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <div
      ref={containerRef}
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
      className={`relative overflow-hidden cursor-pointer ${className}`}
      style={{ fontSize }}
    >
      <div ref={canvasContainerRef} className="absolute inset-0 pointer-events-none opacity-0" />
      <div ref={textRef} className="relative z-10 flex flex-wrap gap-x-2 gap-y-1">
        {words.map((word, idx) => {
          const isHighlighted = highlightWords.some(
            (hw) => hw.toLowerCase() === word.replace(/[^\w]/g, "").toLowerCase()
          );
          return (
            <span
              key={idx}
              className={`falling-word inline-block font-bold transition-colors ${
                isHighlighted ? `${highlightClass} text-[#DE3F11]` : "text-white"
              }`}
            >
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
}
