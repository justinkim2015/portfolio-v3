import "./projects.css";

const Project = ({ image, alt, title, live, git, desc, identity }) => {
  const toggle = () => {
    let overlayBox = document.querySelector(`#${identity}-box`);
    let overlayText = document.querySelector(`#${identity}-text`);
    overlayBox.classList.toggle("hidden");
    overlayText.classList.toggle("hidden");
  };

  return (
    <div className="project-container">
      {/* <div className={`project-desktop-image  ${identity}`}>
        <a href={live} className='project-link'>
          <div className="overlay" onMouseEnter={toggle} onMouseLeave={toggle}>

            <div className='overlay-box hidden' id={`${identity}-box`}>
              <h1 className='overlay-project-title'>{title}</h1>
              <a href={git} className="devicon-github-original"></a>
            </div>

            <p className="overlay-text hidden" id={`${identity}-text`}>{desc}</p>
          </div>
        </a>
      </div> */}

      <div className='project proj-mobile'>
        <img src={image} alt={alt} className='project-image'></img>
        <div className="project-text">
          <h3 className='project-name'>{title}</h3>
          <p className='project-desc'>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;




{/* <div className="mobile tablet">
<img src={image} alt={alt} className="project-image"></img>
<div className="project-body flex">
  <div className="project-card-heading">
    <h3 className="project-title">{title}</h3>
    <div className="icon-container">
      <a href={live}>Live</a>
      <a
        href={git}
        className="devicon-github-original colored icon-small"
      ></a>
    </div>
  </div>
  <div className="project-description">{desc}</div>
</div>
</div> */}
