import { createFileRoute } from "@tanstack/react-router";
import LovablePage from "@/pages/experts/Lovable";

export const Route = createFileRoute("/experts/lovable")({
  component: LovablePage,
});
