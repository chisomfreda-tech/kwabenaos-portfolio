import React, { useState } from 'react';

const App = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const timeline = [
    {
      year: '2024-25',
      role: 'Graduate Researcher',
      org: 'UC Berkeley EMAC Lab',
      headline: 'Built ML models to find hidden energy hogs across California',
      metric: '85%',
      metricLabel: 'classification accuracy',
      description: 'Coordinating between PG&E, SCE, and CPUC to identify energy-intensive facilities the grid didn\'t know existed.',
      color: '#3B82F6'
    },
    {
      year: '2024',
      role: 'Digital Innovation Analyst',
      org: 'EDF Innovation Lab',
      headline: 'Mapped the coming electricity tsunami from AI data centers',
      metric: '60-80%',
      metricLabel: 'projected demand increase',
      description: 'Techno-economic analysis that shaped EDF\'s US infrastructure investment strategy.',
      color: '#10B981'
    },
    {
      year: '2021-24',
      role: 'Founder',
      org: 'Envision Digital',
      headline: 'Built a digital signage company from zero',
      metric: '$30K+',
      metricLabel: 'revenue generated',
      description: '30+ installations. 50+ leads. Proof I can build and sell.',
      color: '#F59E0B'
    },
    {
      year: '2021-23',
      role: 'Construction Supervisor',
      org: 'Genser Energy',
      headline: 'Delivered power to gold mines where the grid doesn\'t reach',
      metric: '$60M',
      metricLabel: 'project value',
      description: 'Gas turbines, transformers, auxiliary systems — coordinating it all for Orezone Bombore.',
      color: '#EF4444'
    },
    {
      year: '2020-21',
      role: 'Project Development Analyst',
      org: 'Genser Energy',
      headline: 'Designed hybrid power plants for off-grid mining',
      metric: '$200M+',
      metricLabel: 'in proposals won',
      description: '40-60MW solar + gas systems. Financial models that won deals.',
      color: '#8B5CF6'
    },
    {
      year: '2019',
      role: 'OTR Project Intern',
      org: 'General Electric',
      headline: 'Helped commission Ghana\'s largest power plant',
      metric: '400MW',
      metricLabel: 'plant capacity',
      description: '100+ logistics items coordinated. 10+ stakeholders aligned.',
      color: '#06B6D4'
    }
  ];

  const skills = [
    { name: 'Python', color: '#3B82F6' },
    { name: 'Machine Learning', color: '#3B82F6' },
    { name: 'MATLAB/Simulink', color: '#3B82F6' },
    { name: 'Tableau', color: '#06B6D4' },
    { name: 'Power Systems', color: '#10B981' },
    { name: 'Solar PV Design', color: '#10B981' },
    { name: 'Gas Turbines', color: '#10B981' },
    { name: 'Energy Markets', color: '#10B981' },
    { name: 'Financial Modeling', color: '#F59E0B' },
    { name: 'Project Management', color: '#F59E0B' },
    { name: 'AutoCAD', color: '#8B5CF6' },
    { name: 'Blockchain', color: '#3B82F6' },
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0a0a0a', 
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Grid background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        opacity: 0.15,
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      {/* Gradient glow */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '60%',
        background: 'radial-gradient(ellipse at center top, rgba(59, 130, 246, 0.15) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #0a0a0a 0%, transparent 100%)'
      }}>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: 300, 
          letterSpacing: '0.3em',
          color: 'rgba(255,255,255,0.9)'
        }}>
          KOS
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['WORK', 'RESEARCH', 'CONTACT'].map(item => (
            <span 
              key={item}
              style={{ 
                fontSize: '12px', 
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer'
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center',
        padding: '0 48px',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>
          <p style={{ 
            fontSize: '12px', 
            letterSpacing: '0.4em',
            color: 'rgba(59, 130, 246, 0.8)',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            Energy Systems · Data Science · Builder
          </p>
          
          <h1 style={{ 
            fontSize: 'clamp(48px, 10vw, 96px)',
            fontWeight: 200,
            lineHeight: 0.95,
            marginBottom: '32px'
          }}>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.9)' }}>Kwabena</span>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.9)' }}>Owusu</span>
            <span style={{ 
              display: 'block',
              background: 'linear-gradient(90deg, #3B82F6, #06B6D4, #10B981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Sarfo
            </span>
          </h1>

          <p style={{ 
            fontSize: '20px',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 300,
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '48px'
          }}>
            I've managed <span style={{ color: '#fff' }}>$60M+ in energy projects</span>, from gas turbines in West African gold mines 
            to ML models tracking California's hidden energy loads. UC Berkeley trained. 
            <span style={{ color: '#10B981' }}> Entrepreneur at heart.</span>
          </p>

          {/* Stats */}
          <div style={{ 
            display: 'flex', 
            gap: '64px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            {[
              { value: '$60M+', label: 'Projects Managed' },
              { value: '2', label: 'Published Papers' },
              { value: '5+', label: 'Years in Energy' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: '32px', fontWeight: 300, color: '#fff', marginBottom: '4px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Energy visualization */}
        <div style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.6
        }}>
          <svg width="400" height="400" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6"/>
                <stop offset="50%" stopColor="#06b6d4"/>
                <stop offset="100%" stopColor="#10b981"/>
              </linearGradient>
            </defs>
            {/* Rings */}
            <circle cx="200" cy="200" r="100" fill="none" stroke="url(#energyGrad)" strokeWidth="1" opacity="0.5" strokeDasharray="10 20"/>
            <circle cx="200" cy="200" r="140" fill="none" stroke="url(#energyGrad)" strokeWidth="1" opacity="0.4" strokeDasharray="15 25"/>
            <circle cx="200" cy="200" r="180" fill="none" stroke="url(#energyGrad)" strokeWidth="1" opacity="0.3" strokeDasharray="20 30"/>
            {/* Center */}
            <circle cx="200" cy="200" r="8" fill="#3b82f6"/>
            {/* Nodes */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 200 + 120 * Math.cos(rad);
              const y = 200 + 120 * Math.sin(rad);
              return (
                <g key={i}>
                  <line x1="200" y1="200" x2={x} y2={y} stroke="url(#energyGrad)" strokeWidth="1" opacity="0.3"/>
                  <circle cx={x} cy={y} r="5" fill="#10b981" opacity="0.8"/>
                </g>
              );
            })}
          </svg>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ padding: '128px 48px', position: 'relative' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '12px', 
            letterSpacing: '0.4em',
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            marginBottom: '64px'
          }}>
            The Journey
          </h2>
          
          {timeline.map((item, index) => (
            <div 
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr',
                gap: '48px',
                marginBottom: '64px',
                position: 'relative'
              }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Year */}
              <div style={{ 
                fontSize: '32px', 
                fontWeight: 200,
                color: hoveredProject === index ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)',
                transition: 'color 0.3s'
              }}>
                {item.year}
              </div>

              {/* Content */}
              <div style={{
                padding: '32px',
                borderRadius: '16px',
                border: `1px solid ${hoveredProject === index ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)'}`,
                backgroundColor: hoveredProject === index ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)',
                transition: 'all 0.3s'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <p style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {item.org}
                    </p>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>{item.role}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '36px', fontWeight: 300, color: item.color }}>
                      {item.metric}
                    </span>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>{item.metricLabel}</p>
                  </div>
                </div>

                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: 300, 
                  color: 'rgba(255,255,255,0.9)',
                  marginBottom: '16px',
                  lineHeight: 1.3
                }}>
                  {item.headline}
                </h3>
                
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)', fontWeight: 300, lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: '128px 48px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '12px', 
            letterSpacing: '0.4em',
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            marginBottom: '48px'
          }}>
            Toolkit
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {skills.map((skill, i) => (
              <span 
                key={i}
                style={{
                  padding: '10px 20px',
                  borderRadius: '100px',
                  border: `1px solid ${skill.color}40`,
                  color: `${skill.color}cc`,
                  fontSize: '14px',
                  transition: 'all 0.2s',
                  cursor: 'default'
                }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section style={{ padding: '128px 48px', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: 'clamp(36px, 6vw, 56px)',
          fontWeight: 200,
          color: 'rgba(255,255,255,0.9)',
          marginBottom: '24px'
        }}>
          Let's build something.
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
          Open to opportunities in renewable energy, data science, and power systems engineering.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a 
            href="mailto:oksarfo13@gmail.com"
            style={{
              padding: '16px 32px',
              backgroundColor: '#fff',
              color: '#0a0a0a',
              borderRadius: '100px',
              textDecoration: 'none',
              fontWeight: 500
            }}
          >
            oksarfo13@gmail.com
          </a>
          <a 
            href="tel:510-990-7491"
            style={{
              padding: '16px 32px',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              borderRadius: '100px',
              textDecoration: 'none'
            }}
          >
            510-990-7491
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '48px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '14px'
      }}>
        <span>© 2025 Kwabena Owusu Sarfo</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Resume</a>
        </div>
      </footer>
    </div>
  );
};

export default App;

