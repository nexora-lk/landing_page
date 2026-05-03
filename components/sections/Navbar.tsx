'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { gsap } from 'gsap';

const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#why', label: 'Why Us' },
    { href: '/work', label: 'Work' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/#testimonials', label: 'Clients' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!navRef.current) return;
        gsap.fromTo(
            navRef.current,
            { y: -80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
        );
    }, []);

    return (
        <Box
            component="nav"
            ref={navRef}
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                py: scrolled ? '10px' : '12px',
                background: scrolled ? 'rgba(var(--bg-rgb),0.72)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(160%)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                transition: 'all 0.4s ease',
            }}
        >
            <Container maxWidth="xl" sx={{ px: { xs: '20px', md: '32px' } }}>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                    {/* Logo */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <Image
                            src="/logo.png"
                            alt="Nextora"
                            width={120}
                            height={35}
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </Link>

                    {/* Desktop nav */}
                    <Box
                        component="ul"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: '40px',
                            listStyle: 'none',
                            m: 0,
                            p: 0,
                        }}
                    >
                        {navLinks.map((link) => (
                            <Box component="li" key={link.href}>
                                <Link
                                    href={link.href}
                                    style={{
                                        color: 'var(--muted)',
                                        textDecoration: 'none',
                                        fontSize: 14,
                                        fontWeight: 500,
                                    }}
                                    className="nav-link-hover"
                                >
                                    {link.label}
                                </Link>
                            </Box>
                        ))}
                    </Box>

                    {/* CTA */}
                    <Box
                        component={Link}
                        href="/contact"
                        sx={{
                            display: { xs: 'none', md: 'inline-flex' },
                            px: '18px',
                            py: '10px',
                            borderRadius: '100px',
                            background: 'var(--text)',
                            color: 'var(--bg)',
                            fontSize: 14,
                            fontWeight: 600,
                            textDecoration: 'none',
                            border: '1px solid transparent',
                            transition: 'all 0.3s',
                            '&:hover': {
                                background: 'transparent',
                                color: 'var(--text)',
                                borderColor: 'var(--border)',
                            },
                        }}
                    >
                        Book a call
                    </Box>

                    {/* Mobile toggle */}
                    <Box
                        component="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            background: 'none',
                            border: 'none',
                            color: 'var(--text)',
                            fontSize: 24,
                            cursor: 'pointer',
                        }}
                    >
                        {mobileOpen ? '✕' : '☰'}
                    </Box>
                </Box>

                {/* Mobile menu */}
                {mobileOpen && (
                    <Box
                        sx={{
                            mt: 2,
                            pb: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexDirection: 'column',
                            gap: 2,
                        }}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                style={{
                                    color: 'var(--muted)',
                                    textDecoration: 'none',
                                    fontSize: 16,
                                    fontWeight: 500,
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => setMobileOpen(false)}
                            style={{
                                display: 'inline-flex',
                                width: 'fit-content',
                                padding: '10px 20px',
                                borderRadius: '100px',
                                background: 'var(--text)',
                                color: 'var(--bg)',
                                textDecoration: 'none',
                                fontSize: 14,
                                fontWeight: 600,
                            }}
                        >
                            Book a call
                        </Link>
                    </Box>
                )}
            </Container>
        </Box>
    );
}
