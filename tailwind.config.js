/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pacific: '#1CA9C9',
        charcoal: '#333333',
        'pacific-dark': '#1693A5',
        'pacific-light': '#3FBBDB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            lineHeight: '1.75',
            // More specific and aggressive heading spacing
            'h1, h2, h3, h4, h5, h6': {
              marginTop: '0.8rem !important',
              marginBottom: '0.5rem !important',
            },
            h1: {
              fontSize: '2.25rem',
              fontWeight: '800',
              marginTop: '0.8rem !important',
              marginBottom: '0.75rem !important',
              '&:first-child': {
                marginTop: '0 !important',
              },
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '700',
              marginTop: '0.8rem !important',
              marginBottom: '0.5rem !important',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              marginTop: '0.6rem !important',
              marginBottom: '0.5rem !important',
            },
            h4: {
              fontSize: '1.25rem',
              fontWeight: '600',
              marginTop: '0.6rem !important',
              marginBottom: '0.5rem !important',
            },
            p: {
              marginBottom: '1rem',
              marginTop: '0.5rem',
            },
            ul: {
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
              marginTop: '0.5rem',
            },
            ol: {
              marginBottom: '1rem',
              paddingLeft: '1.5rem',
              marginTop: '0.5rem',
            },
            li: {
              marginTop: '0 !important',
              marginBottom: '0 !important',
              paddingLeft: '0',
              lineHeight: '1.5 !important',
            },
            'ul > li': {
              marginTop: '0 !important',
              marginBottom: '0 !important',
            },
            'ol > li': {
              marginTop: '0 !important',
              marginBottom: '0 !important',
            },
            'li > ul': {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            'li > ol': {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            'li > p': {
              marginTop: '0 !important',
              marginBottom: '0 !important',
            },
            'ul ul, ol ul, ul ol, ol ol': {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            blockquote: {
              borderLeftColor: '#1CA9C9',
              borderLeftWidth: '4px',
              paddingLeft: '1rem',
              fontStyle: 'italic',
              backgroundColor: '#f8fafc',
              padding: '1rem',
              borderRadius: '0.5rem',
              marginBottom: '1.5rem',
            },
            code: {
              backgroundColor: '#f1f5f9',
              color: '#1e293b',
              padding: '0.25rem 0.5rem',
              borderRadius: '0.375rem',
              fontSize: '0.875rem',
              fontWeight: '600',
              border: '1px solid #e2e8f0',
            },
            pre: {
              backgroundColor: '#0f172a',
              color: '#e2e8f0',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              overflow: 'auto',
              marginBottom: '1.5rem',
              marginTop: '1.5rem',
              border: '1px solid #334155',
              fontSize: '0.875rem',
              lineHeight: '1.7',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: '#e2e8f0',
              border: 'none',
              fontSize: '0.875rem',
              fontWeight: '400',
            },
            a: {
              color: '#1CA9C9',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: '#1693A5',
                textDecoration: 'underline',
              },
            },
            table: {
              marginBottom: '1.5rem',
              marginTop: '1.5rem',
            },
            'table th': {
              backgroundColor: '#f8fafc',
              fontWeight: '600',
              padding: '0.75rem',
            },
            'table td': {
              padding: '0.75rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};