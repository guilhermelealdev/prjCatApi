import './Header.css';

export function Header() {
  return (
    <header className="hero-container">
      <div className="hero-overlay">
        <div className="hero-content">
          
          <div className="logo-section">
            <span className="logo-icon">🐾</span>
            <h1 className="logo-title">Caterest</h1>
          </div>

          <div className="phrase-badge">
            Chegou seu momento de relaxar
          </div>

          <p className="hero-description">
            Veja fotos de gatinhos fofos, crie memes personalizados e descubra 
            curiosidades que vão derreter seu coração.
          </p>

          <div className="scroll-indicator">
            <span>Explore o universo felino</span>
            <div className="arrow">↓</div>
          </div>
          
        </div>
      </div>
    </header>
  );
}