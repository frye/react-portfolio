import "./index.scss";
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

      <h2>Resume</h2>
      <p>
        You can find more details in my CV.{" "}
        <a href="./CV_202110.pdf" className="dllink">
          (Download)
        </a>
      </p>
    </div>
  );
};

export default About;
