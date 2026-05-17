import HomeBanner from "../components/HomeBanner";
import CategorySection from "../components/CategorySection";
import ThreeBanners from "../components/ThreeBanners";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>

      {/* 🔥 TOP BANNER */}
      <HomeBanner />

      {/* 🔥 TRENDING CATEGORIES */}
      <CategorySection />

      {/* 🔥 3 PROMO BANNERS */}
      <ThreeBanners />
      <Footer />

    </div>
  );
}

export default Home;