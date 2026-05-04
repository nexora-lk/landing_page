import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Props = {
  eyebrow?: string;
  /** Plain headline. */
  title?: string;
  /** Use this when you want one segment of the headline tinted in the accent color. */
  titleParts?: { plain: string; accent: string; trailing?: string };
  subtitle?: string;
  /** Render extra elements after the subtitle (CTAs, back-link, etc). */
  children?: React.ReactNode;
  /** Tighten or loosen vertical rhythm — defaults to "normal". */
  size?: "compact" | "normal" | "tall";
  /** Center-align all text (homepage-style). Defaults to left. */
  align?: "left" | "center";
};

export default function PageHero({
  eyebrow,
  title,
  titleParts,
  subtitle,
  children,
  size = "normal",
  align = "left",
}: Props) {
  const pad = {
    compact: { pt: { xs: "120px", md: "140px" }, pb: { xs: "48px", md: "64px" } },
    normal:  { pt: { xs: "140px", md: "180px" }, pb: { xs: "64px", md: "96px" } },
    tall:    { pt: { xs: "160px", md: "200px" }, pb: { xs: "96px", md: "128px" } },
  }[size];

  const isCenter = align === "center";

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #F4F8FF 0%, #FFFFFF 70%, #FFFFFF 100%)",
        ...pad,
      }}
    >
      {/* Soft glow stack — same as homepage hero, scaled for sub-pages */}
      <Box aria-hidden sx={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-30%",
            left: "50%",
            width: { xs: "120vw", md: "900px" },
            height: { xs: "120vw", md: "900px" },
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(0,113,227,0.32), rgba(0,113,227,0.10) 45%, transparent 72%)",
            filter: "blur(30px)",
            animation: "hero-breathe 9s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "0%",
            left: "-10%",
            width: { xs: "70vw", md: "520px" },
            height: { xs: "70vw", md: "520px" },
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(82,148,255,0.26), transparent 70%)",
            filter: "blur(50px)",
            animation: "hero-drift-1 14s ease-in-out infinite",
            willChange: "transform",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-20%",
            right: "-8%",
            width: { xs: "70vw", md: "480px" },
            height: { xs: "70vw", md: "480px" },
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(122,176,255,0.22), transparent 70%)",
            filter: "blur(60px)",
            animation: "hero-drift-2 16s ease-in-out infinite",
            willChange: "transform",
          }}
        />
      </Box>

      {/* Bottom hairline */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: "24px", md: "48px", lg: "80px" },
          textAlign: isCenter ? "center" : "left",
        }}
      >
        {eyebrow && (
          <Box
            component="span"
            sx={{
              fontSize: 12,
              color: "var(--grey-1)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
              mb: "16px",
              display: "block",
              animation: "hero-fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) 60ms both",
            }}
          >
            {eyebrow}
          </Box>
        )}

        {(title || titleParts) && (
          <Box
            component="h1"
            sx={{
              fontSize: { xs: 44, md: 64, lg: 72 },
              fontWeight: 600,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "var(--ink)",
              mb: "24px",
              maxWidth: isCenter ? 900 : 980,
              mx: isCenter ? "auto" : 0,
              animation: "hero-fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) 180ms both",
            }}
          >
            {titleParts ? (
              <>
                {titleParts.plain}{" "}
                <Box
                  component="span"
                  sx={{
                    color: "var(--accent)",
                    textShadow:
                      "0 0 26px rgba(0,113,227,0.18), 0 0 1px rgba(0,113,227,0.25)",
                  }}
                >
                  {titleParts.accent}
                </Box>
                {titleParts.trailing ? ` ${titleParts.trailing}` : ""}
              </>
            ) : (
              title
            )}
          </Box>
        )}

        {subtitle && (
          <Box
            component="p"
            sx={{
              fontSize: 19,
              color: "var(--grey-1)",
              maxWidth: "65ch",
              mx: isCenter ? "auto" : 0,
              lineHeight: 1.6,
              animation: "hero-fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) 320ms both",
            }}
          >
            {subtitle}
          </Box>
        )}

        {children && (
          <Box
            sx={{
              mt: "32px",
              animation: "hero-fade-up 900ms cubic-bezier(0.22, 1, 0.36, 1) 460ms both",
            }}
          >
            {children}
          </Box>
        )}
      </Container>
    </Box>
  );
}
