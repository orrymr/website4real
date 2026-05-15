import me from "../assets/me_square.png";
import meAlt from "../assets/me_alt_square.png";
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

function MainPart() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-brand">
            <span className="dot" aria-hidden="true" />
            Orry Messer
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#music">Music</a>
            <a href="#contact" className="nav-cta">Get in touch</a>
          </div>
        </div>
      </nav>

      <main className="page" id="top">
        <section className="hero">
          <div className="hero-text">
            <h1>
              Hey, I'm Orry <span className="wave" aria-hidden="true">👋</span>
            </h1>
            <p className="hero-lede">
              I'm an engineer who makes computers do things for a living. Currently{" "}
              <strong>Founding Engineer @ <a href="https://www.flexclub.co.za/">FlexClub</a></strong>,
              solving for vehicle access. Previously CTO @ Fetch Analytics and data scientist @ Discovery.
            </p>
            <p className="hero-lede">
              Welcome to my small corner of the internet. I don't know what you're doing here,
              but then again, what's any of us doing anywhere?
            </p>
            <div className="hero-socials">
              <a className="icon-link" href="https://x.com/orrymr" aria-label="X / Twitter">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a className="icon-link" href="https://github.com/orrymr" aria-label="GitHub">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/orry-messer-010a1040/"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                className="icon-link"
                href="https://orrymr.substack.com/"
                aria-label="Substack"
              >
                <SubstackIcon />
              </a>
            </div>
          </div>
          <div className="hero-pic">
            <img src={me} alt="Orry Messer" />
            <img className="pic-alt" src={meAlt} alt="" />
          </div>
        </section>

        <section id="about">
          <div className="section-label">About</div>
          <h2 className="section-title">
            A person who makes computers <em>do things</em>.
          </h2>
          <div className="about">
            <p>
              You want an "<u>about me</u>" section? I'm willing to oblige.
              Sometimes the computer doesn't feel like cooperating. In those moments
              I either go for a run, play my guitar, read a book, or curse creatively in
              English, Hebrew, Afrikaans or Zulu (in rapidly decreasing order of fluency
              after the first two — I pretend to be a polyglot, but I'm just a lowly
              bi-glot with change).
            </p>
            <p>
              Or watch Sopranos. Or play{" "}
              <a href="https://www.aoe2.gg/profile/5377038">Age of Empires 2</a>.
              Tbh, that's most likely.
            </p>
            <div className="lang-list">
              <span>OK?</span>
              <span>סַבָּבָּה?</span>
              <span>Lekker?</span>
              <span>Kulungile?</span>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="section-label">Where I've been</div>
          <h2 className="section-title">Work, <em>work</em>.</h2>
          <div className="cards">
            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://www.flexclub.co.za/">FlexClub</a>
                </div>
                <span className="card-badge">Now</span>
              </div>
              <div className="card-body">
                Founding Engineer 💪. Solving for vehicle access — making it simple to get
                a car.
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://fetchanalytics.ai/">Fetch Analytics</a>
                </div>
                <span className="card-badge past">Past</span>
              </div>
              <div className="card-body">
                CTO. Built a platform that helps companies understand mobility data. It was cool.
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://www.discovery.co.za/">Discovery</a>
                </div>
                <span className="card-badge past">Past</span>
              </div>
              <div className="card-body">
                Data scientist @ the Data Science Lab. Technically part of Health actuarial,
                but we did work across the group.
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://vatit.com/">Vat IT</a>
                </div>
                <span className="card-badge past">Past</span>
              </div>
              <div className="card-body">
                Built systems to help companies reclaim VAT. Java, cloud stuff, some
                computer vision, and a whole lot of coffee.
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://www.isazi.ai/">Isazi Consulting</a>
                </div>
                <span className="card-badge past">Past</span>
              </div>
              <div className="card-body">
                ML-flavoured work, mostly.
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://www.wits.ac.za/">University of the Witwatersrand</a>
                </div>
                <span className="card-badge past">Past</span>
              </div>
              <div className="card-body">
                Lectured Programming Languages in the School of Computer Science. Also did
                a bunch of tutoring (TA'ing in the US, I think?).
              </div>
            </article>
          </div>
        </section>

        <section id="projects">
          <div className="section-label">Side things</div>
          <h2 className="section-title">Stuff I've <em>made</em>.</h2>
          <div className="cards">
            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://quoteunquote.io/">QuoteUnquote</a>
                </div>
                <span className="card-badge">Live</span>
              </div>
              <div className="card-body">
                Resurface your highlights 💡. Login with your Kindle account and get a
                daily digest of your highlights.
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://pointless-converter.orrymesser.dev/">Pointless Converter</a>
                </div>
                <span className="card-badge past">RIP</span>
              </div>
              <div className="card-body">
                Ever wondered how many fathoms you've run? Have a Strava account? Find out.
                (Edit: this is broken and I'm too lazy to fix it because nobody was using it.
                So really, it's your fault.)
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://orrymr.substack.com/">Substack</a>
                </div>
                <span className="card-badge">Live</span>
              </div>
              <div className="card-body">
                I write about engineering, building things, and whatever else is on my
                mind. Drop your email if you're into that sort of thing.
              </div>
            </article>

            <article className="card">
              <div className="card-head">
                <div className="card-name">
                  <a href="https://medium.com/@orrymr/demonstrating-the-central-limit-theorem-in-r-a5fef67cbbb">
                    Central Limit Theorem in R
                  </a>
                </div>
                <span className="card-badge past">Article</span>
              </div>
              <div className="card-body">
                Distributions of means are themselves normally distributed... even if the
                original population isn't. That's mad. Pretty pictures and R code included.
              </div>
            </article>
          </div>
        </section>

        <section id="music">
          <div className="section-label">When I'm not coding</div>
          <h2 className="section-title">I make <em>music</em>, sometimes.</h2>
          <p className="music-intro">
            Not sure if I should put music here, but here we are. Really just to beef up
            the contents section, otherwise it'd look like I'm lazy. And I'm not. I'm the
            opposite of lazy. What's the word for that...{" "}
            <a href="https://www.google.com/search?q=not+symbol+logic">¬</a>lazy, I think.
          </p>
          <div className="music-grid">
            <div className="media-card">
              <h3>
                <FontAwesomeIcon icon={faBandcamp} />{" "}
                <a href="https://orrymesser.bandcamp.com/">Bandcamp</a>
              </h3>
              <p>Last updated in 1953. An example:</p>
              <iframe
                style={{ height: "42px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=870617782/size=small/bgcol=ffffff/linkcol=1d4ed8/track=461220127/transparent=true/"
                seamless
                title="Bandcamp player"
              >
                <a href="https://orrymesser.bandcamp.com/album/ep-part-deux-ciao-acoustico">
                  EP, Part Deux. (Ciao Acoustico) by Orry Messer
                </a>
              </iframe>
            </div>

            <div className="media-card">
              <h3>
                <FontAwesomeIcon icon={faYoutube} />{" "}
                <a href="https://www.youtube.com/@eetufck">YouTube</a>
              </h3>
              <p>Known to be updated several times a decade. An ancient artifact:</p>
              <iframe
                className="yt"
                src="https://www.youtube.com/embed/rM52y1FwMo0?si=TVkk2i91Kul0LtYE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contact-card">
            <h2>Let's talk.</h2>
            <p>
              Looking for an engineer, want to swap notes on Age of Empires 2 build orders,
              or just curious about something? Reach out.
            </p>
            <div className="contact-email">orrymr <span style={{ opacity: 0.5 }}>at</span> gmail <span style={{ opacity: 0.5 }}>dot</span> com</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default MainPart;
