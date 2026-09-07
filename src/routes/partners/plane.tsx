import { createFileRoute } from "@tanstack/react-router";
import PlanePage from "@/pages/partners/Plane";

export const Route = createFileRoute("/partners/plane")({
  component: PlanePage,
});
