import Svg, { Circle } from "react-native-svg";
import { View } from "react-native";

import { DeviceMotion } from "expo-sensors";
import { useEffect, useState } from "react";
const CONFIG = {
  backgroundColor: "green",
  ballColor: "blue",
  ballBorderColor: "red",
  size: 100,
};

export function SensorComponent() {
  const [location, setLocation] = useState({ top: 100, left: 100 });
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    async function checkMotionAvilable() {
      const permissionResult = await DeviceMotion.getPermissionsAsync();
      if (permissionResult.status === "granted") {
        const isAvailableResult = await DeviceMotion.isAvailableAsync();
        setIsAvailable(true);
      }
    }
    checkMotionAvilable();
  }, []);

  useEffect(() => {
    let subscription;
    if (isAvailable) {
      subscription = DeviceMotion.addListener((event) => {
        console.log(event);
      });
    }
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [isAvailable]);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: CONFIG.backgroundColor,
      }}
      onLayout={({ nativeEvent }) => {
        const { height, width } = nativeEvent.layout;
        setLocation(
          (top = Math.round(height / 2) - CONFIG.size / 2),
          (left = Math.round(width / 2) - CONFIG.size / 2)
        );
      }}
    >
      <Svg height={CONFIG.height} width={CONFIG.width} viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="25"
          stroke={CONFIG.ballBorderColor}
          strokeWidth="2.5"
          fill={CONFIG.ballColor}
        />
      </Svg>
    </View>
  );
}
