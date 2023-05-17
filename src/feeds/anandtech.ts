import { GetRssFeed } from "../FeedUtil";
import { FeedData } from "../types";

export default async (): Promise<FeedData[]> => {
    const feed = await GetRssFeed("https://www.anandtech.com/rss")
    
    let data:FeedData[] = []
    feed.splice(20).forEach((item)=> {
        if (item.title && item.contentSnippet && item.link){
            if (!item.creator) item.creator = ""
            data.push({title: item.title, content: item.contentSnippet,link: item.link, author: item.creator})
        }
    })
    return data
} 