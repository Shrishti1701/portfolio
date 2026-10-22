import { useEffect, useRef, useState } from 'react';
import { experience, profile, projects, skillGroups } from './data/portfolioData.js';
import avatarImage from '../shrishti_avatar_3d.jpg';
import avatarBlink from '../shrishti_avatar_3d_blink.jpg';
import namastePose from '../namaste_pose_3d.jpg';
import thinkingPose from '../avatar_thinking_3d.jpg';
import thinkingBlink from '../avatar_thinking_blink_3d.jpg';
import presentingPose from '../avatar_presenting_3d.jpg';
import presentingBlink from '../avatar_presenting_blink_3d.jpg';
import codingPose from '../avatar_coding_3d.jpg';
import codingBlink from '../avatar_coding_blink_3d.jpg';
import handsRisingPose from '../avatar_namaste_raise_3d.jpg';
import handsAlmostJoinedPose from '../avatar_namaste_almost_3d.jpg';

const sectionPoses = { home: 'idle', about: 'thinking', skills: 'presenting', work: 'coding', experience: 'thinking', leadership: 'presenting', contact: 'namaste' };
const sectionGreetings = { home: 'Welcome!', about: 'A little about me', skills: 'Tools I work with', work: 'Things I’ve built', experience: 'My journey so far', leadership: 'Sharing ideas', contact: 'Let’s connect' };
const skillIconPaths = {
  code: 'M8 5 3 12l5 7M16 5l5 7-5 7M14 3l-4 18',
  model: 'M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Zm0 0v9m8-4.5-8 4.5-8-4.5m8 4.5v9',
  agent: 'M12 3v4m0 10v4M3 12h4m10 0h4M5.64 5.64l2.83 2.83m7.06 7.06 2.83 2.83m0-12.72-2.83 2.83m-7.06 7.06-2.83 2.83M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
  chart: 'M4 19V5m0 14h17M7 15l4-4 3 2 6-7',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5',
  tools: 'm14.5 6.5 3-3a6 6 0 0 1-8 8l-5.8 5.8a2.1 2.1 0 0 1-3-3l5.8-5.8a6 6 0 0 1 8-8l-3 3 3 3Z',
};

function InteractiveAvatar() {
  const [greetingStep, setGreetingStep] = useState(0);
  const [blinking, setBlinking] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const stage = useRef(null);
  const image = useRef(null);
  const frame = useRef(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const animate = () => {
    if (!image.current) return;
    current.current.x += (target.current.x - current.current.x) * 0.12;
    current.current.y += (target.current.y - current.current.y) * 0.12;
    image.current.style.setProperty('--rx', `${-current.current.y}deg`);
    image.current.style.setProperty('--ry', `${current.current.x}deg`);
    image.current.style.setProperty('--tx', `${current.current.x * 0.65}px`);
    image.current.style.setProperty('--ty', `${current.current.y * 0.55}px`);
    const moving = Math.abs(target.current.x - current.current.x) > 0.02 || Math.abs(target.current.y - current.current.y) > 0.02;
    stage.current?.querySelectorAll('.floating-tech, .mini-pipeline').forEach((chip) => {
      const depth = Number(chip.dataset.depth || 1);
      chip.style.setProperty('--mx', `${current.current.x * depth}px`);
      chip.style.setProperty('--my', `${current.current.y * depth}px`);
    });
    if (moving) frame.current = requestAnimationFrame(animate);
    else frame.current = 0;
  };
  const move = (event) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
    const rect = event.currentTarget.getBoundingClientRect();
    target.current.x = Math.max(-7, Math.min(7, ((event.clientX - rect.left) / rect.width - 0.5) * 14));
    target.current.y = Math.max(-6, Math.min(6, ((event.clientY - rect.top) / rect.height - 0.5) * 12));
    if (!frame.current) frame.current = requestAnimationFrame(animate);
  };
  const reset = () => { target.current = { x: 0, y: 0 }; if (!frame.current) frame.current = requestAnimationFrame(animate); };
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => cancelAnimationFrame(frame.current);
    let blinkEnd;
    const blinkInterval = window.setInterval(() => {
      setBlinking(true);
      window.clearTimeout(blinkEnd);
      blinkEnd = window.setTimeout(() => setBlinking(false), 180);
    }, 5200);
    return () => { window.clearInterval(blinkInterval); window.clearTimeout(blinkEnd); cancelAnimationFrame(frame.current); };
  }, []);
  useEffect(() => {
    if (activeSection !== 'home' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setGreetingStep(0);
      return undefined;
    }
    let sequenceTimers = [];
    const playGreeting = () => {
      sequenceTimers.forEach(window.clearTimeout);
      setGreetingStep(1);
      sequenceTimers = [
        window.setTimeout(() => setGreetingStep(2), 500),
        window.setTimeout(() => setGreetingStep(3), 1000),
        window.setTimeout(() => setGreetingStep(0), 3300),
      ];
    };
    const start = window.setTimeout(playGreeting, 900);
    const repeat = window.setInterval(playGreeting, 12500);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(repeat);
      sequenceTimers.forEach(window.clearTimeout);
      setGreetingStep(0);
    };
  }, [activeSection]);
  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section[id]')];
    const observer = new IntersectionObserver((entries) => {
      const active = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (active) setActiveSection(active.target.id);
    }, { rootMargin: '-38% 0px -38% 0px', threshold: [0, 0.5, 1] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const welcomePose = { 1: 'raise', 2: 'almost', 3: 'namaste' }[greetingStep];
  const pose = activeSection === 'home' && welcomePose ? welcomePose : (sectionPoses[activeSection] || 'idle');
  const canBlink = ['idle', 'thinking', 'presenting', 'coding'].includes(pose);
  const following = activeSection !== 'home';
  return <div ref={stage} className={`avatar-stage${following ? ' is-following' : ''} pose-${pose}`} onPointerMove={move} onPointerLeave={reset} onPointerCancel={reset}>
    <div className="avatar-halo" aria-hidden="true" /><div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
    <svg className="hero-network" viewBox="0 0 460 460" fill="none" aria-hidden="true">
      <path className="network-line network-line-one" d="M32 126 112 82l62 36 65-69 81 48 83-31M53 325l75-67 69 44 67-74 87 48 62-41M112 82l16 176m62 44 49-297m67 21-42 172m123 17-55 39" />
      <path className="network-line network-line-two" d="M32 126 53 325m81-243 209 15M174 118l23 184m-132 23 255-19m-81-265 28 143" />
      <circle className="network-node node-a" cx="112" cy="82" r="4"/><circle className="network-node node-b" cx="239" cy="49" r="4"/><circle className="network-node node-c" cx="320" cy="97" r="4"/><circle className="network-node node-d" cx="128" cy="258" r="4"/><circle className="network-node node-e" cx="197" cy="302" r="4"/><circle className="network-node node-f" cx="284" cy="228" r="4"/><circle className="network-node node-g" cx="371" cy="276" r="4"/>
    </svg>
    <div className="floating-tech tech-python" data-depth="1.4"><span className="tech-glyph">Py</span> PYTHON</div>
    <div className="floating-tech tech-ml" data-depth="-1"><span className="tech-glyph glyph-blue">ML</span> ML / NLP</div>
    <div className="floating-tech tech-react" data-depth="1.2"><span className="tech-glyph glyph-blue">&lt;/&gt;</span> REACT</div>
    <div className="floating-tech tech-data" data-depth="-1.3"><span className="tech-glyph">D</span> DATA</div>
    <div className="mini-pipeline" data-depth="0.65" aria-hidden="true"><div className="pipeline-heading"><span className="pipeline-dot"/> DATA TO INSIGHT</div><div className="pipeline-chart"><svg viewBox="0 0 120 36" aria-hidden="true"><path d="M2 28 22 22 40 25 60 11 78 17 98 5 118 8"/><circle cx="98" cy="5" r="2.5"/></svg></div><div className="pipeline-steps"><span>DATA</span><i/><span>MODEL</span><i/><span>OUTPUT</span></div></div>
    <div ref={image} className={`avatar-frame${blinking && canBlink ? ' is-blinking' : ''}`}>
      <img className="avatar avatar-idle" src={avatarImage} alt="3D avatar of Shrishti Banshiar at her desk" />
      <img className="avatar avatar-blink" src={avatarBlink} alt="" aria-hidden="true" />
      <img className="avatar avatar-thinking" src={thinkingPose} alt="" aria-hidden="true" />
      <img className="avatar avatar-thinking-blink" src={thinkingBlink} alt="" aria-hidden="true" />
      <img className="avatar avatar-presenting" src={presentingPose} alt="" aria-hidden="true" />
      <img className="avatar avatar-presenting-blink" src={presentingBlink} alt="" aria-hidden="true" />
      <img className="avatar avatar-coding" src={codingPose} alt="" aria-hidden="true" />
      <img className="avatar avatar-coding-blink" src={codingBlink} alt="" aria-hidden="true" />
      <img className="avatar avatar-hands-rising" src={handsRisingPose} alt="" aria-hidden="true" />
      <img className="avatar avatar-hands-almost" src={handsAlmostJoinedPose} alt="" aria-hidden="true" />
      <img className="avatar avatar-namaste" src={namastePose} alt="" aria-hidden="true" />
    </div>
    <div className="welcome-bubble"><span><strong>{sectionGreetings[activeSection] || sectionGreetings.home}</strong><small>Scroll along — I’m right here.</small></span></div>
    <span className="avatar-caption"><span className="status-dot" /> AI / ML · Data Science</span>
  </div>;
}

function SectionLabel({ number, children }) { return <div className="section-label"><span>{number}</span>{children}</div>; }

function SkillIcon({ name }) {
  return <svg className="skill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={skillIconPaths[name]} /></svg>;
}

function ProjectCard({ project }) {
  return <article className={`project-card${project.featured ? ' featured' : ''}`}>
    <div className="project-top"><span className="project-kicker">PROJECT {project.number}</span><span className="project-status">{project.status}</span></div>
    <h3>{project.name}</h3><p className="project-description">{project.description}</p>
    {project.details.length > 0 && <ul className="project-details">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
    <div className="project-stack">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
    {project.capabilities?.length > 0 && <div className="project-capabilities" aria-label="Project capabilities">{project.capabilities.map((capability) => <span key={capability}>{capability}</span>)}</div>}
    {(project.githubUrl || project.liveDemoUrl) && <div className="project-actions">
      {project.githubUrl && <a className="project-action" href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repository <span aria-hidden="true">↗</span></a>}
      {project.liveDemoUrl && <a className="project-action secondary" href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">Live Demo <span aria-hidden="true">↗</span></a>}
    </div>}
  </article>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const closeMenu = () => setMenuOpen(false);
  const visibleSkillGroups = activeSkillCategory === 'All' ? skillGroups : skillGroups.filter((group) => group.title === activeSkillCategory);
  return <>
    <header className="nav"><a className="brand" href="#home" aria-label="Shrishti Banshiar, home" onClick={closeMenu}><span className="brand-mark">S</span> shrishti<span className="brand-period">.</span></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen((open) => !open)}><span/><span/></button>
      <nav className={menuOpen ? 'open' : ''} id="main-navigation" aria-label="Main navigation"><a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#work" onClick={closeMenu}>Projects</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#education" onClick={closeMenu}>Education</a><a className="nav-contact" href="#contact" onClick={closeMenu}>Contact <span>↗</span></a></nav>
    </header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line" /> AI ENGINEERING · APPLIED MACHINE LEARNING</div>
          <h1>I build AI<br />that turns data<br /><em>into decisions.</em></h1>
          <p className="role-line">{profile.headline}</p>
          <p className="intro">I’m Shrishti, an AI engineer and IIT Madras graduate. I build practical AI applications, from NLP and agentic AI tools to data products people can explore and use.</p>
          <p className="intro supporting">I use Python, machine learning, and APIs to build clear interfaces that make model outputs useful in practice.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">View Projects <span>↓</span></a>{profile.resumeUrl ? <a className="button button-outline" href={profile.resumeUrl} download>Download Resume <span aria-hidden="true">↓</span></a> : <span className="button button-outline button-disabled" aria-disabled="true" title={`Add your PDF at public${profile.resumePath} to enable downloads`}>Resume PDF coming soon</span>}<a className="text-link" href="#contact">Contact Me <span aria-hidden="true">↗</span></a></div>
          <div className="hero-note"><span className="note-rule" /> IIT Madras · GSoC 2025 · AI Engineering</div>
        </div>
        <InteractiveAvatar />
        <div className="hero-index">01 <span /> 06</div>
      </section>

      <section className="about section-wrap section-block" id="about"><SectionLabel number="01">ABOUT ME</SectionLabel><div className="about-content">
        <h2>From model idea<br /><em>to useful product.</em></h2>
        <div className="about-text"><p>I earned a B.S. in Data Science and Applications from IIT Madras, graduating with a CGPA of 8.9/10. I bring data, models, APIs, and user interfaces together to make AI workflows useful in practice.</p><p>At Onion Information Security Solutions, I contributed to agentic AI tools and machine-learning work. Through Google Summer of Code 2025, I worked on open-source AI and data tooling, including pipeline components and integrations.</p><div className="about-tags"><span>IIT Madras · CGPA 8.9/10</span><span>AI Engineering</span><span>GSoC 2025</span></div></div>
      </div></section>

      <section className="skills-section section-block" id="skills"><div className="section-wrap"><SectionLabel number="02">TECHNICAL SKILLS</SectionLabel><div className="skills-heading"><h2>Built across<br /><em>the AI stack.</em></h2><p>Tools I use across software development, data analysis, machine learning, and AI applications.</p></div><div className="skill-filters" role="group" aria-label="Filter skills by category"><button type="button" aria-pressed={activeSkillCategory === 'All'} className={activeSkillCategory === 'All' ? 'active' : ''} onClick={() => setActiveSkillCategory('All')}>All skills</button>{skillGroups.map((group) => <button type="button" key={group.title} aria-pressed={activeSkillCategory === group.title} className={activeSkillCategory === group.title ? 'active' : ''} onClick={() => setActiveSkillCategory(group.title)}>{group.title}</button>)}</div><div className="skill-grid" aria-live="polite">{visibleSkillGroups.map((group) => <article className={`skill-card${group.featured ? ' featured' : ''}`} key={group.title}><div className="skill-card-heading"><span className="skill-icon-wrap"><SkillIcon name={group.icon} /></span><span className="skill-number">0{skillGroups.indexOf(group) + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.skills.map((entry) => { const skill = typeof entry === 'string' ? { name: entry } : entry; return <span key={skill.name} className={skill.status === 'learning' ? 'currently-learning' : ''} title={skill.status === 'learning' ? 'Currently learning' : undefined}>{skill.name}{skill.status === 'learning' && <small>Currently Learning</small>}</span>; })}</div></article>)}</div><p className="skills-note"><span className="learning-key" aria-hidden="true" /> Badges marked “Currently Learning” identify areas I’m actively developing.</p></div></section>

      <section className="work section-wrap section-block" id="work"><SectionLabel number="03">SELECTED PROJECTS</SectionLabel><div className="work-heading"><h2>AI ideas,<br /><em>made usable.</em></h2><p>Explore the applications, data pipelines, and NLP projects I’ve built across AI and data.</p></div><div className="project-grid">{projects.map((project) => <ProjectCard key={project.name} project={project} />)}</div><p className="project-footnote">See more code and experiments on <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></p></section>

      <section className="experience section-block" id="experience"><div className="section-wrap"><SectionLabel number="04">EXPERIENCE &amp; EDUCATION</SectionLabel><div className="experience-grid">
        <div><h2>Applied AI,<br /><em>built with teams.</em></h2><p className="experience-sub">My experience spans AI engineering, open-source contributions, and practical product work.</p></div>
        <div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.role}><span className="timeline-dot" aria-hidden="true"/><div className="timeline-meta">{item.eyebrow}</div><div className="timeline-title-row"><h3>{item.role}</h3><span className="timeline-date">{item.dates}</span></div><p className="timeline-org">{item.organization}{item.location && ` · ${item.location}`}</p><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>{item.role === 'AI Engineer Intern' && <div className="credential-note"><span>SUPPORTING DOCUMENT</span> Character certificate issued 1 October 2026</div>}</article>)}</div>
      </div><div className="education-grid" id="education"><SectionLabel number="ED">EDUCATION</SectionLabel><div className="education-cards"><article className="education-card"><div className="timeline-meta">COMPLETED · JUNE 2026</div><h3>B.S. in Data Science and Applications</h3><p>Indian Institute of Technology Madras</p><span className="education-result">CGPA: 8.9/10</span></article><article className="education-card in-progress"><div className="timeline-meta">IN PROGRESS · EXPECTED JUNE 2027</div><h3>Diploma in Programming</h3><p>Indian Institute of Technology Madras</p></article></div></div></div></section>

      <section className="leadership section-wrap section-block" id="leadership"><SectionLabel number="05">LEADERSHIP &amp; COMMUNICATION</SectionLabel><div className="leadership-card"><div><div className="timeline-meta">WEBINAR HOST &amp; MODERATOR</div><h2>HR Samvaad</h2><p>People Management &amp; HR Analytics</p></div><div className="leadership-detail"><p>Hosted and moderated a discussion with <strong>Mr. Rajat Mendiratta</strong>.</p><span>The session involved more than 200 HR leaders.</span></div></div></section>

      <section className="contact section-wrap section-block" id="contact"><SectionLabel number="06">CONTACT</SectionLabel><div className="contact-body"><div><h2>Let’s build<br /><em>useful AI.</em></h2><p>I’m open to AI engineering roles where I can build practical machine-learning systems and AI-powered products. Let’s talk.</p></div><div className="contact-details"><a href={`mailto:${profile.email}`}><span className="contact-label">EMAIL</span>{profile.email}<span className="contact-arrow">↗</span></a><a href={`tel:${profile.phone.replaceAll(' ', '')}`}><span className="contact-label">PHONE</span>{profile.phone}<span className="contact-arrow">↗</span></a>{profile.resumeUrl ? <a href={profile.resumeUrl} download><span className="contact-label">RESUME</span>Download resume<span className="contact-arrow">↓</span></a> : <div className="contact-location"><span className="contact-label">RESUME</span><span>PDF coming soon</span><span className="contact-hint">Add it at public{profile.resumePath}</span></div>}<div className="contact-location"><span className="contact-label">LOCATION</span>{profile.location}</div><div className="social-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div></div></section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">S</span> shrishti<span className="brand-period">.</span></a><span>Built with curiosity <span className="footer-star">✳</span></span><a href="#home">Back to top ↑</a></footer>
  </>;
}

export default App;
