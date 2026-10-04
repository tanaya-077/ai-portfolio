
'use client';

import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';

const skills = [
  {
    number: '01',
    title: 'Agentic AI',
    items: ['AI Agents', 'Tool Calling', 'Multi-Agent Systems'],
  },
  {
    number: '02',
    title: 'LLM Engineering',
    items: ['LLMs', 'Prompt Engineering', 'Structured Outputs'],
  },
  {
    number: '03',
    title: 'Knowledge Systems',
    items: ['RAG', 'Vector Databases', 'Embeddings'],
  },
  {
    number: '04',
    title: 'Development',
    items: ['Python', 'TypeScript', 'Next.js', 'APIs'],
  },
];

const projects = [
  {
    number: '01',
    type: 'AI AUTOMATION',
    title: 'AgentFlow',
    description:
      'An AI agent that plans tasks, selects tools and executes multi-step workflows.',
    stack: 'Python / LLMs / Tool Calling',
    symbol: '↗',
    style: 'project-lime',
  },
  {
    number: '02',
    type: 'RETRIEVAL AUGMENTED GENERATION',
    title: 'Context AI',
    description:
      'A knowledge assistant that retrieves relevant information and generates grounded answers.',
    stack: 'RAG / Embeddings / Vector DB',
    symbol: '⌘',
    style: 'project-purple',
  },
  {
    number: '03',
    type: 'INTELLIGENT WORKFLOWS',
    title: 'OpsPilot',
    description:
      'A workflow assistant designed to connect APIs and automate repetitive operations.',
    stack: 'Agents / APIs / Next.js',
    symbol: '◎',
    style: 'project-orange',
  },
];

export default function Home() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const form = event.currentTarget;

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    setStatus('Email is not configured yet. Please use the email link.');
    return;
  }

  setSending(true);
  setStatus('');

  try {
    await emailjs.sendForm(
      serviceId,
      templateId,
      form,
      { publicKey },
    );

    form.reset();
    setStatus('Message sent successfully. Thank you!');
  } catch {
    setStatus('Message could not be sent. Please try the email link.');
  } finally {
    setSending(false);
  }
}

  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <a href="#home" className="brand">
          T<span>.</span>
        </a>

        <span className="availability">
          <span className="status-dot" />
          BUILDING WITH AI
        </span>

        <a href="#contact" className="nav-link">
          LET&apos;S TALK <span>↗</span>
        </a>
      </header>

      {/* 01 — Intro */}
      <section id="home" className="hero section-pad">
        <div className="hero-top mono">
          <span>PORTFOLIO / 2026</span>
          <span>INDEPENDENT DEVELOPER</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow reveal" data-scroll data-scroll-class="is-visible">
            HELLO, I BUILD INTELLIGENT SYSTEMS.
          </p>

          <h1>
            <span className="headline-line">
              <span className="headline-inner reveal" data-scroll data-scroll-class="is-visible">
                AGENTIC
              </span>
            </span>
            <span className="headline-line">
              <span className="headline-inner reveal" data-scroll data-scroll-class="is-visible">
                <span className="accent">AI</span> DEVELOPER<span className="accent">.</span>
              </span>
            </span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-description reveal" data-scroll data-scroll-class="is-visible">
              I design and build AI agents that think through tasks,
              use tools, and turn complex workflows into useful products.
            </p>

            <a href="#projects" className="round-link" aria-label="Explore projects">
              ↓
            </a>
          </div>
        </div>

        <div className="hero-footer mono">
          <span>AI AGENTS · AUTOMATION · ENGINEERING</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      {/* 02 — Skills */}
      <section id="skills" className="skills section-pad">
        <div className="section-heading">
          <p className="eyebrow mono">01 / WHAT I WORK WITH</p>
          <h2 data-scroll data-scroll-class="is-visible" className="reveal">
            THINK IN <span className="accent">SYSTEMS.</span>
            <br />
            BUILD WITH INTENT.
          </h2>
          <p className="section-intro">
            From reasoning to retrieval, I bring the pieces together
            to build AI-powered applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article
              className="skill-card reveal"
              data-scroll
              data-scroll-class="is-visible"
              key={skill.number}
            >
              <div className="card-top mono">
                <span>{skill.number} / 04</span>
                <span>+</span>
              </div>

              <h3>{skill.title}</h3>

              <ul>
                {skill.items.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                    <span className="skill-arrow">↗</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* 03 — Projects */}
      <section id="projects" className="projects section-pad">
        <div className="projects-heading">
          <p className="eyebrow mono">02 / SELECTED EXPERIMENTS</p>
          <h2 className="reveal" data-scroll data-scroll-class="is-visible">
            IDEAS INTO
            <br />
            <span className="accent">INTELLIGENCE.</span>
          </h2>
          <p className="section-intro">
            A selection of AI concepts and engineering projects.
            Replace these sample projects with your real case studies.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article
              className="project-card reveal"
              data-scroll
              data-scroll-class="is-visible"
              key={project.number}
            >
              <div className={`project-art ${project.style}`}>
                <span className="project-art-label mono">
                  EXPERIMENT / {project.number}
                </span>
                <span className="project-symbol" aria-hidden="true">
                  {project.symbol}
                </span>
                <span className="project-art-bottom mono">
                  INTELLIGENCE IN MOTION
                </span>
              </div>

              <div className="project-info">
                <div className="project-title-row">
                  <div>
                    <p className="eyebrow mono">{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-meta">
                  <span className="mono">{project.stack}</span>
                  <span className="mono">CASE STUDY / CONCEPT</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 04 — Contact */}
      <section id="contact" className="contact section-pad">
        <div className="contact-top mono">
          <span>03 / START A CONVERSATION</span>
          <span>OPEN TO INTERESTING PROBLEMS</span>
        </div>

        <p className="eyebrow">HAVE AN IDEA?</p>

        <h2 className="contact-title reveal" data-scroll data-scroll-class="is-visible">
          LET&apos;S BUILD
          <br />
          SOMETHING
          <br />
          <span className="accent">INTELLIGENT.</span>
        </h2>

        <div className="contact-layout">
          <div className="contact-copy">
            <p>
              Have a project, an AI problem to solve, or an interesting
              idea? Tell me what you are thinking.
            </p>

            <a
              className="email-link"
              href="mailto:hello@example.com"
            >
              HELLO@EXAMPLE.COM ↗
            </a>

            <div className="social-links mono">
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GITHUB ↗
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LINKEDIN ↗
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">YOUR NAME</label>
            <input id="name" name="name" required placeholder="Jane Smith" />

            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@example.com"
            />

            <label htmlFor="title">WHAT IS IT ABOUT?</label>
            <input
              id="title"
              name="title"
              required
              placeholder="An AI project, collaboration..."
            />

            <label htmlFor="message">YOUR MESSAGE</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me a little about your idea..."
            />

            <button type="submit" disabled={sending}>
              {sending ? 'SENDING...' : 'SEND MESSAGE ↗'}
            </button>

            <p className="form-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>

        <footer className="site-footer mono">
          <span>DESIGNED TO THINK DIFFERENTLY.</span>
          <a href="#home">BACK TO TOP ↑</a>
          <span>© 2026 TANAYA</span>
        </footer>
      </section>
    </main>
  );
}