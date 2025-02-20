import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import About from "@/pages/about";
import CreateAppointment from "@/pages/appointments/create";
import SearchAppointment from "@/pages/appointments/search";
import ModifyAppointment from "@/pages/appointments/modify";
import CancelAppointment from "@/pages/appointments/cancel";
import Reports from "@/pages/appointments/reports";
import AdminDashboard from "@/pages/admin/dashboard";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/appointments/new" component={CreateAppointment} />
          <Route path="/appointments/search" component={SearchAppointment} />
          <Route path="/appointments/modify" component={ModifyAppointment} />
          <Route path="/appointments/cancel" component={CancelAppointment} />
          <Route path="/appointments/reports" component={Reports} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
