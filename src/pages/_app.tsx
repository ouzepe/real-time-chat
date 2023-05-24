import "@/styles/globals.css";
import SafeHydrate from "@/components/atoms/SafeHydrate";
import Context from "@/Context/Context";

const App = ({ Component, pageProps }: any) => {
  return (
    <Context>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </Context>
  );
};

export default App;
