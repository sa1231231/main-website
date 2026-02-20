import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import DemoLanding from "@/pages/DemoLanding";

function RedirectTo({ path }: { path: string }) {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation(path);
  }, [path, setLocation]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={DemoLanding} />
      <Route path="/demo">{() => <RedirectTo path="/" />}</Route>
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
