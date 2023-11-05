"use client";
import AllUsers from "@/components/DataTable";
import { GridColDef } from "@mui/x-data-grid";
// import UserAddForm from "@/components/AddForms/UserAddForm";
// import {baseURL} from "@/meta/_baseURL";
import Chip from "@mui/material/Chip";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Divider } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { FiEdit3 } from "react-icons/fi";
import UsersAddForm from "@/components/AddForms/UsersAddForm";

let selectedRow: number;
let pathName: string;
let router: any;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "",
    headerName: "",
    width: 100,
    renderCell: (params) => (
      <>
        <button
          className={"btn btn-xs btn-ghost"}
          onClick={() => {
            setTimeout(() => {
              router.push(pathName + "/" + String(selectedRow) + "/" + "edit");
            }, 50);
          }}
        >
          <FiEdit3 fontSize={"small"} />
        </button>
        <Divider />
        <button
          className={"btn btn-xs btn-ghost mr-4"}
          onClick={() => {
            setTimeout(() => {
              router.push(pathName + "/" + String(selectedRow));
            }, 50);
          }}
        >
          <VisibilityIcon fontSize={"small"} />
        </button>
      </>
    ),
    align: "center",
  },
  {
    field: "first_name",
    headerName: "First name",
    width: 120,
  },

  {
    field: "last_name",
    headerName: "Last name",
    width: 120,
  },
  {
    field: "code",
    headerName: "Code",
    type: "text",
    width: 85,
  },
  {
    field: "gender",
    headerName: "Gender",
    type: "text",
    width: 85,
  },
  {
    field: "roles",
    headerName: "Roles",
    type: "text",
    minWidth: 120,
    maxWidth: 300,
    renderCell: (params) => (
      <>
        {params.value.map((item: any, index: any) => {
          return (
            <Chip
              className={"text-neutral"}
              key={index}
              label={item.name}
              size="small"
              variant="outlined"
            />
          );
        })}
      </>
    ),
  },
  {
    field: "phone_number",
    headerName: "Phone Number",
    type: "text",
    width: 140,
  },
  {
    field: "email",
    headerName: "Email",
    type: "text",
    width: 130,
  },
  {
    field: "is_super",
    headerName: "Super",
    type: "boolean",
    width: 70,
    renderCell: (params) => (
      <>
        {params.value ? (
          <CheckOutlinedIcon className={"text-success"} />
        ) : (
          <CloseOutlinedIcon className={"text-error"} />
        )}
      </>
    ),
  },
  {
    field: "is_admin",
    headerName: "Admin",
    type: "boolean",
    width: 70,
    renderCell: (params) => (
      <>
        {params.value ? (
          <CheckOutlinedIcon className={"text-success"} />
        ) : (
          <CloseOutlinedIcon className={"text-error"} />
        )}
      </>
    ),
  },
  {
    field: "is_staff",
    headerName: "Staff",
    type: "boolean",
    width: 70,
    renderCell: (params) => (
      <>
        {params.value ? (
          <CheckOutlinedIcon className={"text-success"} />
        ) : (
          <CloseOutlinedIcon className={"text-error"} />
        )}
      </>
    ),
  },
  {
    field: "usr_code",
    headerName: "User Code",
    type: "text",
    width: 200,
  },
  {
    field: "state",
    headerName: "State",
    type: "text",
    width: 100,
  },
  {
    field: "town",
    headerName: "Town",
    type: "text",
    width: 100,
  },
  {
    field: "address",
    headerName: "Address",
    type: "text",
    width: 150,
  },
  {
    field: "created_at",
    headerName: "Created at",
    type: "text",
    width: 200,
  },
  {
    field: "created_by",
    headerName: "Created by",
    type: "text",
    width: 100,
  },
  {
    field: "updated_at",
    headerName: "Updated at",
    type: "text",
    width: 200,
  },
  {
    field: "updated_by",
    headerName: "Updated by",
    type: "text",
    width: 100,
  },
];

export default function Page() {
  const [selectedRowToUpdate, setSelectedRowToUpdate] = useState(0);
  selectedRow = selectedRowToUpdate;
  pathName = usePathname();
  router = useRouter();

  return (
    <div className={"flex justify-center items-start lg:items-center"}>
      <AllUsers
        columns={columns}
        addForm={<UsersAddForm />}
        selectedRowToUpdate={selectedRowToUpdate}
        setSelectedRowToUpdate={setSelectedRowToUpdate}
      />
    </div>
  );
}
