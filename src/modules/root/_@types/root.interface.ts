interface ContentSlide {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface Project {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  asserts: ContentSlide[];
}
