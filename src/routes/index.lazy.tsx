import { useLoginStore } from "@/store/login";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { mySelf } = useLoginStore();
  return (
    <>
      <h1>{`Hello ! ${mySelf?.name}`}</h1>
    </>
  );
}
