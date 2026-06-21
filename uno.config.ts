import { defineConfig } from 'unocss'


/**
 * UnoCSS shortcuts for the REU Summer Seminar 2026 Slidev deck.
 *
 * Palette is sourced from styles/index.css :root variables.  Shortcut
 * names mirror the verbal naming in the deck (paper / ink / gold /
 * gold-deep / gold-bright / overview) so prose and styling stay
 * legible together.  Ported from ../2026-nairr-workshop-talk/uno.config.ts
 * — same Purdue 2026 tokens, this deck's content.
 *
 * Swatches sampled directly from the Purdue-Template-2026.pptx — see
 * styles/index.css for provenance.
 */


export default defineConfig({
  shortcuts: {
    // --- Surfaces ---
    'bg-purdue-paper':    'bg-[#FFFFFF]',
    'bg-purdue-ink':      'bg-[#000000] text-[#FFFFFF]',
    'bg-purdue-overview': 'bg-[#E9E6E3]',
    'text-purdue-ink':    'text-[#000000]',
    'text-purdue-paper':  'text-[#FFFFFF]',

    // --- Purdue gold-buff (rules, accents, border insets) ---
    'text-purdue-gold':   'text-[#CFB891]',
    'bg-purdue-gold':     'bg-[#CFB891] text-[#000000]',
    'border-purdue-gold': 'border border-[#CFB891]',

    // --- Deep gold (emphasis) ---
    'text-purdue-gold-deep':   'text-[#8D6F3D]',
    'bg-purdue-gold-deep':     'bg-[#8D6F3D] text-[#FFFFFF]',
    'border-purdue-gold-deep': 'border border-[#8D6F3D]',

    // --- Saturated Purdue gold (stat numbers, hero accents) ---
    'text-purdue-gold-bright':   'text-[#DAAA00]',
    'bg-purdue-gold-bright':     'bg-[#DAAA00] text-[#000000]',
    'border-purdue-gold-bright': 'border border-[#DAAA00]',

    // --- Greys ---
    'text-purdue-subhead': 'text-[#55585F]',
    'text-purdue-muted':   'text-[#9D9694]',

    // --- Accent orange (used sparingly) ---
    'text-purdue-orange': 'text-[#FBAE40]',
    'bg-purdue-orange':   'bg-[#FBAE40] text-[#000000]',

    // --- Layout helpers ---
    'slide-pad':    'px-12 py-7',
    'center-stack': 'flex flex-col items-center justify-center h-full text-center',
    'left-stack':   'flex flex-col items-start justify-center h-full text-left',

    // --- Purdue cards ---
    'purdue-card':       'bg-[#FFFFFF] border border-[#CFB891] p-4',
    'purdue-card-emph':  'bg-[#FFFFFF] border-2 border-[#DAAA00] p-4',
  },

  theme: {
    colors: {
      'purdue-ink':         '#000000',
      'purdue-paper':       '#FFFFFF',
      'purdue-overview':    '#E9E6E3',
      'purdue-gold':        '#CFB891',
      'purdue-gold-deep':   '#8D6F3D',
      'purdue-gold-bright': '#DAAA00',
      'purdue-subhead':     '#55585F',
      'purdue-muted':       '#9D9694',
      'purdue-orange':      '#FBAE40',
    },
    fontFamily: {
      sans:  '"ITC Franklin Gothic", "Franklin Gothic Book", "Franklin Gothic Medium", "Source Sans 3", system-ui, sans-serif',
      serif: '"ITC Franklin Gothic", "Franklin Gothic Book", "Franklin Gothic Medium", "Source Sans 3", system-ui, sans-serif',
      mono:  '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    },
  },
})
