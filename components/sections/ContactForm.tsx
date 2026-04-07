"use client";

import { useState } from "react";
import Box from "@mui/material/Box";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputSx = {
    width: "100%",
    px: "20px",
    py: "14px",
    borderRadius: "12px",
    background: "rgba(var(--text-rgb),0.04)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    fontSize: 15,
    fontFamily: "var(--font-inter)",
    outline: "none",
    transition: "border-color 0.3s",
    "&:focus": { borderColor: "var(--accent)" },
  };

  if (status === "success") {
    return (
      <Box
        sx={{
          textAlign: "center",
          p: "60px",
          borderRadius: "20px",
          background: "var(--surface)",
          border: "1px solid rgba(var(--accent-rgb),0.3)",
        }}
      >
        <Box sx={{ fontSize: 48, mb: "16px" }}>✓</Box>
        <Box
          component="h2"
          sx={{ fontFamily: "var(--font-syne)", fontSize: 28, fontWeight: 700, mb: "12px" }}
        >
          Message sent
        </Box>
        <Box component="p" sx={{ color: "var(--muted)", fontSize: 16 }}>
          We&apos;ll be in touch within one business day.
        </Box>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: "32px 24px", md: "48px" },
        borderRadius: "20px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: "20px" }}>
        <Box>
          <Box component="label" htmlFor="name" sx={{ display: "block", fontSize: 13, color: "var(--muted)", mb: "8px", fontWeight: 500 }}>
            Name *
          </Box>
          <Box component="input" id="name" name="name" required placeholder="Your name" sx={inputSx} />
        </Box>
        <Box>
          <Box component="label" htmlFor="email" sx={{ display: "block", fontSize: 13, color: "var(--muted)", mb: "8px", fontWeight: 500 }}>
            Email *
          </Box>
          <Box component="input" id="email" name="email" type="email" required placeholder="you@company.com" sx={inputSx} />
        </Box>
      </Box>
      <Box>
        <Box component="label" htmlFor="company" sx={{ display: "block", fontSize: 13, color: "var(--muted)", mb: "8px", fontWeight: 500 }}>
          Company
        </Box>
        <Box component="input" id="company" name="company" placeholder="Acme Corp" sx={inputSx} />
      </Box>
      <Box>
        <Box component="label" htmlFor="message" sx={{ display: "block", fontSize: 13, color: "var(--muted)", mb: "8px", fontWeight: 500 }}>
          What are you building? *
        </Box>
        <Box
          component="textarea"
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, stack, and timeline..."
          sx={{ ...inputSx, resize: "vertical", minHeight: 120 }}
        />
      </Box>
      {status === "error" && (
        <Box sx={{ color: "var(--accent-3)", fontSize: 14 }}>Something went wrong. Please try again or email us directly.</Box>
      )}
      <Box
        component="button"
        type="submit"
        disabled={status === "loading"}
        sx={{
          px: "30px",
          py: "16px",
          borderRadius: "100px",
          fontSize: 15,
          fontWeight: 600,
          background: "var(--text)",
          color: "var(--bg)",
          border: "none",
          cursor: status === "loading" ? "wait" : "pointer",
          transition: "all 0.3s",
          alignSelf: "flex-start",
          "&:hover": { background: "var(--accent)", transform: "translateY(-2px)" },
          "&:disabled": { opacity: 0.7 },
        }}
      >
        {status === "loading" ? "Sending…" : "Send Message →"}
      </Box>
    </Box>
  );
}