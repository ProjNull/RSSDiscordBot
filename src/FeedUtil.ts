import Parser from "rss-parser";

export const GetRssFeed = async (url: string) => {
    const parser = new Parser()
    let feed = await parser.parseURL(url);
    return feed.items.reverse()
} 