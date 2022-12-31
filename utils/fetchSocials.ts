// this is to make it easier to call stuff rom the backend
import { Social } from "../typings";

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  const social: Social[] = data.socials;
  return social;
};
