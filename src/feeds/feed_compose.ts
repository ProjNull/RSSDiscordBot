import { FeedData } from "../types"
import alternativeto from "./alternativeto"
import anandtech from "./anandtech"

export default async (): Promise<{name:string, icon?: string | null,source: string,  data:FeedData[]}[]> => {
    return [
        {
            name: "AlternativeTo News",
            source: "https://alternativeto.net/news/all/",
            icon: "https://alternativeto.net/favicon.png",
            data: await alternativeto()
        },
        {
            name: "AnandTech News",
            source: "https://www.anandtech.com/",
            icon: "https://www.anandtech.com/content/images/rss_logo.png",
            data: await anandtech()
        },
    ]
}

