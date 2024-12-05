import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss';
import '../styles/team-preview.scss';
import '../styles/card.scss';
import '../styles/nav.scss';
import '../styles/match-info.scss';
import '../styles/ScoreCardSlider2.scss';
import '../styles/popular-series.scss';



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
