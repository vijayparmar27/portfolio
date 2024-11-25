import React from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/mock/experience";

const Experience = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 shadow-xl rounded">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-blue-500" />
        Experience
      </h2>

      <div className="space-y-6">
        {experience.map((exp) => {
          return (
            <Card key={exp.dates}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
                      {exp.companyImage && (
                        <a
                          href={exp?.companyLinkedinLink || "#"}
                          target="_blank"
                        >
                          <Image
                            src={exp.companyImage ?? ""}
                            alt="Company logo"
                            width={32}
                            height={32}
                          />
                        </a>
                      )}
                      {!exp.companyImage && (
                        <span className="text-red-500 text-xl font-bold">
                          F
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.company} {exp.duration && `· ${exp.duration}`}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {exp.dates} · {exp.experience}
                      </span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                    {exp.workingSkills && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(exp.workingSkills as string[])?.map((sk) => (
                          <Badge key={sk} variant="secondary">
                            {sk}
                          </Badge>
                        ))}
                      </div>
                    )}
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

export default Experience;
