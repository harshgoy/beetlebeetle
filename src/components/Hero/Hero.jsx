import "./Hero.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './Hero.module.css';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {


  const renderCustomIndicator = (onClickHandler, isSelected, index, label) => {
    const indicatorClasses = isSelected ? `${styles['custom-indicator']} ${styles['selected']}` : styles['custom-indicator'];
    const lineClasses = index === 0 ? '' : styles['line']; // Don't render line for the first indicator

    return (
      <>
        <li
          className={indicatorClasses}
          onClick={onClickHandler}
          onKeyDown={onClickHandler}
          aria-label={`Slide ${index}`}
          title={`Slide ${index}`}
          key={index}
          role="button"
          tabIndex={0}
        />
        <div className={lineClasses} />
      </>
    );
  };
  return (
    <div className="hero--container">
      <div className="hero--left--container">
        <Carousel
          axis={"vertical"}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          renderIndicator={renderCustomIndicator}
          showArrows={false}
          showStatus={false}
        >
          <div >
            <p >Build more <span style={{
              backgroundImage: `
  linear-gradient(181deg, #ffa620 10%, #fba11a 10%, transparent 15%, transparent 100%)`}}>relationships</span>. Close more deals. Automate everything in between.</p>
            <p style={{ fontSize: "18px" }}>The relationship intelligence & deal flow platform designed by ex-investors for <span style={{ padding: "5px", backgroundColor: "#FFDB5C", color: "#120920", borderRadius: "99rem" }}>Venture Capital</span> </p>
          </div>
          <div>
            <p>Stop wasting hours on outdated spreadsheets and clunky <span style={{
              backgroundImage: `
  linear-gradient(181deg, #ffa620 10%, #fba11a 10%, transparent 15%, transparent 100%)`}}>CRMs</span> </p>
            <p style={{ fontSize: "18px" }}>Our news platform helps you <span style={{ padding: "5px", backgroundColor: "#FFDB5C", color: "#120920", borderRadius: "99rem" }}>eliminate busywork </span> and manage your deals and relationships effortlessly. </p>
          </div>

        </Carousel>


        <div className="input-container">
          <input type="email" className="input-field" placeholder="Enter your email" />
          <button className="button-inside"><span>Request a demo </span><span><FaArrowRightLong /></span></button>
        </div>
      </div>
      <div className="hero--right--container">
        <img src="./hero.png" alt="" />

      </div>


    </div>
  )
}

export default Hero
