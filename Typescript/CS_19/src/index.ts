import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { APISource } from "./APISource";
import { MockSource } from "./MockSource";
import { RSSFeedSource } from "./RSSFeedSource";


  const initial = Container.get(NewsAggregator);
   initial.getLatestArticles();

  Container.reset();

  Container.set(RSSFeedSource, new APISource());
  const agg = Container.get(NewsAggregator);
  agg.getLatestArticles();

  Container.reset();

  Container.set(RSSFeedSource, new MockSource());
  const mock = Container.get(NewsAggregator);
  mock.getLatestArticles();

