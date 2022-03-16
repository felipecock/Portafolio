import React from "react"

type Params = {
  id: string
}

export const JumpReference = ({ id }: Params) => {
  return <div id={id} className="accurate-jump"></div>
}
