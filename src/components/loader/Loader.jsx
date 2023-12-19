
import Loader from "../../assets/loader.svg";

const LoaderComponent = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="select-none max-lg:m-1 flex rounded-lg">
        <div>
          <img src={Loader} alt="login" />
        </div>
      </div>
    </div>
  )
}

export default LoaderComponent