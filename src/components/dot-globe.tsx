/**
 * Dotted globe for the Core theme's hero. Dots sit on a lat/long grid,
 * projected orthographically; a smooth noise field stands in for land.
 */
const R = 100;
const TILT = (-18 * Math.PI) / 180;
const SPIN = (35 * Math.PI) / 180;

function isLand(lat: number, lon: number): boolean {
  const v =
    Math.sin(lat * 2.1 + 0.6) * Math.cos(lon * 1.7 - 0.4) +
    0.6 * Math.sin(lon * 3.3 + lat * 1.2) +
    0.35 * Math.cos(lat * 4.7 - lon * 2.2);
  return v > 0.05;
}

function buildDots() {
  const dots: { x: number; y: number; r: number; o: number }[] = [];
  for (let latDeg = -80; latDeg <= 80; latDeg += 5) {
    const lat = (latDeg * Math.PI) / 180;
    const step = 5 / Math.max(0.25, Math.cos(lat));
    for (let lonDeg = -180; lonDeg < 180; lonDeg += step) {
      const lon = (lonDeg * Math.PI) / 180;
      if (!isLand(lat, lon)) continue;
      // Rotate around the vertical axis, then tilt toward the viewer.
      const x0 = Math.cos(lat) * Math.sin(lon + SPIN);
      const y0 = Math.sin(lat);
      const z0 = Math.cos(lat) * Math.cos(lon + SPIN);
      const y = y0 * Math.cos(TILT) - z0 * Math.sin(TILT);
      const z = y0 * Math.sin(TILT) + z0 * Math.cos(TILT);
      if (z <= 0.05) continue;
      dots.push({
        x: +(x0 * R).toFixed(1),
        y: +(-y * R).toFixed(1),
        r: +(0.9 + z * 0.9).toFixed(2),
        o: +(0.25 + z * 0.75).toFixed(2),
      });
    }
  }
  return dots;
}

const dots = buildDots();

export function DotGlobe({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="-110 -110 220 220"
      aria-hidden="true"
      focusable="false"
    >
      <circle r={R} className="dot-globe__rim" />
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} opacity={dot.o} />
      ))}
    </svg>
  );
}
