import React from "react";
import { Calendar, BookOpen } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { educations } from "@/mock/educations";

const Education = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 m-2 shadow-smooth shadow-smooth-hover rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6 text-blue-500" />
        Education
      </h2>

      <div className="space-y-6">
        {educations.map((education) => {
          return (
            <Card key={education.name}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
                      {education.image && (
                        <a href={education?.link || "#"} target="_blank">
                          <Image
                            src={education.image}
                            alt="Company logo"
                            width={32}
                            height={32}
                          />
                        </a>
                      )}
                      {!education.image && (
                        <span className="text-red-500 text-xl font-bold">
                          E
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{education.name}</h3>

                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{education.date}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
