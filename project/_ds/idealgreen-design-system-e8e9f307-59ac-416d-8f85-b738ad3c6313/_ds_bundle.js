/* @ds-bundle: {"format":4,"namespace":"IdealgreenDesignSystem_e8e9f3","components":[{"name":"ClassicCarCard","sourcePath":"components/classic-cars/ClassicCarCard.jsx"},{"name":"DriverCard","sourcePath":"components/content/DriverCard.jsx"},{"name":"ElectricFleetIndicator","sourcePath":"components/content/ElectricFleetIndicator.jsx"},{"name":"FAQAccordion","sourcePath":"components/content/FAQAccordion.jsx"},{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"RouteCard","sourcePath":"components/content/RouteCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"TourItinerary","sourcePath":"components/content/TourItinerary.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"DateTimeField","sourcePath":"components/forms/DateTimeField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PassengerSelector","sourcePath":"components/forms/PassengerSelector.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"FloatingContact","sourcePath":"components/navigation/FloatingContact.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"TrustBar","sourcePath":"components/navigation/TrustBar.jsx"}],"sourceHashes":{"components/classic-cars/ClassicCarCard.jsx":"f165489230e6","components/content/DriverCard.jsx":"a22c11bc70d1","components/content/ElectricFleetIndicator.jsx":"228c99686c6b","components/content/FAQAccordion.jsx":"74813c6d78d6","components/content/PriceCard.jsx":"a59fa271deec","components/content/RouteCard.jsx":"6d0dc80cfb6f","components/content/TestimonialCard.jsx":"5c2fddd05dd0","components/content/TourItinerary.jsx":"8f723b18e153","components/core/Button.jsx":"385c9b11f05f","components/forms/DateTimeField.jsx":"95badd7a4aca","components/forms/Input.jsx":"d2361d790702","components/forms/PassengerSelector.jsx":"b0b44868452d","components/forms/Select.jsx":"d670d84d7597","components/navigation/FloatingContact.jsx":"2801a4ae9709","components/navigation/Footer.jsx":"290307a1beab","components/navigation/NavBar.jsx":"e37d0f29cf35","components/navigation/TrustBar.jsx":"915212eff8ea","ui_kits/website/BookingFlow.jsx":"3688aca1afdf","ui_kits/website/Homepage.jsx":"eaab81bb4671","ui_kits/website/TourDetail.jsx":"184ece7bba6f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.IdealgreenDesignSystem_e8e9f3 = window.IdealgreenDesignSystem_e8e9f3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/classic-cars/ClassicCarCard.jsx
try { (() => {
function ClassicCarCard({
  title,
  price,
  description,
  image
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--cc-cream)',
      border: '1px solid var(--cc-cream-deep)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      maxWidth: 360,
      fontFamily: 'var(--font-body)'
    }
  }, image && React.createElement('img', {
    src: image,
    style: {
      width: '100%',
      height: 180,
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement('div', {
    style: {
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, React.createElement('div', {
    style: {
      font: 'italic 500 26px var(--font-classic)',
      color: 'var(--cc-burgundy)'
    }
  }, title), description && React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--cc-text)'
    }
  }, description), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 6,
      paddingTop: 12,
      borderTop: '1px solid var(--cc-cream-deep)'
    }
  }, React.createElement('span', {
    style: {
      font: '600 15px var(--font-display)',
      color: 'var(--cc-burgundy)'
    }
  }, price), React.createElement('button', {
    style: {
      background: 'var(--cc-burgundy)',
      color: 'var(--cc-cream)',
      border: '1px solid var(--cc-brass)',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 16px',
      font: 'var(--text-button)',
      cursor: 'pointer'
    }
  }, 'Enquire'))));
}
Object.assign(__ds_scope, { ClassicCarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/classic-cars/ClassicCarCard.jsx", error: String((e && e.message) || e) }); }

// components/content/DriverCard.jsx
try { (() => {
function DriverCard({
  photo,
  name,
  role,
  since,
  languages = [],
  bio
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      maxWidth: 280,
      fontFamily: 'var(--font-body)'
    }
  }, photo && React.createElement('img', {
    src: photo,
    style: {
      width: '100%',
      height: 200,
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement('div', {
    style: {
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement('div', {
    style: {
      font: '600 17px var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, name), React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--green-700)'
    }
  }, role + (since ? ' · since ' + since : '')), languages.length > 0 && React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, languages.join(' · ')), bio && React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, bio)));
}
Object.assign(__ds_scope, { DriverCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DriverCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ElectricFleetIndicator.jsx
try { (() => {
function ElectricFleetIndicator({
  percent = 100
}) {
  return React.createElement('div', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--stone-50)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--green-600)'
    }
  }), React.createElement('span', {
    style: {
      font: '500 13px var(--font-body)',
      color: 'var(--text-secondary)'
    }
  }, percent >= 100 ? 'Fully electric fleet' : percent + '% electric fleet'));
}
Object.assign(__ds_scope, { ElectricFleetIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ElectricFleetIndicator.jsx", error: String((e && e.message) || e) }); }

// components/content/FAQAccordion.jsx
try { (() => {
function FAQAccordion({
  items = []
}) {
  const [open, setOpen] = React.useState(0);
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, items.map((it, i) => React.createElement('div', {
    key: i,
    style: {
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('button', {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      padding: '18px 4px',
      cursor: 'pointer',
      textAlign: 'left',
      font: '600 16px var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, it.question, React.createElement('span', {
    style: {
      fontSize: 18,
      color: 'var(--green-700)',
      transform: open === i ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--duration-fast)'
    }
  }, '+')), open === i && React.createElement('div', {
    style: {
      padding: '0 4px 18px',
      font: 'var(--text-body)',
      color: 'var(--text-secondary)',
      maxWidth: 640
    }
  }, it.answer))));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
function PriceCard({
  title,
  price,
  duration,
  maxPassengers,
  vehicle,
  included = [],
  excluded = [],
  image,
  onSelect
}) {
  return React.createElement('div', {
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-body)',
      maxWidth: 340
    }
  }, image && React.createElement('img', {
    src: image,
    style: {
      width: '100%',
      height: 160,
      objectFit: 'cover',
      display: 'block'
    }
  }), React.createElement('div', {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-h4)',
      color: 'var(--text-primary)'
    }
  }, title), React.createElement('span', {
    style: {
      font: '600 22px var(--font-display)',
      color: 'var(--green-700)'
    }
  }, price)), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)'
    }
  }, React.createElement('span', null, '⏱ '.replace('⏱ ', '') + duration), React.createElement('span', null, '👤 '.replace('👤 ', '') + 'Up to ' + maxPassengers), React.createElement('span', null, vehicle)), React.createElement('div', {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, included.map((it, i) => React.createElement('div', {
    key: 'i' + i,
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-primary)'
    }
  }, '✓ ' + it)), excluded.map((it, i) => React.createElement('div', {
    key: 'e' + i,
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, '– ' + it))), React.createElement('button', {
    onClick: onSelect,
    style: {
      marginTop: 4,
      background: 'var(--green-700)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 0',
      font: 'var(--text-button)',
      cursor: 'pointer'
    }
  }, 'Check availability')));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/RouteCard.jsx
try { (() => {
function RouteCard({
  from,
  to,
  price,
  duration,
  onSelect
}) {
  return React.createElement('button', {
    onClick: onSelect,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '18px 22px',
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      textAlign: 'left'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: '600 17px var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, React.createElement('span', null, from), React.createElement('span', {
    style: {
      color: 'var(--green-600)'
    }
  }, '→'), React.createElement('span', null, to)), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, duration && React.createElement('span', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, duration), React.createElement('span', {
    style: {
      font: '600 18px var(--font-display)',
      color: 'var(--green-700)'
    }
  }, price)));
}
Object.assign(__ds_scope, { RouteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RouteCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function Stars({
  rating
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(i => React.createElement('span', {
    key: i,
    style: {
      color: i <= rating ? 'var(--sand-500)' : 'var(--stone-300)',
      fontSize: 15
    }
  }, '★')));
}
function TestimonialCard({
  name,
  location,
  rating = 5,
  quote,
  source = 'Google'
}) {
  return React.createElement('div', {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 22,
      maxWidth: 340,
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement(Stars, {
    rating
  }), React.createElement('div', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, '"' + quote + '"'), React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 4
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      font: '600 14px var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, name), React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, location)), React.createElement('div', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, source)));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TourItinerary.jsx
try { (() => {
function TourItinerary({
  stops = []
}) {
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, stops.map((s, i) => React.createElement('div', {
    key: i,
    style: {
      display: 'flex',
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, React.createElement('div', {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'var(--green-700)',
      marginTop: 4,
      flexShrink: 0
    }
  }), i < stops.length - 1 && React.createElement('div', {
    style: {
      width: 2,
      flex: 1,
      background: 'var(--border-default)',
      minHeight: 36
    }
  })), React.createElement('div', {
    style: {
      paddingBottom: 24
    }
  }, React.createElement('div', {
    style: {
      font: 'var(--text-caption)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase'
    }
  }, s.time), React.createElement('div', {
    style: {
      font: '600 17px var(--font-body)',
      color: 'var(--text-primary)',
      marginTop: 2
    }
  }, s.title), s.description && React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      marginTop: 2,
      maxWidth: 420
    }
  }, s.description)))));
}
Object.assign(__ds_scope, { TourItinerary });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TourItinerary.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick,
  type = 'button'
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      font: '600 13px/1 var(--font-body)'
    },
    md: {
      padding: '12px 22px',
      font: 'var(--text-button)'
    },
    lg: {
      padding: '16px 28px',
      font: '600 16px/1 var(--font-body)'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    transition: 'background var(--duration-fast) var(--ease-standard),color var(--duration-fast) var(--ease-standard),border-color var(--duration-fast) var(--ease-standard)',
    letterSpacing: 'var(--tracking-button)',
    opacity: disabled ? 0.45 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: 'var(--green-700)',
      color: 'var(--text-on-brand)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--green-700)',
      borderColor: 'var(--green-700)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--charcoal-700)',
      borderColor: 'transparent'
    }
  };
  const hoverBg = {
    primary: 'var(--green-800)',
    secondary: 'var(--green-50)',
    ghost: 'var(--stone-100)'
  };
  const [hover, setHover] = React.useState(false);
  const style = {
    ...base,
    ...variants[variant],
    background: hover && !disabled ? hoverBg[variant] : variants[variant].background
  };
  return React.createElement('button', {
    type,
    disabled,
    style,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/DateTimeField.jsx
try { (() => {
function DateTimeField({
  label,
  date,
  time,
  onDateChange,
  onTimeChange
}) {
  const fieldStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    border: '1.5px solid var(--border-default)',
    borderRadius: 'var(--radius-md)',
    padding: '12px 14px',
    background: '#fff',
    flex: 1
  };
  const inputStyle = {
    border: 'none',
    outline: 'none',
    font: 'var(--text-body)',
    color: 'var(--text-primary)',
    background: 'transparent',
    width: '100%'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 10
    }
  }, React.createElement('div', {
    style: fieldStyle
  }, React.createElement('span', {
    style: {
      color: 'var(--icon-brand)'
    }
  }, '📅'.replace('📅', '') || ''), React.createElement('input', {
    type: 'date',
    value: date,
    onChange: onDateChange,
    style: inputStyle
  })), React.createElement('div', {
    style: fieldStyle
  }, React.createElement('input', {
    type: 'time',
    value: time,
    onChange: onTimeChange,
    style: inputStyle
  }))));
}
Object.assign(__ds_scope, { DateTimeField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DateTimeField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  helper,
  type = 'text',
  icon = null
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--error-500)' : focus ? 'var(--green-600)' : 'var(--border-default)';
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      background: '#fff',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast),box-shadow var(--duration-fast)'
    }
  }, icon, React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 'none',
      outline: 'none',
      flex: 1,
      font: 'var(--text-body)',
      color: 'var(--text-primary)',
      background: 'transparent'
    }
  })), error ? React.createElement('span', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--error-600)'
    }
  }, error) : helper ? React.createElement('span', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/PassengerSelector.jsx
try { (() => {
function PassengerSelector({
  adults,
  children,
  onAdultsChange,
  onChildrenChange
}) {
  const Row = ({
    label,
    count,
    onChange,
    min = 0
  }) => React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0'
    }
  }, React.createElement('span', {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-primary)'
    }
  }, label), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement('button', {
    type: 'button',
    onClick: () => onChange(Math.max(min, count - 1)),
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '1.5px solid var(--border-default)',
      background: '#fff',
      color: 'var(--green-700)',
      fontSize: 16,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, '–'), React.createElement('span', {
    style: {
      width: 20,
      textAlign: 'center',
      font: '600 15px var(--font-body)'
    }
  }, count), React.createElement('button', {
    type: 'button',
    onClick: () => onChange(count + 1),
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      border: '1.5px solid var(--green-700)',
      background: 'var(--green-700)',
      color: '#fff',
      fontSize: 16,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, '+')));
  return React.createElement('div', {
    style: {
      border: '1.5px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '6px 16px',
      background: '#fff',
      fontFamily: 'var(--font-body)',
      divide: 'y'
    }
  }, Row({
    label: 'Adults',
    count: adults,
    onChange: onAdultsChange,
    min: 1
  }), React.createElement('div', {
    style: {
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), Row({
    label: 'Children',
    count: children,
    onChange: onChildrenChange,
    min: 0
  }));
}
Object.assign(__ds_scope, { PassengerSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PassengerSelector.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select'
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);
  const selected = options.find(o => o.value === value);
  return React.createElement('div', {
    ref,
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), React.createElement('button', {
    type: 'button',
    onClick: () => setOpen(o => !o),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: `1.5px solid ${open ? 'var(--green-600)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      background: '#fff',
      font: 'var(--text-body)',
      color: selected ? 'var(--text-primary)' : 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, selected ? selected.label : placeholder, React.createElement('span', {
    style: {
      fontSize: 10,
      color: 'var(--text-muted)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-fast)'
    }
  }, '▾')), open && React.createElement('div', {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: 4,
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      zIndex: 10,
      overflow: 'hidden'
    }
  }, options.map(o => React.createElement('div', {
    key: o.value,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
    },
    style: {
      padding: '10px 14px',
      font: 'var(--text-body)',
      cursor: 'pointer',
      background: o.value === value ? 'var(--green-50)' : 'transparent',
      color: o.value === value ? 'var(--green-700)' : 'var(--text-primary)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--stone-100)',
    onMouseLeave: e => e.currentTarget.style.background = o.value === value ? 'var(--green-50)' : 'transparent'
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FloatingContact.jsx
try { (() => {
function FloatingContact({
  phone = '+351900000000',
  whatsapp = '351900000000'
}) {
  const [open, setOpen] = React.useState(false);
  return React.createElement('div', {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 10,
      fontFamily: 'var(--font-body)',
      zIndex: 50
    }
  }, open && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 10
    }
  }, React.createElement('a', {
    href: 'https://wa.me/' + whatsapp,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      font: '500 14px var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 14
    }
  }, 'W'), 'WhatsApp'), React.createElement('a', {
    href: 'tel:' + phone,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-primary)',
      textDecoration: 'none',
      font: '500 14px var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--green-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 14
    }
  }, '☎'), 'Call us')), React.createElement('button', {
    onClick: () => setOpen(o => !o),
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--green-700)',
      color: '#fff',
      border: 'none',
      boxShadow: 'var(--shadow-lg)',
      fontSize: 22,
      cursor: 'pointer'
    }
  }, open ? '×' : '●'));
}
Object.assign(__ds_scope, { FloatingContact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FloatingContact.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logoSrc = 'assets/logo-wordmark.jpg'
}) {
  return React.createElement('footer', {
    style: {
      background: 'var(--charcoal-800)',
      color: 'var(--text-on-dark)',
      padding: '48px 32px',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 32,
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, React.createElement('div', null, React.createElement('img', {
    src: logoSrc,
    style: {
      height: 20,
      filter: 'brightness(0) invert(1)',
      marginBottom: 12
    }
  }), React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--charcoal-200)',
      maxWidth: 280
    }
  }, 'The private, comfortable and responsible way to discover Portugal.')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      font: 'var(--text-body-sm)',
      color: 'var(--charcoal-100)'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--charcoal-300)',
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase'
    }
  }, 'Services'), React.createElement('span', null, 'Airport Transfers'), React.createElement('span', null, 'Private Tours'), React.createElement('span', null, 'Classic Cars'), React.createElement('span', null, 'Corporate Services')), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      font: 'var(--text-body-sm)',
      color: 'var(--charcoal-100)'
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--charcoal-300)',
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase'
    }
  }, 'Contact'), React.createElement('span', null, '+351 900 000 000'), React.createElement('span', null, 'hello@idealgreen.pt'), React.createElement('span', null, 'Lisbon, Portugal'))), React.createElement('div', {
    style: {
      borderTop: '1px solid var(--charcoal-600)',
      marginTop: 32,
      paddingTop: 16,
      maxWidth: 1200,
      margin: '32px auto 0',
      font: 'var(--text-caption)',
      color: 'var(--charcoal-400)'
    }
  }, '© 2026 Idealgreen · idealgreen.pt · Private tours & transfers since 2022'));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = [],
  onBook,
  logoSrc = 'assets/logo-wordmark.jpg'
}) {
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 32px',
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('img', {
    src: logoSrc,
    alt: 'Idealgreen',
    style: {
      height: 22
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map((l, i) => React.createElement('a', {
    key: i,
    href: l.href || '#',
    style: {
      font: '500 15px var(--font-body)',
      color: 'var(--text-primary)',
      textDecoration: 'none'
    }
  }, l.label))), React.createElement('button', {
    onClick: onBook,
    style: {
      background: 'var(--green-700)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 20px',
      font: 'var(--text-button)',
      cursor: 'pointer'
    }
  }, 'Book now'));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TrustBar.jsx
try { (() => {
function TrustBar({
  reviewScore = 5,
  reviewCount,
  since,
  partners = []
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24,
      padding: '20px 0',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--sand-500)'
    }
  }, '★★★★★'), React.createElement('span', {
    style: {
      font: '600 14px var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, reviewScore + ' / 5'), reviewCount && React.createElement('span', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, '(' + reviewCount + ' Google reviews)')), since && React.createElement('div', {
    style: {
      font: 'var(--text-body-sm)',
      color: 'var(--text-muted)'
    }
  }, 'Private tours & transfers since ' + since), partners.length > 0 && React.createElement('div', {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, partners.map((p, i) => React.createElement('span', {
    key: i,
    style: {
      font: '600 13px var(--font-body)',
      color: 'var(--text-muted)',
      letterSpacing: '0.02em'
    }
  }, p))));
}
Object.assign(__ds_scope, { TrustBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TrustBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingFlow.jsx
try { (() => {
function BookingFlow({
  mobile = false
}) {
  const {
    NavBar,
    Input,
    Select,
    DateTimeField,
    PassengerSelector,
    Button,
    PriceCard,
    Footer
  } = window.IdealgreenDesignSystem_e8e9f3;
  const [step, setStep] = React.useState(0);
  const [date, setDate] = React.useState('2026-08-14');
  const [time, setTime] = React.useState('14:30');
  const [vehicle, setVehicle] = React.useState('ev');
  const [adults, setAdults] = React.useState(2);
  const [kids, setKids] = React.useState(0);
  const steps = ['Trip details', 'Vehicle', 'Your details', 'Confirm'];
  const Stepper = () => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      marginBottom: 36
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      flex: i < steps.length - 1 ? 1 : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: '600 13px var(--font-body)',
      background: i <= step ? 'var(--green-700)' : 'var(--stone-200)',
      color: i <= step ? '#fff' : 'var(--text-muted)'
    }
  }, i + 1), !mobile && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px var(--font-body)',
      color: i <= step ? 'var(--text-primary)' : 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)',
      margin: '0 12px'
    }
  }))));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--stone-50)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: [{
      label: 'Transfers'
    }, {
      label: 'Tours'
    }, {
      label: 'Classic Cars'
    }, {
      label: 'About'
    }],
    logoSrc: "../../assets/logo-wordmark.jpg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      padding: mobile ? '24px 20px' : '40px 32px',
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1fr 320px',
      gap: mobile ? 28 : 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Stepper, null), step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "When and how many?"), /*#__PURE__*/React.createElement(DateTimeField, {
    label: "Pickup",
    date: date,
    time: time,
    onDateChange: e => setDate(e.target.value),
    onTimeChange: e => setTime(e.target.value)
  }), /*#__PURE__*/React.createElement(PassengerSelector, {
    adults: adults,
    children: kids,
    onAdultsChange: setAdults,
    onChildrenChange: setKids
  })), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Choose your vehicle"), /*#__PURE__*/React.createElement(Select, {
    label: "Vehicle",
    value: vehicle,
    onChange: setVehicle,
    options: [{
      value: 'ev',
      label: 'Tesla Model Y — up to 4'
    }, {
      value: 'van',
      label: 'Mercedes V-Class — up to 7'
    }, {
      value: 'classic',
      label: 'Classic Mercedes (weddings) — up to 3'
    }]
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Your details"), /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Maria Silva"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "maria@email.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Flight number (optional)",
    placeholder: "TP1234",
    helper: "So we can track delays and adjust pickup."
  })), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)'
    }
  }, "Ready to confirm"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      font: 'var(--text-body)',
      color: 'var(--text-secondary)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Pickup"), " \u2014 ", date, " at ", time), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Passengers"), " \u2014 ", adults, " adults, ", kids, " children"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "Vehicle"), " \u2014 ", vehicle === 'ev' ? 'Tesla Model Y' : vehicle === 'van' ? 'Mercedes V-Class' : 'Classic Mercedes'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32
    }
  }, step > 0 && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setStep(step - 1)
  }, "Back"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setStep(Math.min(step + 1, 3))
  }, step === 3 ? 'Confirm booking' : 'Continue'))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    title: "Sintra Full-Day Tour",
    price: "\u20AC290",
    duration: "8 hours",
    maxPassengers: 4,
    vehicle: vehicle === 'ev' ? 'Tesla Model Y' : vehicle === 'van' ? 'Mercedes V-Class' : 'Classic Mercedes',
    included: ['Private driver-guide', 'Bottled water'],
    excluded: ['Palace entry tickets'],
    image: "../../assets/photography/fleet-tesla-sintra.jpg"
  })))), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo-wordmark.jpg"
  }));
}
window.BookingFlow = BookingFlow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingFlow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
function Homepage() {
  const {
    NavBar,
    TrustBar,
    PriceCard,
    DriverCard,
    TestimonialCard,
    FAQAccordion,
    Footer,
    FloatingContact,
    ElectricFleetIndicator,
    Button
  } = window.IdealgreenDesignSystem_e8e9f3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--stone-50)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: [{
      label: 'Transfers'
    }, {
      label: 'Tours'
    }, {
      label: 'Classic Cars'
    }, {
      label: 'About'
    }],
    logoSrc: "../../assets/logo-wordmark.jpg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 560,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/fleet-tesla-sintra.jpg",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(16,15,13,0.05),rgba(16,15,13,0.55))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 56,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(720px,90%)',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(ElectricFleetIndicator, {
    percent: 100
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 clamp(2.2rem,5vw,3.6rem)/1.05 var(--font-display)',
      letterSpacing: 'var(--tracking-display)'
    }
  }, "The private, comfortable way to discover Portugal"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-lg)',
      marginTop: 14,
      color: 'rgba(255,255,255,0.9)'
    }
  }, "Your driver waits at arrivals with your name \u2014 even if the flight is late."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Check availability"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => {}
  }, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement(TrustBar, {
    reviewScore: 5,
    reviewCount: 214,
    since: "2022",
    partners: ['Hotel da Baixa', 'JK Europa', 'Wine & Books']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h2)',
      marginBottom: 24
    }
  }, "Popular tours & transfers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    title: "Sintra Full-Day Tour",
    price: "\u20AC290",
    duration: "8 hours",
    maxPassengers: 4,
    vehicle: "Tesla Model Y",
    included: ['Private driver-guide', 'Bottled water'],
    excluded: ['Palace entry tickets'],
    image: "../../assets/photography/fleet-tesla-sintra.jpg"
  }), /*#__PURE__*/React.createElement(PriceCard, {
    title: "Lisbon Airport Transfer",
    price: "\u20AC65",
    duration: "35 min",
    maxPassengers: 4,
    vehicle: "Tesla Model Y",
    included: ['Meet & greet', 'Flight tracking'],
    excluded: [],
    image: "../../assets/photography/fleet-tesla-hotel-night.jpg"
  }), /*#__PURE__*/React.createElement(PriceCard, {
    title: "Lisbon \u2192 Porto",
    price: "\u20AC370",
    duration: "2h 45m",
    maxPassengers: 7,
    vehicle: "Mercedes V-Class",
    included: ['Door-to-door', 'Luggage assistance'],
    excluded: ['Tolls'],
    image: "../../assets/photography/fleet-vans-pines.jpg"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h2)',
      marginBottom: 24
    }
  }, "Meet your drivers"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(DriverCard, {
    photo: "../../assets/photography/driver-profile.jpg",
    name: "Miguel Santos",
    role: "Driver-guide",
    since: "2022",
    languages: ['Portuguese', 'English', 'Spanish'],
    bio: "Grew up near Sintra; knows every shortcut around the palace queues."
  }), /*#__PURE__*/React.createElement(DriverCard, {
    photo: "../../assets/photography/team-profile.jpg",
    name: "Ana & Tiago",
    role: "Corporate accounts",
    since: "2022",
    languages: ['Portuguese', 'English', 'French'],
    bio: "Handle recurring corporate transfers across Lisbon and Cascais."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h2)',
      marginBottom: 24
    }
  }, "What guests say"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Robert H.",
    location: "United Kingdom",
    rating: 5,
    quote: "Our driver was waiting exactly where he said, even though our flight was 40 minutes late.",
    source: "Google"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Sofia M.",
    location: "Spain",
    rating: 5,
    quote: "The Tesla was spotless and the driver knew Sintra like the back of his hand.",
    source: "Google"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '0 32px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h2)',
      marginBottom: 16
    }
  }, "Frequently asked"), /*#__PURE__*/React.createElement(FAQAccordion, {
    items: [{
      question: 'What happens if my flight is delayed?',
      answer: 'We track your flight and adjust pickup time automatically — no extra charge.'
    }, {
      question: 'Are child seats available?',
      answer: 'Yes, request one at booking at no extra cost.'
    }, {
      question: 'Is the fleet really electric?',
      answer: 'Yes — Tesla Model Y/3 for transfers and tours; Mercedes V-Class vans for larger groups.'
    }]
  })), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo-wordmark.jpg"
  }), /*#__PURE__*/React.createElement(FloatingContact, null));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TourDetail.jsx
try { (() => {
function TourDetail({
  mobile = false
}) {
  const {
    NavBar,
    TourItinerary,
    PriceCard,
    TestimonialCard,
    Footer,
    FloatingContact,
    ElectricFleetIndicator
  } = window.IdealgreenDesignSystem_e8e9f3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--stone-50)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: [{
      label: 'Transfers'
    }, {
      label: 'Tours'
    }, {
      label: 'Classic Cars'
    }, {
      label: 'About'
    }],
    logoSrc: "../../assets/logo-wordmark.jpg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 380,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photography/fleet-tesla-sintra.jpg",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(16,15,13,0.05),rgba(16,15,13,0.6))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: 32,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-caption)',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, "Private Tour"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-display)',
      marginTop: 6
    }
  }, "Sintra Full-Day Tour"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: mobile ? '24px 20px' : '40px 32px',
      display: 'grid',
      gridTemplateColumns: mobile ? '1fr' : '1fr 340px',
      gap: mobile ? 28 : 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(ElectricFleetIndicator, {
    percent: 100
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-secondary)',
      marginBottom: 32,
      maxWidth: 640
    }
  }, "A private day through Sintra's palaces and coastline, paced around you \u2014 not a bus schedule. Your guide adjusts stops if a queue is long or the light is better an hour later."), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--text-h3)',
      marginBottom: 20
    }
  }, "Itinerary"), /*#__PURE__*/React.createElement(TourItinerary, {
    stops: [{
      time: '09:00',
      title: 'Pickup at your hotel',
      description: 'Driver waits in the lobby with a name sign.'
    }, {
      time: '10:15',
      title: 'Pena Palace, Sintra',
      description: 'Skip-the-line entry, 90 minutes.'
    }, {
      time: '13:00',
      title: 'Lunch in Sintra village',
      description: 'Recommended, not included.'
    }, {
      time: '14:30',
      title: 'Cabo da Roca',
      description: 'Westernmost point of continental Europe.'
    }, {
      time: '16:00',
      title: 'Cascais coastal drive',
      description: 'Return via the Estoril coast road.'
    }, {
      time: '17:30',
      title: 'Drop-off at your hotel'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    name: "Robert H.",
    location: "United Kingdom",
    rating: 5,
    quote: "Our driver was waiting exactly where he said, even though our flight was 40 minutes late.",
    source: "Google"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 24
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    title: "Sintra Full-Day Tour",
    price: "\u20AC290",
    duration: "8 hours",
    maxPassengers: 4,
    vehicle: "Tesla Model Y",
    included: ['Private driver-guide', 'Bottled water', 'Flexible pacing'],
    excluded: ['Palace entry tickets', 'Lunch'],
    image: "../../assets/photography/landscape-cliff.jpg"
  })))), /*#__PURE__*/React.createElement(Footer, {
    logoSrc: "../../assets/logo-wordmark.jpg"
  }), /*#__PURE__*/React.createElement(FloatingContact, null));
}
window.TourDetail = TourDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TourDetail.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ClassicCarCard = __ds_scope.ClassicCarCard;

__ds_ns.DriverCard = __ds_scope.DriverCard;

__ds_ns.ElectricFleetIndicator = __ds_scope.ElectricFleetIndicator;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.RouteCard = __ds_scope.RouteCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TourItinerary = __ds_scope.TourItinerary;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.DateTimeField = __ds_scope.DateTimeField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PassengerSelector = __ds_scope.PassengerSelector;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.FloatingContact = __ds_scope.FloatingContact;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.TrustBar = __ds_scope.TrustBar;

})();
