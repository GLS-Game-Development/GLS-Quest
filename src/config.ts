import { Types } from "phaser";
import { Boot } from "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";
import { Map } from "./scenes/Map";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  parent: "game-container",
  scene: [Boot, Preloader, Map],
};

export default config;
