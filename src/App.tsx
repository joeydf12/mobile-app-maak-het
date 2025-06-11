
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MobileLayout } from "./components/MobileLayout";
import Index from "./pages/Index";
import BuddyMatch from "./pages/BuddyMatch";
import NewBuddy from "./pages/NewBuddy";
import WeeklyCheckIn from "./pages/WeeklyCheckIn";
import Management from "./pages/Management";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MobileLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/buddy-match" element={<BuddyMatch />} />
            <Route path="/new-buddy" element={<NewBuddy />} />
            <Route path="/check-in" element={<WeeklyCheckIn />} />
            <Route path="/management" element={<Management />} />
            <Route path="/chat" element={<Chat />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MobileLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
