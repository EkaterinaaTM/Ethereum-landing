import React from "react"

const FeatureBlock = ({ img, desc }) => (
  <div className="flex-row--center_item ">
    <img src={img} className="flex-row--center_img" />
    <p dangerouslySetInnerHTML={{ __html: desc }} />
  </div>
)

export default FeatureBlock
