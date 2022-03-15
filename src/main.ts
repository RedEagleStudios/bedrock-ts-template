import { CoreEntity, makeAddon } from "bedrock-ts"

const example: CoreEntity = {
  identifier: "re:example",
  createBP(bp) {
    bp.setComponents({
      MCTypeFamily: {
        family: ["example"],
      },
      MCCollisionBox: {
        height: 1,
        width: 1,
      },
      MCPhysics: {},
      MCPushable: {
        is_pushable: false,
      },
      MCHealth: {
        value: 1,
        max: 1,
      },
    })
    return bp.build()
  },
  createRP(rp) {
    return rp.build()
  },
}

makeAddon({
  packName: "Example Addon",
  entities: [example],
})
