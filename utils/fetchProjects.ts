// this is to make it easier to call stuff rom the backend
import { Project } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );

  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};
