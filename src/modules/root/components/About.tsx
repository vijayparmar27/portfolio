import React from "react";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const About = () => {
  return (
    <div className="bg-white rounded shadow-xl">
      <div className="max-w-3xl mx-auto p-6 shadow-xl rounded">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-blue-500" />
          Experience
        </h2>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-md flex items-center justify-center">
                    <span className="text-red-500 text-xl font-bold">E</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">
                    Mean Stack Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Elluminati · Full-time
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>Apr 2024 - Present · 8 mos</span>
                  </div>
                  <div className="mt-2">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-1 w-fit"
                    >
                      <Image
                        src="/linkedin-icon.svg"
                        alt="LinkedIn"
                        width={16}
                        height={16}
                        className="text-blue-600"
                      />
                      helped me get this job
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Node.js Position */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Company logo"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">Node js</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Artoon Solutions Private Limited · Full-time
                  </p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>Sep 2022 - Mar 2024 · 1 yr 7 mos</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>Surat, Gujarat, India</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">+3 skills</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Freelance Position */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Freelance"
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">Nodejs</h3>
                  <p className="text-gray-600 dark:text-gray-400">Freelance</p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>Sep 2021 - Aug 2022 · 1 yr</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">+1 skill</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div>Skills</div>
      <div>working projects</div>
      <div>education</div>
    </div>
  );
};

export default About;
