import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class MockSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["MOCK: Article X", "MOCK: Article Y"];
  }
}
