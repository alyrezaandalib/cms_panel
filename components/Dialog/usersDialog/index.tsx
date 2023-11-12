import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddDialog(props: propsType) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        className="btn text-white btn-accent btn-sm ml-5"
        style={{ fontWeight: 400 }}
        onClick={handleClick}
      >
        Add
      </button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClick}
        TransitionComponent={Transition}
      >
        <Box
          className={
            "w-full flex flex-col bg-secondary justify-center items-center overflow-y-auto h-full"
          }
        >
          <div
            className={
              "flex w-4/6 h-[95%] flex-col p-8 bg-primary rounded-lg text-base-content overflow-y-auto"
            }
          >
            <div
              className={
                "w-full flex flex-row justify-between items-center mb-6"
              }
            >
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClick}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                className={"ml-1 flex-1 text-neutral text-[1rem] font-bold"}
                variant="h6"
                component="div"
              >
                Add New
              </Typography>
              <button
                form={"add-form"}
                autoFocus
                className="btn text-white btn-accent btn-sm ml-5"
                style={{ fontWeight: 400 }}
                type={"submit"}
              >
                Save
              </button>
            </div>
            <div>{props.addForm}</div>
          </div>
        </Box>
      </Dialog>
    </div>
  );
}

interface propsType {
    addForm: any;
}
