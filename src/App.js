import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Inter', sans-serif",
    headingFontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "STRATEGY",
      subHeadingColor: "#CA8504",
      heading: "Decisions to take",
      headingColor: "#000",
    },
    arrowColor: "#000",

    step1: {
      label: "Should we start this Initiative",
      color: "#000",
      bg: "#FEDF89",
    },

    step2a: {
      label: "Decision",
      color: "#000",
      bg: "#FEDF89",
    },

    step2b: {
      label: "Relevant ressources",
      color: "#000",
      bg: "#FAC515",
    },
    step3a: {
      label: "Positive outcome",
      color: "#000",
      bg: "#73E2A3",
    },
    step3b: {
      label: "Negative outcome",
      color: "#000",
      bg: "#FDA29B",
    },
    step3c: {
      label: "Relevant ressources",
      color: "#000",
      bg: "#FEDF89",
    },
    step3d: {
      label: "Significant learning",
      color: "#000",
      bg: "#FEDF89",
    },

    data: [
      {
        info: "Spend a few minutes discussing the decision you need to make.",
        infoColor: "#000",
        title: "5 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
      {
        info: 'Think of each decision node as an "if-then" statement. Explore alternative outcomes as you move down the branches.',

        infoColor: "#000",
        title: "15 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },

      {
        info: "Discuss possible outcomes and their consequences.",
        infoColor: "#000",
        title: "10 min together",
        titleColor: "#000",
        bg: "#F2F4F7",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--headingFontFamily": allData.headingFontFamily,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
