import React from "react"

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents(React.createElement('div',{id:'__portalModal',key:'__portalModal'},null))
}