import me from "../assets/me_square.png";
import meAlt from "../assets/me_alt_square.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBandcamp,
  faGithub,
  faLinkedin,
  faStackOverflow,
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
            internet. Here, you will find an assortment of my{" "}
            <a href="#projects">projects</a> and even some of my (attempted){" "}
            <a href="#music">music</a>.
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
            though. In those instances, I either go for a run, play my guitar,{" "}
            <a href="https://www.goodreads.com/user/show/103071340-orry">
              read a book
            </a>{" "}
            or curse creatively in English, Hebrew or Zulu (in decreasing order
            of fluency). Or just watch Sopranos or something like that. Tbh,
            that's most likely.
            <div>OK?</div>
            <div>?סַבָּבָּה</div>
            <div>Kulungile?</div>
          </div>
          <br />
          <div>
            <em>Also also</em>, you can find me{" "}
            <a className="fa" href="https://github.com/orrymr">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="fa" href="https://www.linkedin.com/in/orry-messer-010a1040/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="fa" href="https://stackoverflow.com/users/3214345/orrymr">
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
          </div>
          <div>
            Or just reach out: <em>orrymr -at- gmail -dot- com</em>
          </div>
        </div>

        <div id="projects">
          <div className="sub-heading">
            <h1>projects</h1>
          </div>
          <ul>
            <li>
              <em className="project-name">|Pointless Converter|</em> -&gt; Have
              you ever wondered how many fathoms you've run? Do you have a
              Strava acount? Now you can find out how many fathoms you've run
              with the <a href="#">Pointless Converter</a>.
            </li>
            {/* <li>
              <em className="project-name">|Quote Unquote|</em> -&gt;{" "}
              <a href="#">Quote Unquote</a>.
            </li> */}
            <li>
              <em className="project-name" style={{ fontSize: "1em" }}>
                |Demonstrating The Central Limit Theorem in R|
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
            Well, <a href="https://orrymesser.bandcamp.com/">here's <FontAwesomeIcon icon={faBandcamp} /></a> my
            Bandcamp (last updated in 1953). En example of which:
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
            Here's an ancient video from said channel:
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
