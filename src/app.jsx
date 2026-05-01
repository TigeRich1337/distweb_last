/* DisTechSol — App shell & router */

const App = () => {
  const route = useRoute();
  const [lang, setLang] = React.useState("EN");
  const t = (k) => (I18N[lang] && I18N[lang][k]) ? I18N[lang][k] : (I18N.EN[k] || k);

  let page;
  if (route === "/" || route === "") page = <Home lang={lang} t={t} />;
  else if (route === "/about") page = <About />;
  else if (route === "/products" || route.startsWith("/products#")) page = <Products />;
  else if (route === "/solutions" || route.startsWith("/solutions#")) page = <Solutions />;
  else if (route.startsWith("/service/")) {
    const id = route.split("/service/")[1].split(/[?#]/)[0];
    page = <ServiceDetail serviceId={id} />;
  }
  else if (route === "/vendors" || route.startsWith("/vendors#")) page = <Vendors />;
  else if (route === "/projects" || route.startsWith("/projects/")) page = <Projects />;
  else if (route === "/contact") page = <Contact lang={lang} t={t} />;
  else page = <NotFound />;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <Header route={route} />
      {page}
      <Footer />
      <Tweaks />
    </LangContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
