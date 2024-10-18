import Footer from "./sections/footer";
import Navbar from "./sections/navbar";
import Meta from "./meta";
import FloatingCTA from "./floatingCta";

export default function Layout({ children, ilayoutData }) {
  return (
    <div className="layout">
      <Navbar inavbar={ilayoutData.navbar} />
      <Meta imetaData={ilayoutData.metaData} />
      <main className="relative">
        <FloatingCTA icta={ilayoutData.floatingbtn} />
        {children}
      </main>
      <Footer ifooterData={ilayoutData.footerData} />
    </div>
  );
}
