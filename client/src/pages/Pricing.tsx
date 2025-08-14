import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Pricing() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to download page since the app is now free
    setLocation("/download");
  }, [setLocation]);

  // Return null since we're redirecting immediately
  return null;
}