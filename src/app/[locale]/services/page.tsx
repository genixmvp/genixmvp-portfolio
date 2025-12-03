"use client"
import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'

const styles: { [k: string]: React.CSSProperties } = {
    page: {
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#e6eefc",
        minHeight: "100vh",
        background:
            "radial-gradient(circle at 15% 10%, rgba(124,58,237,0.06), transparent 8%), radial-gradient(circle at 85% 85%, rgba(0,212,255,0.04), transparent 10%), linear-gradient(180deg,#05040a 0%, #0b0912 50%, #06030a 100%)",
        backgroundAttachment: 'fixed'
    },
    hero: {
        maxWidth: 1100,
        margin: "36px auto",
        padding: "32px",
        display: "grid",
        gridTemplateColumns: "1fr 360px",
        gap: 28,
        alignItems: "start",
    },
    card: {
        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 10px 30px rgba(0,0,0,0.8), 0 0 30px rgba(124,58,237,0.04)",
        border: '1px solid rgba(255,255,255,0.03)'
    },
    title: { fontSize: 26, fontWeight: 700, margin: 0, color: '#e9eefc' },
    summary: { marginTop: 14, fontSize: 15, color: "#bfcff9", lineHeight: 1.45 },
    contactBtn: {
        display: "inline-block",
        padding: "10px 14px",
        borderRadius: 8,
        background: "linear-gradient(135deg,#6b00ff,#00d4ff)",
        color: "black",
        textDecoration: "none",
        fontWeight: 700,
        marginTop: 8,
        boxShadow: "0 10px 30px rgba(106,17,203,0.18)",
    }
}

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carolina-celeste-navarro-aldoradin",
        icon: (
            <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.47-1.5 2.5-1.5 2.21 0 4 1.79 4 4v6z"/>
            </svg>
        ),
    },
    {
        name: "GitHub",
        url: "https://github.com/genixmvp",
        icon: (
            <svg width="24" height="24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.23 2.73.12 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
        ),
    },
];

export default function ServicesPage() {
  const intl = useIntl()
  return (
    <div style={styles.page}>
      <main style={styles.hero}>
        <section style={{ ...styles.card, padding: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <div>
              <h1 style={{ ...styles.title, fontSize: 28 }}>{intl.formatMessage({ id: 'servicesSection.title', defaultMessage: 'Services' })}</h1>
              <p style={{ ...styles.summary, marginTop: 6 }}>{intl.formatMessage({ id: 'servicesSection.tagline', defaultMessage: 'Carefully-crafted services to help you build and ship better products.' })}</p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <div style={{ padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.04)', color: '#dbe9ff' }}>{intl.formatMessage({ id: 'servicesSection.filter_all', defaultMessage: 'All' })}</div>
              <div style={{ padding: '10px 14px', borderRadius: 10, background: 'linear-gradient(135deg,#6b00ff,#00d4ff)', color: 'white' }}>{intl.formatMessage({ id: 'servicesSection.popular', defaultMessage: 'Popular' })}</div>
            </div>
          </div>

          {/* services grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {/* Consulting */}
            <article style={{ padding: 18, borderRadius: 12, background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{intl.formatMessage({ id: 'servicesSection.consulting.name', defaultMessage: 'Consulting' })}</h3>
                  <p style={{ marginTop: 8, color: '#9aa7c9', fontSize: 13 }}>{intl.formatMessage({ id: 'servicesSection.consulting.description', defaultMessage: 'Providing expert advice on software development and system architecture.' })}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, color: '#e6eefc' }}>{intl.formatMessage({ id: 'servicesSection.consulting.prices.basic', defaultMessage: '$10/hour' })}</div>
                  <div style={{ fontSize: 12, color: '#9aa7c9' }}>{intl.formatMessage({ id: 'servicesSection.consulting.prices.premium', defaultMessage: '$30/hour' })}</div>
                </div>
              </div>
            </article>

            {/* Web development */}
            <article style={{ padding: 18, borderRadius: 12, background: 'linear-gradient(180deg, rgba(0,10,20,0.02), rgba(0,10,20,0.01))', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h3 style={{ margin: 0, fontSize: 18 }}>{intl.formatMessage({ id: 'servicesSection.webdevelopment.name', defaultMessage: 'Web Development' })}</h3>
              <p style={{ marginTop: 8, color: '#9aa7c9', fontSize: 13 }}>{intl.formatMessage({ id: 'servicesSection.webdevelopment.description', defaultMessage: 'Building custom web applications tailored to your business needs.' })}</p>
              <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ color: '#bfcff9' }}>{intl.formatMessage({ id: 'servicesSection.webdevelopment.prices.basic', defaultMessage: '$300/project' })}</li>
                <li style={{ color: '#bfcff9' }}>{intl.formatMessage({ id: 'servicesSection.webdevelopment.prices.premium', defaultMessage: '$800/project' })}</li>
              </ul>
            </article>

            {/* CAD Design */}
            <article style={{ padding: 18, borderRadius: 12, background: 'linear-gradient(180deg, rgba(10,0,20,0.02), rgba(10,0,20,0.01))', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h3 style={{ margin: 0, fontSize: 18 }}>{intl.formatMessage({ id: 'servicesSection.caddesign.name', defaultMessage: 'CAD Design' })}</h3>
              <p style={{ marginTop: 8, color: '#9aa7c9', fontSize: 13 }}>{intl.formatMessage({ id: 'servicesSection.caddesign.description', defaultMessage: 'Creating and modifying detailed CAD models for engineering and manufacturing.' })}</p>
              <div style={{ marginTop: 12, color: '#bfcff9', fontSize: 13 }}>{intl.formatMessage({ id: 'servicesSection.caddesign.prices.basic', defaultMessage: '$200/model' })}</div>
            </article>

            {/* AI Avatars */}
            <article style={{ padding: 18, borderRadius: 12, background: 'linear-gradient(180deg, rgba(15,5,20,0.02), rgba(15,5,20,0.01))', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h3 style={{ margin: 0, fontSize: 18 }}>{intl.formatMessage({ id: 'servicesSection.aiavatars.name', defaultMessage: 'AI Avatars' })}</h3>
              <p style={{ marginTop: 8, color: '#9aa7c9', fontSize: 13 }}>{intl.formatMessage({ id: 'servicesSection.aiavatars.description', defaultMessage: 'Designing and implementing AI-driven avatars for interactive applications.' })}</p>
              <div style={{ marginTop: 12, color: '#bfcff9', fontSize: 13 }}>{intl.formatMessage({ id: 'servicesSection.aiavatars.prices.basic', defaultMessage: '$500/avatar' })}</div>
            </article>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <div style={styles.contactBtn}>{intl.formatMessage({ id: 'contactSection.title', defaultMessage: 'Contact' })}</div>
            </Link>
          </div>
        </section>

        <aside style={{ width: 360 }}>
          {/* Mini summary card */}
          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{ padding: 18, borderRadius: 12, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.03)' }}>
              <h4 style={{ margin: 0 }}>{intl.formatMessage({ id: 'servicesSection.sideTitle', defaultMessage: 'How I work' })}</h4>
              <p style={{ marginTop: 8, color: '#9aa7c9', fontSize: 13 }}>{intl.formatMessage({ id: 'servicesSection.sideText', defaultMessage: 'Short discovery → scope → prototype → iterate → ship' })}</p>
              <ul style={{ marginTop: 10, paddingLeft: 0, listStyle: 'none' }}>
                <li style={{ color: '#bfcff9' }}>• {intl.formatMessage({ id: 'servicesSection.sideItem1', defaultMessage: 'Discovery & scope' })}</li>
                <li style={{ color: '#bfcff9' }}>• {intl.formatMessage({ id: 'servicesSection.sideItem2', defaultMessage: 'Rapid prototyping' })}</li>
                <li style={{ color: '#bfcff9' }}>• {intl.formatMessage({ id: 'servicesSection.sideItem3', defaultMessage: 'Delivery & support' })}</li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  )
}