import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Plain files for GitHub Pages: no Node server, no request-time rendering.
  output: 'export',
  // `/pagina/` is written as `pagina/index.html`, which every static server finds without rewrites.
  trailingSlash: true,
  images: { unoptimized: true },
  // Next would otherwise write its own AGENTS.md and CLAUDE.md on every `next dev`; this repo's are by hand.
  agentRules: false,
};

export default nextConfig;
