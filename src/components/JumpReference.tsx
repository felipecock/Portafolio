import React from "react"

type Params = {
  id: string
}

export const JumpReference = ({ id }: Params) => {
  return <div id={id} className="salto-preciso"></div>
}
