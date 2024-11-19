import { SvgColor } from "@/components/svg-color";
import { SvgIcon } from "@mui/material";
import Image from "next/image";
import React from "react";
import CardComponet from "./view/Card";
import Skills from "./view/Skills";

const linkedinSVG = (
  <path
    d="M5.14678 2.52608C5.85835 2.65326 6.45746 3.09997 6.77593 3.74217C6.88945 3.97025 6.95882 4.20149 6.99245 4.46426C7.01558 4.64609 7.00822 4.94775 6.97669 5.12433C6.82323 5.99567 6.18418 6.68832 5.33071 6.9122C5.1699 6.95424 5.03326 6.97316 4.84722 6.98157C3.96327 7.01731 3.14449 6.52856 2.75034 5.72869C2.44342 5.10646 2.44342 4.37597 2.74928 3.75268C3.08983 3.06003 3.73729 2.60281 4.51613 2.50822C4.64962 2.4914 5.00909 2.50191 5.14678 2.52608ZM17.2025 8.64541C17.768 8.70007 18.324 8.84932 18.7844 9.0711C19.1407 9.24242 19.5464 9.50414 19.9154 9.80264C20.3274 10.1358 20.6175 10.5436 20.9549 11.2626C21.2281 11.8449 21.3784 12.341 21.4562 12.9128C21.473 13.0347 21.4741 13.3626 21.4772 17.2715L21.4804 21.5H19.5622H17.644V17.9442C17.644 15.5436 17.6408 14.3538 17.6335 14.2791C17.5452 13.3899 17.1374 12.753 16.4437 12.4188C16.2797 12.3399 16.1704 12.3 15.998 12.2558C15.3159 12.0803 14.5097 12.1791 13.9095 12.5102C13.3514 12.8182 12.931 13.4499 12.7733 14.2161C12.7113 14.5188 12.7145 14.3096 12.7145 18.0598V21.5H10.8015H8.88858V15.1778V8.85563H10.6912H12.4938V9.76585V10.675L12.5715 10.571C12.7344 10.3513 13.0351 10.037 13.2579 9.85204C14.1187 9.13626 15.2244 8.69271 16.2944 8.6349C16.4952 8.62439 17.0491 8.6307 17.2025 8.64541ZM6.72338 15.1778V21.5H4.76313H2.80289V15.1778V8.85563H4.76313H6.72338V15.1778Z"
    fill="#0A66C2"
  />
);

const githubSVG = (
  <path d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10" />
);

function Root() {
  return (
    <>
      <div className="bg-white pb-2 rounded-md mb-2">
        <div className="pb-16">
          <div className="relative">
            <Image
              src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
              alt="-"
              className="object-cover w-full h-48 rounded-t-md"
              width={64}
              height={64}
            />
            <div className="absolute top-24 pl-4">
              <Image
                src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                alt="-"
                className="object-cover w-40 h-40 rounded-full"
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
        <div className="px-4 flex justify-between">
          <div>
            <strong className="text-black text-xl">Vijay Parmar</strong>
            <span className="pl-1 text-slate-400">(he/him)</span>
            <p className="font-light">Mean Stack</p>
          </div>
          <div className="font-bold">
            <a
              href="mailto:vijayparmar0027@gmail.com"
              className="flex px-2 pb-2"
            >
              <SvgColor src="/assets/icons/root/ic-mail.svg" />
              <p className="px-2">vijayparmar0027@gmail.com</p>
            </a>
            <a href="tel:+918140311309" className="flex px-2">
              <SvgColor src="/assets/icons/root/phone.svg" />
              <p className="inline px-2">+91 8140311309</p>
            </a>
          </div>
        </div>
        <div className="pt-4 flex justify-center m-2">
          <a
            href="https://www.linkedin.com/in/vijay-parmar-00467b2b8/"
            target="_blank"
            className="flex align-middle px-2"
          >
            <SvgIcon>{linkedinSVG}</SvgIcon>
            <p className="inline px-2">LinkedIn</p>
          </a>

          <a
            href="https://www.github.com/vijayparmar27"
            target="_blank"
            className="flex align-middle px-2"
          >
            <SvgIcon>{githubSVG}</SvgIcon>
            <p className="inline px-2 align-bottom">Github</p>
          </a>
        </div>
      </div>

      <div className="bg-white py-2 px-2 mb-2 rounded-md shadow-lg">
        <CardComponet />
      </div>

      <div className="bg-white rounded-md">
        <Skills />
      </div>
    </>
  );
}

export default Root;
