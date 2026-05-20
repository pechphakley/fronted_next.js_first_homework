export interface BlogType {
  id: number;
  title: string;
  body: string;
}

export interface DummyJsonResponse {
  posts: BlogType[];
  total: number;
  skip: number;
  limit: number;
}