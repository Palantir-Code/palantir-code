import { createFileRoute } from "@tanstack/react-router";
import CookiesPolicy from "@/pages/CookiesPolicy";

export const Route = createFileRoute("/cookies")({
  component: CookiesPolicy,
});
