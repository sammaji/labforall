import React from "react";
import "../assets/css/Content.css";
export default function Content() {
  const calculateDimensions = () => {
    return [128, 128];
  };

  const [height, width] = calculateDimensions();

  return (
    <article>
      <div>
        <h1>Hello Sam</h1>
        <h2>Today's Experiments</h2>
      </div>

      <div>
        <img height={height} width={width} />
      </div>

      <div>
        <h3>Title of Experiment</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </article>
  );
}
