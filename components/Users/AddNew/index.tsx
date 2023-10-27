"use client";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import UserAddForm from "@/components/AddForms/UsersAddForm";
import { useRouter } from "next/navigation";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddDialog() {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
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
            className={"w-full flex flex-row justify-between items-center mb-6"}
          >
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => router.back()}
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
          <UserAddForm />
        </div>
      </Box>
    </Dialog>
  );
}
