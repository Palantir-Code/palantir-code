import { createFileRoute } from "@tanstack/react-router";
import DevelopmentService from "@/pages/services/DevelopmentService";

export const Route = createFileRoute("/services/development")({
  component: DevelopmentService,
});
