import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Project } from "../../_@types/root.interface";
import { ContentSlider } from "./ContentSlider";
import { SvgIcon } from "@mui/material";
import { githubSVG } from "../Root";

/**
 * TODO:
 * - on click view pic and video full size
 * - add Description string in model
 * - style Heading
 * - add github link button
 * - formate description
 */
const ProjectView = ({
  isOpen,
  onClose,
  project,
}: {
  isOpen: boolean;
  onClose: VoidFunction;
  project: Project;
}) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        maxWidth="lg"
        scroll="body"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="flex justify-between items-center shadow-smooth shadow-smooth-hover"
        >
          <div className="">
            <strong className="text-lg font-semibold">{project.title}</strong>
          </div>
          <div className="pl-4">
            <a
              href={project.link}
              target="_blank"
              className="flex items-center px-3 py-2 text-gray-800 bg-slate-300 hover:text-gray-100 hover:bg-gray-700 transition duration-200 rounded-lg"
            >
              <SvgIcon className="w-6 h-6 text-gray-800">{githubSVG}</SvgIcon>
              <p className="inline font-medium pl-2">Github</p>
            </a>
          </div>
        </DialogTitle>
        <DialogContent>
          <section className="container mx-auto py-12">
            <ContentSlider slides={project.asserts} />
          </section>
          <DialogContentText className="flex flex-wrap justify-center pb-2">
            {project.tags.map((tag) => (
              <span
                key={`tag-${tag.name}`}
                className="m-1 p-1 inline-flex rounded text-xs font-bold"
                style={{
                  color: `${tag.color}`,
                  background: `${tag.backgroundColor}`,
                  border: `2px solid ${tag.borderColor}`,
                  boxShadow: tag.boxShadow,
                }}
              >
                {tag.name}
              </span>
            ))}
          </DialogContentText>
          {project.description.map((string, index) => (
            <DialogContentText
              key={`description-${index}`}
              id="alert-dialog-description"
              className="text-gray-700 text-sm leading-relaxed mb-2 p-3 rounded  transition-transform transform hover:bg-gray-100"
            >
              {string}
            </DialogContentText>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ProjectView;
