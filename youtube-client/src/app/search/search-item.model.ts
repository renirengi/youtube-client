export interface ISearchItems {
  kind: string,
  etag: string,
  id: string,
  snippet: ISnippet,
  statistics: IStatistics,
}

export interface ISnippet {
  publishedAt: Date,
  channelId: string,
  title: string,
  description: string,
  thumbnails: IThumbnails,
  channelTitle: string,
  tags: string [],
  categoryId: string,
  liveBroadcastContent: string,
  localized: ILocalized,
  defaultAudioLanguage: string,
}

export interface IIStatistics {
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  favoriteCount: string,
  commentCount: string,
}

export interface IThumbnails {
  default: IThumbnailsSize,
  medium: IThumbnailsSize,
  high: IThumbnailsSize,
  standard: IThumbnailsSize,
  maxres: IThumbnailsSize,
}

export interface IThumbnailsSize {
  url: string,
  width: number,
  height: number
}

export interface ILocalized {
  title: string,
  description: string,
}
