import CircularProgress from '@mui/material/CircularProgress';
import {cookies} from "next/headers";

const theme = cookies().get("theme")?.value as string

export default function Loading() {
    return (
        <div
            className={`flex justify-center items-center p-10 rounded-tl-3xl mt-[80px] ${theme === "light" ? "bg-[#f1f5f9]" : "bg-[#272935]"}`}
            style={{height:"calc(100vh - 4rem)"}}>
            <CircularProgress/>
        </div>
    );
}