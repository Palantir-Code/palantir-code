import { createFileRoute } from "@tanstack/react-router";
import MigrationService from "@/pages/services/MigrationService";

export const Route = createFileRoute("/services/migration")({
  component: MigrationService,
});
