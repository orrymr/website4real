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

function MainPart() {
  return (
    <>
      <div className="main-part">
        <div>
          <div className="name-and-pics">
            <div className="my-name">
              <h3>Orry Messer ---&gt;</h3>
            </div>
            <div className="pics">
              <img className="pic-of-me" src={me} />
              <img className="pic-of-me-alt" src={meAlt} />
            </div>
          </div>
          <div>
            {" "}
            Greetings. My name is Orry. Welcome to my small corner of the
            internet. I don't know what you're doing here, but then again,
            what's any of us doing anywhere?
          </div>
          {/* <div>
            <em>Also</em>, if you want to look at my CV, it's{" "}
            <a href="#">here</a> (and probably out of date).
          </div> */}
          <br />
          <div className="about-me">
            {" "}
            What's that you say? You want an "<u>about me</u>" section? Well,
            I'm willing to oblige. I'm a person who makes computers do things
            for a living. Sometimes, the computer doesn't really feel like it,
            though. In those instances, I either go for a run, play my guitar,
            read a book or curse creatively in English, Hebrew, Afrikaans or
            Zulu (in rapid decreasing order of fluency after the first 2 [I
            pretend to be a polyglot, but I'm just a lowly bi-glot with
            change]). Or just watch Sopranos, playing{" "}
            <a href="https://www.aoe2.gg/profile/5377038">Age of Empires 2</a>{" "}
            or something like that. Tbh, that's most likely.
            <div>OK?</div>
            <div>?סַבָּבָּה</div>
            <div>Lekker?</div>
            <div>Kulungile?</div>
          </div>
          <br />
          <div>
            <em>Also also</em>, you can find me{" "}
            <a className="fa" href="https://x.com/orrymr">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a className="fa" href="https://github.com/orrymr">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="fa"
              href="https://www.linkedin.com/in/orry-messer-010a1040/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div>
            Or just reach out: <em>orrymr -at- gmail -dot- com</em>
          </div>
        </div>

        <div id="projects">
          <div className="sub-heading">
            <h1>work work</h1>
          </div>
          <ul>
            <li>
              <em className="project-name">
                |<a href="https://fetchanalytics.ai/">Fetch Analytics</a>|
              </em>{" "}
              -&gt; Currently CTO @ Fetch Analytics. We're building a platform
              that helps companies understand mobility data. It's cool.
            </li>
            <li>
              <em className="project-name">
                |<a href="https://www.discovery.co.za/">Discovery</a>|
              </em>{" "}
              -&gt; Data scientist @ the Data Science Lab. Technically part of
              Health actuarial, but we did work across the group.
            </li>
            <li>
              <em className="project-name">
                |<a href="https://vatit.com/">Vat IT</a>|
              </em>{" "}
              -&gt; Built systems to help companies reclaim VAT. Java, cloud
              stuff, some computer vision, and a whole lot of coffee.
            </li>
            <li>
              <em className="project-name">
                |<a href="https://www.isazi.ai/">Isazi Consulting</a>|
              </em>{" "}
              -&gt; ML type of work mostly.
            </li>
            <li>
              <em className="project-name">
                |
                <a href="https://www.wits.ac.za/">
                  University of the Witwatersrand
                </a>
                |
              </em>{" "}
              -&gt; Lectured 1 course (Programming Languages) in the School of
              Computer Science. Was a cool expierence. Also did a whole of
              tutoring. I think that's commonly referred to as TA'ing in the US?
            </li>
          </ul>
        </div>

        <div id="projects">
          <div className="sub-heading">
            <h1>stuff</h1>
          </div>
          <ul>
            <li>
              <em className="project-name">
                |<a href="https://quoteunquote.io/">QuoteUnquote</a>|
              </em>{" "}
              -&gt; Resurface your highlights 💡. Simply login to your Amazon
              Kindle account and it'll automatically send you a daily digest of
              your highlights.
            </li>
            <li>
              <em className="project-name">
                |
                <a href="https://pointless-converter.orrymesser.dev/">
                  Pointless Converter
                </a>
                |
              </em>{" "}
              -&gt; Have you ever wondered how many fathoms you've run? Do you
              have a Strava acount? Now you can find out how many fathoms you've
              run with the{" "}
              <a href="https://pointless-converter.orrymesser.dev/">
                Pointless Converter
              </a>{" "}
              (Edit: this is broken and I'm too lazy to fix it because nobody
              was using it. So really, it's your fault that his isn't working
              because you are part of the group of people who wasn't using
              this.) .
            </li>
            {/* <li>
              <em className="project-name">|Quote Unquote|</em> -&gt;{" "}
              <a href="#">Quote Unquote</a>.
            </li> */}
            <li>
              <em className="project-name" style={{ fontSize: "1em" }}>
                |
                <a href="https://medium.com/@orrymr/demonstrating-the-central-limit-theorem-in-r-a5fef67cbbb">
                  Demonstrating The Central Limit Theorem in R
                </a>
                |
              </em>{" "}
              -&gt; The distributions of means are themselves normally
              distributed... even if the original population isn't normally
              distributed. That's mad!{" "}
              <a href="https://medium.com/@orrymr/demonstrating-the-central-limit-theorem-in-r-a5fef67cbbb">
                Here's
              </a>{" "}
              a link to an article I wrote with some pretty picture which shows
              how this works. Also, there's some R code so you can try this at
              home.
            </li>
          </ul>
        </div>
        <div id="music">
          <div className="sub-heading">
            <h1>music</h1>
          </div>
          <p>
            I wasn't really sure if I should put my music stuff here, but it
            appears I decided to do so. Really just to beef up the contents
            section of this page, otherwise it might appear that I'm lazy.
          </p>
          <p>
            And really, I'm not. I'm the exact opposite of lazy, what's the word
            for that, uhm...
            <a href="https://www.google.com/search?q=not+symbol+logic&rlz=1C5CHFA_enZA939ZA941&oq=not+symbol&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDUyODNqMGo0qAIAsAIA&sourceid=chrome&ie=UTF-8">
              ¬
            </a>
            lazy, I think.
            <br />
            Well,{" "}
            <a href="https://orrymesser.bandcamp.com/">
              here's <FontAwesomeIcon icon={faBandcamp} />
            </a>{" "}
            my Bandcamp (last updated in 1953). An example of which:
            <iframe
              style={{ border: "0", width: "100%", height: "42px" }}
              src="https://bandcamp.com/EmbeddedPlayer/album=870617782/size=small/bgcol=333333/linkcol=2ebd35/track=461220127/transparent=true/"
              seamless
            >
              <a href="https://orrymesser.bandcamp.com/album/ep-part-deux-ciao-acoustico">
                EP, Part Deux. (Ciao Acoustico) by Orry Messer
              </a>
            </iframe>
          </p>
          <p>
            <a href="https://www.youtube.com/@eetufck">
              ...and my youtube channel <FontAwesomeIcon icon={faYoutube} />
            </a>{" "}
            (which has been known to be updated several times a decade).
            <br />
            Here's an ancient video from said channel: <br />
            <iframe
              style={{ width: "560", height: "315" }}
              src="https://www.youtube.com/embed/rM52y1FwMo0?si=TVkk2i91Kul0LtYE"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </p>
        </div>
      </div>
    </>
  );
}

export default MainPart;
