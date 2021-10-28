import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Our Team",
  };

  return (
    <section {...props} className={outerClasses}>
      <div id="testimonial" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div>
                <div>
                  <div className="text-h1 text-color-primary fw-600 tt-u mb-8">
                    Antonio Barcelo-Rosales
                  </div>
                  <Image
                    src={require("./../../assets/images/anthony.jpg")}
                    alt="Open"
                    width={345}
                    height={345}
                  />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    <a href="https://www.linkedin.com/in/antonio-barcelo-rosales/">
                      {" "}
                      Linkedin{" "}
                    </a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="text-color-low">
                    <a
                      className="text-xs"
                      href="https://github.com/anthonybarcelorosales"
                    >
                      GitHub
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div>
                <div>
                  <div className="text-h1 text-color-primary fw-600 tt-u mb-8">
                    June Culp
                  </div>
                  <Image
                    src={require("./../../assets/images/june.jpg")}
                    alt="Open"
                    width={350}
                    height={350}
                  />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    <a href="https://www.linkedin.com/in/juneculp/">
                      {" "}
                      Linkedin{" "}
                    </a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="text-color-low">
                    <a href="https://github.com/juneculp">GitHub</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div>
                <div>
                  <div className="text-h1 text-color-primary fw-600 tt-u mb-8">
                    Darren Chan
                  </div>
                  <Image
                    src={require("./../../assets/images/darren.jpg")}
                    alt="Open"
                    width={350}
                    height={350}
                  />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    <a href="https://www.linkedin.com/in/dbchan/"> Linkedin </a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="text-color-low">
                    <a href="https://github.com/DarrenChan18">GitHub</a>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <div>
                <div>
                  <div className="text-h1 text-color-primary fw-600 tt-u mb-8">
                    Estrada Bernard
                  </div>
                  <Image
                    src={require("./../../assets/images/carney.jpg")}
                    alt="Open"
                    width={350}
                    height={350}
                  />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    <a href=""> Linkedin </a>
                  </span>
                  <span className="text-color-low"> / </span>
                  <span className="text-color-low">
                    <a href="https://github.com/EBERNARD2">GitHub</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
