import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Layers, Podcast } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { companyProjects } from "@/mock/companyProjects";

const CompanyProjects = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 shadow-xl rounded">
      <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
        <Layers className="w-6 h-6 text-blue-500" />
        Company Projects
      </h2>

      <div className="space-y-6">
        {companyProjects.map((project) => {
          return (
            <Card key={project.name}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <a href={project?.link || "#"} target="_blank">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center">
                        {project.image && (
                          // <a href={project?.link || "#"} target="_blank">
                          <Image
                            src={project.image}
                            alt="Company logo"
                            width={32}
                            height={32}
                          />
                          // </a>
                        )}
                        {!project.image && (
                          <span className="text-red-500 text-xl font-bold">
                            E
                          </span>
                        )}
                      </div>
                    </div>
                  </a>
                  <div className="flex-grow">
                    <a href={project?.link || "#"} target="_blank">
                      <h3 className="text-xl font-semibold">{project.name}</h3>
                    </a>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.role}
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mt-1">
                      <Podcast className="w-5 h-5" />
                      <span>{project.description}</span>
                    </div>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {(project.technologies as string[])?.map((sk) => (
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

export default CompanyProjects;
