import sunsetImg from '../assets/pnw-sunset.jpg'
import './ScenicBanner.css'

export default function ScenicBanner() {
  return (
    <div className="scenic-banner">
      <img src={sunsetImg} alt="Pacific Northwest sunset over the water" />
    </div>
  )
}
