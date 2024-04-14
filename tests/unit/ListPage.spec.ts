import { mount } from "@vue/test-utils";
import ListPage from "../../src/pages/ListPage.vue";
import ListingService from "@/services/ListingService";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdStar, FaSpinner } from "oh-vue-icons/icons";
import { jest } from "@jest/globals";
import { IListingService } from "@/types/ListingService";

addIcons(MdStar, FaSpinner);

jest.mock("@/services/ListingService", () => {
  return {
    __esModule: true,
    default: {
      getListings: jest.fn(() =>
        Promise.resolve([])
      ) as unknown as jest.MockedFunction<IListingService["getListings"]>,
    },
  };
});

jest.mock("vue-router", () => ({
  useRouter: jest.fn(),
}));

describe("ListPage.vue", () => {
  it("fetches data on successful API call", async (): Promise<void> => {
    (
      ListingService as unknown as jest.Mocked<IListingService>
    ).getListings.mockResolvedValue([
      {
        id: 1,
        albumId: 2,
        title: "Test",
        url: "someUrl",
        thumbnailUrl: "thumbnailUrl",
      },
    ]);
  });
});
