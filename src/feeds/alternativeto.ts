import { GetRssFeed } from "../FeedUtil";
import { FeedData } from "../types";


function getImageLink(input:string) {

    // Regular expression pattern to match the image source URL
    const imgSrcRegex = /<img[^>]+src="([^">]+)"/;
    const match = input.match(imgSrcRegex);
  
    if (match && match.length >= 2) {
      const imageLink = match[1];
      return imageLink
    } else {
      return "https://cdn.discordapp.com/attachments/1107958074423136287/1107990498418896906/nologo.png"
    }
  }


export default async (): Promise<FeedData[]> => {
    const feed = await GetRssFeed("https://feed.alternativeto.net/news/all/")
    let data:FeedData[] = []
    feed.forEach((item)=> {
        if (item.title && item.contentSnippet && item.link && item.content) {
            if (!item.creator) item.creator = ""
            data.push({title: item.title, content: item.contentSnippet,link: item.link, author: item.author, image: getImageLink(item.content)})
        }
    })
    return data
} 