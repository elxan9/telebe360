import '../styles/globals.css'; // veya başka bir global stil dosyası

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;