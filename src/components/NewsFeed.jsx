import { useEffect, useState } from "react";

import useCrypto from "../hooks/useCrypto";
import { STATUS_UPDATES } from "../constants";
import NewsCard from "./NewsCard";

export default function NewsFeed() {


  // You can turn this into a custom hook////////////////////
  const [newsList, setNewsList] = useCrypto(STATUS_UPDATES, true)
  console.log("newslist", newsList)

  ///////////////////////////////////////////////////////////

  return (
    <ul className="newsfeed">
      {newsList.map((newsItem) => (
        <li>
          <NewsCard newsItem={newsItem} />
        </li>
      ))}
    </ul>
  );
}
