import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }



import SafeHydrate from '@/components/atoms/SafeHydrate';
const App = ({ Component, pageProps }: any) => {
    return (
                    <SafeHydrate>
                        <Component {...pageProps}/>
                    </SafeHydrate>
    );
};

export default App;