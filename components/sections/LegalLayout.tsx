import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Section = { heading: string; body: React.ReactNode };

export default function LegalLayout({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <Box component="article" sx={{ pb: { xs: "96px", md: "128px" }, background: "var(--bg)" }}>
      <Container maxWidth="md" sx={{ px: { xs: "24px", md: "48px" } }}>
        <Box
          component="p"
          sx={{
            fontSize: 14,
            color: "var(--grey-1)",
            mb: "48px",
            pb: "24px",
            borderBottom: "1px solid var(--grey-2)",
          }}
        >
          Last updated: <Box component="time" dateTime={updated} sx={{ color: "var(--ink)", fontWeight: 500 }}>{updated}</Box>
        </Box>

        <Box component="p" sx={{ fontSize: 19, color: "var(--ink)", lineHeight: 1.6, mb: "48px", maxWidth: "65ch" }}>
          {intro}
        </Box>

        {sections.map((s) => (
          <Box key={s.heading} sx={{ mb: "48px" }}>
            <Box
              component="h2"
              sx={{
                fontSize: { xs: 24, md: 28 },
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                mb: "20px",
                lineHeight: 1.25,
              }}
            >
              {s.heading}
            </Box>
            <Box
              sx={{
                fontSize: 17,
                color: "var(--grey-1)",
                lineHeight: 1.7,
                maxWidth: "65ch",
                "& p + p": { mt: "16px" },
                "& ul": { pl: "20px", mt: "12px" },
                "& li": { mb: "8px" },
                "& a": { color: "var(--accent)" },
                "& strong": { color: "var(--ink)", fontWeight: 600 },
              }}
            >
              {s.body}
            </Box>
          </Box>
        ))}

        <Box sx={{ mt: "64px", pt: "24px", borderTop: "1px solid var(--grey-2)", color: "var(--grey-1)", fontSize: 14 }}>
          Questions about {title.toLowerCase()}? Email{" "}
          <Box component="a" href="mailto:hello@nextora.lk" sx={{ color: "var(--accent)" }}>
            hello@nextora.lk
          </Box>
          .
        </Box>
      </Container>
    </Box>
  );
}
