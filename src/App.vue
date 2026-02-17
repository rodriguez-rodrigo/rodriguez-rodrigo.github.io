<script setup lang="ts"></script>

<template>
  <div class="page">
    <header class="hero">
      <nav class="nav">
        <div class="brand">Rodrigo A. Rodriguez</div>
        <div class="links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Senior Full-Stack Software Engineer</p>
          <h1>Building modern, resilient platforms with a product-first mindset.</h1>
          <p class="lede">
            10+ years delivering end-to-end solutions: from discovery and architecture to
            production-grade delivery. Specialized in legacy modernization, microservices, and AWS
            cloud systems.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#contact">Work with me</a>
            <a class="btn ghost" href="/cv.md" target="_blank" rel="noopener">Download CV</a>
          </div>
          <div class="meta">
            <div>
              <div class="meta-label">Location</div>
              <div class="meta-value">Madrid, Espana</div>
            </div>
            <div>
              <div class="meta-label">Email</div>
              <div class="meta-value">roagrodriguez@gmail.com</div>
            </div>
            <div>
              <div class="meta-label">Phone</div>
              <div class="meta-value">+34 603 747 290</div>
            </div>
          </div>
        </div>

        <div class="hero-card">
          <div class="card-title">Impact Snapshot</div>
          <div class="stat">
            <div class="stat-value">$3.74B</div>
            <div class="stat-label">Processed in 2025 on Benevity</div>
          </div>
          <div class="stat">
            <div class="stat-value">$110M</div>
            <div class="stat-label">Giving Tuesday peak throughput</div>
          </div>
          <div class="stat">
            <div class="stat-value">10+ years</div>
            <div class="stat-label">End-to-end delivery experience</div>
          </div>
          <div class="chip-row">
            <span class="chip">Microservices</span>
            <span class="chip">Microfrontends</span>
            <span class="chip">AWS</span>
            <span class="chip">Clean Architecture</span>
          </div>
        </div>
      </div>
    </header>

    <section class="section" id="experience">
      <div class="section-head">
        <p class="eyebrow">Experience</p>
        <h2>Senior roles across high-scale platforms</h2>
      </div>

      <div class="timeline">
        <article class="role">
          <div class="role-header">
            <div>
              <h3>Benevity</h3>
              <p>Senior Full Stack Engineer · 2023 - 2026</p>
            </div>
            <span class="pill">Global giving platform</span>
          </div>
          <ul>
            <li>
              Modernized a Drupal 6 + Laravel core using the Strangler Pattern to reduce production
              risk.
            </li>
            <li>Led Vue microfrontend migration and decoupled services with AWS SQS for scale.</li>
            <li>Contributed to PHP-to-Java microservices migration with AWS Glue ETL pipelines.</li>
            <li>
              Improved cloud reliability with Terraform, caching strategies, and New Relic
              observability.
            </li>
          </ul>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>Autofi</h3>
              <p>Senior Full Stack Engineer · 05/2022 - 2023</p>
            </div>
            <span class="pill">Fintech platform</span>
          </div>
          <ul>
            <li>Delivered Next.js and React features using GraphQL APIs and Node.js services.</li>
            <li>Worked within a microservices architecture with MongoDB and MySQL persistence.</li>
            <li>Integrated external services and optimized cross-team workflows.</li>
          </ul>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>IBM</h3>
              <p>Full Stack / Backend Engineer · 06/2020 - 2022</p>
            </div>
            <span class="pill">Enterprise delivery</span>
          </div>
          <ul>
            <li>
              Built a cognitive contact system and metrics dashboard with Angular, LoopBack 4, and
              MongoDB.
            </li>
            <li>
              Integrated Dialogflow and observability pipelines with Fluentd, Elasticsearch, and
              Kibana.
            </li>
            <li>Developed Node.js microservices for invoicing on DB2 with SAP integrations.</li>
          </ul>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>Legis Process</h3>
              <p>Full Stack Engineer · 2018 - 2020</p>
            </div>
            <span class="pill">Legal tech SaaS</span>
          </div>
          <ul>
            <li>
              Designed a multi-tenant SaaS platform on AWS using Angular, Node.js, and PostgreSQL.
            </li>
            <li>Defined Clean Architecture, CI/CD pipelines in GitLab, and EC2 deployments.</li>
            <li>Delivered a hybrid mobile app with Capacitor and multiple legal tech products.</li>
          </ul>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>Ross</h3>
              <p>Full Stack Developer · 2016 - 2018</p>
            </div>
            <span class="pill">Software factory</span>
          </div>
          <ul>
            <li>Built and maintained web and mobile apps across multiple client products.</li>
            <li>Delivered SSR web platforms with Angular Universal and Node.js for SEO.</li>
            <li>Shipped a React Native smart meter app and a multichannel ordering system.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="section-head">
        <p class="eyebrow">Projects</p>
        <h2>Selected builds with real-world adoption</h2>
      </div>
      <div class="grid">
        <article class="card">
          <h3>Student (2025)</h3>
          <p>Refactor of a legal-case simulator integrated with Canvas via LTI.</p>
          <div class="tags"><span>Laravel 12</span><span>React</span><span>LTI</span></div>
        </article>
        <article class="card">
          <h3>Turro Platform (2025)</h3>
          <p>Appointment management for barbershops with customer and admin experiences.</p>
          <div class="tags"><span>Vue 3</span><span>HonoJS</span><span>AWS</span></div>
        </article>
        <article class="card">
          <h3>Ciappino Piscinas (2021)</h3>
          <p>Sales platform for pool plans with admin tools and client access.</p>
          <div class="tags"><span>React</span><span>Node.js</span><span>MySQL</span></div>
        </article>
        <article class="card">
          <h3>Konecta BPO (2015)</h3>
          <p>Metrics and ranking dashboard serving about 150 clients.</p>
          <div class="tags"><span>.NET</span><span>C#</span><span>SQL Server</span></div>
        </article>
        <article class="card">
          <h3>Platcor (2014)</h3>
          <p>Mobile-first financial management platform.</p>
          <div class="tags"><span>Vue.js</span><span>Bootstrap</span><span>PHP</span></div>
        </article>
        <article class="card">
          <h3>Password Manager (2013)</h3>
          <p>Android app with 10K+ downloads for secure password storage.</p>
          <div class="tags"><span>Java</span><span>SQLite</span><span>Android</span></div>
        </article>
      </div>
    </section>

    <section class="section" id="skills">
      <div class="section-head">
        <p class="eyebrow">Skills</p>
        <h2>Modern stacks and architectural depth</h2>
      </div>
      <div class="skills">
        <div class="skill">
          <h3>Backend</h3>
          <p>Node.js, PHP (Laravel), Java, PostgreSQL, MongoDB</p>
        </div>
        <div class="skill">
          <h3>Frontend</h3>
          <p>React, Vue, TypeScript, Next.js</p>
        </div>
        <div class="skill">
          <h3>Cloud & DevOps</h3>
          <p>AWS, Docker, CI/CD, Observability (New Relic)</p>
        </div>
        <div class="skill">
          <h3>Architecture</h3>
          <p>Microservices, DDD, Event-Driven Architecture, Clean Architecture</p>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="contact">
        <div>
          <p class="eyebrow">Contact</p>
          <h2>Lets build the next platform together</h2>
          <p class="lede">
            Available for senior full-stack roles and consulting. Reach out to discuss product
            impact, architecture, and delivery.
          </p>
        </div>
        <div class="contact-card">
          <a href="mailto:roagrodriguez@gmail.com">roagrodriguez@gmail.com</a>
          <a href="tel:+34603747290">+34 603 747 290</a>
          <a href="https://www.linkedin.com/in/roagrodriguez" target="_blank" rel="noopener">
            LinkedIn Profile
          </a>
          <a href="https://rodriguez-rodrigo.github.io" target="_blank" rel="noopener">
            Portfolio Website
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Space+Grotesk:wght@400;500;600&display=swap');

:global(body) {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  color: #0d0f12;
  background: radial-gradient(circle at top left, #f5f4ff, #f2f6ff 40%, #fdf7f0 100%);
}

:global(html) {
  scroll-behavior: smooth;
}

:global(*),
:global(*::before),
:global(*::after) {
  box-sizing: border-box;
}

:global(a) {
  color: inherit;
  text-decoration: none;
}

.page {
  padding: 40px 6vw 80px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0 40px;
}

.brand {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  letter-spacing: 0.02em;
}

.links {
  display: flex;
  gap: 20px;
  font-size: 0.95rem;
}

.links a {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(13, 15, 18, 0.05);
}

.hero {
  position: relative;
  padding: 20px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 36px;
  align-items: stretch;
}

.hero-copy h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.4rem, 4vw, 3.5rem);
  margin: 8px 0 16px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  color: #4c5c7a;
}

.lede {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #3c4350;
  margin-bottom: 20px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin: 20px 0 30px;
}

.btn {
  padding: 12px 20px;
  border-radius: 999px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn.primary {
  background: #0d0f12;
  color: #fff;
}

.btn.ghost {
  border: 1px solid rgba(13, 15, 18, 0.15);
}

.meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  border: 1px solid rgba(13, 15, 18, 0.06);
}

.meta-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #5a6476;
}

.meta-value {
  font-weight: 600;
  margin-top: 6px;
}

.hero-card {
  padding: 28px;
  background: #0d0f12;
  color: #f8f8ff;
  border-radius: 28px;
  display: grid;
  gap: 20px;
  box-shadow: 0 18px 60px rgba(13, 15, 18, 0.25);
}

.card-title {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(248, 248, 255, 0.7);
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 600;
}

.stat-label {
  color: rgba(248, 248, 255, 0.65);
  font-size: 0.95rem;
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.chip {
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(248, 248, 255, 0.1);
  font-size: 0.8rem;
}

.section {
  padding: 60px 0 20px;
}

.section-head h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin: 10px 0 0;
}

.timeline {
  display: grid;
  gap: 24px;
  margin-top: 30px;
}

.role {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 24px;
  padding: 24px;
  border: 1px solid rgba(13, 15, 18, 0.06);
  box-shadow: 0 14px 40px rgba(21, 28, 44, 0.08);
}

.role-header {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
}

.role h3 {
  margin: 0 0 6px;
  font-size: 1.2rem;
}

.role p {
  margin: 0;
  color: #4b5668;
}

.role ul {
  margin: 16px 0 0 18px;
  padding: 0;
  color: #2d3440;
  line-height: 1.6;
}

.pill {
  background: rgba(13, 15, 18, 0.08);
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
}

.grid {
  margin-top: 28px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}

.card {
  padding: 22px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(13, 15, 18, 0.08);
  box-shadow: 0 12px 30px rgba(13, 15, 18, 0.06);
}

.card h3 {
  margin: 0 0 10px;
}

.card p {
  margin: 0 0 16px;
  color: #495364;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.8rem;
}

.tags span {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(13, 15, 18, 0.06);
}

.skills {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 18px;
}

.skill {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(13, 15, 18, 0.06);
}

.skill h3 {
  margin: 0 0 8px;
}

.contact {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  gap: 30px;
  align-items: center;
  background: linear-gradient(120deg, #0d0f12, #1c2333);
  color: #fff;
  padding: 32px;
  border-radius: 28px;
}

.contact .lede {
  color: rgba(255, 255, 255, 0.75);
}

.contact-card {
  display: grid;
  gap: 12px;
}

.contact-card a {
  background: rgba(255, 255, 255, 0.08);
  padding: 12px 16px;
  border-radius: 14px;
}

@media (max-width: 960px) {
  .hero-grid,
  .contact {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .meta {
    grid-template-columns: 1fr;
  }

  .links {
    flex-wrap: wrap;
  }
}

@media (max-width: 720px) {
  .page {
    padding: 24px 6vw 60px;
  }

  .hero-actions {
    flex-direction: column;
  }
}
</style>
