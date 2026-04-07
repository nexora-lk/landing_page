// Analytics utility — swap body with your provider (PostHog, Vercel Analytics, etc.)
export function trackEvent(name: string, props?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV === "development") {
    console.log("[analytics]", name, props);
  }
}
