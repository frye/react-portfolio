import { faApple, faCss3, faHtml5, faJsSquare, faLinux, faNodeJs, faPython, faReact, faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.scss";
// import cSharpLogo from '../../assets/images/Csharp_Logo.png';

const About = () => {
  return (
    <div className="about-text">
      <h1>About me</h1>
      <p>
        I am an aspiring full stack developer with over two decades of
        experience in supporting various software engineering teams. From Telecom
        companies in Finland to Microsoft and now GitHub in the USA. At present
        I am working as a Senior Technical Project Manager.
      </p>
      <p>
        On my free time I like to spend time in the beautiful Pacific Northwest.
        Especially sailing the Puget Sound.
      </p>

      <h2>Technologies</h2>
      <p>Below is a list of some of the technologies I have worked with during 
        my 20+ years in the field.</p>
      <div className="tech-container">
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faJsSquare} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faNodeJs} />
        <FontAwesomeIcon icon={faPython} />
        <FontAwesomeIcon icon={faLinux} />
        <FontAwesomeIcon icon={faWindows} />
        <FontAwesomeIcon icon={faApple} />
        {/* <FontAwesomeIcon icon={cSharpLogo} /> */}
      </div>

      <h2>Resume</h2>
      <p>
        You can find more details in my CV.{" "}
        <a href="./CV_202110.pdf" className="dllink" target="_blank">
          (Download it here)
        </a>
      </p>
    </div>
  );
};

export default About;
