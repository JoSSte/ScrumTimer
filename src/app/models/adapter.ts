export interface Adapter<T> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adapt(item: any): T;
  }
