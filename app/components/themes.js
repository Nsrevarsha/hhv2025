"use client"

import "../styles/themes.css"

export default function Themes() {
  const hackathonThemes = [
    {
      icon: "💪",
      title: "Living Health",
      subtitle: "& Well-being"
    },
    {
      icon: "🔓",
      title: "Open Innovation",
      subtitle: "& Technology"
    },
    {
      icon: "🌱",
      title: "Smart Sustainable",
      subtitle: "Solutions"
    },
    {
      icon: "🎓",
      title: "EdTech Impact",
      subtitle: "& Community"
    }
  ];

  return (
    <section id="themes" className="themes-section">
      <div className="container">
        <h2 className="title-themes">Themes</h2>
        <div className="themes-grid">
          {hackathonThemes.map((theme, index) => (
            <div key={index} className="theme-card">
              <div className="theme-icon">{theme.icon}</div>
              <div className="theme-text">
                <h3 className="theme-title">{theme.title}</h3>
                <p className="theme-subtitle">{theme.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
