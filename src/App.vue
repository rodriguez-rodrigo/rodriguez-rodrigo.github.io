<script setup lang="ts"></script>

<template>
  <div class="page">
    <header class="hero">
      <nav class="nav">
        <div class="brand">Rodrigo A. Rodriguez</div>
        <div class="links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Senior Full-Stack Developer</p>
          <h1>Senior Full-Stack Software Engineer with 10+ Years of Excellence</h1>
          <p class="lede">
            Senior Full-Stack Software Engineer with 10+ years of experience delivering end-to-end
            solutions: from needs discovery and architecture design to development, testing, and
            production deployment. I have worked in multidisciplinary teams, aligning technical
            execution with business objectives and product metrics. Specialized in legacy system
            modernization, microservices and micro frontend architectures, and cloud solutions on
            AWS. Seeking a high-impact challenge in a product-driven environment.
          </p>
          <div class="hero-actions">
            <a class="btn primary" href="#contact">Get in touch</a>
            <a class="btn ghost" href="/cv.md" target="_blank" rel="noopener">Download CV</a>
          </div>
          <div class="meta">
            <div>
              <div class="meta-label">Location</div>
              <div class="meta-value">Madrid, Spain</div>
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
          <div class="card-title">Impact & Expertise</div>
          <div class="stat">
            <div class="stat-value">$3.74B</div>
            <div class="stat-label">USD Processed in 2025</div>
          </div>
          <div class="stat">
            <div class="stat-value">$110M</div>
            <div class="stat-label">Peak Throughput (Giving Tuesday)</div>
          </div>
          <div class="stat">
            <div class="stat-value">10+</div>
            <div class="stat-label">Years full-stack experience</div>
          </div>
          <div class="chip-row">
            <span class="chip">Domain-Driven Design</span>
            <span class="chip">Microservices</span>
            <span class="chip">Microfrontends</span>
            <span class="chip">AWS</span>
          </div>
        </div>
      </div>
    </header>

    <section class="section" id="experience">
      <div class="section-head">
        <p class="eyebrow">Experience</p>
        <h2>Senior roles delivering high-impact platforms at scale</h2>
      </div>

      <div class="timeline">
        <article class="role">
          <div class="role-header">
            <div>
              <h3>Benevity</h3>
              <p>Senior Full Stack Developer · May 2023 - Present (2 years 10 months)</p>
            </div>
            <span class="pill">Global giving platform</span>
          </div>
          <p class="role-intro">
            One of the world's leading corporate giving and volunteering platforms, serving some of
            the largest global companies.
          </p>
          <h4>Key Achievements:</h4>
          <ul>
            <li>
              Mentored team members on frontend development, sharing knowledge of Vue.js and micro
              frontends.
            </li>
            <li>
              Evolved and maintained a critical platform built on Drupal 6 and Laravel, applying
              modernization strategies and mitigating production risks using feature flags and
              CI/CD.
            </li>
            <li>
              Migrated and modernized complex legacy pages (Drupal + Laravel Blade + older Vue
              microservices) to Vue 3, creating REST and OpenAPI endpoints.
            </li>
            <li>
              Developed frontend microservices with Vue.js, building UMD bundles via Webpack for
              Single SPA framework.
            </li>
            <li>
              Built fully custom Vue components, including a donation transparency feature,
              displaying responsive donation timelines while adhering to brand guidelines using
              custom CSS and variables.
            </li>
            <li>
              Modernized donation processes by converting synchronous workflows into asynchronous
              processes with AWS SQS and Laravel jobs, reducing processing load during peak traffic.
            </li>
            <li>
              Migrated backend from legacy PHP to Java + Spring Boot microservices, ensuring data
              integrity through bidirectional synchronization between legacy systems and
              microservices using Kafka events.
            </li>
            <li>Implemented data migration via ETL processes with AWS Glue and Python/Spark.</li>
            <li>
              Enhanced cloud infrastructure using Terraform, improving scalability and deployment
              reliability.
            </li>
            <li>
              Monitored performance and errors with New Relic, optimizing critical endpoints via
              caching strategies and code refactoring.
            </li>
            <li>
              Applied thorough testing to ensure stability and reliability during significant
              migrations and code changes.
            </li>
          </ul>
          <h4>Impact:</h4>
          <ul>
            <li>Platform processed $3.74B USD in 2025.</li>
            <li>
              Developed and integrated the card payment module, handling peaks of $110M USD on
              Giving Tuesday.
            </li>
            <li>Increased user engagement through a simplified new-user onboarding process.</li>
            <li>
              Successfully modernized legacy pages, improving user experience and code
              maintainability.
            </li>
          </ul>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>10Pearls LATAM</h3>
              <p>Full Stack Engineer · April 2022 - April 2023 (1 year 1 month)</p>
            </div>
            <span class="pill">Fintech solutions</span>
          </div>
          <p class="role-intro">
            As a Frontend Developer at AutoFi, working with modern web technologies to develop new
            features and improve code quality.
          </p>
          <ul>
            <li>Developed features and fixed code smells using ReactJS, Next.js, and GraphQL.</li>
            <li>
              Key skills: ReactJS, Next.js, GraphQL, agile development methodologies, clean code
              writing, and collaboration.
            </li>
          </ul>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>IBM</h3>
              <p>Full Stack & Backend Developer · September 2021 - May 2022 (9 months)</p>
            </div>
            <span class="pill">Enterprise solutions</span>
          </div>

          <div class="project">
            <h4>Project: Naturgy</h4>
            <ul>
              <li>Maintenance and development of new functionalities for Naturgy Projects.</li>
              <li>Frontend: Angular</li>
              <li>Backend: Loopback 4 + MongoDB</li>
              <li>Features: Google Dialogflow + FluentD + ElasticSearch + Kibana</li>
              <li>Role: Full-Stack Engineer</li>
            </ul>
          </div>

          <div class="project">
            <h4>Project: Techint</h4>
            <ul>
              <li>Maintenance and development of new functionalities for Techint Projects.</li>
              <li>Backend: Node.js + Microservices + DB2 Database</li>
              <li>Features: SAP API integration</li>
              <li>Role: Backend + Functional Analyst</li>
            </ul>
          </div>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>ROSS Outside the Box</h3>
              <p>Full-Stack Developer · February 2018 - December 2019 (1 year 11 months)</p>
            </div>
            <span class="pill">Software factory</span>
          </div>
          <p class="role-intro">
            Full stack developer for Legis Process products across multiple complex projects.
          </p>

          <div class="project">
            <h4>Legis App Lite</h4>
            <ul>
              <li>Application to manage Cordoba lawyer's files.</li>
              <li>Frontend: Angular + Cordova</li>
              <li>Backend: Python + Flask + MariaDB</li>
              <li>Role: Full-Stack Developer</li>
            </ul>
          </div>

          <div class="project">
            <h4>Student Siglo 21</h4>
            <ul>
              <li>
                University simulator for lawyer's files management developed for Universidad Siglo
                21.
              </li>
              <li>Frontend: Angular + NebularJS</li>
              <li>Backend: PostgreSQL</li>
              <li>Features: Logic Multitenant + Clean Architecture</li>
              <li>Role: Architect + Full-Stack Developer</li>
            </ul>
          </div>

          <div class="project">
            <h4>Buffet</h4>
            <ul>
              <li>
                Platform for the management of multiple law firms with multitenant architecture.
              </li>
              <li>Frontend: Angular + NebularJS</li>
              <li>Backend: Node.js + PostgreSQL</li>
              <li>
                Features: Hybrid Multitenant + Clean Architecture + GitLab CI/CD + AWS EC2 +
                Capacitor
              </li>
              <li>Role: Consultant + Architect + Full-Stack Developer</li>
            </ul>
          </div>

          <div class="project">
            <h4>Delivery Management Platform</h4>
            <ul>
              <li>
                Application to manage deliveries from multiple platforms (Rappi, Uber, PedidosYa,
                others).
              </li>
              <li>Frontend: Angular + Bootstrap</li>
              <li>Backend: Node.js + MongoDB + Mongoose</li>
              <li>Role: Full-Stack Developer</li>
            </ul>
          </div>

          <div class="project">
            <h4>Smart Meter Reading Application</h4>
            <ul>
              <li>Smartphone application to read smart meters.</li>
              <li>Frontend: React Native</li>
              <li>Features: Java DMLS Protocol</li>
              <li>Role: Full-Stack Developer</li>
            </ul>
          </div>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>Kolektor Córdoba</h3>
              <p>Full-Stack Developer · February 2017 - February 2018 (1 year 1 month)</p>
            </div>
            <span class="pill">HR solutions</span>
          </div>
          <ul>
            <li>Sistema web de recursos humanos (HR web system) for Kolektor Córdoba.</li>
            <li>Maintenance and creation of new functionalities developed in Angular 2.</li>
            <li>Maintenance and creation of APIs in Express.js.</li>
            <li>Maintenance of Oracle databases.</li>
          </ul>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>Konecta Argentina</h3>
              <p>Full-Stack & Supervisor Roles · March 2016 - November 2019 (3 years 9 months)</p>
            </div>
            <span class="pill">BPO services</span>
          </div>
          <h4>.NET Developer (March 2016 - November 2019)</h4>
          <ul>
            <li>
              Dashboard for managing agent's metrics, reports, and rankings across approximately 150
              customers.
            </li>
            <li>Monolithic: .NET + C# + Microsoft SQL Server + Transact-SQL</li>
            <li>Role: Provider + Architect + Full-Stack Developer</li>
          </ul>
          <h4>Supervisor (November 2013 - August 2017)</h4>
          <ul>
            <li>Team supervision and operational management.</li>
          </ul>
        </article>

        <article class="role">
          <div class="role-header">
            <div>
              <h3>Freelance Projects</h3>
              <p>Self-employed · Various periods</p>
            </div>
            <span class="pill">Independent work</span>
          </div>
          <div class="project">
            <h4>Password Manager</h4>
            <ul>
              <li>
                Android application for password management with over 10K downloads (December 2017 -
                February 2018).
              </li>
              <li>Stack: Android Java + SQLite</li>
              <li>Role: Architect + Full-Stack Developer</li>
            </ul>
          </div>
          <div class="project">
            <h4>Platcor</h4>
            <ul>
              <li>
                Mobile-first web platform for financial management (August 2015 - March 2016).
              </li>
              <li>Frontend: Vue.js + Bootstrap</li>
              <li>Backend: PHP + MySQL</li>
              <li>Features: Mobile First Design</li>
              <li>Role: Architect + Full-Stack Developer</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section class="section" id="skills">
      <div class="section-head">
        <p class="eyebrow">Core Skills & Expertise</p>
        <h2>Modern stacks and architectural depth</h2>
      </div>

      <div class="skills-container">
        <div class="skill-category">
          <h3>Main Skills</h3>
          <ul>
            <li>Domain-Driven Design (DDD)</li>
            <li>HonoJS</li>
            <li>Canvas LMS</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Backend Development</h3>
          <ul>
            <li>Node.js</li>
            <li>PHP (Laravel)</li>
            <li>Java (Spring Boot)</li>
            <li>Python (Flask)</li>
            <li>Express.js</li>
            <li>Loopback 4</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Frontend Development</h3>
          <ul>
            <li>Vue.js (2 & 3)</li>
            <li>React / Next.js</li>
            <li>Angular (2+)</li>
            <li>React Native</li>
            <li>TypeScript</li>
            <li>Micro Frontends</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Databases</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>MySQL / MariaDB</li>
            <li>Oracle</li>
            <li>DB2</li>
            <li>SQLite</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Cloud & DevOps</h3>
          <ul>
            <li>AWS (EC2, SQS, Glue, Lambda)</li>
            <li>Terraform</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>CI/CD (GitLab, GitHub)</li>
            <li>Observability (New Relic)</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Architecture Patterns</h3>
          <ul>
            <li>Microservices</li>
            <li>Micro Frontends</li>
            <li>Domain-Driven Design (DDD)</li>
            <li>Clean Architecture</li>
            <li>Event-Driven Architecture</li>
            <li>Multitenant Architecture</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Additional Technologies</h3>
          <ul>
            <li>GraphQL</li>
            <li>Kafka</li>
            <li>Elasticsearch + Kibana</li>
            <li>Google Dialogflow</li>
            <li>Drupal</li>
            <li>Capacitor</li>
            <li>Single SPA</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section" id="education">
      <div class="section-head">
        <p class="eyebrow">Education & Certifications</p>
        <h2>Continuous learning and professional development</h2>
      </div>

      <div class="education-grid">
        <article class="edu-card">
          <h3>Tecnicatura in Computer Programming</h3>
          <p class="institution">Universidad Tecnológica Nacional</p>
          <p class="period">2015 - 2017</p>
        </article>

        <article class="edu-card">
          <h3>Fundamentals of Web Development: Full Stack or Front-end</h3>
          <p class="institution">Certification</p>
        </article>

        <article class="edu-card">
          <h3>Amazon Web Services Cloud Practitioner</h3>
          <p class="institution">AWS Certification</p>
        </article>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="contact">
        <div>
          <p class="eyebrow">Contact & Connect</p>
          <h2>Let's collaborate on your next challenge</h2>
          <p class="lede">
            Available for senior full-stack roles and consulting engagements. Reach out to discuss
            product impact, architecture, and delivery strategies.
          </p>
        </div>
        <div class="contact-card">
          <a href="mailto:roagrodriguez@gmail.com" class="contact-link">
            <span class="contact-label">Email</span>
            roagrodriguez@gmail.com
          </a>
          <a href="tel:+34603747290" class="contact-link">
            <span class="contact-label">Phone</span>
            +34 603 747 290
          </a>
          <a
            href="https://www.linkedin.com/in/roagrodriguez"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            <span class="contact-label">LinkedIn</span>
            linkedin.com/in/roagrodriguez
          </a>
          <a
            href="https://rodriguez-rodrigo.github.io"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            <span class="contact-label">Website</span>
            rodriguez-rodrigo.github.io
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

.role-intro {
  margin: 12px 0 16px;
  color: #2d3440;
  font-style: italic;
}

.role ul {
  margin: 16px 0 0 18px;
  padding: 0;
  color: #2d3440;
  line-height: 1.6;
}

.role h4 {
  margin: 16px 0 10px;
  font-weight: 600;
  color: #0d0f12;
}

.project {
  margin-top: 16px;
}

.project h4 {
  margin: 0 0 10px;
  font-weight: 600;
}

.project:not(:last-child) {
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(13, 15, 18, 0.05);
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

.skills-container {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.skill-category {
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid rgba(13, 15, 18, 0.06);
  box-shadow: 0 12px 30px rgba(13, 15, 18, 0.06);
}

.skill-category h3 {
  margin: 0 0 12px;
  font-size: 1.1rem;
  color: #0d0f12;
}

.skill-category ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-category li {
  padding: 6px 0;
  color: #495364;
  line-height: 1.6;
}

.education-grid {
  margin-top: 28px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.edu-card {
  padding: 22px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(13, 15, 18, 0.08);
  box-shadow: 0 12px 30px rgba(13, 15, 18, 0.06);
}

.edu-card h3 {
  margin: 0 0 10px;
  color: #0d0f12;
  font-size: 1.05rem;
}

.edu-card .institution {
  margin: 0;
  color: #4b5668;
  font-weight: 600;
  font-size: 0.9rem;
}

.edu-card .period {
  margin: 8px 0 0;
  color: #7a8598;
  font-size: 0.85rem;
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

.contact-link {
  background: rgba(255, 255, 255, 0.08);
  padding: 12px 16px;
  border-radius: 14px;
  display: block;
  transition: background 0.3s ease;
}

.contact-link:hover {
  background: rgba(255, 255, 255, 0.15);
}

.contact-label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(248, 248, 255, 0.6);
  margin-bottom: 4px;
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
