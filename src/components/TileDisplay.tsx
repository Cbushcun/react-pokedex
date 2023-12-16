import { useState } from "react";
import HomeScreen from "./menu_screens/HomeScreen";

const TileDisplay = () => {
  const [previousScreen, setPreviousScreen] = useState<string | null>(null);

  return (
    <>
      <HomeScreen />
    </>

  );
};

export default TileDisplay;
