import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IFavoriteItem } from "@/types/FavoriteItem";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/albums/1/",
  timeout: 5000,
});

const ListingService = {
  getListings: async (
    page: number,
    limit: number
  ): Promise<IFavoriteItem[]> => {
    const response: AxiosResponse<any, any> = await apiClient.get("/photos", {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return response.data;
  },
};

export default ListingService;
