import { AddonGenerator, MCAddon } from "bedrock-ts"

const addon: MCAddon = {
  packName: "Addon",
  animControllers: [],
  animations: [],
  entities: [],
  items: [],
  recipes: [],
}

new AddonGenerator(addon).generate()
