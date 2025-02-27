/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: ['class'],
    future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
  	extend: {
  		colors: {
  			'100': '],',
  			'accent-1': '#FAFAFA',
  			'accent-2': '#EAEAEA',
  			'accent-7': '#333',
  			success: '#0070f3',
  			cyan: '#79FFE1',
  			highlight: 'colors.neutral[',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'28': '7rem'
  		},
  		letterSpacing: {
  			tighter: '-.04em'
  		},
  		lineHeight: {
  			tight: 1.2
  		},
  		fontSize: {
  			'5xl': '2.5rem',
  			'6xl': '2.75rem',
  			'7xl': '4.5rem',
  			'8xl': '6.25rem'
  		},
  		boxShadow: {
  			sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
  			md: '0 8px 30px rgba(0, 0, 0, 0.12)',
  			highlight: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
  		},
  		screens: {
  			narrow: {
  				raw: '(max-aspect-ratio: 3 / 2)'
  			},
  			wide: {
  				raw: '(min-aspect-ratio: 3 / 2)'
  			},
  			'taller-than-854': {
  				raw: '(min-height: 854px)'
  			},
  			mxl: {
  				max: '1279px'
  			},
  			mlg: {
  				max: '1023px'
  			},
  			mmd: {
  				max: '767px'
  			},
  			msm: {
  				max: '639px'
        },
        mxs: {
          max: '399px'
        },
        xs: {
          min: '400px'
        }
  		},
  		keyframes: {
  			shimmer: {
  				'100%': {
  					transform: 'translateX(100%)'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
        },
        tag_ping: {
          '0%': {
            inset: '0px',
            opacity: '1'
          },
          '100%': {
            inset: '-16px',
            opacity: '0'
          }
        }
  		},
  		animation: {
  			shimmer: 'shimmer .75s ease-in-out infinite',
  			gradient: 'gradient 8s linear infinite',
        'background-position-spin': 'background-position-spin 3000ms infinite alternate',
        ping: 'tag_ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
