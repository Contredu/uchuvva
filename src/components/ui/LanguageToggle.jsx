import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.language?.startsWith('en') ? 'en' : 'es'

  const toggle = (lang) => {
    if (lang !== current) i18n.changeLanguage(lang)
  }

  return (
    <div
      className="flex items-center border rounded-full overflow-hidden text-[11px] tracking-widest font-['Inter'] font-medium"
      style={{ borderColor: 'var(--color-sage)', height: '32px' }}
    >
      {['es', 'en'].map((lang) => (
        <button
          key={lang}
          onClick={() => toggle(lang)}
          className="px-3 h-full uppercase transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: current === lang ? 'var(--color-sage)' : 'transparent',
            color: current === lang ? 'white' : 'var(--color-sage)',
          }}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}
