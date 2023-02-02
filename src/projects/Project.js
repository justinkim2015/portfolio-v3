import "./projects.css";
import github from '../logos/github.png'
const Project = ({ image, alt, title, live, git, desc, identity }) => {
  const toggle = () => {
    let overlayBox = document.querySelector(`#${identity}-box`);
    let overlayText = document.querySelector(`#${identity}-text`);
    overlayBox.classList.toggle("hidden");
    overlayText.classList.toggle("hidden");
  };

  return (
    <div className="project-container">
      <div className='project'>
        <a href={live}><img src={image} alt={alt} className='project-image'></img></a>
        <div className="project-text">
          <h3 className='project-name'>{title}</h3>
          <a href={git}><img src={github} className='project-icon'></img></a>
        </div>
      </div>
    </div>
  );
};

export default Project;