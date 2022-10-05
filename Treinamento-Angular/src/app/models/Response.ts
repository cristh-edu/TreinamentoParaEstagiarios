export class Response<T> {
  code: string;
  data: T;
  message: string;
  metadata: {
    responseAt: Date;
    method: string;
    route: string;
  };
}
