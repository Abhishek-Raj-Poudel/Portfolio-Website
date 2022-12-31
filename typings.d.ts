// We can have one type and have other types extend on that paticular type.
// and you write that as in interface.
interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
  role: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: string;
  title: string;
}
export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: string;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  companyImage: Image;
  dateStarted: Date;
  dateEnded: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}
export interface Project extends SanityBody {
  _type: "project";
  title: string;
  summary: string;
  image: Image;
  linkTouild: string;
  technologies: Technology[];
}
