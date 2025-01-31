import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.scss';
import '../styles/team-preview.scss';
import '../styles/card.scss';
import '../styles/nav.scss';
import '../styles/match-info.scss';
import '../styles/popular-series.scss';
import '../styles/scorecard.scss';
import '../styles/schedule.scss';
import '../styles/fantasy.scss';
import '../styles/series.overview.scss';
import '../styles/series.matches.scss';
import '../styles/news.scss';
import '../styles/ranking.scss';
import '../styles/footer.scss';
import '../styles/loader.scss';
import '../styles/anycss.scss';
import '../styles/infocard.scss';
import '../styles/squads.scss';
import '../styles/match-news.scss'





export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
