import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'


/**
 * Vite config for the REU Summer Seminar 2026 Slidev deck.
 *
 * Slidev provides its own Vite plugin chain.  We only override what we
 * need to keep the dev server isolated from sibling Slidev projects on
 * the same machine:
 *   - ../2026-globus-world/        port 3032
 *   - ../2026-midwestrcd-talk/     port 3033
 *   - ../2026-nairr-workshop-talk/ port 3034
 *   - this deck                    port 3035
 *
 * Running several concurrently is the steady state during talk prep,
 * so unique ports + strictPort prevent stale browser tabs from one deck
 * reconnecting to another and requesting virtual modules that don't
 * exist here.
 */


const projectRoot = dirname(fileURLToPath(import.meta.url))


export default defineConfig({
  server: {
    port: 3035,
    strictPort: true,
    // Allow the Tailscale funnel hostname so Vite doesn't reject
    // requests forwarded from the tunnel during dev:remote.
    allowedHosts: [
      'geoffreys-macbook-pro-main.tailc80ab2.ts.net',
    ],
    fs: {
      strict: true,
      allow: [
        projectRoot,
        resolve(projectRoot, 'node_modules'),
        resolve(projectRoot, 'public'),
        resolve(projectRoot, 'styles'),
      ],
    },
  },
})
