import { paths } from "@/routes/paths";
import { SvgColor } from "@/components/svg-color";

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/root/${name}.svg`} />
);

const ICONS: Record<string, JSX.Element> = {
  home: icon("home"),
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
      { title: "Resume", href: paths.roots.resume, icon: ICONS.home },
      { title: "Contact", href: paths.roots.contact, icon: ICONS.home },
    ],
  },
];
