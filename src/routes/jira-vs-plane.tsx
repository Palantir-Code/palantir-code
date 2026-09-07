import { createFileRoute } from "@tanstack/react-router";
import JiraVsPlane from "@/pages/JiraVsPlane";

export const Route = createFileRoute("/jira-vs-plane")({
  component: JiraVsPlane,
});
