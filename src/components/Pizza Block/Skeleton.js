import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
    speed={2}
    width={320}
    height={432}
    viewBox="0 0 320 432"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="55" y="274" rx="3" ry="3" width="218" height="82" /> 
    <rect x="59" y="237" rx="3" ry="3" width="212" height="17" /> 
    <circle cx="161" cy="120" r="99" /> 
    <rect x="106" y="353" rx="0" ry="0" width="1" height="9" /> 
    <rect x="67" y="388" rx="0" ry="0" width="80" height="18" /> 
    <rect x="189" y="374" rx="11" ry="11" width="77" height="45" />
  </ContentLoader>
)

export default Skeleton

