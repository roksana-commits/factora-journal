/** ARCHIVAL SIGNAL — light editorial canvas with one consistent evidence accent. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import EditorialPage from "./pages/EditorialPage";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about"><EditorialPage documentKey="about" /></Route>
      <Route path="/editorial-policy"><EditorialPage documentKey="editorial" /></Route>
      <Route path="/source-policy"><EditorialPage documentKey="sources" /></Route>
      <Route path="/methodology"><EditorialPage documentKey="methodology" /></Route>
      <Route path="/corrections"><EditorialPage documentKey="corrections" /></Route>
      <Route path="/legal/privacy"><EditorialPage documentKey="privacy" /></Route>
      <Route path="/legal/terms"><EditorialPage documentKey="terms" /></Route>
      <Route path="/legal/cookies"><EditorialPage documentKey="cookies" /></Route>
      <Route path="/legal/disclaimer"><EditorialPage documentKey="disclaimer" /></Route>
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster position="bottom-right" richColors />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
