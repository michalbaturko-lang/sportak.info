export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 mt-10 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 mb-2">
          <span className="font-bold text-white">Sportak.info</span> © {new Date().getFullYear()}
        </p>
        <p className="text-sportak-purple text-sm">
          🚀 Vytvořil Míša (9 let) s pomocí Claude AI
        </p>
      </div>
    </footer>
  )
}
