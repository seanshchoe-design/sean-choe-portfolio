/* @ds-bundle: {"format":4,"namespace":"SeanChoePortfolioDesignSystem_9019b6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"CaseStudyCard","sourcePath":"components/portfolio/CaseStudyCard.jsx"},{"name":"FeatureDeck","sourcePath":"components/portfolio/FeatureDeck.jsx"},{"name":"FeatureTile","sourcePath":"components/portfolio/FeatureTile.jsx"},{"name":"ProjectListRow","sourcePath":"components/portfolio/ProjectListRow.jsx"},{"name":"PullQuote","sourcePath":"components/portfolio/PullQuote.jsx"},{"name":"StatBlock","sourcePath":"components/portfolio/StatBlock.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7a9b8222a390","components/core/Button.jsx":"1561505ff7c7","components/core/Divider.jsx":"d20e6f1577bf","components/core/IconButton.jsx":"94ea96d587ae","components/core/SectionLabel.jsx":"d0c9df1f8828","components/core/Tag.jsx":"cb853150f0aa","components/core/ThemeToggle.jsx":"fa9ab7e88836","components/portfolio/CaseStudyCard.jsx":"fabb78cf981d","components/portfolio/FeatureDeck.jsx":"06bde05f7ed3","components/portfolio/FeatureTile.jsx":"91bc66902469","components/portfolio/ProjectListRow.jsx":"99a53151e410","components/portfolio/PullQuote.jsx":"1bb35f29c763","components/portfolio/StatBlock.jsx":"7481e665c016","ui_kits/portfolio/AboutScreen.jsx":"9ea0414e2331","ui_kits/portfolio/App.jsx":"eff5e213f72b","ui_kits/portfolio/AskAI.jsx":"e7d231643b04","ui_kits/portfolio/CaseStudyScreen.jsx":"ce29dc52fa4d","ui_kits/portfolio/Chrome.jsx":"45ceb2a6f1a9","ui_kits/portfolio/FunScreen.jsx":"ad9f801f61b4","ui_kits/portfolio/HomeScreen.jsx":"3b7e435f0c21","ui_kits/portfolio/Wordmark.jsx":"3673143062d1","ui_kits/portfolio/WorkIndexScreen.jsx":"b68d89827dd4","ui_kits/portfolio/data.js":"7585c3da989b","ui_kits/portfolio/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SeanChoePortfolioDesignSystem_9019b6 = window.SeanChoePortfolioDesignSystem_9019b6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — tiny status/marker chip. Distinct from Tag: Badge is for state
 * ("New", "Case study", counts), Tag is for taxonomy. Optional leading dot.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--text-secondary)",
      bg: "var(--surface-2)",
      dotc: "var(--text-muted)"
    },
    accent: {
      color: "var(--text-accent)",
      bg: "color-mix(in srgb, var(--accent) 12%, transparent)",
      dotc: "var(--accent)"
    },
    success: {
      color: "var(--success)",
      bg: "color-mix(in srgb, var(--success) 14%, transparent)",
      dotc: "var(--success)"
    },
    muted: {
      color: "var(--text-muted)",
      bg: "transparent",
      dotc: "var(--text-muted)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      fontFamily: "var(--font-sans)",
      fontSize: "0.72rem",
      fontWeight: 600,
      letterSpacing: "0.01em",
      padding: "0.22rem 0.55rem",
      borderRadius: "var(--radius-sm)",
      color: t.color,
      background: t.bg,
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dotc,
      flexShrink: 0
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action element.
 * Variants: solid (accent), outline, ghost, link.
 * Editorial: sharp-ish corners, mono-ish tracking on labels, quiet hovers.
 */
function Button({
  children,
  variant = "solid",
  size = "md",
  as = "button",
  href,
  iconLeft,
  iconRight,
  disabled = false,
  full = false,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "0.8125rem",
      padding: "0.5rem 0.9rem",
      gap: "0.4rem"
    },
    md: {
      fontSize: "0.9375rem",
      padding: "0.7rem 1.25rem",
      gap: "0.5rem"
    },
    lg: {
      fontSize: "1.0625rem",
      padding: "0.95rem 1.6rem",
      gap: "0.6rem"
    }
  };
  const variants = {
    solid: {
      background: "var(--accent)",
      color: "var(--accent-contrast)",
      border: "1px solid var(--accent)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    },
    link: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "none",
      padding: 0,
      textDecoration: "none"
    }
  };
  const base = {
    display: full ? "flex" : "inline-flex",
    width: full ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: variant === "link" ? 0 : "var(--radius-pill)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)",
    ...(variant === "link" ? {} : sizes[size]),
    ...variants[variant],
    ...style
  };
  const Tag = href ? "a" : as;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = hover && !disabled ? variant === "solid" ? {
    background: "var(--accent-hover)",
    borderColor: "var(--accent-hover)"
  } : variant === "outline" ? {
    borderColor: "var(--text-primary)",
    background: "var(--surface-hover)"
  } : variant === "ghost" ? {
    color: "var(--text-primary)",
    background: "var(--surface-hover)"
  } : {
    color: "var(--accent)"
  } : {};
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: href ? undefined : disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...hoverStyle,
      transform: press && !disabled ? "scale(0.975)" : "scale(1)"
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft) : null, variant === "link" ? /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "1px solid currentColor",
      paddingBottom: 1,
      transition: "opacity var(--dur-fast)",
      opacity: hover ? 0.7 : 1
    }
  }, children) : children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Divider — hairline separator. Horizontal by default; vertical variant for
 * inline metadata rows. Optional centered label for section breaks.
 */
function Divider({
  orientation = "horizontal",
  label,
  style,
  ...rest
}) {
  if (orientation === "vertical") {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-block",
        width: 1,
        alignSelf: "stretch",
        minHeight: "1em",
        background: "var(--border-default)",
        ...style
      }
    }, rest));
  }
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-4)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--label-size)",
        letterSpacing: "var(--label-tracking)",
        textTransform: "uppercase",
        color: "var(--text-muted)"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: "none",
      height: 1,
      background: "var(--border-subtle)",
      margin: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control. Pass an icon node as children
 * (e.g. a Lucide <svg>). Used for theme toggle, nav, social links, close.
 */
function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  style,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const variants = {
    ghost: {
      background: "transparent",
      border: "1px solid transparent",
      color: "var(--text-secondary)"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--border-default)",
      color: "var(--text-primary)"
    },
    solid: {
      background: "var(--surface-2)",
      border: "1px solid var(--border-subtle)",
      color: "var(--text-primary)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      width: d,
      height: d,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--dur-fast) var(--ease-out), color var(--dur-fast), border-color var(--dur-fast), transform var(--dur-fast)",
      transform: press ? "scale(0.92)" : "scale(1)",
      ...variants[variant],
      ...(hover && !disabled ? {
        background: "var(--surface-hover)",
        color: "var(--text-primary)"
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the signature editorial eyebrow. A tracked mono label,
 * optionally with a leading index number and a hairline rule beside it.
 */
function SectionLabel({
  children,
  index,
  rule = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--label-size)",
      fontWeight: 500,
      letterSpacing: "var(--label-tracking)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      ...style
    }
  }, rest), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", null, children), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--border-default)",
      marginLeft: "var(--space-2)"
    }
  }) : null);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — small pill for taxonomy (discipline, company, year).
 * Editorial: hairline outline by default, mono label. Not loud.
 */
function Tag({
  children,
  tone = "default",
  size = "md",
  style,
  ...rest
}) {
  const tones = {
    default: {
      color: "var(--text-secondary)",
      border: "1px solid var(--border-default)",
      background: "transparent"
    },
    solid: {
      color: "var(--text-primary)",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-2)"
    },
    accent: {
      color: "var(--text-accent)",
      border: "1px solid color-mix(in srgb, var(--accent) 40%, transparent)",
      background: "color-mix(in srgb, var(--accent) 12%, transparent)"
    }
  };
  const sizes = {
    sm: {
      fontSize: "0.62rem",
      padding: "0.2rem 0.5rem"
    },
    md: {
      fontSize: "0.68rem",
      padding: "0.3rem 0.65rem"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ThemeToggle — flips document.documentElement[data-theme] between
 * "dark" and "light" and persists to localStorage. Self-contained.
 * Renders a sun/moon glyph; morphs on toggle.
 */
function ThemeToggle({
  size = 40,
  style,
  ...rest
}) {
  const getInitial = () => {
    if (typeof document === "undefined") return "dark";
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr) return attr;
    try {
      const saved = localStorage.getItem("scp-theme");
      if (saved) return saved;
    } catch (e) {}
    return "dark";
  };
  const [theme, setTheme] = React.useState(getInitial);
  const [hover, setHover] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("scp-theme", theme);
    } catch (e) {}
  }, [theme]);
  const isDark = theme === "dark";
  const next = isDark ? "light" : "dark";
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": `Switch to ${next} mode`,
    title: `Switch to ${next} mode`,
    onClick: () => setTheme(next),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: size,
      height: size,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-default)",
      background: hover ? "var(--surface-hover)" : "transparent",
      color: "var(--text-primary)",
      cursor: "pointer",
      transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      transition: "transform var(--dur-slow) var(--ease-out)",
      transform: isDark ? "rotate(0deg)" : "rotate(180deg)"
    }
  }, isDark ?
  /*#__PURE__*/
  /* moon */
  React.createElement("svg", {
    width: Math.round(size * 0.45),
    height: Math.round(size * 0.45),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#8B7FE0",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  })) :
  /*#__PURE__*/
  /* sun */
  React.createElement("svg", {
    width: Math.round(size * 0.45),
    height: Math.round(size * 0.45),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#E8B93E",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
  }))));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/CaseStudyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CaseStudyCard — the primary unit of the work grid. Large media area with a
 * quiet meta footer. Media is a passed node (img/image-slot) or a tinted
 * placeholder built from `accent` + company initial. Hover lifts the media.
 */
function CaseStudyCard({
  company,
  title,
  summary,
  year,
  tags = [],
  media,
  accent = "var(--accent)",
  href = "#",
  aspect = "4 / 3",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: aspect,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      border: "1px solid var(--border-subtle)",
      background: "var(--surface-2)",
      transition: "transform var(--dur-base) var(--ease-out), border-color var(--dur-base)",
      transform: hover ? "translateY(-4px)" : "translateY(0)",
      borderColor: hover ? "var(--border-default)" : "var(--border-subtle)"
    }
  }, media ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, media) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--space-5)",
      background: `radial-gradient(120% 100% at 100% 0%, color-mix(in srgb, ${accent} 34%, transparent), transparent 60%), var(--surface-1)`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(3rem, 10vw, 6rem)",
      lineHeight: 0.8,
      color: "color-mix(in srgb, var(--text-primary) 16%, transparent)"
    }
  }, company)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "var(--space-4)",
      right: "var(--space-4)",
      width: 34,
      height: 34,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "color-mix(in srgb, var(--bg-base) 55%, transparent)",
      backdropFilter: "blur(6px)",
      color: "var(--text-primary)",
      opacity: hover ? 1 : 0,
      transform: hover ? "translate(0,0)" : "translate(4px,-4px)",
      transition: "opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 17L17 7M9 7h8v8"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.68rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, company), year ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.68rem",
      color: "var(--text-muted)"
    }
  }, year) : null), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "var(--display-sm)",
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, title), summary ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.9375rem",
      lineHeight: 1.5,
      color: "var(--text-secondary)",
      maxWidth: "42ch"
    }
  }, summary) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginTop: "var(--space-2)"
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    size: "sm"
  }, t))) : null));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/FeatureTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FeatureTile — a bento hero tile. Two shapes:
 *  - variant="media": media fills the tile, content overlaid at the bottom over
 *    a scrim. Pass `media` (a <video autoplay muted loop> or animated node).
 *  - variant="text": flat surface with label, serif title, blurb, and a link.
 *
 * Standalone: lifts on hover. Inside a <FeatureDeck>, the deck drives the
 * transform (straighten + lift when active, shift + dim when a sibling is
 * active) via the `deck` prop. `peek` is a node that pops out of the top on
 * hover/active (screens, chips, photos).
 */
function FeatureTile({
  label,
  title,
  blurb,
  cta = "Explore",
  href = "#",
  media,
  peek,
  accent = "var(--accent)",
  fill = null,
  // solid tile background (text flips to dark ink for contrast)
  variant = "text",
  bare = false,
  // media-only tile: no label / scrim / title / cta
  deck = null,
  // { active, dim, shift, rotate } when inside a FeatureDeck
  onHoverChange,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const isMedia = variant === "media";
  const inDeck = !!deck;
  const active = inDeck ? deck.active : hover;
  const dim = inDeck ? deck.dim : false;
  const shift = inDeck ? deck.shift : 0;
  const rot = inDeck ? active ? 0 : deck.rotate || 0 : 0;
  const lift = active ? inDeck ? -14 : -4 : 0;
  const scale = active ? inDeck ? 1.045 : 1 : 1;
  const setH = v => {
    setHover(v);
    if (onHoverChange) onHoverChange(v);
  };

  // Let media react to selection (e.g. a video that unmutes when active).
  const mediaNode = React.isValidElement(media) ? React.cloneElement(media, {
    active
  }) : media;
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: active ? "translateX(3px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }));
  const wrapper = {
    position: "relative",
    display: "block",
    zIndex: active ? 6 : 1,
    opacity: dim ? 0.5 : 1,
    transform: `translateX(${shift}px) translateY(${lift}px) rotate(${rot}deg) scale(${scale})`,
    transformOrigin: "center bottom",
    transition: "transform var(--dur-base) var(--ease-out), opacity var(--dur-base) var(--ease-out)",
    ...style
  };
  const onFill = !!fill && !isMedia;
  const inkOnFill = "#141310";
  const shell = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    minHeight: 200,
    padding: "var(--space-5)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid var(--border-subtle)",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    background: fill || "var(--surface-1)",
    cursor: "pointer",
    boxShadow: active ? "var(--shadow-lg)" : "none",
    borderColor: onFill ? "transparent" : active ? "var(--border-default)" : "var(--border-subtle)",
    transition: "box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)"
  };
  const labelStyle = {
    fontFamily: "var(--font-mono)",
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: isMedia ? "rgba(245,243,238,0.75)" : onFill ? "color-mix(in srgb, " + inkOnFill + " 65%, transparent)" : "var(--text-muted)"
  };
  const titleStyle = {
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: isMedia ? "clamp(1.75rem, 3vw, 2.5rem)" : "clamp(1.4rem, 2.2vw, 1.9rem)",
    lineHeight: 1.08,
    letterSpacing: "-0.01em",
    margin: 0,
    color: isMedia ? "#F5F3EE" : onFill ? inkOnFill : "var(--text-primary)",
    textWrap: "balance"
  };
  const blurbStyle = {
    margin: 0,
    fontSize: "0.9375rem",
    lineHeight: 1.5,
    color: isMedia ? "rgba(245,243,238,0.82)" : onFill ? "color-mix(in srgb, " + inkOnFill + " 80%, transparent)" : "var(--text-secondary)",
    maxWidth: "34ch"
  };
  const ctaStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    marginTop: "var(--space-2)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: isMedia ? "#F5F3EE" : onFill ? inkOnFill : active ? "var(--text-accent)" : "var(--text-primary)",
    transition: "color var(--dur-base)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapper,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, peek ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "50%",
      bottom: "calc(100% - 30px)",
      width: "max-content",
      maxWidth: "112%",
      pointerEvents: "none",
      zIndex: 2,
      transform: `translateX(-50%) translateY(${active ? "0px" : "22px"}) scale(${active ? 1 : 0.9})`,
      opacity: active ? 1 : 0,
      transition: "transform var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-out)"
    }
  }, peek) : null, /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    style: shell
  }, rest), isMedia ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: media ? "var(--bg-sunken)" : `radial-gradient(120% 120% at 70% 15%, color-mix(in srgb, ${accent} 30%, transparent), transparent 55%), var(--surface-2)`
    }
  }, mediaNode) : null, isMedia && !bare ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(to top, rgba(6,6,7,0.82) 0%, rgba(6,6,7,0.35) 40%, rgba(6,6,7,0.0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "var(--space-5)",
      left: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label))) : null, !bare ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, !isMedia ? /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label) : null, /*#__PURE__*/React.createElement("h3", {
    style: titleStyle
  }, title), blurb ? /*#__PURE__*/React.createElement("p", {
    style: blurbStyle
  }, blurb) : null, /*#__PURE__*/React.createElement("span", {
    style: ctaStyle
  }, cta, " ", /*#__PURE__*/React.createElement(Arrow, null))) : null));
}
Object.assign(__ds_scope, { FeatureTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/FeatureTile.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/FeatureDeck.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FeatureDeck — a coordinated row of FeatureTiles that behaves like a hand of
 * cards. Optionally fanned at rest; hovering a tile straightens and lifts it,
 * pushes its neighbours outward, dims them, and pops that tile's `peek` cluster
 * out of the top. Pass tiles as data; the deck owns the hover state.
 *
 * tiles: Array<{ key, variant, label, title, blurb?, cta?, media?, peek?, accent?, onClick? }>
 */
function FeatureDeck({
  tiles = [],
  fan = true,
  fanDeg = 2.4,
  shiftBy = 26,
  gap = "clamp(0.75rem, 1.5vw, 1.25rem)",
  tileStyle,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const n = tiles.length;
  const center = (n - 1) / 2;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "scp-deck",
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${n}, 1fr)`,
      alignItems: "stretch",
      gap,
      paddingTop: "clamp(2.5rem, 6vw, 5rem)",
      // headroom for the peek pop-out
      ...style
    }
  }, rest), tiles.map((t, i) => {
    const rotate = fan ? (i - center) * fanDeg : 0;
    const active = hover === i;
    const dim = hover !== null && hover !== i;
    const shift = hover === null ? 0 : i < hover ? -shiftBy : i > hover ? shiftBy : 0;
    return /*#__PURE__*/React.createElement(__ds_scope.FeatureTile, {
      key: t.key || i,
      variant: t.variant || "text",
      label: t.label,
      title: t.title,
      blurb: t.blurb,
      cta: t.cta,
      bare: t.bare,
      media: t.media,
      peek: t.peek,
      accent: t.accent,
      fill: t.fill,
      onClick: t.onClick,
      deck: {
        active,
        dim,
        shift,
        rotate
      },
      onHoverChange: h => setHover(h ? i : cur => cur === i ? null : cur),
      style: {
        aspectRatio: "1 / 1",
        minHeight: 0,
        ...tileStyle,
        ...t.style
      }
    });
  }));
}
Object.assign(__ds_scope, { FeatureDeck });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/FeatureDeck.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/ProjectListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ProjectListRow — index-style row for the full work list. A big serif title
 * that reveals the accent on hover, with company / role / year metadata and
 * a trailing arrow. Use inside a list separated by hairline Dividers.
 */
function ProjectListRow({
  index,
  company,
  title,
  role,
  year,
  href = "#",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto auto",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "var(--space-5) var(--space-2)",
      textDecoration: "none",
      color: "inherit",
      borderBottom: "1px solid var(--border-subtle)",
      transition: "padding-left var(--dur-base) var(--ease-out)",
      paddingLeft: hover ? "var(--space-4)" : "var(--space-2)",
      ...style
    }
  }, rest), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      color: "var(--text-muted)",
      width: "2.5ch"
    }
  }, index) : /*#__PURE__*/React.createElement("span", {
    style: {
      width: "2.5ch"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)",
      minWidth: 0,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.01em",
      color: hover ? "var(--text-accent)" : "var(--text-primary)",
      transition: "color var(--dur-base) var(--ease-out)"
    }
  }, title)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.68rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, company), role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.78rem",
      color: "var(--text-muted)"
    }
  }, role) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, year ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      color: "var(--text-muted)"
    }
  }, year) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: hover ? "var(--text-accent)" : "var(--text-muted)",
      transform: hover ? "translateX(3px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out), color var(--dur-base)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })))));
}
Object.assign(__ds_scope, { ProjectListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/ProjectListRow.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * PullQuote — large serif editorial quote for case-study prose. Optional
 * attribution. Accent hanging mark on the left.
 */
function PullQuote({
  children,
  cite,
  role,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: "var(--space-7) 0",
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "-0.1em",
      top: "-0.4em",
      fontFamily: "var(--font-serif)",
      fontSize: "3.5rem",
      lineHeight: 1,
      color: "var(--text-accent)",
      opacity: 0.9
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      paddingLeft: "var(--space-6)",
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: "clamp(1.5rem, 3vw, 2.125rem)",
      lineHeight: 1.28,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)",
      textWrap: "balance"
    }
  }, children), cite ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: "var(--space-4)",
      paddingLeft: "var(--space-6)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.72rem",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, cite, role ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, ", ", role) : null) : null);
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatBlock — a single outcome metric. Serif number, mono label, optional
 * caption. Group several in a row divided by vertical rules for a results band.
 */
function StatBlock({
  value,
  label,
  caption,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(2.5rem, 5vw, 4rem)",
      lineHeight: 0.95,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.7rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, label), caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "var(--text-muted)",
      maxWidth: "28ch"
    }
  }, caption) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutScreen.jsx
try { (() => {
/* global React */
const {
  SectionLabel,
  Tag,
  Button,
  Divider
} = window.SeanChoePortfolioDesignSystem_9019b6;
function AboutScreen({
  go
}) {
  const a = {
    wrap: {
      padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem)",
      maxWidth: 1100,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1fr)",
      gap: "clamp(2rem, 6vw, 5rem)",
      alignItems: "start"
    },
    left: {
      minWidth: 0
    },
    title: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(2.25rem, 5vw, 4rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      margin: "var(--space-5) 0 var(--space-6)",
      textWrap: "balance"
    },
    lead: {
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
      lineHeight: 1.5,
      color: "var(--text-primary)",
      margin: "0 0 var(--space-5)"
    },
    para: {
      fontSize: "1.0625rem",
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      margin: "0 0 var(--space-5)",
      maxWidth: "58ch"
    },
    portrait: {
      aspectRatio: "4 / 5",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border-subtle)",
      background: "radial-gradient(120% 100% at 100% 0%, color-mix(in srgb, var(--accent) 24%, transparent), transparent 60%), var(--surface-1)",
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--space-5)",
      marginBottom: "var(--space-6)"
    },
    portraitName: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: "2rem",
      color: "color-mix(in srgb, var(--text-primary) 40%, transparent)"
    },
    side: {
      position: "sticky",
      top: 90
    },
    block: {
      marginBottom: "var(--space-6)"
    },
    k: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 10
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      padding: "8px 0",
      borderBottom: "1px solid var(--border-subtle)",
      fontSize: 14
    },
    rowC: {
      color: "var(--text-primary)"
    },
    rowY: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-muted)",
      fontSize: 12
    },
    tags: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap"
    }
  };
  const timeline = [["Cedar", "2023 to now"], ["Chewy", "2022 to 2023"], ["WeWork", "2021 to 2022"], ["Coach", "2020 to 2021"], ["The Met", "2019 to 2020"]];
  return /*#__PURE__*/React.createElement("div", {
    style: a.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: a.left
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "About"), /*#__PURE__*/React.createElement("h1", {
    style: a.title
  }, "I design for the moment a person decides to trust a product with something that matters."), /*#__PURE__*/React.createElement("p", {
    style: a.lead
  }, "Usually that something is money. Sometimes it is a pet's medication, a workspace, or a museum's collection."), /*#__PURE__*/React.createElement("p", {
    style: a.para
  }, "I am a Staff Product Designer with ten years across payments, e-commerce, workspace, and cultural institutions. I like the unglamorous parts of a product: the checkout, the bill, the approval step, the empty state. They are where trust is won or lost."), /*#__PURE__*/React.createElement("p", {
    style: a.para
  }, "Lately my strongest work has been AI-native: designing assistants that explain a charge, a claim, or a plan in plain language, without pretending the hard parts are simple. I care about craft, clear writing, and shipping."), /*#__PURE__*/React.createElement("p", {
    style: a.para
  }, "Outside of screens I make things with my hands, which is where the interest in materials and payments both started."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    onClick: () => go({
      name: "work"
    })
  }, "See the work"))), /*#__PURE__*/React.createElement("aside", {
    style: a.side
  }, /*#__PURE__*/React.createElement("div", {
    style: a.portrait
  }, /*#__PURE__*/React.createElement("span", {
    style: a.portraitName
  }, "SC")), /*#__PURE__*/React.createElement("div", {
    style: a.block
  }, /*#__PURE__*/React.createElement("div", {
    style: a.k
  }, "Experience"), timeline.map(([c, y]) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: a.row
  }, /*#__PURE__*/React.createElement("span", {
    style: a.rowC
  }, c), /*#__PURE__*/React.createElement("span", {
    style: a.rowY
  }, y)))), /*#__PURE__*/React.createElement("div", {
    style: a.block
  }, /*#__PURE__*/React.createElement("div", {
    style: a.k
  }, "Focus"), /*#__PURE__*/React.createElement("div", {
    style: a.tags
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, "Payments"), /*#__PURE__*/React.createElement(Tag, null, "AI-native"), /*#__PURE__*/React.createElement(Tag, null, "Checkout"), /*#__PURE__*/React.createElement(Tag, null, "Design systems")))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
/* global React, Nav, Footer, HomeScreen, WorkIndexScreen, CaseStudyScreen, AboutScreen, FunScreen, AskAI, useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakToggle, TweakColor */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bentoLayout": "Row of 4",
  "fanTiles": true,
  "accent": "#E0653C"
} /*EDITMODE-END*/;
function App() {
  const [route, setRoute] = React.useState({
    name: "home"
  });
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const scroller = React.useRef(null);

  // Apply accent tweak to the live token set.
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.accent) {
      root.style.setProperty("--accent", t.accent);
      root.style.setProperty("--accent-hover", t.accent);
      root.style.setProperty("--accent-press", t.accent);
      root.style.setProperty("--text-accent", t.accent);
    }
  }, [t.accent]);
  const go = React.useCallback(r => {
    setRoute(r);
    const el = scroller.current || document.querySelector("#app-scroll");
    if (el) el.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, []);
  let screen;
  if (route.name === "home") screen = /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    t: t
  });else if (route.name === "work") screen = /*#__PURE__*/React.createElement(WorkIndexScreen, {
    go: go
  });else if (route.name === "case") screen = /*#__PURE__*/React.createElement(CaseStudyScreen, {
    slug: route.slug,
    go: go
  });else if (route.name === "about") screen = /*#__PURE__*/React.createElement(AboutScreen, {
    go: go
  });else if (route.name === "fun") screen = /*#__PURE__*/React.createElement(FunScreen, {
    go: go
  });else screen = /*#__PURE__*/React.createElement(HomeScreen, {
    go: go,
    t: t
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--bg-base)"
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    route: route,
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    key: route.name + (route.slug || ""),
    style: {
      paddingTop: 88,
      animation: "scp-fade var(--dur-reveal) var(--ease-out)"
    }
  }, screen), /*#__PURE__*/React.createElement(Footer, {
    go: go
  }), /*#__PURE__*/React.createElement(AskAI, null), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Hero tiles"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Layout",
    value: t.bentoLayout,
    options: ["Row of 4", "Bento", "Stacked"],
    onChange: v => setTweak("bentoLayout", v)
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Fan & hover deck",
    value: t.fanTiles,
    onChange: v => setTweak("fanTiles", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Accent",
    value: t.accent,
    options: ["#E0653C", "#4C7FB8", "#3E8E7E", "#B5893C"],
    onChange: v => setTweak("accent", v)
  })));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AskAI.jsx
try { (() => {
/* global React */
/* SeanAI — a floating assistant that answers questions about Sean, grounded in
   window.SCP_DATA and powered by window.claude.complete. */

function buildKnowledge() {
  const D = window.SCP_DATA || {};
  const d = D.designer || {};
  const work = (D.work || []).map(p => {
    const stats = (p.stats || []).map(s => `${s.value} ${s.label} (${s.caption})`).join("; ");
    return [`### ${p.company} — ${p.title} (${p.year}, ${p.role})`, `Tags: ${(p.tags || []).join(", ")}. Discipline: ${p.discipline}.`, `Summary: ${p.summary}`, p.overview ? `Overview: ${p.overview}` : "", p.problem ? `Problem: ${p.problem}` : "", p.approach ? `Approach: ${p.approach}` : "", stats ? `Results: ${stats}` : ""].filter(Boolean).join("\n");
  }).join("\n\n");
  const fun = (D.fun || []).map(f => `- ${f.title} (${f.medium}): ${f.note}`).join("\n");
  return [`Name: ${d.name}. Role: ${d.role}, based in ${d.location}.`, `Positioning: ${d.lead}`, ``, `## Case studies / product work`, work, ``, `## Craft work (side / non-product)`, fun].join("\n");
}
const SYSTEM_PROMPT = () => `You are SeanAI, the friendly assistant embedded on Sean Choe's portfolio site. You answer visitors' questions about Sean — his work, background, design approach, and craft. Speak about Sean in the third person, warmly and concisely (2-4 sentences unless more is clearly wanted). Ground every answer in the facts below. If something isn't covered, say you don't have that detail and suggest reaching out via the "Say hello" contact. Never invent employers, metrics, or dates. Sound like a sharp, human portfolio host — not a corporate bot. No emoji.

KNOWLEDGE BASE
${buildKnowledge()}`;
const SUGGESTIONS = ["What's Sean's design focus?", "I'd love to hire Sean", "Which case study should I start with?", "Tell me about his craft work"];
const STORE_KEY = "seanai.chat.v1";
function Avatar({
  size = 40
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      flexShrink: 0,
      background: "linear-gradient(150deg, color-mix(in srgb, var(--accent) 90%, #000), color-mix(in srgb, var(--accent) 55%, #000))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-serif)",
      fontSize: size * 0.42,
      color: "#F5F3EE",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)",
      letterSpacing: "-0.02em"
    }
  }, "SC");
}
function TypingDots() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      padding: "4px 2px"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--text-muted)",
      animation: `seanai-bounce 1s ${i * 0.15}s infinite ease-in-out`
    }
  })));
}
function AskAI() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    } catch (e) {
      return [];
    }
  });
  const [input, setInput] = React.useState("");
  const [busy, setBusy] = React.useState(false);
  const scrollRef = React.useRef(null);
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(messages));
    } catch (e) {}
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy]);
  React.useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);
  const send = async text => {
    const q = (text ?? input).trim();
    if (!q || busy) return;
    setInput("");
    const next = [...messages, {
      role: "user",
      content: q
    }];
    setMessages(next);
    setBusy(true);
    try {
      const reply = await window.claude.complete({
        system: SYSTEM_PROMPT(),
        max_tokens: 600,
        messages: next.map(m => ({
          role: m.role,
          content: m.content
        }))
      });
      setMessages(cur => [...cur, {
        role: "assistant",
        content: (reply || "").trim() || "Sorry, I didn't catch that — try asking another way."
      }]);
    } catch (e) {
      setMessages(cur => [...cur, {
        role: "assistant",
        content: "I'm having trouble responding right now. For anything urgent, reach Sean via the “Say hello” link.",
        error: true
      }]);
    } finally {
      setBusy(false);
    }
  };
  const reset = () => setMessages([]);
  const s = styles;
  const empty = messages.length === 0;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(v => !v),
    "aria-label": open ? "Close SeanAI" : "Ask SeanAI",
    style: {
      ...s.launcher,
      transform: open ? "scale(0.9)" : "scale(1)"
    },
    onMouseEnter: e => e.currentTarget.style.boxShadow = "0 16px 40px -12px rgba(0,0,0,0.6)",
    onMouseLeave: e => e.currentTarget.style.boxShadow = s.launcher.boxShadow
  }, open ? /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#F5F3EE",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  })) : /*#__PURE__*/React.createElement(Avatar, {
    size: 56
  })), open && /*#__PURE__*/React.createElement("div", {
    style: s.panel,
    role: "dialog",
    "aria-label": "SeanAI chat"
  }, /*#__PURE__*/React.createElement("div", {
    style: s.header
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 34
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: s.title
  }, "SeanAI"), /*#__PURE__*/React.createElement("div", {
    style: s.subtitle
  }, "Ask anything about Sean"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, !empty && /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    "aria-label": "Clear conversation",
    style: s.iconBtn,
    title: "New chat"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 1 0 3-6.7L3 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 3v5h5"
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(false),
    "aria-label": "Close",
    style: s.iconBtn
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: scrollRef,
    style: s.scroll
  }, empty ? /*#__PURE__*/React.createElement("div", {
    style: s.intro
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: 52
  }), /*#__PURE__*/React.createElement("h3", {
    style: s.introTitle
  }, "What would you like to know about Sean?"), /*#__PURE__*/React.createElement("div", {
    style: s.chips
  }, SUGGESTIONS.map(q => /*#__PURE__*/React.createElement("button", {
    key: q,
    onClick: () => send(q),
    style: s.chip,
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--surface-hover)";
      e.currentTarget.style.color = "var(--text-primary)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--surface-1)";
      e.currentTarget.style.color = "var(--text-secondary)";
    }
  }, q)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, messages.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: m.role === "user" ? "flex-end" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: m.role === "user" ? s.userBubble : {
      ...s.aiBubble,
      ...(m.error ? {
        color: "var(--text-secondary)"
      } : {})
    }
  }, m.content))), busy && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: s.aiBubble
  }, /*#__PURE__*/React.createElement(TypingDots, null))))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      send();
    },
    style: s.inputRow
  }, /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: input,
    onChange: e => setInput(e.target.value),
    placeholder: "Ask anything about Sean\u2026",
    style: s.input
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Send",
    disabled: busy || !input.trim(),
    style: {
      ...s.send,
      opacity: busy || !input.trim() ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#F5F3EE",
    strokeWidth: "1.9",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
  }))))));
}
const styles = {
  launcher: {
    position: "fixed",
    right: "clamp(1rem, 3vw, 2rem)",
    bottom: "clamp(1rem, 3vw, 2rem)",
    width: 60,
    height: 60,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    zIndex: 1200,
    background: "var(--surface-1)",
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 12px 32px -12px rgba(0,0,0,0.5)",
    transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)"
  },
  panel: {
    position: "fixed",
    right: "clamp(1rem, 3vw, 2rem)",
    bottom: "calc(clamp(1rem, 3vw, 2rem) + 74px)",
    width: "min(400px, calc(100vw - 2rem))",
    height: "min(600px, calc(100vh - 140px))",
    display: "flex",
    flexDirection: "column",
    zIndex: 1200,
    background: "color-mix(in srgb, var(--surface-1) 88%, transparent)",
    backdropFilter: "blur(24px) saturate(180%)",
    WebkitBackdropFilter: "blur(24px) saturate(180%)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid color-mix(in srgb, var(--text-primary) 12%, transparent)",
    boxShadow: "0 30px 70px -24px rgba(0,0,0,0.6), inset 0 1px 0 color-mix(in srgb, #fff 20%, transparent)",
    overflow: "hidden",
    animation: "seanai-rise var(--dur-base) var(--ease-out)"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 14px 14px 16px",
    borderBottom: "1px solid var(--border-subtle)",
    flexShrink: 0
  },
  title: {
    fontFamily: "var(--font-serif)",
    fontSize: 17,
    color: "var(--text-primary)",
    lineHeight: 1.1
  },
  subtitle: {
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.04em",
    color: "var(--text-muted)",
    marginTop: 2
  },
  iconBtn: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    background: "transparent",
    color: "var(--text-muted)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background var(--dur-base), color var(--dur-base)"
  },
  scroll: {
    flex: 1,
    overflowY: "auto",
    padding: "18px 16px"
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 16,
    paddingTop: 8
  },
  introTitle: {
    fontFamily: "var(--font-serif)",
    fontWeight: 400,
    fontSize: "1.5rem",
    lineHeight: 1.15,
    letterSpacing: "-0.01em",
    color: "var(--text-primary)",
    margin: 0,
    textWrap: "balance"
  },
  chips: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    width: "100%"
  },
  chip: {
    textAlign: "left",
    width: "100%",
    padding: "13px 16px",
    borderRadius: 14,
    border: "1px solid var(--border-default)",
    background: "var(--surface-1)",
    cursor: "pointer",
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    color: "var(--text-secondary)",
    transition: "background var(--dur-base), color var(--dur-base)"
  },
  userBubble: {
    maxWidth: "82%",
    padding: "10px 14px",
    borderRadius: "16px 16px 4px 16px",
    background: "var(--accent)",
    color: "#F5F3EE",
    fontSize: 14,
    lineHeight: 1.5,
    fontFamily: "var(--font-sans)"
  },
  aiBubble: {
    maxWidth: "85%",
    padding: "10px 14px",
    borderRadius: "16px 16px 16px 4px",
    background: "var(--surface-2)",
    border: "1px solid var(--border-subtle)",
    color: "var(--text-primary)",
    fontSize: 14,
    lineHeight: 1.55,
    fontFamily: "var(--font-sans)",
    whiteSpace: "pre-wrap"
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 12px 14px",
    borderTop: "1px solid var(--border-subtle)",
    flexShrink: 0
  },
  input: {
    flex: 1,
    border: "1px solid var(--border-default)",
    background: "var(--bg-base)",
    borderRadius: 999,
    padding: "11px 16px",
    fontSize: 14,
    fontFamily: "var(--font-sans)",
    color: "var(--text-primary)",
    outline: "none"
  },
  send: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    flexShrink: 0,
    background: "var(--accent)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity var(--dur-base)"
  }
};
Object.assign(window, {
  AskAI
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AskAI.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudyScreen.jsx
try { (() => {
/* global React */
const {
  SectionLabel,
  StatBlock,
  PullQuote,
  Divider,
  Button,
  Tag
} = window.SeanChoePortfolioDesignSystem_9019b6;
function CaseStudyScreen({
  slug,
  go
}) {
  const D = window.SCP_DATA;
  const idx = D.work.findIndex(p => p.slug === slug);
  const p = D.work[idx] || D.work[0];
  const next = D.work[(idx + 1) % D.work.length];
  const c = {
    hero: {
      padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) 0",
      maxWidth: 1100,
      margin: "0 auto"
    },
    back: {
      marginBottom: "var(--space-6)"
    },
    metaRow: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap",
      marginBottom: "var(--space-5)"
    },
    title: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
      lineHeight: 1.02,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      margin: 0,
      maxWidth: "16ch",
      textWrap: "balance"
    },
    lead: {
      marginTop: "var(--space-5)",
      maxWidth: "52ch",
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
      lineHeight: 1.4,
      color: "var(--text-secondary)"
    },
    facts: {
      display: "flex",
      gap: "var(--space-7)",
      flexWrap: "wrap",
      marginTop: "var(--space-7)",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--border-subtle)"
    },
    fact: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    },
    factK: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    },
    factV: {
      fontSize: 14,
      color: "var(--text-primary)"
    },
    cover: {
      maxWidth: 1240,
      margin: "clamp(2.5rem, 6vw, 4.5rem) auto 0",
      height: "clamp(280px, 46vw, 560px)",
      borderRadius: "var(--radius-xl)",
      border: "1px solid var(--border-subtle)",
      background: `radial-gradient(120% 120% at 80% 10%, color-mix(in srgb, ${p.accent} 38%, transparent), transparent 55%), var(--surface-1)`,
      display: "flex",
      alignItems: "flex-end",
      padding: "clamp(1.5rem, 4vw, 3rem)"
    },
    coverName: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(4rem, 14vw, 11rem)",
      lineHeight: 0.8,
      color: "color-mix(in srgb, var(--text-primary) 14%, transparent)"
    },
    body: {
      maxWidth: 680,
      margin: "0 auto",
      padding: "clamp(3rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem) 0"
    },
    block: {
      marginBottom: "var(--space-8)"
    },
    h3: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(1.5rem, 3vw, 2rem)",
      lineHeight: 1.15,
      color: "var(--text-primary)",
      margin: "var(--space-4) 0 var(--space-4)"
    },
    para: {
      fontSize: "1.0625rem",
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      margin: 0
    },
    stats: {
      maxWidth: 1100,
      margin: "clamp(2rem, 5vw, 3.5rem) auto 0",
      padding: "0 clamp(1.25rem, 5vw, 4rem)",
      display: "flex",
      gap: "clamp(1.5rem, 4vw, 3rem)",
      flexWrap: "wrap",
      alignItems: "stretch"
    },
    nextWrap: {
      maxWidth: 1100,
      margin: "var(--space-10) auto 0",
      padding: "var(--space-8) clamp(1.25rem, 5vw, 4rem)",
      borderTop: "1px solid var(--border-subtle)"
    },
    nextRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "var(--space-5)",
      cursor: "pointer",
      flexWrap: "wrap"
    },
    nextTitle: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(1.75rem, 4vw, 3rem)",
      letterSpacing: "-0.01em",
      color: "var(--text-primary)",
      margin: 0
    }
  };
  const Back = () => /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5M11 18l-6-6 6-6"
  }));
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", {
    style: c.hero
  }, /*#__PURE__*/React.createElement("div", {
    style: c.back
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Back, null),
    onClick: () => go({
      name: "work"
    })
  }, "All work")), /*#__PURE__*/React.createElement("div", {
    style: c.metaRow
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "solid"
  }, p.company), p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), /*#__PURE__*/React.createElement("h1", {
    style: c.title
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: c.lead
  }, p.summary), /*#__PURE__*/React.createElement("div", {
    style: c.facts
  }, /*#__PURE__*/React.createElement("div", {
    style: c.fact
  }, /*#__PURE__*/React.createElement("span", {
    style: c.factK
  }, "Role"), /*#__PURE__*/React.createElement("span", {
    style: c.factV
  }, p.role)), /*#__PURE__*/React.createElement("div", {
    style: c.fact
  }, /*#__PURE__*/React.createElement("span", {
    style: c.factK
  }, "Year"), /*#__PURE__*/React.createElement("span", {
    style: c.factV
  }, p.year)), /*#__PURE__*/React.createElement("div", {
    style: c.fact
  }, /*#__PURE__*/React.createElement("span", {
    style: c.factK
  }, "Discipline"), /*#__PURE__*/React.createElement("span", {
    style: c.factV
  }, p.discipline)))), /*#__PURE__*/React.createElement("div", {
    style: c.cover
  }, /*#__PURE__*/React.createElement("span", {
    style: c.coverName
  }, p.company)), /*#__PURE__*/React.createElement("div", {
    style: c.body
  }, /*#__PURE__*/React.createElement("section", {
    style: c.block
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01"
  }, "Overview"), /*#__PURE__*/React.createElement("p", {
    style: c.para
  }, p.overview)), /*#__PURE__*/React.createElement("section", {
    style: c.block
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "02"
  }, "The problem"), /*#__PURE__*/React.createElement("h3", {
    style: c.h3
  }, p.problem)), /*#__PURE__*/React.createElement(PullQuote, {
    cite: p.quote.cite,
    role: p.quote.role
  }, p.quote.text), /*#__PURE__*/React.createElement("section", {
    style: c.block
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "03"
  }, "The approach"), /*#__PURE__*/React.createElement("p", {
    style: c.para
  }, p.approach))), /*#__PURE__*/React.createElement("div", {
    style: c.stats
  }, p.stats.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.label
  }, i > 0 ? /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical"
  }) : null, /*#__PURE__*/React.createElement(StatBlock, {
    value: s.value,
    label: s.label,
    caption: s.caption
  })))), /*#__PURE__*/React.createElement("div", {
    style: c.nextWrap
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Next"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: c.nextRow,
    onClick: () => go({
      name: "case",
      slug: next.slug
    })
  }, /*#__PURE__*/React.createElement("h2", {
    style: c.nextTitle
  }, next.title), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: e => {
      e.stopPropagation();
      go({
        name: "case",
        slug: next.slug
      });
    }
  }, next.company))));
}
Object.assign(window, {
  CaseStudyScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudyScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Chrome.jsx
try { (() => {
/* global React */
const {
  ThemeToggle,
  IconButton
} = window.SeanChoePortfolioDesignSystem_9019b6;
function Nav({
  route,
  go
}) {
  const items = [["home", "Home"], ["work", "Work"], ["fun", "Fun"], ["about", "About"]];
  const navStyles = {
    bar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px clamp(1.25rem, 5vw, 4rem)",
      pointerEvents: "none"
    },
    brand: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      cursor: "pointer",
      fontFamily: "var(--font-serif)",
      fontSize: 22,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)",
      background: "none",
      border: "none",
      padding: 0
    },
    dot: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "var(--accent)",
      transform: "translateY(-3px)"
    },
    wordmark: {
      display: "inline-block",
      width: 104,
      height: 24,
      background: "var(--text-primary)",
      WebkitMaskImage: "url(../../assets/wordmark.svg)",
      maskImage: "url(../../assets/wordmark.svg)",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "left center",
      maskPosition: "left center"
    },
    links: {
      pointerEvents: "auto",
      position: "absolute",
      left: "50%",
      top: 14,
      transform: "translateX(-50%)",
      display: "flex",
      alignItems: "center",
      gap: 4,
      padding: 6,
      background: "color-mix(in srgb, var(--surface-1) 55%, transparent)",
      backdropFilter: "blur(18px) saturate(180%)",
      WebkitBackdropFilter: "blur(18px) saturate(180%)",
      borderRadius: 999,
      border: "1px solid color-mix(in srgb, var(--text-primary) 14%, transparent)",
      boxShadow: "0 10px 34px -12px rgba(0,0,0,0.45), inset 0 1px 0 color-mix(in srgb, #fff 35%, transparent), inset 0 -1px 1px color-mix(in srgb, #000 18%, transparent)"
    },
    link: active => ({
      background: active ? "var(--accent)" : "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: active ? "var(--accent-contrast, #fff)" : "var(--text-muted)",
      padding: "9px 18px",
      borderRadius: 999,
      whiteSpace: "nowrap",
      transition: "color 120ms, background 120ms"
    })
  };
  const activeSection = route.name === "case" ? "work" : route.name === "work" ? "work" : route.name;
  const activeIndex = Math.max(0, items.findIndex(([id]) => id === activeSection));
  const listRef = React.useRef(null);
  const btnRefs = React.useRef([]);
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [pill, setPill] = React.useState(null);
  const targetIndex = hoverIndex == null ? activeIndex : hoverIndex;
  React.useLayoutEffect(() => {
    const btn = btnRefs.current[targetIndex];
    const list = listRef.current;
    if (!btn || !list) return;
    setPill({
      left: btn.offsetLeft,
      top: btn.offsetTop,
      width: btn.offsetWidth,
      height: btn.offsetHeight
    });
  }, [targetIndex, route.name]);
  return /*#__PURE__*/React.createElement("nav", {
    style: navStyles.bar
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...navStyles.brand,
      pointerEvents: "auto"
    },
    onClick: () => go({
      name: "home"
    }),
    "aria-label": "Sean Choe, home"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 20
  })), /*#__PURE__*/React.createElement("div", {
    ref: listRef,
    style: {
      ...navStyles.links,
      position: "absolute"
    },
    onMouseLeave: () => setHoverIndex(null)
  }, pill && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: pill.left,
      top: pill.top,
      width: pill.width,
      height: pill.height,
      borderRadius: 999,
      background: hoverIndex == null ? "var(--accent)" : "color-mix(in srgb, var(--text-primary) 12%, transparent)",
      boxShadow: hoverIndex == null ? "0 2px 10px -2px color-mix(in srgb, var(--accent) 60%, transparent), inset 0 1px 0 color-mix(in srgb, #fff 35%, transparent)" : "inset 0 1px 0 color-mix(in srgb, #fff 30%, transparent)",
      transition: "left 420ms var(--ease-out, cubic-bezier(0.22,1,0.36,1)), top 420ms, width 420ms, background 260ms",
      zIndex: 0
    }
  }), items.map(([id, label], i) => {
    const isActive = i === activeIndex;
    const isHovered = i === hoverIndex;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      ref: el => btnRefs.current[i] = el,
      style: {
        ...navStyles.link(false),
        position: "relative",
        zIndex: 1,
        color: isActive && hoverIndex == null ? "var(--accent-contrast, #fff)" : isHovered ? "var(--text-accent)" : isActive ? "var(--text-primary)" : "var(--text-muted)"
      },
      onMouseEnter: () => setHoverIndex(i),
      onClick: () => go({
        name: id
      })
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: "auto"
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, {
    size: 36
  })));
}
function Footer({
  go
}) {
  const f = {
    wrap: {
      borderTop: "1px solid var(--border-subtle)",
      marginTop: "var(--space-11)",
      padding: "var(--space-8) clamp(1.25rem, 5vw, 4rem) var(--space-7)",
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-6)",
      justifyContent: "space-between",
      alignItems: "flex-end"
    },
    big: {
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(2rem, 6vw, 3.5rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)",
      margin: 0,
      maxWidth: "14ch"
    },
    meta: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    },
    a: {
      color: "var(--text-secondary)",
      textDecoration: "none",
      borderBottom: "1px solid var(--border-default)",
      paddingBottom: 1,
      cursor: "pointer"
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: f.wrap
  }, /*#__PURE__*/React.createElement("h2", {
    style: f.big
  }, "Let's make something worth paying for."), /*#__PURE__*/React.createElement("div", {
    style: f.meta
  }, /*#__PURE__*/React.createElement("a", {
    style: f.a,
    href: "mailto:hello@seanchoe.design"
  }, "hello@seanchoe.design"), /*#__PURE__*/React.createElement("a", {
    style: f.a,
    onClick: () => go({
      name: "work"
    })
  }, "All work"), /*#__PURE__*/React.createElement("span", null, "New York")));
}
Object.assign(window, {
  Nav,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/FunScreen.jsx
try { (() => {
/* global React */
const {
  SectionLabel
} = window.SeanChoePortfolioDesignSystem_9019b6;
function FunScreen() {
  const D = window.SCP_DATA;
  const f = {
    wrap: {
      padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem)",
      maxWidth: 1100,
      margin: "0 auto"
    },
    head: {
      maxWidth: "52ch",
      marginBottom: "var(--space-8)"
    },
    title: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(2.25rem, 5vw, 4rem)",
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      margin: "var(--space-5) 0 var(--space-4)"
    },
    sub: {
      fontSize: "1.0625rem",
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      margin: 0
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "clamp(1.25rem, 3vw, 2rem)"
    },
    card: {
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--surface-1)"
    },
    swatch: accent => ({
      height: 160,
      background: `radial-gradient(120% 120% at 30% 20%, color-mix(in srgb, ${accent} 40%, transparent), transparent 60%), var(--surface-2)`
    }),
    body: {
      padding: "var(--space-5)"
    },
    ct: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "1.5rem",
      color: "var(--text-primary)",
      margin: "0 0 4px"
    },
    cm: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-accent)",
      marginBottom: 10
    },
    cn: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      margin: 0
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: f.wrap
  }, /*#__PURE__*/React.createElement("header", {
    style: f.head
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Other work"), /*#__PURE__*/React.createElement("h1", {
    style: f.title
  }, "Things I make with my hands."), /*#__PURE__*/React.createElement("p", {
    style: f.sub
  }, "Separate from the product work. Leather, silver, and objects. Kept here on purpose, because the discipline is different and the stakes are lower.")), /*#__PURE__*/React.createElement("div", {
    style: f.grid
  }, D.fun.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.title,
    style: f.card
  }, /*#__PURE__*/React.createElement("div", {
    style: f.swatch(item.accent)
  }), /*#__PURE__*/React.createElement("div", {
    style: f.body
  }, /*#__PURE__*/React.createElement("div", {
    style: f.cm
  }, item.medium), /*#__PURE__*/React.createElement("h3", {
    style: f.ct
  }, item.title), /*#__PURE__*/React.createElement("p", {
    style: f.cn
  }, item.note))))));
}
Object.assign(window, {
  FunScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/FunScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/HomeScreen.jsx
try { (() => {
/* global React */
const {
  SectionLabel,
  CaseStudyCard,
  Button,
  FeatureTile,
  FeatureDeck
} = window.SeanChoePortfolioDesignSystem_9019b6;

/* The video tile. Plays muted on loop as an ambient preview; on hover (active)
   it pauses and shows a play button. Clicking the tile opens the lightbox. */
function VideoReel({
  active
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    // React sets `muted` as an attribute, which the browser ignores — force the
    // property so the ambient reel is never audible.
    v.muted = true;
    v.defaultMuted = true;
    v.volume = 0;
    if (active) {
      v.pause();
    } else {
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
  }, [active]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: "../../assets/video-tile.mp4",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      opacity: active ? 1 : 0,
      transition: "opacity var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 62,
      height: 62,
      borderRadius: "50%",
      background: "rgba(245,243,238,0.94)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 10px 34px rgba(0,0,0,0.45)",
      transform: active ? "scale(1)" : "scale(0.8)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "#17100C"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  })))));
}

/* Full-size video overlay. Opens on click, plays with sound at the clip's
   native (vertical) aspect. Close via button, backdrop click, or Escape. */
function VideoLightbox({
  open,
  onClose
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (open && v) {
      v.currentTime = 0;
      v.muted = false;
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
    }
    if (!open && v) {
      v.pause();
    }
    const onKey = e => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(20,18,16,0.62)",
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "clamp(1rem, 4vw, 3rem)",
      animation: "scp-fade var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close video",
    style: {
      position: "absolute",
      top: 20,
      right: 20,
      width: 44,
      height: 44,
      borderRadius: "50%",
      border: "1px solid var(--border-strong)",
      background: "rgba(0,0,0,0.4)",
      color: "#F5F3EE",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))), /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: "../../assets/video-tile.mp4",
    controls: true,
    autoPlay: true,
    playsInline: true,
    onClick: e => e.stopPropagation(),
    style: {
      height: "min(90vh, 920px)",
      width: "auto",
      maxWidth: "95vw",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      background: "#000"
    }
  }));
}

/* ---- Peek clusters that pop out of a tile's top on hover ---- */

// Handwritten annotation that points at the video tile on hover.
function TiredOfReadingPeek() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 6,
      justifyContent: "center",
      transform: "rotate(-3deg)",
      marginBottom: 54
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Caveat', cursive",
      fontWeight: 700,
      fontSize: "1.55rem",
      lineHeight: 1.1,
      color: "var(--text-accent)",
      whiteSpace: "nowrap",
      textAlign: "center"
    }
  }, "In case you are", /*#__PURE__*/React.createElement("br", null), "tired of reading"), /*#__PURE__*/React.createElement("svg", {
    width: "58",
    height: "52",
    viewBox: "0 0 58 52",
    fill: "none",
    style: {
      flexShrink: 0,
      marginBottom: -14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 6C22 4 44 8 50 26c1.6 4.8 1.4 10 0.4 16",
    stroke: "var(--text-accent)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42 39c3 3 6 6 8.6 8.4M50.6 47.4c1.4-3.4 2.6-6.6 3.4-10",
    stroke: "var(--text-accent)",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  })));
}

// Text chips that pop up.
function ChipsPeek({
  items
}) {
  const rots = [-6, 4, -3, 6];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: 240
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "0.66rem",
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-primary)",
      background: "var(--surface-2)",
      border: "1px solid var(--border-default)",
      borderRadius: 999,
      padding: "0.4rem 0.7rem",
      boxShadow: "0 12px 26px -14px rgba(0,0,0,0.5)",
      transform: `rotate(${rots[i % rots.length]}deg)`,
      whiteSpace: "nowrap"
    }
  }, it)));
}

// Photo cluster — swap each tile for a real <img>.
function PhotosPeek({
  accents = ["#B5893C", "#4C7FB8", "#3E8E7E"]
}) {
  const photo = (rot, dx, accent) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: 78,
      height: 92,
      borderRadius: 10,
      border: "3px solid var(--surface-2)",
      background: `linear-gradient(150deg, color-mix(in srgb, ${accent} 55%, var(--surface-2)), color-mix(in srgb, ${accent} 22%, var(--surface-2)))`,
      boxShadow: "0 16px 30px -14px rgba(0,0,0,0.55)",
      transform: `rotate(${rot}deg) translateX(${dx}px)`,
      flexShrink: 0
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }
  }, photo(-10, 16, accents[0]), photo(2, 0, accents[1]), photo(12, -16, accents[2]));
}
function HomeScreen({
  go,
  t = {}
}) {
  const D = window.SCP_DATA;
  const layout = t.bentoLayout || "Row of 4";
  const fan = t.fanTiles !== false;
  const [lightbox, setLightbox] = React.useState(false);
  const h = {
    hero: {
      padding: "clamp(3rem, 9vw, 6rem) clamp(1.25rem, 5vw, 4rem) clamp(1.5rem, 3vw, 2.5rem)",
      maxWidth: 1240,
      margin: "0 auto"
    },
    kicker: {
      marginBottom: "var(--space-6)"
    },
    title: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(3rem, 8vw, 6.5rem)",
      lineHeight: 1.0,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      margin: 0,
      textWrap: "balance"
    },
    it: {
      fontStyle: "italic",
      color: "var(--text-accent)"
    },
    lead: {
      marginTop: "var(--space-6)",
      maxWidth: "46ch",
      fontFamily: "var(--font-sans)",
      fontWeight: 300,
      fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
      lineHeight: 1.35,
      color: "var(--text-secondary)"
    },
    cta: {
      marginTop: "var(--space-7)",
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    },
    section: {
      padding: "0 clamp(1.25rem, 5vw, 4rem)",
      maxWidth: 1240,
      margin: "0 auto"
    },
    label: {
      marginBottom: "var(--space-6)",
      marginTop: "var(--space-9)"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "clamp(1.5rem, 3vw, 2.5rem)"
    }
  };
  const Arrow = () => /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }));
  const reel = /*#__PURE__*/React.createElement(VideoReel, null);
  const nav = r => e => {
    e.preventDefault();
    go(r);
  };

  // Tile data (shared across layouts). peek used by the deck layout.
  const tiles = [{
    key: "focus",
    label: "Focus",
    title: "Payments & AI-native",
    blurb: "The strongest recent chapter, from bills to the assistants that explain them.",
    cta: "See the work",
    fill: "#DEFF88",
    peek: /*#__PURE__*/React.createElement(ChipsPeek, {
      items: ["Payments", "AI-native", "Checkout", "Design systems"]
    }),
    onClick: nav({
      name: "work"
    }),
    nav: {
      name: "work"
    }
  }, {
    key: "work",
    variant: "media",
    bare: true,
    media: reel,
    accent: D.work[0].accent,
    peek: /*#__PURE__*/React.createElement(TiredOfReadingPeek, null),
    onClick: e => {
      e.preventDefault();
      setLightbox(true);
    },
    nav: {
      name: "work"
    }
  }, {
    key: "other",
    label: "Other work",
    title: "Made by hand",
    blurb: "Leather, silver, and objects, kept apart from the product work.",
    cta: "Take a look",
    fill: "#FBCFC9",
    peek: /*#__PURE__*/React.createElement(ChipsPeek, {
      items: ["Leather", "Silver", "Objects"]
    }),
    onClick: nav({
      name: "fun"
    }),
    nav: {
      name: "fun"
    }
  }, {
    key: "about",
    label: "About",
    title: "Maker's hands, data brain",
    blurb: "Ten years across payments, commerce, workspace, and culture.",
    cta: "About Sean",
    fill: "#DAD3F5",
    peek: /*#__PURE__*/React.createElement(PhotosPeek, null),
    onClick: nav({
      name: "about"
    }),
    nav: {
      name: "about"
    }
  }];
  const bentoCfg = {
    "Bento": {
      wrap: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridAutoRows: "minmax(210px, auto)",
        gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
        marginTop: "var(--space-7)"
      },
      tile: key => key === "work" ? {
        gridColumn: "1",
        gridRow: "span 2"
      } : key === "about" ? {
        gridColumn: "1 / -1"
      } : {}
    },
    "Stacked": {
      wrap: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "clamp(0.75rem, 1.5vw, 1.25rem)",
        marginTop: "var(--space-7)"
      },
      tile: key => key === "work" ? {
        minHeight: 320
      } : {}
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: h.hero
  }, /*#__PURE__*/React.createElement("div", {
    style: h.kicker
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Staff Product Designer \xB7 New York")), /*#__PURE__*/React.createElement("h1", {
    style: h.title
  }, "Designing the moments where ", /*#__PURE__*/React.createElement("span", {
    style: h.it
  }, "money changes hands.")), /*#__PURE__*/React.createElement("p", {
    style: h.lead
  }, D.designer.lead)), /*#__PURE__*/React.createElement("section", {
    style: h.section
  }, layout === "Row of 4" ? /*#__PURE__*/React.createElement("div", {
    className: "scp-deckwrap"
  }, /*#__PURE__*/React.createElement(FeatureDeck, {
    tiles: tiles,
    fan: fan,
    style: {
      paddingTop: "clamp(2rem, 5vw, 4rem)"
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: "scp-bento scp-bento-" + layout.replace(/\s+/g, ""),
    style: bentoCfg[layout].wrap
  }, tiles.map(tile => /*#__PURE__*/React.createElement(FeatureTile, {
    key: tile.key,
    variant: tile.variant || "text",
    label: tile.label,
    title: tile.title,
    blurb: tile.blurb,
    cta: tile.cta,
    media: tile.media,
    accent: tile.accent,
    onClick: nav(tile.nav),
    style: bentoCfg[layout].tile(tile.key)
  })))), /*#__PURE__*/React.createElement("section", {
    style: h.section
  }, /*#__PURE__*/React.createElement("div", {
    style: h.label
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01",
    rule: true
  }, "Selected work")), /*#__PURE__*/React.createElement("div", {
    style: h.grid
  }, D.work.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.slug,
    onClick: () => go({
      name: "case",
      slug: p.slug
    }),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    company: p.company,
    title: p.title,
    summary: p.summary,
    year: p.year,
    tags: p.tags,
    accent: p.accent
  }))))), /*#__PURE__*/React.createElement(VideoLightbox, {
    open: lightbox,
    onClose: () => setLightbox(false)
  }));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Wordmark.jsx
try { (() => {
/* global React */
// Sean Choe wordmark. Vector, recolors via currentColor. Generated from assets/wordmark.svg.
function Wordmark({
  height = 30,
  color = "currentColor",
  style
}) {
  const w = height * 10.6135;
  return React.createElement("svg", {
    width: w,
    height: height,
    viewBox: "56.82 13.62 209.51 19.74",
    fill: color,
    role: "img",
    "aria-label": "Sean Choe",
    xmlns: "http://www.w3.org/2000/svg",
    style: style
  }, React.createElement("path", {
    d: "M70.224 18.968L67.632 19.784C67.464 18.728 66.576 17.168 64.296 17.168C62.568 17.168 61.368 18.32 61.368 19.616C61.368 20.696 62.04 21.512 63.36 21.8L65.808 22.304C68.808 22.904 70.416 24.8 70.416 27.2C70.416 29.84 68.28 32.36 64.392 32.36C60.072 32.36 58.08 29.576 57.816 27.128L60.504 26.36C60.672 28.136 61.944 29.768 64.392 29.768C66.432 29.768 67.488 28.736 67.488 27.416C67.488 26.312 66.672 25.424 65.208 25.112L62.808 24.608C60.216 24.08 58.488 22.376 58.488 19.832C58.488 16.976 61.104 14.624 64.272 14.624C68.28 14.624 69.84 17.072 70.224 18.968ZM75.2775 24.872H81.0135C80.9655 23.504 80.0535 22.28 78.1335 22.28C76.3815 22.28 75.3735 23.624 75.2775 24.872ZM81.3255 27.92L83.6775 28.664C83.0535 30.704 81.2055 32.36 78.3975 32.36C75.2295 32.36 72.4215 30.056 72.4215 26.096C72.4215 22.4 75.1575 19.952 78.1095 19.952C81.7095 19.952 83.8215 22.328 83.8215 26.024C83.8215 26.48 83.7735 26.864 83.7495 26.912H75.2055C75.2775 28.688 76.6695 29.96 78.3975 29.96C80.0775 29.96 80.9415 29.072 81.3255 27.92ZM85.8049 28.832C85.8049 26.744 87.3409 25.592 89.3329 25.304L92.3329 24.848C93.0049 24.752 93.1969 24.416 93.1969 24.008C93.1969 23.024 92.5249 22.232 90.9889 22.232C89.5249 22.232 88.7089 23.168 88.5889 24.344L86.0449 23.768C86.2609 21.752 88.0849 19.952 90.9649 19.952C94.5649 19.952 95.9329 21.992 95.9329 24.32V30.128C95.9329 31.184 96.0529 31.88 96.0769 32H93.4849C93.4609 31.928 93.3649 31.448 93.3649 30.512C92.8129 31.4 91.6609 32.36 89.7649 32.36C87.3169 32.36 85.8049 30.68 85.8049 28.832ZM90.2929 30.176C91.8529 30.176 93.1969 29.432 93.1969 27.152V26.624L90.1489 27.08C89.2849 27.224 88.5889 27.704 88.5889 28.664C88.5889 29.456 89.1889 30.176 90.2929 30.176ZM102.082 25.256V32H99.2983V20.312H102.01V21.872C102.778 20.528 104.17 19.976 105.466 19.976C108.322 19.976 109.69 22.04 109.69 24.608V32H106.906V25.088C106.906 23.648 106.258 22.496 104.506 22.496C102.922 22.496 102.082 23.72 102.082 25.256ZM130.341 18.968L127.749 19.784C127.581 18.728 126.693 17.168 124.413 17.168C122.685 17.168 121.485 18.32 121.485 19.616C121.485 20.696 122.157 21.512 123.477 21.8L125.925 22.304C128.925 22.904 130.533 24.8 130.533 27.2C130.533 29.84 128.397 32.36 124.509 32.36C120.189 32.36 118.197 29.576 117.933 27.128L120.621 26.36C120.789 28.136 122.061 29.768 124.509 29.768C126.549 29.768 127.605 28.736 127.605 27.416C127.605 26.312 126.789 25.424 125.325 25.112L122.925 24.608C120.333 24.08 118.605 22.376 118.605 19.832C118.605 16.976 121.221 14.624 124.389 14.624C128.397 14.624 129.957 17.072 130.341 18.968ZM138.587 29.864C140.315 29.864 141.851 28.592 141.851 26.144C141.851 23.72 140.315 22.472 138.587 22.472C136.883 22.472 135.323 23.72 135.323 26.144C135.323 28.568 136.883 29.864 138.587 29.864ZM138.587 19.952C142.091 19.952 144.659 22.568 144.659 26.144C144.659 29.744 142.091 32.36 138.587 32.36C135.107 32.36 132.539 29.744 132.539 26.144C132.539 22.568 135.107 19.952 138.587 19.952ZM152.673 29.864C154.401 29.864 155.937 28.592 155.937 26.144C155.937 23.72 154.401 22.472 152.673 22.472C150.969 22.472 149.409 23.72 149.409 26.144C149.409 28.568 150.969 29.864 152.673 29.864ZM152.673 19.952C156.177 19.952 158.745 22.568 158.745 26.144C158.745 29.744 156.177 32.36 152.673 32.36C149.193 32.36 146.625 29.744 146.625 26.144C146.625 22.568 149.193 19.952 152.673 19.952ZM164.239 25.256V32H161.455V20.312H164.167V21.872C164.935 20.528 166.327 19.976 167.623 19.976C170.479 19.976 171.847 22.04 171.847 24.608V32H169.063V25.088C169.063 23.648 168.415 22.496 166.663 22.496C165.079 22.496 164.239 23.72 164.239 25.256ZM177.973 25.136V32H175.189V14.624H177.973V21.44C178.765 20.408 180.085 19.976 181.309 19.976C184.189 19.976 185.581 22.04 185.581 24.608V32H182.797V25.088C182.797 23.648 182.149 22.496 180.397 22.496C178.861 22.496 178.021 23.648 177.973 25.136ZM194.227 29.864C195.955 29.864 197.491 28.592 197.491 26.144C197.491 23.72 195.955 22.472 194.227 22.472C192.523 22.472 190.963 23.72 190.963 26.144C190.963 28.568 192.523 29.864 194.227 29.864ZM194.227 19.952C197.731 19.952 200.299 22.568 200.299 26.144C200.299 29.744 197.731 32.36 194.227 32.36C190.747 32.36 188.179 29.744 188.179 26.144C188.179 22.568 190.747 19.952 194.227 19.952ZM216.742 32.36C212.158 32.36 208.15 29.048 208.15 23.504C208.15 17.96 212.302 14.624 216.718 14.624C221.038 14.624 223.606 17.168 224.374 20.144L221.662 21.056C221.158 18.992 219.574 17.336 216.718 17.336C213.91 17.336 211.102 19.376 211.102 23.504C211.102 27.488 213.838 29.6 216.742 29.6C219.598 29.6 221.23 27.776 221.806 25.856L224.446 26.72C223.678 29.6 221.086 32.36 216.742 32.36ZM229.629 25.136V32H226.845V14.624H229.629V21.44C230.421 20.408 231.741 19.976 232.965 19.976C235.845 19.976 237.237 22.04 237.237 24.608V32H234.453V25.088C234.453 23.648 233.805 22.496 232.053 22.496C230.517 22.496 229.677 23.648 229.629 25.136ZM245.884 29.864C247.612 29.864 249.148 28.592 249.148 26.144C249.148 23.72 247.612 22.472 245.884 22.472C244.18 22.472 242.62 23.72 242.62 26.144C242.62 28.568 244.18 29.864 245.884 29.864ZM245.884 19.952C249.388 19.952 251.956 22.568 251.956 26.144C251.956 29.744 249.388 32.36 245.884 32.36C242.404 32.36 239.836 29.744 239.836 26.144C239.836 22.568 242.404 19.952 245.884 19.952ZM256.778 24.872H262.514C262.466 23.504 261.554 22.28 259.634 22.28C257.882 22.28 256.874 23.624 256.778 24.872ZM262.826 27.92L265.178 28.664C264.554 30.704 262.706 32.36 259.898 32.36C256.73 32.36 253.922 30.056 253.922 26.096C253.922 22.4 256.658 19.952 259.61 19.952C263.21 19.952 265.322 22.328 265.322 26.024C265.322 26.48 265.273 26.864 265.25 26.912H256.706C256.778 28.688 258.17 29.96 259.898 29.96C261.578 29.96 262.442 29.072 262.826 27.92Z"
  }));
}
Object.assign(window, {
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Wordmark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkIndexScreen.jsx
try { (() => {
/* global React */
const {
  SectionLabel,
  ProjectListRow
} = window.SeanChoePortfolioDesignSystem_9019b6;
function WorkIndexScreen({
  go
}) {
  const D = window.SCP_DATA;
  const w = {
    wrap: {
      padding: "clamp(2.5rem, 7vw, 5rem) clamp(1.25rem, 5vw, 4rem)",
      maxWidth: 1100,
      margin: "0 auto"
    },
    head: {
      marginBottom: "var(--space-8)"
    },
    title: {
      fontFamily: "var(--font-serif)",
      fontWeight: 400,
      fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
      lineHeight: 1.02,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      margin: "var(--space-5) 0 0"
    },
    sub: {
      marginTop: "var(--space-4)",
      maxWidth: "50ch",
      fontSize: "1.0625rem",
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    },
    list: {
      borderTop: "1px solid var(--border-subtle)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: w.wrap
  }, /*#__PURE__*/React.createElement("header", {
    style: w.head
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Product design \xB7 2020 to now"), /*#__PURE__*/React.createElement("h1", {
    style: w.title
  }, "Work"), /*#__PURE__*/React.createElement("p", {
    style: w.sub
  }, "Ten years across payments, e-commerce, workspace, and cultural institutions. The through line is clarity at the moment a decision gets made.")), /*#__PURE__*/React.createElement("div", {
    style: w.list
  }, D.work.map((p, i) => /*#__PURE__*/React.createElement(ProjectListRow, {
    key: p.slug,
    index: String(i + 1).padStart(2, "0"),
    company: p.company,
    title: p.title,
    role: p.role,
    year: p.year,
    onClick: e => {
      e.preventDefault();
      go({
        name: "case",
        slug: p.slug
      });
    }
  }))));
}
Object.assign(window, {
  WorkIndexScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkIndexScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Portfolio content model. Attached to window for the babel scripts to read.
window.SCP_DATA = {
  designer: {
    name: "Sean Choe",
    role: "Staff Product Designer",
    location: "New York",
    lead: "I design payments, commerce, and workspace products. Recently focused on AI-native product work and the moments where money changes hands."
  },
  // Main case studies (UI/UX + product design)
  work: [{
    slug: "cedar",
    company: "Cedar",
    title: "Patient payments, reimagined",
    role: "Staff Product Designer",
    year: "2024",
    accent: "#E0653C",
    tags: ["Payments", "AI-native"],
    summary: "A ground-up redesign of how patients understand and pay medical bills, plus an AI assistant that explains charges in plain language.",
    discipline: "Product design, payments, design systems",
    stats: [{
      value: "38%",
      label: "Faster to pay",
      caption: "Median time from open to paid bill."
    }, {
      value: "$1.2B",
      label: "Volume processed",
      caption: "Annualized on the new flow."
    }, {
      value: "+22",
      label: "NPS",
      caption: "Post-payment survey lift."
    }],
    overview: "Cedar helps hospitals and patients settle bills without the dread. The old flow buried the amount due under insurance jargon and dead ends. I led design on a rebuild that puts the number, the reason, and the next step in the first screen, then layers an AI assistant on top for the questions statements never answer.",
    problem: "Patients abandoned the flow because they could not tell what they owed or why. Support tickets were dominated by two questions: what is this charge, and can I pay it over time.",
    approach: "We restructured the bill around a single clear amount, a plain-language line-item breakdown, and one obvious action. The AI assistant reads the actual claim and answers in the patient's words, then hands off to a payment plan when the balance is large.",
    quote: {
      text: "The new flow made the bill feel like something you could actually act on, not a wall to climb.",
      cite: "Product lead",
      role: "Cedar Payments"
    }
  }, {
    slug: "chewy",
    company: "Chewy",
    title: "Pharmacy checkout & autoship",
    role: "Staff Product Designer",
    year: "2023",
    accent: "#4C7FB8",
    tags: ["E-commerce", "Checkout"],
    summary: "Cutting friction from prescription reorders and autoship so pet parents never run out of the medication their animal depends on.",
    discipline: "E-commerce, checkout, subscriptions",
    stats: [{
      value: "31%",
      label: "Fewer drop-offs",
      caption: "At the prescription approval step."
    }, {
      value: "2.4x",
      label: "Autoship adoption",
      caption: "For eligible pharmacy orders."
    }],
    overview: "Chewy Pharmacy sits between a retail cart and a regulated prescription. I owned the checkout and autoship experience, threading vet approvals and refill timing into a flow that still feels like Chewy.",
    problem: "Prescription orders stalled while waiting on vet approval, and pet parents could not tell whether their order was actually going through.",
    approach: "We made approval status a first-class, tracked state, prompted autoship at the moment of proven intent, and wrote copy that reassures without burying the medical detail.",
    quote: {
      text: "Autoship stopped being a checkbox and started being a promise we could keep.",
      cite: "Group PM",
      role: "Chewy Pharmacy"
    }
  }, {
    slug: "wework",
    company: "WeWork",
    title: "Member workspace app",
    role: "Senior Product Designer",
    year: "2022",
    accent: "#6E6BC4",
    tags: ["Workspace", "Mobile"],
    summary: "The daily app members use to book rooms, open doors, and get help across every building in the network.",
    discipline: "Mobile product design, spatial UX",
    stats: [{
      value: "1.1M",
      label: "Monthly bookings",
      caption: "Rooms and desks across the network."
    }, {
      value: "4.8",
      label: "App Store rating",
      caption: "Up from 3.9 pre-redesign."
    }],
    overview: "The member app was the connective tissue of a physical network. I led design on a rebuild that made booking, access, and support feel like one product instead of three.",
    problem: "Members juggled separate tools for booking, building access, and support, and none of them agreed with each other.",
    approach: "We unified the three around a location-aware home that surfaces the next thing you need, whether that is your 2pm room, the door in front of you, or a person to ask.",
    quote: {
      text: "It finally felt like the building and the app were the same company.",
      cite: "Head of Product",
      role: "WeWork"
    }
  }, {
    slug: "coach",
    company: "Coach",
    title: "Commerce redesign",
    role: "Senior Product Designer",
    year: "2021",
    accent: "#B5893C",
    tags: ["E-commerce", "Retail"],
    summary: "A refreshed shopping experience that carries the weight of a heritage leather house into a fast, modern storefront.",
    discipline: "E-commerce, brand-led product design",
    stats: [{
      value: "18%",
      label: "Conversion lift",
      caption: "On the redesigned product page."
    }, {
      value: "40%",
      label: "Faster PDP",
      caption: "Largest contentful paint."
    }],
    overview: "Coach needed a storefront that felt as considered as the product. I partnered with brand and engineering to rebuild the product page and cart around craft and clarity.",
    problem: "The old storefront treated a heritage leather good like a generic SKU, with slow pages and cluttered detail views.",
    approach: "We gave the product room to breathe, foregrounded material and craft, and rebuilt the page for speed so the experience matched the object.",
    quote: {
      text: "The page finally respects the product the way the store does.",
      cite: "Creative Director",
      role: "Coach"
    }
  }, {
    slug: "met",
    company: "The Met",
    title: "Collection experience",
    role: "Product Designer",
    year: "2020",
    accent: "#3E8E7E",
    tags: ["Cultural", "Web"],
    summary: "A way to wander the Metropolitan Museum of Art's online collection that feels closer to a gallery than a database.",
    discipline: "Editorial product design, discovery",
    stats: [{
      value: "3.2x",
      label: "Objects per visit",
      caption: "Depth of collection browsing."
    }, {
      value: "490K",
      label: "Objects",
      caption: "Open-access works made explorable."
    }],
    overview: "The Met's online collection held nearly half a million objects behind search boxes and filters. I designed a browsing experience that lets curiosity, not query syntax, lead.",
    problem: "Visitors could find an object they already knew, but had no good way to wander and discover.",
    approach: "We built editorial entry points, generous imagery, and gentle connections between works so one object leads to the next the way a gallery does.",
    quote: {
      text: "It gave the collection a sense of place again.",
      cite: "Digital Curator",
      role: "The Met"
    }
  }],
  // Small separate section — not product design
  fun: [{
    title: "Leather goods",
    medium: "Hand-cut, saddle-stitched",
    note: "Wallets and totes made at the bench on weekends. Vegetable-tanned, no hardware I did not set myself.",
    accent: "#B5893C"
  }, {
    title: "Jewelry",
    medium: "Lost-wax casting, silver",
    note: "Small cast pieces. An excuse to design something you finish in a day and can hold.",
    accent: "#9A9995"
  }, {
    title: "Industrial design",
    medium: "Objects & furniture",
    note: "One-off objects and a chair or two. Where the interest in materials and payments both started.",
    accent: "#6E6D69"
  }, {
    title: "Fashion design",
    medium: "Patternmaking, natural fibers",
    note: "Cut-and-sew garments drafted from scratch. Learning where structure ends and drape begins.",
    accent: "#8A7A6A"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.FeatureDeck = __ds_scope.FeatureDeck;

__ds_ns.FeatureTile = __ds_scope.FeatureTile;

__ds_ns.ProjectListRow = __ds_scope.ProjectListRow;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
