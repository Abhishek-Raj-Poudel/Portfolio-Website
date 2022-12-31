// this is to make it easier to call stuff rom the backend
import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );

  const data = await res.json();
  console.log("data = ", data);
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};
