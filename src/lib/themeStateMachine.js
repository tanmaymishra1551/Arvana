// lib/themeStateMachine.js

/**
 * Theme Transition State Machine
 * Defines allowed transitions and their behaviors
 */
export class ThemeStateMachine {
  constructor(initialTheme = 'hero') {
    this.currentState = initialTheme;
    this.previousState = null;
    this.transitionQueue = [];
  }

  /**
   * Transition rules matrix
   * Defines special behavior for specific transitions
   */
  static TRANSITION_RULES = {
    // Dark → Darker transitions (subtle)
    'hero->services': {
      type: 'darken',
      preserveAccent: true,
      crossfade: 0.3,
    },
    'services->technology': {
      type: 'hueShift',
      preserveAccent: false,
      crossfade: 0.4,
    },
    'technology->process': {
      type: 'darken',
      preserveAccent: false,
      crossfade: 0.3,
    },

    // Dark → Accent transitions (bold)
    'team->cta': {
      type: 'accentPop',
      preserveAccent: false,
      crossfade: 0.6,
      brightnessBoost: 1.8,
    },
    'testimonials->cta': {
      type: 'accentPop',
      preserveAccent: false,
      crossfade: 0.7,
      brightnessBoost: 2.0,
    },

    // Accent → Dark transitions (ease back)
    'cta->footer': {
      type: 'accentFade',
      preserveAccent: true,
      crossfade: 0.5,
      brightnessDrop: 0.3,
    },

    // Reverse scroll handling
    '*->hero': {
      type: 'reset',
      preserveAccent: true,
      crossfade: 0.8,
    },
  };

  /**
   * Get transition config for current state change
   */
  getTransitionConfig(fromId, toId) {
    const key = `${fromId}->${toId}`;
    const reverseKey = `${toId}->${fromId}`;
    
    // Check for exact match
    if (ThemeStateMachine.TRANSITION_RULES[key]) {
      return ThemeStateMachine.TRANSITION_RULES[key];
    }
    
    // Check for reverse match
    if (ThemeStateMachine.TRANSITION_RULES[reverseKey]) {
      return {
        ...ThemeStateMachine.TRANSITION_RULES[reverseKey],
        reversed: true,
      };
    }

    // Check for wildcard match
    if (ThemeStateMachine.TRANSITION_RULES[`*->${toId}`]) {
      return ThemeStateMachine.TRANSITION_RULES[`*->${toId}`];
    }

    // Default transition
    return {
      type: 'default',
      preserveAccent: false,
      crossfade: 0.4,
    };
  }

  /**
   * Calculate interpolated colors during transition
   */
  interpolateColors(fromTheme, toTheme, progress, config) {
    const easeProgress = this.applyEasing(progress, config);

    return {
      bg: this.lerpColor(fromTheme.colors.bg, toTheme.colors.bg, easeProgress),
      text: this.lerpColor(fromTheme.colors.text, toTheme.colors.text, easeProgress),
      accent: config.preserveAccent 
        ? fromTheme.colors.accent 
        : this.lerpColor(fromTheme.colors.accent, toTheme.colors.accent, easeProgress),
    };
  }

  /**
   * Color interpolation using lerp
   */
  lerpColor(colorA, colorB, t) {
    const a = this.hexToRgb(colorA);
    const b = this.hexToRgb(colorB);

    const r = Math.round(a.r + (b.r - a.r) * t);
    const g = Math.round(a.g + (b.g - a.g) * t);
    const bl = Math.round(a.b + (b.b - a.b) * t);

    return this.rgbToHex(r, g, bl);
  }

  applyEasing(t, config) {
    // Custom easing based on transition type
    switch (config.type) {
      case 'accentPop':
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // EaseInOutQuad
      case 'accentFade':
        return t * t * t; // EaseInCubic
      default:
        return t; // Linear
    }
  }

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : { r: 0, g: 0, b: 0 };
  }

  rgbToHex(r, g, b) {
    return '#' + [r, g, b].map(x => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }
}