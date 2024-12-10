export const seodata = {
    HOME: {
        name: 'Home',
        metaTitle: 'Live Sports Scores, News & Predictions | SportsWiz',
        metaDes: 'Get live sports updates: scores, news, schedules, stats, and predictions for cricket, and more sports. Stay updated with rankings, highlights, and live scores.',
        metaKeys: 'live sports, sports scores, live cricket, match predictions, fantasy sports, live updates, sports schedules, sports news, player stats, player rankings, match highlights, sports videos, dream11 tips, sports previews, international cricket, sports results, sports predictions, IPL',
    },
    LIVE_SCORE: {
        name: 'Live Score',
        metaTitle: 'Live Sports Scores 2024: Latest Updates, Scorecard | SportsWiz',
        metaDes: 'Get 2024 live sports scores, updates, and commentary for all major international and domestic sports events. Stay updated with every match on our platform.',
        metaKeys: 'Live Sports Scores, Cricket Scores 2024, Football Live Scores, Today Match Score, Sports Commentary, Sports Updates 2024',
    },
    SCHEDULED: {
        name: 'Scheduled Matches',
        metaTitle: 'Cricket Match Schedule| International, T20, Domestic & Women',
        metaDes: 'Upcoming Cricket Matches 2024: Stay updated with India\'s latest match schedule, series names, venues, today\'s matches, and more. Get the details on Sportswiz!',
        metaKeys: 'cricket match schedule, international cricket, T20 leagues, domestic cricket matches, women\'s cricket matches, upcoming cricket fixtures, live cricket schedule, match details, live sports',
    },
    NEWS: {
        name: 'News',
        metaTitle: 'Sports News: Latest International, Domestic and League Updates | SportsWiz',
        metaDes: 'Get latest updates on Cricket news on international matches, tournaments, leagues and breaking sports news. Stay updated with the latest scores and highlights.',
        metaKeys: 'sports news, Cricket news, international cricket updates, domestic cricket news, league cricket news, women cricket news, latest cricket matches, cricket series updates, cricket tournaments',
    },
    SERIES: {
        name: 'Series',
        metaTitle: 'All Sports Series: International, Domestic, Women\'s & League',
        metaDes: 'Explore all cricket series, including international, domestic, women\'s, and league matches. Stay updated with schedules, scores, and insights!',
        metaKeys: 'cricket series, international cricket, domestic cricket, women\'s cricket, league cricket, live cricket scores, cricket news, cricket updates',
    },
    FANTASY_TIPS: {
        name: 'Fantasy Tips',
        metaTitle: 'Winning Fantasy Cricket Tips & Probable XI for Dream11',
        metaDes: 'Fantasy Cricket Tips: Get the latest Fantasy Cricket winning tips, best fantasy playing 11, pitch reports, and Dream11 predictions and more on SportsWiz',
        metaKeys: 'Expert Fantasy Tips, Dream11 Team Predictions, Fantasy Sports News, Fantasy Cricket Tips, Dream11 Team, Dream11',
    },
    RANKING: {
        name: 'Rankings',
        metaTitle: 'Latest ICC Cricket Rankings | Men\'s & Women\'s Standings',
        metaDes: 'Stay updated with the latest ICC Cricket Rankings for Men\'s and Women\'s teams across Tests, ODIs, and T20Is. Explore player and team standings now!',
        metaKeys: 'ICC Cricket Rankings, Men\'s Cricket Rankings, Women\'s Cricket Rankings, Test Rankings, ODI Rankings, T20I Rankings, International Cricket Standings, Player Rankings, Team Rankings',
    },
    MORE: {
        name: 'More',
        metaTitle: 'Live Sports Schedule | Upcoming Matches & Events | SportsWiz',
        metaDes: 'Stay updated with the latest live sports schedule, featuring upcoming matches and events. Never miss a moment with SportsWiz!',
        metaKeys: 'live sports schedule, upcoming sports events, sports matches today, live sports updates, sports schedule, watch live sports, sports fixtures, latest sports news',
    },
    VIDEOS: {
        name: 'Videos',
        metaTitle: 'Watch Cricket Matches, Highlights & Updates | SportsWiz',
        metaDes: 'Stay updated with live cricket matches, scores, and highlights on SportsWiz. Catch all the action here!',
        metaKeys: 'sports videos, sports highlights, sports analysis, latest sports news, sports entertainment, video highlights, live sports updates, sports trends, SportsWiz',
    },
    ARTICLES: {
        name: 'Articles / Blogs',
        metaTitle: 'Latest Cricket News, Articles & Predictions | SportsWiz',
        metaDes: 'Explore the latest cricket articles, blogs, and predictions at SportsWiz. Stay updated with expert insights and in-depth analysis for every match!',
        metaKeys: 'cricket articles, cricket blogs, cricket predictions, sports news, cricket analysis, match insights, expert predictions, cricket updates',
    },
    FANTASY: {
        name: 'Fantasy',
        metaTitle: 'Fantasy Cricket & Sports Insights | SportsWiz',
        metaDes: 'Explore the latest fantasy cricket news, tips, and updates. Join SportsWiz for insights and strategies to improve your fantasy sports experience!',
        metaKeys: 'fantasy cricket, sports updates, fantasy sports tips, cricket news, fantasy cricket strategies, SportsWiz, sports insights, fantasy cricket leagues, online cricket games, fantasy sports platform',
    },
    ABOUT_US: {
        name: 'About Us',
        metaTitle: 'About SportsWiz | Your Source for All Things Sports',
        metaDes: 'SportsWiz is your go-to source for sports news. Explore news, updates, and insights on your favorite Sports. Join our community!',
        metaKeys: 'SportsWiz, sports news, sports updates, sports insights, sports information, sports events',
    },
    CONTACT_US: {
        name: 'Contact Us',
        metaTitle: 'Contact Us | SportsWiz',
        metaDes: 'Get in touch with SportsWiz for all sports news, highlights, and updates. We\'re here to help with your queries and feedback!',
        metaKeys: 'SportsWiz contact',
    },
    PRIVACY_POLICY: {
        name: 'Privacy Policy',
        metaTitle: 'SportsWiz Privacy Policy: Your Data Protection Guide',
        metaDes: 'Explore SportsWiz\'s Privacy Policy. Learn how we protect your data and privacy while sharing sports news and highlights. Your security matters to us!',
        metaKeys: 'privacy policy, data protection, SportsWiz privacy, user privacy',
    },
    DISCLAIMER: {
        name: 'Disclaimer',
        metaTitle: 'SportsWiz Disclaimer',
        metaDes: 'Read the SportsWiz disclaimer for important terms and conditions related to our sports news articles and highlights.',
        metaKeys: 'SportsWiz disclaimer, sports news articles, highlights disclaimer, terms and conditions, sports website, sports content disclaimer, legal information',
    },
    TERMS_CONDITIONS: {
        name: 'Terms & Conditions',
        metaTitle: 'Terms & Conditions - SportsWiz',
        metaDes: 'Read SportsWiz\'s Terms & Conditions. Discover our guidelines for accessing sports news articles, highlights, and services. Stay informed and engaged!',
        metaKeys: 'Terms and Conditions, SportsWiz, sports news articles, sports highlights, website usage policies, user guidelines, sports content, sports platform T&C',
    },
} as any;




export function getPageSEOData(pageName: string) {
    const pageKey = pageName.toUpperCase();
    if (seodata[pageKey]) {
        return seodata[pageKey];
    } else {
        return {
            error: 'Page not found',
            message: `The page '${pageName}' does not exist in the SEO data.`
        };
    }
}