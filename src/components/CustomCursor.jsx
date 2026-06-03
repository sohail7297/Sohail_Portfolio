import AnimatedCursor from
"react-animated-cursor";

export default function CustomCursor() {

  return (

    <AnimatedCursor

      innerSize={10}

      outerSize={35}

      color="212,175,55"

      outerAlpha={0.3}

      innerScale={1}

      outerScale={2}

      clickables={[
        "a",
        "button",
        ".project-card",
      ]}
    />

  );
}