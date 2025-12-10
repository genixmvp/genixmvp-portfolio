"use client"
import React from 'react'
import { useIntl } from 'react-intl'
import Link from 'next/link'

// --- Styles ---
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
        gridTemplateColumns: "1fr 360px", // Keep the sidebar layout
        gap: 28,
        alignItems: "start",
    },
    // Mobile responsiveness would usually handle the gridTemplateColumns above via media queries in CSS files, 
    // but sticking to your inline style pattern here.
    
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
    },
    serviceCard: {
        padding: 20, 
        borderRadius: 12, 
        background: 'linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0.005))', 
        border: '1px solid rgba(255,255,255,0.03)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
    },
    priceTag: {
        fontSize: 13,
        color: '#bfcff9',
        background: 'rgba(255,255,255,0.03)',
        padding: '4px 8px',
        borderRadius: 6,
        display: 'inline-block'
    },
    modalityTag: {
        fontSize: 11,
        color: '#9aa7c9',
        border: '1px solid rgba(255,255,255,0.05)',
        padding: '2px 6px',
        borderRadius: 4,
        marginRight: 6
    }
}

// List of keys to map through based on your new JSON structure
const serviceKeys = [
    'webdevelopment',
    'caddesign',
    'aiavatars',
    'iotdevelopment',
    'embeddedprototyping',
    'telemetrysystems',
    'dataengineering',
    'reverseengineering',
    'automation',
    "aichatbot"
]

export default function ServicesPage() {
    const intl = useIntl()

    return (
        <div style={styles.page}>
            <main style={styles.hero}>
                {/* --- Left Column: Services List --- */}
                <section style={{ ...styles.card, padding: 28 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, flexWrap: 'wrap', gap: 10 }}>
                        <div>
                            <h1 style={{ ...styles.title, fontSize: 28 }}>
                                {intl.formatMessage({ id: 'servicesSection.title', defaultMessage: 'Services' })}
                            </h1>
                            <p style={{ ...styles.summary, marginTop: 6 }}>
                                {intl.formatMessage({ id: 'servicesSection.tagline', defaultMessage: 'Offering a range of services to help you achieve your goals.' })}
                            </p>
                        </div>
                        {/*<div style={{ display: 'flex', gap: 10 }}>
                            <div style={{ padding: '8px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.04)', color: '#dbe9ff', fontSize: 14 }}>
                                {intl.formatMessage({ id: 'servicesSection.filter_all', defaultMessage: 'All' })}
                            </div>
                            <div style={{ padding: '8px 14px', borderRadius: 10, background: 'linear-gradient(135deg,#6b00ff,#00d4ff)', color: 'white', fontSize: 14, fontWeight: 500 }}>
                                {intl.formatMessage({ id: 'servicesSection.popular', defaultMessage: 'Popular' })}
                            </div>
                        </div>*/}
                    </div>

                    {/* Services Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
                        {serviceKeys.map((key) => (
                            <article key={key} style={styles.serviceCard}>
                                <div>
                                    <h3 style={{ margin: 0, fontSize: 19, color: '#e9eefc' }}>
                                        {intl.formatMessage({ id: `servicesSection.services.${key}.name`, defaultMessage: key })}
                                    </h3>
                                    <p style={{ marginTop: 10, marginBottom: 16, color: '#9aa7c9', fontSize: 14, lineHeight: 1.5 }}>
                                        {intl.formatMessage({ id: `servicesSection.services.${key}.description`, defaultMessage: 'Service description...' })}
                                    </p>
                                </div>
                                
                                <div>
                                    <div style={{ marginBottom: 12, display: 'flex', flexWrap: 'wrap' }}>
                                         <span style={styles.modalityTag}>On-site</span>
                                         <span style={styles.modalityTag}>Hybrid</span>
                                         <span style={styles.modalityTag}>Remote</span>
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 12 }}>
                                        <div style={{ fontSize: 12, color: '#6b7280' }}>Range</div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ color: '#e6eefc', fontSize: 14, fontWeight: 600 }}>
                                                {intl.formatMessage({ id: `servicesSection.services.${key}.prices.from`, defaultMessage: '$0' })}
                                                <span style={{color:'#6b7280', fontWeight:400, margin: '0 4px'}}>-</span> 
                                                {intl.formatMessage({ id: `servicesSection.services.${key}.prices.to`, defaultMessage: '$0' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <div style={styles.contactBtn}>
                                {intl.formatMessage({ id: 'contactSection.title', defaultMessage: 'Contact Me' })}
                            </div>
                        </Link>
                    </div>
                </section>

                {/* --- Right Column: Sidebar --- */}
                <aside style={{ width: '100%', minWidth: 300 }}>
                    <div style={{ position: 'sticky', top: 24 }}>
                        <div style={{ padding: 24, borderRadius: 12, background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))', border: '1px solid rgba(255,255,255,0.03)' }}>
                            <h4 style={{ margin: 0, fontSize: 18, color: '#e6eefc' }}>
                                {intl.formatMessage({ id: 'servicesSection.sideTitle', defaultMessage: 'What can I do for you' })}
                            </h4>
                            <p style={{ marginTop: 8, marginBottom: 20, color: '#9aa7c9', fontSize: 14 }}>
                                {intl.formatMessage({ id: 'servicesSection.sideText', defaultMessage: 'I offer the services listed here to satisfy for techie needs.' })}
                            </p>
                            
                            <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                                {/* Item 1 */}
                                <li>
                                    <div style={{ color: '#bfcff9', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                                        • {intl.formatMessage({ id: 'servicesSection.sideItem1', defaultMessage: 'Flexible Delivery Timelines:' })}
                                    </div>
                                    <div style={{ color: '#7a85a3', fontSize: 13, lineHeight: 1.4, paddingLeft: 10 }}>
                                        {intl.formatMessage({ id: 'servicesSection.littlesideText1', defaultMessage: 'Need it faster? For an additional premium, project completion times can be accelerated.' })}
                                    </div>
                                </li>

                                {/* Item 2 */}
                                <li>
                                    <div style={{ color: '#bfcff9', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                                        • {intl.formatMessage({ id: 'servicesSection.sideItem2', defaultMessage: 'Highly Competitive Pricing:' })}
                                    </div>
                                    <div style={{ color: '#7a85a3', fontSize: 13, lineHeight: 1.4, paddingLeft: 10 }}>
                                        {intl.formatMessage({ id: 'servicesSection.littlesideText2', defaultMessage: 'Offering high-quality solutions with rates designed to be accessible.' })}
                                    </div>
                                </li>

                                {/* Item 3 */}
                                <li>
                                    <div style={{ color: '#bfcff9', fontWeight: 600, fontSize: 14, marginBottom: 4 }}>
                                        • {intl.formatMessage({ id: 'servicesSection.sideItem3', defaultMessage: 'Deeply Personalized Solutions:' })}
                                    </div>
                                    <div style={{ color: '#7a85a3', fontSize: 13, lineHeight: 1.4, paddingLeft: 10 }}>
                                        {intl.formatMessage({ id: 'servicesSection.littlesideText3', defaultMessage: 'Every project is custom-tailored to your unique needs.' })}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    )
}