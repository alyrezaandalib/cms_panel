import AddNew from "@/components/posts/AddNew";
import NotFound from "@/app/not-found";
import UpdatePost from "@/components/posts/UpdatePost";

export default function Page({ params }: { params: { method: string } }) {
  if (params.method === "add") {
    return (
      <div className={"flex flex-col justify-center items-center"}>
        <AddNew />
      </div>
    );
  } else if (params.method === "update") {
    return (
      <div className={"flex flex-col justify-center items-center"}>
        <UpdatePost />
      </div>
    );
  } else {
    return <NotFound />;
  }
}
