import Lottie from "lottie-react"
import loadingAnimation from "../components/loading-animation.json"

function Loading () {
    return (
      <Lottie className="loading-animation" animationData={loadingAnimation} loop="true"/>
      )
}

export default Loading;