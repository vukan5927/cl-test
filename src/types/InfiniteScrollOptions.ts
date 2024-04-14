import { Ref } from "vue";

export interface IInfiniteScrollOptions {
  loadData: () => Promise<any>; // Function to load data
  loadingStatus?: Ref<string>; // Optional - to track state centrally
}
