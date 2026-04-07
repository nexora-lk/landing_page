import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const brands = ["◆ STRIPE", "LINEAR•", "VERCEL", "NOTION", "FIGMA", "◎ OPENAI", "SHOPIFY", "RAMP"];

export default function Trusted() {
  return (
    <Box
      component="section"
      sx={{
        py: "80px",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "rgba(var(--text-rgb),0.015)",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: "20px", md: "32px" } }}>
        <Box
          sx={{
            textAlign: "center",
            color: "var(--muted)",
            fontSize: 13,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            mb: "40px",
          }}
        >
          Trusted by engineering teams at
        </Box>
      </Container>

      {/* Marquee */}
      <Box
        sx={{
          overflow: "hidden",
          maskImage: "linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "80px",
            animation: "marquee-scroll 30s linear infinite",
            width: "max-content",
          }}
        >
          {/* Duplicate for seamless loop */}
          {[...brands, ...brands].map((brand, i) => (
            <Box
              key={i}
              component="span"
              sx={{
                fontFamily: "var(--font-syne)",
                fontSize: 28,
                fontWeight: 700,
                color: "var(--muted)",
                opacity: 0.6,
                whiteSpace: "nowrap",
                letterSpacing: "-0.02em",
                transition: "all 0.3s",
                "&:hover": { opacity: 1, color: "var(--text)" },
                cursor: "default",
              }}
            >
              {brand}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}