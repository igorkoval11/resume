import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Igor Kovalevsky",
  role: "Sales Manager",
  city: "Grodno, Belarus",
  phone: "+375 29 587 14 38",
  email: "igorkovalevskij000@gmail.com",
  languages: ["Russian - Native", "English - B1"],
  objective:
    "A responsible and communicative candidate interested in working in sales. I would like to develop as a sales manager, gain practical experience, work with customers, and improve my skills in communication, negotiation, and active sales.",
  education: [
    {
      title: "Secondary Education",
      place: "School",
      period: "Graduation year: 2025",
      status: "Completed",
    },
    {
      title: "Higher Education",
      place: "Yanka Kupala State University of Grodno",
      specialization: "Software Engineering",
      period: "2025-2029",
      status: "In progress",
    },
  ],
  experience:
    "Currently building practical sales experience with a strong focus on customer communication, negotiation, and CRM tools.",
  skills: [
    "Communication skills",
    "Teamwork",
    "Ability to find common ground with different people",
    "Negotiation skills",
    "Stress resistance",
    "Fast learning",
    "Responsibility",
    "Confident communication by phone and in person",
    "Active sales skills",
    "Basic understanding of CRM systems",
    "Openness to meeting new people",
    "Ability to reach agreements",
  ],
  qualities: [
    "Communicative",
    "Active",
    "Goal-oriented",
    "Fast learner",
    "Not afraid of new tasks",
    "Confident in communication with people",
  ],
};

const navigation = [
  ["01", "Objective", "#objective"],
  ["02", "Education", "#education"],
  ["03", "Experience", "#experience"],
  ["04", "Skills", "#skills"],
  ["05", "Qualities", "#qualities"],
];

const salesSignals = ["Communication", "Negotiation", "Customers", "CRM"];

function SectionFrame({ id, index, eyebrow, children, className = "" }) {
  return (
    <section id={id} className={`content-section reveal-item ${className}`}>
      <p className="section-index">{index}</p>
      <div className="section-body">
        <p className="eyebrow">{eyebrow}</p>
        {children}
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="resume-shell">
      <aside className="profile-panel" aria-label="Candidate summary">
        <div className="profile-panel__content">
          <div className="profile-panel__topline">Resume / Sales Candidate</div>
          <div>
            <p className="eyebrow">Desired Position</p>
            <h1>
              <span>Igor</span>
              <span>Kovalevsky</span>
            </h1>
            <p className="role">{profile.role}</p>
          </div>

          <figure className="profile-photo">
            <img src="/igor-kovalevsky-photo.jpg" alt="Igor Kovalevsky portrait" />
            <figcaption>Profile photo</figcaption>
          </figure>

          <div className="availability-note">
            <span aria-hidden="true" />
            <p>Open to a sales role with customer communication and active sales practice.</p>
          </div>

          <a className="download-link" href="/igor-kovalevsky-resume.pdf" download>
            <span>Download Resume PDF</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <nav className="resume-nav" aria-label="Resume sections">
          {navigation.map(([number, label, href]) => (
            <a href={href} key={href}>
              <span>{number}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="contact-card">
            <p className="eyebrow">Personal Information</p>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.city}</span>
          </div>

          <div className="language-block">
            <p className="eyebrow">Languages</p>
            {profile.languages.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </div>
      </aside>

      <section className="story-panel">
        <section id="objective" className="hero-block reveal-item">
          <p className="section-index">01</p>
          <div className="hero-copy">
            <div className="masthead">
              <span>Digital Resume</span>
              <span>Grodno, Belarus</span>
              <span>2026</span>
            </div>
            <p className="eyebrow">Career Objective</p>
            <h2>Responsible. Communicative. Ready to grow in sales.</h2>
            <p className="lead">{profile.objective}</p>
          </div>
        </section>

        <div className="editorial-strip" aria-hidden="true">
          {salesSignals.map((signal, index) => (
            <span key={signal} style={{ "--strip-index": index }}>
              {signal}
            </span>
          ))}
        </div>

        <SectionFrame id="education" index="02" eyebrow="Education and Training">
          <div className="timeline">
            {profile.education.map((item) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  {item.specialization ? <p>{item.specialization}</p> : null}
                  <div className="meta-row">
                    <span>{item.period}</span>
                    <span>{item.status}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SectionFrame>

        <SectionFrame id="experience" index="03" eyebrow="Work Experience">
          <div className="statement-block">
            <p>{profile.experience}</p>
          </div>
        </SectionFrame>

        <SectionFrame id="skills" index="04" eyebrow="Skills">
          <div className="tag-cloud">
            {profile.skills.map((skill, index) => (
              <span key={skill} style={{ "--tag-index": index }}>
                {skill}
              </span>
            ))}
          </div>
        </SectionFrame>

        <SectionFrame
          id="qualities"
          index="05"
          eyebrow="Personal Qualities"
          className="content-section--last"
        >
          <div className="quality-grid">
            {profile.qualities.map((quality) => (
              <span key={quality}>{quality}</span>
            ))}
          </div>
        </SectionFrame>

        <section className="contact-cta reveal-item" aria-label="Contact Igor">
          <p className="eyebrow">Contact</p>
          <h2>Interested in working together?</h2>
          <p>Contact Igor to discuss a sales opportunity.</p>
          <div className="contact-cta__links">
            <a href={`mailto:${profile.email}`}>Contact Igor</a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
          </div>
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
