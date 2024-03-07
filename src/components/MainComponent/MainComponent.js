import React from "react";
import classes from "./MainComponent.module.css";
import Condition from "../../images/Condition";
import YesRight from "../../images/YesRight";
import NoLeft from "../../images/NoLeft";

import LeftRight from "../../images/LeftRight";

const MainComponent = ({
  header,
  step1,
  step2a,
  step2b,
  step3a,
  step3b,
  step3c,
  step3d,

  arrowColor,
  data,
}) => {
  return (
    <div
      className="min-h-screen flex flex-col gap-20 items-center  w-full py-20"
      style={{ background: "var(--mainBg) " }}
    >
      <div className={classes.headingContainer}>
        <h3
          className={classes.subHeading}
          style={{ "--color": header.subHeadingColor }}
        >
          {header.subHeading}
        </h3>
        <h1
          className={classes.heading}
          style={{ "--color": header.headingColor }}
        >
          {header.heading}
        </h1>
      </div>
      <div className={classes.mainWrapper}>
        <div className={classes.wrapper}>
          <div className={[classes.condition, classes.step1].join(" ")}>
            {" "}
            <Condition bg={step1.bg} />
            <p className={[classes.label, classes.conditionLabel].join(" ")}>
              {step1.label}
            </p>{" "}
            <div className={classes.noLeft}>
              <NoLeft color={arrowColor} />
            </div>
            <div className={classes.yesRight}>
              <YesRight color={arrowColor} />
            </div>
          </div>
          <div className={classes.step2Container}>
            <div
              className={[classes.box, classes.step2a].join(" ")}
              style={{ "--bg": step2a.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step2a.color }}>
                {step2a.label}
              </h2>
            </div>
            <div
              className={[classes.box, classes.step2b].join(" ")}
              style={{ "--bg": step2b.bg }}
            >
              <h2 className={classes.label} style={{ "--color": step2b.color }}>
                {step2b.label}
              </h2>
            </div>
          </div>
          <div className={classes.step3Container}>
            <div className={classes.step3abContainer}>
              <div
                className={[classes.box, classes.step3a].join(" ")}
                style={{ "--bg": step3a.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3a.color }}
                >
                  {step3a.label}
                </h2>
              </div>{" "}
              <div
                className={[classes.box, classes.step3b].join(" ")}
                style={{ "--bg": step3b.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3b.color }}
                >
                  {step3b.label}
                </h2>
              </div>
              <div className={classes.leftRight}>
                <LeftRight color={arrowColor} />
              </div>
            </div>
            <div className={classes.step3cdContainer}>
              <div
                className={[classes.box, classes.step3c].join(" ")}
                style={{ "--bg": step3c.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3c.color }}
                >
                  {step3c.label}
                </h2>
                <div className={classes.leftRight}>
                  <LeftRight color={arrowColor} />
                </div>
              </div>{" "}
              <div
                className={[classes.box, classes.step3d].join(" ")}
                style={{ "--bg": step3d.bg }}
              >
                <h2
                  className={classes.label}
                  style={{ "--color": step3d.color }}
                >
                  {step3d.label}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.allData}>
          {data.map((el, i) => (
            <div
              className={classes.infoContainer}
              style={{ "--bg": el.bg }}
              key={i}
            >
              <p className={classes.info} style={{ "--color": el.infoColor }}>
                {" "}
                {el.info}
              </p>
              <h2
                className={classes.title}
                style={{ "--color": el.titleColor }}
              >
                {" "}
                {el.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
