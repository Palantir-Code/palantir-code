import { createFileRoute } from "@tanstack/react-router";
import Enterprise from "@/pages/Enterprise";

export const Route = createFileRoute("/enterprise")({
  component: Enterprise,
});
