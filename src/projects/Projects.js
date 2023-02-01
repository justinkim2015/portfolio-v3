import './projects.css'
import Project from './Project'
import karaoke from './images/karaoke.png'
import railsbook from './images/railsbook.png'
import chess from './images/chess.png'
import weather from './images/weather.png'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const projectsVariant = {
    visible: { opacity: 1, y: 0},
    hidden: { opacity: 0, y: 20},
  }  

  useEffect(() => {
    if(inView) {
      control.start("visible")
    }
  }, [control, inView])

  return (
    <section id='projects'>
      <div className="projects-header">
        <h2 className='projects-title'>My Projects</h2>
        <h6 className='projects-subtitle'>Check out some the projects I've made.</h6>
        <div className='underbar'></div>
      </div>

      <motion.div 
      ref={ref}
      variants={projectsVariant}
      transition={{ duration: 0.7}}
      initial="hidden"
      animate={control}         
      className='animation projects-container'>
        
        <Project
          image={karaoke}
          alt="Karaoke Planner Gif"
          title="Karaoke Planner"
          live="http://karaoke.justins-portfolio.live"
          git="https://github.com/justinkim2015/karaoke-song-organizer#karaoke-song-organizer"
          desc="This Ruby on Rails application keeps track of karaoke songs and stores.  By using several Google APIs, Genius API, an IP geocoding API, and webscraping it is able to find and save song lyrics and nearby karaoke stores."
          identity='Karaoke'
        />

        <div className='underbar'></div>

        <Project
          image={railsbook}
          alt="RailsBook Gif"
          title="RailsBook"
          live="https://rails-book.onrender.com/"
          git="https://github.com/justinkim2015/social-media-clone#summary"
          desc="I made this with Ruby on Rails and hosted on Render.  This is a social media site where one can post, add friends, and upload photos."
          identity='RailsBook'
        />

        <div className='underbar'></div>

        <Project
          image={weather}
          alt="Weather App screenshot"
          title="iPad Weather App"
          live="https://justinkim2015.github.io/ipad-weather-app/"
          git="https://github.com/justinkim2015/ipad-weather-app"
          desc="This is a single-page weather application made with ReactJS and vanilla CSS. By leveraging the data of a Geolocation API and a weather API this app shows you real-time data of the weather in your area."
          identity='Weather'
        />

        <div className='underbar'></div>

        <Project
          image={chess}
          alt="Chess screenshot"
          title="Two-Player CLI Chess"
          live="https://github.com/justinkim2015/chess#summary"
          git="https://github.com/justinkim2015/chess#summary"
          desc="This is a two-player chess game built in Ruby using OOP principles."
          identity='Chess'
        />
      </motion.div>

    </section>
  )
}

export default Projects