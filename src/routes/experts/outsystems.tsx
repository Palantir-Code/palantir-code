import { createFileRoute } from "@tanstack/react-router";
import OutSystemsPage from "@/pages/partners/OutSystems";

export const Route = createFileRoute("/experts/outsystems")({
  component: OutSystemsPage,
});
