"use client";

import { useEffect, useRef, useCallback } from "react";
import { tokens } from "@/components/ui/ThemeRegistry";

/* ── Canvas colour strings (from ThemeRegistry tokens) ── */
const C_ACCENT    = `rgba(${tokens.accentRgb},`;
const C_ACCENT_BR = `rgba(${tokens.accentBrRgb},`;
const C_PURPLE    = `rgba(${tokens.accent2Rgb},`;
const C_CYAN      = `rgba(${tokens.accentRgb},`;

const GRID = 40;

interface Node {
  x: number;
  y: number;
  c: number;
  r: number;
  type: "junction" | "via" | "pad";
}

interface Trace {
  x1: number;
  y1: number;
  cx: number;
  cy: number;
  x2: number;
  y2: number;
  color: "blue" | "purple";
  alpha: number;
  width: number;
}

interface Pulse {
  trace: Trace;
  progress: number;
  speed: number;
  size: number;
  color: "blue" | "purple" | "cyan";
  alpha: number;
  tail: { x: number; y: number }[];
  tailLen: number;
}

interface Chip {
  x: number;
  y: number;
  w: number;
  h: number;
  pins: number;
}

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const snap = (v: number) => Math.round(v / GRID) * GRID;

function tracePos(tr: Trace, t: number) {
  const half = 0.5;
  if (t <= half) {
    const p = t / half;
    return { x: tr.x1 + (tr.cx - tr.x1) * p, y: tr.y1 + (tr.cy - tr.y1) * p };
  } else {
    const p = (t - half) / half;
    return { x: tr.cx + (tr.x2 - tr.cx) * p, y: tr.cy + (tr.y2 - tr.cy) * p };
  }
}

function pulseColor(color: string, alpha: number) {
  if (color === "purple") return `${C_PURPLE}${alpha})`;
  if (color === "cyan") return `${C_CYAN}${alpha})`;
  return `${C_ACCENT}${alpha})`;
}

function glowColor(color: string, alpha: number) {
  if (color === "purple") return `${C_PURPLE}${alpha})`;
  if (color === "cyan") return `${C_CYAN}${alpha})`;
  return `${C_ACCENT_BR}${alpha})`;
}

export default function CircuitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const dataRef = useRef<{
    nodes: Node[];
    traces: Trace[];
    pulses: Pulse[];
    chips: Chip[];
    vias: Node[];
    W: number;
    H: number;
    animT: number;
  }>({
    nodes: [],
    traces: [],
    pulses: [],
    chips: [],
    vias: [],
    W: 0,
    H: 0,
    animT: 0,
  });

  const spawnPulse = useCallback(() => {
    const { traces, pulses } = dataRef.current;
    if (traces.length === 0) return;
    const trace = pick(traces);
    const speed = rnd(0.4, 1.4);
    const color: "blue" | "purple" | "cyan" =
      Math.random() < 0.12 ? "purple" : Math.random() < 0.08 ? "cyan" : "blue";
    pulses.push({
      trace,
      progress: 0,
      speed: speed / 100,
      size: rnd(2, 4),
      color,
      alpha: rnd(0.7, 1.0),
      tail: [],
      tailLen: Math.floor(rnd(6, 18)),
    });
  }, []);

  const buildCircuit = useCallback(
    (W: number, H: number) => {
      const data = dataRef.current;
      data.nodes = [];
      data.traces = [];
      data.pulses = [];
      data.chips = [];
      data.vias = [];
      data.W = W;
      data.H = H;

      const cols = Math.floor(W / GRID) + 2;
      const rows = Math.floor(H / GRID) + 2;

      const grid: Record<string, Node> = {};
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() < 0.3) {
            const x = c * GRID;
            const y = r * GRID;
            const key = `${c},${r}`;
            const t = Math.random();
            const nodeType: "junction" | "via" | "pad" =
              t < 0.55 ? "junction" : t < 0.78 ? "via" : "pad";
            grid[key] = { x, y, c, r, type: nodeType };
            data.nodes.push(grid[key]);
            if (nodeType === "via") data.vias.push(grid[key]);
          }
        }
      }

      const dirs = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
      ];
      data.nodes.forEach((n) => {
        const maxConn = 1 + Math.floor(Math.random() * 3);
        let conn = 0;
        dirs.forEach(([dc, dr]) => {
          if (conn >= maxConn) return;
          const steps = 1 + Math.floor(Math.random() * 4);
          const tc = n.c + dc * steps;
          const tr = n.r + dr * steps;
          const key = `${tc},${tr}`;
          if (grid[key]) {
            const target = grid[key];
            const corner = { x: target.x, y: n.y };
            const lColor: "blue" | "purple" = Math.random() < 0.15 ? "purple" : "blue";
            data.traces.push({
              x1: n.x,
              y1: n.y,
              cx: corner.x,
              cy: corner.y,
              x2: target.x,
              y2: target.y,
              color: lColor,
              alpha: rnd(0.08, 0.18),
              width: Math.random() < 0.2 ? 1.5 : 1,
            });
            conn++;
          }
        });
      });

      const chipCount = Math.floor((W * H) / 160000) + 6;
      for (let i = 0; i < chipCount; i++) {
        const cw = (2 + Math.floor(Math.random() * 4)) * GRID;
        const ch = (1 + Math.floor(Math.random() * 2)) * GRID;
        const cx = snap(rnd(GRID, W - cw - GRID));
        const cy = snap(rnd(GRID * 2, H - ch - GRID));
        data.chips.push({ x: cx, y: cy, w: cw, h: ch, pins: Math.floor(cw / GRID) * 2 });
      }

      for (let i = 0; i < 18; i++) spawnPulse();
    },
    [spawnPulse]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // roundRect polyfill
    if (!CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = function (
        x: number,
        y: number,
        w: number,
        h: number,
        radii?: number | number[]
      ) {
        const r = typeof radii === "number" ? radii : radii?.[0] || 0;
        this.moveTo(x + r, y);
        this.lineTo(x + w - r, y);
        this.arcTo(x + w, y, x + w, y + r, r);
        this.lineTo(x + w, y + h - r);
        this.arcTo(x + w, y + h, x + w - r, y + h, r);
        this.lineTo(x + r, y + h);
        this.arcTo(x, y + h, x, y + h - r, r);
        this.lineTo(x, y + r);
        this.arcTo(x, y, x + r, y, r);
        this.closePath();
        return this;
      };
    }

    function resize() {
      const W = (canvas!.width = canvas!.offsetWidth);
      const H = (canvas!.height = canvas!.offsetHeight);
      buildCircuit(W, H);
    }

    function draw() {
      const data = dataRef.current;
      const { W, H, traces, chips, vias, nodes } = data;
      data.animT++;
      const animT = data.animT;

      ctx!.clearRect(0, 0, W, H);

      // Subtle radial vignette
      const vg = ctx!.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.75);
      vg.addColorStop(0, `rgba(${tokens.bgRgb},0)`);
      vg.addColorStop(0.6, `rgba(${tokens.bgRgb},0)`);
      vg.addColorStop(1, `rgba(${tokens.bgRgb},0.55)`);
      ctx!.fillStyle = vg;
      ctx!.fillRect(0, 0, W, H);

      // Traces
      traces.forEach((tr) => {
        const pulse = Math.sin(animT * 0.008 + tr.x1 * 0.01) * 0.03;
        const a = tr.alpha + pulse;
        ctx!.lineWidth = tr.width;
        ctx!.strokeStyle = tr.color === "purple" ? `${C_PURPLE}${a})` : `${C_ACCENT}${a})`;
        ctx!.lineCap = "square";
        ctx!.beginPath();
        ctx!.moveTo(tr.x1, tr.y1);
        ctx!.lineTo(tr.cx, tr.cy);
        ctx!.lineTo(tr.x2, tr.y2);
        ctx!.stroke();
      });

      // IC Chips
      chips.forEach((chip) => {
        ctx!.strokeStyle = `${C_ACCENT}0.14)`;
        ctx!.lineWidth = 1;
        ctx!.fillStyle = `rgba(${tokens.bgRgb},0.7)`;
        ctx!.beginPath();
        ctx!.roundRect(chip.x, chip.y, chip.w, chip.h, 4);
        ctx!.fill();
        ctx!.stroke();

        ctx!.strokeStyle = `${C_ACCENT}0.2)`;
        ctx!.beginPath();
        ctx!.arc(chip.x + chip.w / 2, chip.y, 5, Math.PI, 0, false);
        ctx!.stroke();

        const pinSpacing = chip.w / (chip.pins / 2 + 1);
        for (let p = 1; p <= chip.pins / 2; p++) {
          const px = chip.x + p * pinSpacing;
          ctx!.strokeStyle = `${C_ACCENT}0.25)`;
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(px, chip.y);
          ctx!.lineTo(px, chip.y - 8);
          ctx!.stroke();
          ctx!.fillStyle = `${C_ACCENT}0.35)`;
          ctx!.fillRect(px - 2, chip.y - 12, 4, 4);
          ctx!.beginPath();
          ctx!.moveTo(px, chip.y + chip.h);
          ctx!.lineTo(px, chip.y + chip.h + 8);
          ctx!.stroke();
          ctx!.fillRect(px - 2, chip.y + chip.h + 8, 4, 4);
        }

        ctx!.fillStyle = `${C_ACCENT}0.2)`;
        ctx!.font = `bold ${Math.min(9, chip.w / 5)}px monospace`;
        ctx!.textAlign = "center";
        ctx!.fillText("NXT", chip.x + chip.w / 2, chip.y + chip.h / 2 + 3);
      });

      // Via rings
      vias.forEach((v) => {
        const pulse = 0.5 + 0.5 * Math.sin(animT * 0.025 + v.x * 0.05);
        ctx!.beginPath();
        ctx!.arc(v.x, v.y, 5, 0, Math.PI * 2);
        ctx!.strokeStyle = `${C_ACCENT}${0.2 + 0.15 * pulse})`;
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
        ctx!.beginPath();
        ctx!.arc(v.x, v.y, 2, 0, Math.PI * 2);
        ctx!.fillStyle = `${C_ACCENT}${0.3 + 0.2 * pulse})`;
        ctx!.fill();
        if (pulse > 0.85) {
          ctx!.beginPath();
          ctx!.arc(v.x, v.y, 8, 0, Math.PI * 2);
          ctx!.strokeStyle = `${C_ACCENT}0.07)`;
          ctx!.lineWidth = 2;
          ctx!.stroke();
        }
      });

      // Junction nodes
      nodes.forEach((n) => {
        if (n.type !== "junction") return;
        const blink = 0.5 + 0.5 * Math.sin(animT * 0.02 + n.x * 0.04 + n.y * 0.03);
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle = `${C_ACCENT}${0.2 + 0.3 * blink})`;
        ctx!.fill();
      });

      // Pad nodes
      nodes.forEach((n) => {
        if (n.type !== "pad") return;
        ctx!.beginPath();
        ctx!.rect(n.x - 4, n.y - 4, 8, 8);
        ctx!.fillStyle = `${C_ACCENT}0.12)`;
        ctx!.fill();
        ctx!.strokeStyle = `${C_ACCENT}0.25)`;
        ctx!.lineWidth = 0.8;
        ctx!.stroke();
      });

      // Pulses
      data.pulses.forEach((p, idx) => {
        p.progress += p.speed;
        const pos = tracePos(p.trace, p.progress);

        p.tail.unshift({ ...pos });
        if (p.tail.length > p.tailLen) p.tail.pop();

        // Draw tail
        p.tail.forEach((pt, ti) => {
          const ratio = 1 - ti / p.tailLen;
          ctx!.beginPath();
          ctx!.arc(pt.x, pt.y, p.size * ratio * 0.6, 0, Math.PI * 2);
          ctx!.fillStyle = pulseColor(p.color, p.alpha * ratio * 0.6);
          ctx!.fill();
        });

        // Head glow
        const grd = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, p.size * 5);
        grd.addColorStop(0, glowColor(p.color, p.alpha * 0.9));
        grd.addColorStop(0.4, glowColor(p.color, p.alpha * 0.3));
        grd.addColorStop(1, glowColor(p.color, 0));
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, p.size * 5, 0, Math.PI * 2);
        ctx!.fillStyle = grd;
        ctx!.fill();

        // Head dot
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = glowColor(p.color, 1);
        ctx!.fill();

        if (p.progress >= 1) {
          data.pulses[idx] = null as unknown as Pulse;
          spawnPulse();
        }
      });
      data.pulses = data.pulses.filter(Boolean);

      while (data.pulses.length < 22) spawnPulse();

      animRef.current = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, [buildCircuit, spawnPulse]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
