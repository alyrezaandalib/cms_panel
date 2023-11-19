import * as React from "react";
import { Theme, styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import { Portal } from "@mui/base/Portal";
import { GridToolbarQuickFilter, GridToolbar } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { usersListRow } from "@/JsonFiles/Users/usersList";
import AddDialog from "../Dialog/usersDialog";

function MyCustomToolbar(props: any) {
  return (
    <React.Fragment>
      <Portal container={() => document.getElementById("searchbar")!}>
        <GridToolbarQuickFilter
          variant={"outlined"}
          className={"bg-base-200 w-fit h-fit searchbar"}
        />
      </Portal>
      <GridToolbar {...props} />
    </React.Fragment>
  );
}

function customCheckbox(theme: Theme) {
  return {
    "& .MuiCheckbox-root svg": {
      width: 14,
      height: 14,
      backgroundColor: "transparent",
      border: `1px solid gray`,
      borderRadius: "50%",
    },
    "& .MuiCheckbox-root svg path": {
      display: "none",
    },
    "& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg": {
      backgroundColor: "#1890ff",
      borderColor: "#1890ff",
    },
    "& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after": {
      position: "absolute",
      display: "table",
      border: "2px solid gray",
      borderTop: 0,
      borderLeft: 0,
      transform: "rotate(45deg) translate(-50%,-50%)",
      opacity: 1,
      transition: "all .2s cubic-bezier(.12,.4,.29,1.46) .1s",
      content: '""',
      top: "50%",
      left: "39%",
      width: 5.71428571,
      height: 9.14285714,
    },
    "& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after":
      {
        width: 8,
        height: 8,
        backgroundColor: "#1890ff",
        transform: "none",
        top: "39%",
        border: 0,
      },
  };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  backgroundColor: "rgba(0,0,0,.08)",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  WebkitFontSmoothing: "auto",
  letterSpacing: "normal",
  "& .MuiDataGrid-columnsContainer": {
    backgroundColor: "#1d1d1d",
  },
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `none`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  "& .MuiPaginationItem-root": {
    borderRadius: "50%",
  },
  ...customCheckbox(theme),
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="circular"
      page={page + 1}
      count={pageCount}
      renderItem={(props2) => (
        <PaginationItem {...props2} className={"text-neutral"} />
      )}
      onChange={(event: React.ChangeEvent<unknown>, value: number) =>
        apiRef.current.setPage(value - 1)
      }
    />
  );
}

export default function DataTable(props: propsType) {
  const [rowData, setRowData] = useState([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [reloadPage, setReloadPage] = useState(false);

  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 6,
    page: 0,
  });

  return (
    <div className="overflow-auto w-[100vw] xl:w-[80vw] mb-20 pt-5">
      <Grid container>
        <Grid
          item
          className={
            "w-full rounded-lg h-14 text-white flex-row flex justify-between items-center px-2"
          }
          sx={{ marginBottom: 2, backgroundColor: "rgba(0,0,0,.08)" }}
        >
          <div className={"flex justify-between items-center flex-1"}>
            <Box id={"searchbar"} />
          </div>
          <div className={"flex justify-between items-center"}>
            <AddDialog addForm={props.addForm} />
            <button
              disabled={selectedRows.length == 0}
              className="btn btn-outline btn-error btn-sm ml-2"
              style={{ fontWeight: 400 }}
              // onClick={() => {
              //     const deleteReq = async () => {
              //         return await deleteData(props.url, selectedRows)
              //     }
              //     deleteReq().then((res) => {
              //         // console.log(res)
              //         if (res.length == 0) {
              //             enqueueSnackbar('Deleted Successfully', {
              //                 style: {
              //                     borderColor: '#269a15',
              //                     color: '#f2f2f2',
              //                     backgroundColor: '#269a15'
              //                 }
              //             })
              //         } else {
              //             for (let id of res) {
              //                 enqueueSnackbar(`ID (${id}) Could not deleted`, {
              //                     style: {
              //                         borderColor: '#ef2b50',
              //                         color: '#f2f2f2',
              //                         backgroundColor: '#ef2b50'
              //                     }
              //                 })
              //             }
              //         }
              //         setSelectedRows([])
              //         setReloadPage(!reloadPage)
              //
              //     })
              //         .catch((e) => {
              //
              //         })
              // }}
            >
              Delete
            </button>
          </div>
        </Grid>
        <Grid item width={"100%"} className={"text-neutral"}>
          <StyledDataGrid
            className={"text-neutral rounded-lg p-2 shadow-none"}
            disableColumnSelector={true}
            sx={{
              boxShadow: 2,
              border: 1,
              borderColor: "rgba(255,255,255,0)",
            }}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            rows={usersListRow}
            onRowSelectionModelChange={(ids: any) => {
              setSelectedRows(ids);
            }}
            columns={props.columns}
            slots={{
              pagination: CustomPagination,
              toolbar: MyCustomToolbar,
            }}
            initialState={{
              filter: {
                filterModel: {
                  items: [],
                },
              },
            }}
            rowSelectionModel={selectedRows}
            checkboxSelection
            disableRowSelectionOnClick
            disableColumnFilter
            onCellClick={(row: { id: any }) => {
              props.setSelectedRowToUpdate(Number(row.id));
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

interface propsType {
  // url: string;
  columns: any;
  addForm: any;
  selectedRowToUpdate: any;
  setSelectedRowToUpdate: any;
}
