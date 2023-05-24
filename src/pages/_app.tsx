import "@/styles/globals.css";

import SafeHydrate from "@/components/atoms/SafeHydrate";
const App = ({ Component, pageProps }: any) => {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
};

export default App;
