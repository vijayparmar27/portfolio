import { paths } from "@/routes/paths";
import { SvgColor } from "@/components/svg-color";

export const icon = (name: string) => (
  <SvgColor src={`/assets/icons/root/${name}.svg`} />
);

const ICONS: Record<string, JSX.Element> = {
  home: icon("home"),
  resume: icon("ic_file"),
  about: icon("about"),
  contact: icon("ic-user"),
};

export const navConfig: {
  subheader: string;
  items: {
    title: string;
    href: string;
    icon: JSX.Element;
  }[];
}[] = [
  {
    subheader: "",
    items: [
      { title: "Home", href: paths.roots.root, icon: ICONS.home },
      { title: "Resume", href: paths.roots.resume, icon: ICONS.resume },
      { title: "About Me", href: paths.roots.about, icon: ICONS.about },
      { title: "Contact", href: paths.roots.contact, icon: ICONS.contact },
    ],
  },
];
