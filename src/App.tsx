// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Global toasts */}
        <Toaster />
        <Sonner />

        {/* Global Navigation */}
        <Navigation />

        {/* Routes (HashRouter is provided in main.tsx) */}
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Index />
              </>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
