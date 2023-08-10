import PropExplorationComp from "./props-exploration/PropExplorationComp";

const Demo = () => {
  window.appUrl = "https://example.com/ui";
  return (
    <div>
      <h1>{window.appUrl}</h1>
      <PropExplorationComp />
    </div>
  );
};

export default Demo;
