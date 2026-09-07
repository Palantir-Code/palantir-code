import { createFileRoute } from "@tanstack/react-router";
import ImplementationService from "@/pages/services/ImplementationService";

export const Route = createFileRoute("/services/implementation")({
  component: ImplementationService,
});
