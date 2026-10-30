import me from "../assets/me_founder.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBandcamp,
  faGithub,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function SubstackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

type Entry = {
  name: string;
  href: string;
  status: string;
  current?: boolean;
  body: string;
};

const work: Entry[] = [
  {
    name: "Mobillis",
    href: "https://mobillis.com/",
    status: "Now",
    current: true,
    body: "Founding Engineer 💪. Solving for vehicle access — making it simple to get a car.",
  },
  {
    name: "Fetch Analytics",
    href: "https://fetchanalytics.ai/",
    status: "Past",
    body: "Senior engineer to CTO over five years. Built the team and the platform that turns mobile location data into footfall insights.",
  },
  {
    name: "Discovery",
    href: "https://www.discovery.co.za/",
    status: "Past",
    body: "Data scientist in the Data Science Lab, working across the group.",
  },
  {
    name: "Vat IT",
    href: "https://vatit.com/",
    status: "Past",
    body: "Built systems to help companies reclaim VAT. Java, cloud stuff, some computer vision, and a whole lot of coffee.",
  },
  {
    name: "Isazi Consulting",
    href: "https://www.isazi.ai/",
    status: "Past",
    body: "Machine learning consulting.",
  },
  {
    name: "University of the Witwatersrand",
    href: "https://www.wits.ac.za/",
    status: "Past",
    body: "Lectured Programming Languages in the School of Computer Science.",
  },
];

const projects: Entry[] = [
  {
    name: "Brightline",
    href: "https://brightline.ink/",
    status: "Live",
    current: true,
    body: "Your Kindle highlights, resurfaced daily 💡. Connect your Kindle library and get a handful of your own highlights emailed to you every morning.",
  },
  {
    name: "Pointless Converter",
    href: "https://pointless-converter.orrymesser.dev/",
    status: "RIP",
    body: "Ever wondered how many fathoms you've run? Have a Strava account? Find out. Retired.",
  },
  {
    name: "Substack",
    href: "https://orrymr.substack.com/",
    status: "Live",
    current: true,
    body: "I write about engineering, building things, and whatever else is on my mind. Drop your email if you're into that sort of thing.",
  },
  {
    name: "Central Limit Theorem in R",
    href: "https://medium.com/@orrymr/demonstrating-the-central-limit-theorem-in-r-a5fef67cbbb",
    status: "Article",
    body: "Distributions of means are themselves normally distributed... even if the original population isn't. That's mad. Pretty pictures and R code included.",
  },
];

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ol className="entries">
      {entries.map((e) => (
        <li className="entry" key={e.name}>
          <div className="entry-head">
            <a className="entry-name" href={e.href}>
              {e.name}
            </a>
            <span className={e.current ? "entry-status current" : "entry-status"}>
              {e.status}
            </span>
          </div>
          <p className="entry-body">{e.body}</p>
        </li>
      ))}
    </ol>
  );
}

function MainPart() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            Orry Messer
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#music">Music</a>
            <a href="#contact" className="nav-cta">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      <main className="page" id="top">
        <section className="hero">
          <div className="hero-text">
            <h1>Hey, I'm Orry 👋</h1>
            <p className="hero-lede">
              I build data products. Founding Engineer at Mobillis, previously
              CTO at Fetch Analytics.
            </p>
            <div className="hero-socials">
              <a href="https://x.com/orrymr" aria-label="X / Twitter">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="https://github.com/orrymr" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/orry-messer-010a1040/"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://orrymr.substack.com/" aria-label="Substack">
                <SubstackIcon />
              </a>
            </div>
          </div>
          <figure className="hero-pic">
            <img src={me} alt="Orry Messer" />
          </figure>
        </section>

        <section id="about" className="split">
          <header className="split-head">
            <div className="section-label">About</div>
            <h2 className="section-title">
              You want an <em>about me</em> section? I'm willing to oblige.
            </h2>
          </header>
          <div className="split-body">
            <p className="prose">
              I make computers do things for a living. When they won't
              cooperate, I go for a run, play guitar, read, or curse creatively
              in English, Hebrew, Afrikaans or Zulu, in rapidly decreasing order
              of fluency. Or watch The Sopranos. Usually that.
            </p>
            <p className="lang-list">
              <span>OK?</span>
              <span>סַבָּבָּה?</span>
              <span>Lekker?</span>
              <span>Kulungile?</span>
            </p>
          </div>
        </section>

        <section id="work" className="split">
          <header className="split-head">
            <div className="section-label">Where I've been</div>
            <h2 className="section-title">
              Work, <em>work</em>.
            </h2>
          </header>
          <div className="split-body">
            <EntryList entries={work} />
          </div>
        </section>

        <section id="projects" className="split">
          <header className="split-head">
            <div className="section-label">Side things</div>
            <h2 className="section-title">
              Stuff I've <em>made</em>.
            </h2>
          </header>
          <div className="split-body">
            <EntryList entries={projects} />
          </div>
        </section>

        <section id="music" className="split">
          <header className="split-head">
            <div className="section-label">When I'm not coding</div>
            <h2 className="section-title">
              I make <em>music</em>, sometimes.
            </h2>
          </header>
          <div className="split-body">
            <p className="prose">
              Not everything is code.
            </p>
            <div className="music-grid">
              <div className="media">
                <h3>
                  <FontAwesomeIcon icon={faBandcamp} />{" "}
                  <a href="https://orrymesser.bandcamp.com/">Bandcamp</a>
                </h3>
                <p>Last updated in 1953. An example:</p>
                <iframe
                  style={{ height: "42px" }}
                  src="https://bandcamp.com/EmbeddedPlayer/album=870617782/size=small/bgcol=ffffff/linkcol=13212e/track=461220127/transparent=true/"
                  seamless
                  title="Bandcamp player"
                >
                  <a href="https://orrymesser.bandcamp.com/album/ep-part-deux-ciao-acoustico">
                    EP, Part Deux. (Ciao Acoustico) by Orry Messer
                  </a>
                </iframe>
              </div>

              <div className="media">
                <h3>
                  <FontAwesomeIcon icon={faYoutube} />{" "}
                  <a href="https://www.youtube.com/@eetufck">YouTube</a>
                </h3>
                <p>
                  Known to be updated several times a decade. An ancient
                  artifact:
                </p>
                <iframe
                  className="yt"
                  src="https://www.youtube.com/embed/rM52y1FwMo0?si=TVkk2i91Kul0LtYE"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="section-label">Contact</div>
          <div className="contact-email">
            orrymr <span className="dim">at</span> gmail{" "}
            <span className="dim">dot</span> com
          </div>
        </section>
      </main>
    </>
  );
}

export default MainPart;
