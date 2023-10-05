import Svg, { Circle, Rect } from "react-native-svg";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { useState } from "react";

export function SvgComponent() {
  const [location, setLocation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const gesture = Gesture.Manual()
    .onTouchesDown(({ allTouches }) => {
      console.log(allTouches);
      setLocation({ x: allTouches[0].x, y: allTouches[0].y });
    })
    .onTouchesMove(({ allTouches }) => {
      setLocation({ x: allTouches[0].x, y: allTouches[0].y });
    });
  const pinchGesture = Gesture.Pinch().onChange((e) => {
    setScale(e.scale);
    console.log(scale);
  });
  return (
    <GestureDetector gesture={pinchGesture}>
      <Svg
        style={{
          position: "absolute",
          left: Math.round(location.x),
          top: Math.round(location.y),
          // left: 200,
          // top: 200,
          transform: [{ scale: scale }],
        }}
        height="50%"
        width="50%"
        viewBox="0 0 100 100"
      >
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
      </Svg>
    </GestureDetector>
  );
}
