import Lottie from "lottie-react"
import loadingAnimation from "../components/loading-animation.json"

function Loading () {
    return (
        <>
      <h1>Loading...</h1>
        <Lottie className="loading-animation" animationData={loadingAnimation} loop="true"/>
        </>
    )
}

export default Loading;