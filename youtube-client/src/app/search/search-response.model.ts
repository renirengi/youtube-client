import { ISearchItems } from "./search-item.model";

export interface ISearchResponce {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: ISearchItems[];
}

export interface IPageInfo {
  totalResults:  number;
  resultsPerPage: number;
}
