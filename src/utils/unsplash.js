import { createApi } from "unsplash-js";

const IMAGE_PER_PAGE = 5;

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export const fetchImages = async ({ query, page }) => {
  const response = await unsplash.search.getPhotos({
    query,
    page: 1,
    perPage: IMAGE_PER_PAGE,
  });
  return response.response;
};
