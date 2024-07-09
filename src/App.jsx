import {
  CustomerReviews,
  Footer,
  Hero,
  Popularproducts,
  Services,
  Speciacloffers,
  Subscribe,
  Superququailty,
} from "./Section";
import Nav from "./components/Nav";


const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popularproducts />
      </section>
      <section className="padding">
        <Superququailty />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <Speciacloffers />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-purple-400">
        <Footer />
      </section>
    </main>
  );
};

export default App;
