import React from "react"
import ContentLoader from "react-content-loader"

const AvailableHoursSkeleton = (props: any) => (
  <ContentLoader 
    speed={2}
    width="100%"
    viewBox="0 0 360 140"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="49" y="8" rx="3" ry="3" width="166" height="8" /> 
    <rect x="6" y="57" rx="3" ry="3" width="51" height="21" /> 
    <circle cx="20" cy="20" r="20" /> 
    <rect x="65" y="56" rx="3" ry="3" width="51" height="21" /> 
    <rect x="125" y="56" rx="3" ry="3" width="51" height="21" /> 
    <rect x="185" y="56" rx="3" ry="3" width="51" height="21" /> 
    <rect x="245" y="56" rx="3" ry="3" width="51" height="21" /> 
    <rect x="305" y="56" rx="3" ry="3" width="51" height="21" /> 
    <rect x="6" y="97" rx="3" ry="3" width="51" height="21" /> 
    <rect x="66" y="96" rx="3" ry="3" width="51" height="21" /> 
    <rect x="126" y="96" rx="3" ry="3" width="51" height="21" /> 
    <rect x="50" y="24" rx="3" ry="3" width="88" height="6" />
  </ContentLoader>
)

export default AvailableHoursSkeleton