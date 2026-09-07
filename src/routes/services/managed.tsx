import { createFileRoute } from "@tanstack/react-router";
import ManagedService from "@/pages/services/ManagedService";

export const Route = createFileRoute("/services/managed")({
  component: ManagedService,
});
