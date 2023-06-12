import styles from "@/styles/Global"
import assets from "../assets"
import { Download, SectionWrapper, Features } from "../components"

export default function Home() {
  return (
    <>
      <SectionWrapper 
        title="Your own store of Nifty NFTs. 
        Start Selling & Growing"
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ millioon people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart user Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors a flient UI design."
        mockupImg={assets.homeCards}
        reverse
        banner="banner"
      />
      <Features />
      <SectionWrapper 
        title="Deployement"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screen. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download /> 

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.blackText}`}>Made with love by {" "}
        <span className="bold">Raphael Busquet</span>
        </p> 
      </div>
    </>
 )
}
