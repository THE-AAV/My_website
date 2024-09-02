import styles from'./HeroStyles.module.css';
import heroImg from '../../assets/final_final.png'
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import redditIcon from '../../assets/reddit-light.svg'
import { useTheme } from '../../common/ThemeContext';
function Hero() 
{
    const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return( 
   <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero}
        src={heroImg} alt="Profile Picture for Akshat Vyas" 
        />
         <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
    </div>
    <div className={styles.info}>
    <h1>
        Akshat 
        <br />
        Vyas
        </h1>
    <h2> 
    Aspring AI & Data Science Student
    </h2>
    <span>
        <a href="https://www.linkedin.com/in/akshat-vyas-8b2225301/" target="_blank">
        <img src={linkedinIcon} alt="Linkedin icon"/>
        </a>
    </span>
    <span>
        <a href="https://github.com/AAV2005/" target="_blank">
        <img src={githubIcon} alt="Github icon"/>
        </a>
    </span>
    <span>
        <a href="https://www.reddit.com/user/the_aav/" target="_blank">
        <img src={redditIcon} alt="Reddit icon"/>
        </a>
    </span>
    <p className={styles.description}>AI & Data Science Student passionate about leveraging machine learning and data analysis to drive innovative solutions
        </p>
    </div>
   </section>
    );
}
export default Hero;