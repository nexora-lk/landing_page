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

  // Per spec: input height 48 min, 1px #D2D2D7 border, 12px radius, 16px h padding,
  // 16px font min, focus = accent border + 4px soft ring rgba(0,113,227,0.15).
  const inputSx = {
    width: "100%",
    minHeight: 48,
    px: "16px",
    py: "12px",
    borderRadius: "12px",
    background: "#FFFFFF",
    border: "1px solid var(--grey-2)",
    color: "var(--ink)",
    fontSize: 16,
    fontFamily: "var(--font-inter), Inter, sans-serif",
    outline: "none",
    transition: "border-color 200ms ease-out, box-shadow 200ms ease-out",
    "&::placeholder": { color: "var(--grey-1)" },
    "&:focus": {
      borderColor: "var(--accent)",
      boxShadow: "0 0 0 4px rgba(0,113,227,0.15)",
    },
  };

  const labelSx = {
    display: "block",
    fontSize: 14,
    color: "var(--ink)",
    mb: "8px",
    fontWeight: 500,
  } as const;

  if (status === "success") {
    return (
      <Box
        sx={{
          textAlign: "center",
          p: "64px 32px",
          borderRadius: "20px",
          background: "var(--surface)",
        }}
      >
        <Box sx={{ fontSize: 48, mb: "16px", color: "var(--accent)" }}>✓</Box>
        <Box component="h2" sx={{ fontSize: 28, fontWeight: 600, mb: "12px", color: "var(--ink)", letterSpacing: "-0.01em" }}>
          Message sent
        </Box>
        <Box component="p" sx={{ color: "var(--grey-1)", fontSize: 17 }}>
          We’ll be in touch within one business day.
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
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: "24px" }}>
        <Box>
          <Box component="label" htmlFor="name" sx={labelSx}>Name</Box>
          <Box component="input" id="name" name="name" required placeholder="Your name" sx={inputSx} />
        </Box>
        <Box>
          <Box component="label" htmlFor="email" sx={labelSx}>Email</Box>
          <Box component="input" id="email" name="email" type="email" required placeholder="you@company.com" sx={inputSx} />
        </Box>
      </Box>
      <Box>
        <Box component="label" htmlFor="company" sx={labelSx}>Company (optional)</Box>
        <Box component="input" id="company" name="company" placeholder="Acme Corp" sx={inputSx} />
      </Box>
      <Box>
        <Box component="label" htmlFor="message" sx={labelSx}>What are you building?</Box>
        <Box
          component="textarea"
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, goals and timeline…"
          sx={{ ...inputSx, resize: "vertical", minHeight: 140, py: "16px" }}
        />
      </Box>
      {status === "error" && (
        <Box sx={{ color: "#A32D2D", fontSize: 14 }}>
          Something went wrong. Please try again or email hello@nextora.lk directly.
        </Box>
      )}
      <Box
        component="button"
        type="submit"
        disabled={status === "loading"}
        sx={{
          px: "28px",
          py: "14px",
          borderRadius: "999px",
          fontSize: 17,
          fontWeight: 500,
          background: "var(--accent)",
          color: "#fff",
          border: "none",
          cursor: status === "loading" ? "wait" : "pointer",
          minHeight: 48,
          alignSelf: "flex-start",
          transition: "background 240ms ease-out",
          "&:hover": { background: "var(--accent-hi)" },
          "&:disabled": { opacity: 0.7 },
        }}
      >
        {status === "loading" ? "Sending…" : "Send message →"}
      </Box>
    </Box>
  );
}
