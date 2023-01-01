// this is to make it easier to call stuff rom the backend
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  // Set the Content-Type header to application/json
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  // Make the request with the headers
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,
    { headers: headers }
  );

  const data = await res.json();

  // Extract the pageInfo from the data
  const pageInfo: PageInfo = data.pageInfo;

  // Return the pageInfo
  return pageInfo;
};
