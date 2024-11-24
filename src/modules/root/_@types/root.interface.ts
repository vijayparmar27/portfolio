interface ContentSlide {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface Project {
  title: string;
  shortDescription: string;
  description: string[];
  image: string;
  tags: {
    name: string;
    color: string;
    backgroundColor: string;
    borderColor: string;
    boxShadow: string;
  }[];
  link: string;
  asserts: ContentSlide[];
}
