import Eventhero from "./component/Eventhero";
import Tiketcard from "./component/Tiketcard";
import CTA from "./component/CTA";
import Footer from "./component/Footer";
export default function App() {
  return (
    <div className="font-sans">
      <Eventhero
        title="TASTE THE DIRT TOUR"
        presenter="Making Gigs"
        posterUrl="../makingtiks.png"
      />
      <Tiketcard />
      <CTA />
      <Footer />
    </div>
  );
}
