'use client'

import React, { JSX, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'



type Project = {
    id: string
    title: string
    short: string
    slug: string
    img?: string
    accent?: string
}

const PROJECTS: Project[] = [
    { id: 'p1', title: 'Sentinel UI', short: 'Tactical dashboard & visual systems', slug: 'sentinel-ui', accent: '#FF3B3B', img: '/images/projects/lineal_transformers/lt_landing_page.png' },
    { id: 'p2', title: 'Ops Toolkit', short: 'Realtime operations tooling', slug: 'ops-toolkit', accent: '#00E6A3', img: '/images/projects/p2.svg' },
    { id: 'p3', title: 'Agent Profiles', short: 'Rich profile systems & interactions', slug: 'agent-profiles', accent: '#5ED0FF', img: '/images/projects/p3.svg' },
    { id: 'p4', title: 'Match Visualizer', short: 'Data-driven timeline and replay', slug: 'match-visualizer', accent: '#FFD15C', img: '/images/projects/p4.svg' }
]

export default function ProjectsPage(): JSX.Element {
    const [index, setIndex] = useState(0)
    const listRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [index])

    useEffect(() => {
        // allow scroll/snappy experience on mobile if track receives focus
        listRef.current?.focus()
    }, [])

    const prev = () => setIndex((idx) => (idx - 1 + PROJECTS.length) % PROJECTS.length)
    const next = () => setIndex((idx) => (idx + 1) % PROJECTS.length)
    const goTo = (i: number) => setIndex(i)

    return (
        <main className="page">
            <div className="page-inner">
                <header className="heading">
                    <div className="header-left">
                        <h1>Projects</h1>
                        <p className="sub">A tactical gallery of past work — click a card to inspect the full dossier</p>
                    </div>
                    <div className="header-right">Modern interface • precision-first visuals • fast navigation</div>
                </header>

                <section className="slider-wrap">
                    <button className="nav nav-left" onClick={prev} aria-label="Previous project">
                        <span className="chev">‹</span>
                    </button>

                    <div
                        className="slider"
                        role="listbox"
                        aria-label="Projects gallery"
                        tabIndex={0}
                        ref={listRef}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                // open current slide
                                // nothing special because each slide has its own link
                            }
                        }}
                    >
                        <div
                            className="track"
                            style={{ transform: `translateX(calc(-${index} * (100% + 24px)))` }}
                        >
                            {PROJECTS.map((p, i) => (
                                <Link
                                    key={p.id}
                                    href={`/projects/${p.slug}`}
                                    className={`card ${i === index ? 'active' : ''}`}
                                    role="option"
                                    aria-selected={i === index}
                                >
                                                            <div className="card-inner">
                                        <div className="card-media" style={{ borderColor: p.accent }}>
                                                                {p.img ? (
                                                                    <div className="visual-img" style={{ width: '100%', height: '100%', position: 'relative' }}>
                                                                        <Image
                                                                            src={p.img}
                                                                            alt={p.title}
                                                                            fill
                                                                            sizes="(max-width: 640px) 88vw, (max-width: 920px) 420px, 520px"
                                                                            quality={90}
                                                                            className="rounded-lg object-cover"
                                                                        />
                                                                    </div>
                                                                ) : (
                                                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" aria-hidden>
                                                                        <path d="M12 2L15 8l6 .5-4.5 4 1.5 6L12 17 4 19.5 6 13 2 9.5 8 8 12 2z" fill={p.accent} opacity="0.95" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                        <div className="meta">
                                            <h2>{p.title}</h2>
                                            <p>{p.short}</p>
                                        </div>
                                        <div className="tag" style={{ background: p.accent + '22', color: p.accent }}>
                                            VIEW
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <button className="nav nav-right" onClick={next} aria-label="Next project">
                        <span className="chev">›</span>
                    </button>
                </section>

                <div className="dots" role="tablist" aria-label="Project pagination">
                    {PROJECTS.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to project ${i + 1}`}
                            aria-current={i === index ? 'true' : undefined}
                            onClick={() => goTo(i)}
                            className={`dot ${i === index ? 'on' : ''}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                .page {
                    min-height: calc(100vh - 0px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: radial-gradient(1200px 600px at 10% 8%, rgba(90,20,120,0.12), transparent), radial-gradient(1000px 400px at 90% 92%, rgba(0,150,220,0.06), transparent), linear-gradient(180deg,#04060a 0%, #08050b 45%, #05030a 100%);
                    color: #e6eef2;
                    padding: 48px;
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                }

                .page-inner {
                    width: min(1200px, 96%);
                }

                .heading {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 28px;
                }

                .heading h1 {
                    font-size: 38px;
                    margin: 0;
                    letter-spacing: 0.8px;
                    color: #f5f7ff;
                    text-shadow: 0 12px 40px rgba(10,8,14,0.6);
                    font-variation-settings: "wght" 700;
                    text-transform: none;
                }

                .sub {
                    margin: 4px 0 0;
                    color: #98a1a6;
                    font-size: 13px;
                }

                .header-right {
                    color: #9aa9b8;
                    font-size: 13px;
                    max-width: 420px;
                    text-align: right;
                    letter-spacing: 0.6px;
                    text-transform: uppercase;
                    opacity: 0.9;
                }

                .slider-wrap {
                    position: relative;
                    display: flex;
                    align-items: center;
                }

                .nav {
                    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00));
                    border: 1px solid rgba(255,255,255,0.06);
                    color: #fff;
                    width: 56px;
                    height: 56px;
                    min-width: 56px;
                    border-radius: 12px;
                    margin: 0 12px;
                    font-size: 22px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: transform .15s ease, box-shadow .12s ease;
                    box-shadow: 0 4px 28px rgba(0,0,0,0.8), inset 0 -2px 6px rgba(0,0,0,0.6);
                }

                .nav:hover { transform: translateY(-4px); box-shadow: 0 12px 46px rgba(0,0,0,0.75), inset 0 -6px 20px rgba(0,0,0,0.5); }

                .chev { display:inline-block; transform: translateY(-1px); font-weight: 700; color: #e6eef2; opacity:0.9 }

                .slider {
                    overflow: hidden;
                    flex: 1;
                    outline: none;
                }

                .track {
                    display: flex;
                    gap: 24px;
                    transition: transform 400ms cubic-bezier(.22,.9,.27,1);
                    will-change: transform;
                }

                .card {
                    width: 520px;
                    min-width: 520px;
                    height: 280px;
                    color: inherit;
                    text-decoration: none;
                    border-radius: 14px;
                    display: block;
                    transform: translateY(0);
                    transition: transform 280ms ease, box-shadow 220ms ease;
                }

                .card:hover, .card.active {
                    transform: translateY(-10px) scale(1.03);
                    z-index: 6;
                    box-shadow: 0 28px 80px rgba(2,6,22,0.8), 0 6px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.03);
                }

                .card-inner {
                    height: 100%;
                    display: flex;
                    gap: 20px;
                    padding: 20px;
                    border-radius: 14px;
                    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
                    border: 1px solid rgba(255,255,255,0.03);
                    backdrop-filter: blur(6px);
                    align-items: center;
                }

                .card-media {
                    position: relative;
                    width: 360px;
                    height: 200px;
                    min-width: 360px;
                    min-height: 200px;
                    display: grid;
                    place-items: center;
                    border-radius: 12px;
                    background: linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
                    border: 2px solid transparent;
                    box-shadow: inset 0 6px 30px rgba(0,0,0,0.7), 0 12px 60px rgba(0,0,0,0.7);
                }

                .card-media::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: 12px;
                    box-shadow: inset 0 0 40px rgba(0,0,0,0.36);
                    transition: opacity .2s ease;
                    pointer-events: none;
                }

                .meta {
                    flex: 1;
                    min-width: 0;
                }

                .meta h2 {
                    margin: 0 0 8px 0;
                    font-size: 20px;
                    letter-spacing: 0.6px;
                    color: #ffffff;
                    font-weight: 700;
                    text-transform: none;
                }

                .meta p {
                    margin: 0;
                    color: #9aa6ac;
                    font-size: 13px;
                }

                .tag {
                    display:inline-flex;align-items:center;justify-content:center;
                    font-weight:700;padding:8px 14px;border-radius:12px;font-size:12px;text-transform:uppercase;letter-spacing:1px;margin-left:10px;box-shadow:0 6px 20px rgba(0,0,0,0.5);
                    border:1px solid rgba(255,255,255,0.04);
                }

                .dots {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    margin-top: 18px;
                }

                .dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 4px;
                    background: rgba(255,255,255,0.04);
                    border: 1px solid rgba(255,255,255,0.03);
                    cursor: pointer;
                    transition: all .18s ease;
                    transform: translateY(0);
                }

                .dot.on {
                    background: linear-gradient(180deg,#7b5cff, #3df3e7);
                    box-shadow: 0 8px 40px rgba(61,243,231,0.09), inset 0 -2px 8px rgba(255,255,255,0.03);
                    transform: translateY(-3px) scale(1.08);
                }

                /* keyboard / focus affordances */
                .card:focus-visible { outline: none; box-shadow: 0 28px 80px rgba(2,6,22,0.9), 0 6px 30px rgba(0,0,0,0.4), 0 0 0 4px rgba(124,58,237,0.12); }
                .nav:focus-visible { outline: none; box-shadow: 0 6px 30px rgba(124,58,237,0.06); }

                /* Responsive */
                @media (max-width: 920px) {
                    .card { width: 420px; min-width: 420px; height: 240px; }
                    .card-media { width: 260px; height: 150px; min-width: 260px; }
                }

                @media (max-width: 640px) {
                    .nav { display: none; }
                    .track { gap: 12px; }
                    .card { width: 88vw; min-width: 88vw; height: 170px; }
                    .card-media { width: 42vw; min-width: 42vw; height: 120px; }
                    .heading { flex-direction: column; align-items: flex-start; gap: 8px; }
                    .header-right { display: none; }
                }
            `}</style>
        </main>
    )
}