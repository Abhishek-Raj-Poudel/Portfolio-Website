// this is to make it easier to call stuff rom the backend
import { Experience } from "../typings";

export const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
  );

  const data = await res.json();
  const experience: Experience[] = data.experience;
  return experience;
};
