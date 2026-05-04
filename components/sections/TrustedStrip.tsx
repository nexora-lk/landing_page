import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

/* Spec section 10: client logos in soft grey, ~32px height, ~60% opacity.
   Subtle, not loud. Hover lifts to full opacity / ink color. */
const clients = [
  { name: "Nextconstation",   src: "/next.png" },
  { name: "Prestige Glamour", src: "/pgwcs.png" },
];

export default function TrustedStrip() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: "48px", md: "64px" },
        background: "var(--bg)",
        borderTop: "1px solid var(--grey-2)",
        borderBottom: "1px solid var(--grey-2)",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: "24px", md: "48px", lg: "80px" } }}>
        <Box
          component="p"
          sx={{
            fontSize: 12,
            color: "var(--grey-1)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 600,
            mb: "24px",
            textAlign: "center",
          }}
        >
          Trusted by
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: "32px", md: "64px" },
          }}
        >
          {clients.map((c) => (
            <Box
              key={c.name}
              sx={{
                height: 40,
                display: "inline-flex",
                alignItems: "center",
                opacity: 0.6,
                filter: "grayscale(1)",
                transition: "opacity 240ms ease-out, filter 240ms ease-out",
                "&:hover": { opacity: 1, filter: "grayscale(0)" },
              }}
            >
              <Image
                src={c.src}
                alt={c.name}
                width={140}
                height={40}
                style={{ objectFit: "contain", height: 40, width: "auto" }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
