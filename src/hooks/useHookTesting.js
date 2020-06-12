import React, { useEffect, useState } from "react";

export function useHookTest(num) {
  const [multiply, setMultiply] = useState({
    timesFive: 5,
    timesThree: 3
  });
  //Is like a component did mount
  useEffect(() => {
    setMultiply({
      timesFive: 5 * num,
      timesThree: 3 * num
    });
  });
  return multiply;
}
