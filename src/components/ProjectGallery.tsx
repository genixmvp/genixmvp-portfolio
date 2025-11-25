'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ProjectGallery.module.css';

// Mock Data - Replace with actual project data later
const projects = [
    {
        id: 1,
        title: 'LINEAL TRANSFORMERS',
        category: 'WEB APPLICATION',
        image: 'images/projects/lineal_transformers/lt_landing_page.png',
    },
    {
        id: 2,
        title: 'CYBERPUNK 2077',
        category: 'UI/UX DESIGN',
        image: 'https://placehold.co/600x400/111/fcee0a?text=CYBERPUNK',
    },
    {
        id: 3,
        title: 'APEX LEGENDS',
        category: 'GAME DEVELOPMENT',
        image: 'https://placehold.co/600x400/111/ff0000?text=APEX',
    },
    {
        id: 4,
        title: 'NEON ABYSS',
        category: 'CREATIVE CODING',
        image: 'https://placehold.co/600x400/111/00ff99?text=NEON',
    },
    {
        id: 5,
        title: 'GHOST IN SHELL',
        category: '3D MODELING',
        image: 'https://placehold.co/600x400/111/00ccff?text=GHOST',
    },
];

export default function ProjectGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Calculate indices for visible cards
    const getVisibleProjects = () => {
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        const nextIndex = (currentIndex + 1) % projects.length;
        return [
            { ...projects[prevIndex], position: 'left' },
            { ...projects[currentIndex], position: 'center' },
            { ...projects[nextIndex], position: 'right' },
        ];
    };

    const visibleProjects = getVisibleProjects();

    const variants: Variants = {
        center: {
            x: 0,
            scale: 1,
            zIndex: 5,
            opacity: 1,
            filter: 'brightness(1)',
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
        left: {
            x: -300,
            scale: 0.8,
            zIndex: 3,
            opacity: 0.6,
            filter: 'brightness(0.5)',
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
        right: {
            x: 300,
            scale: 0.8,
            zIndex: 3,
            opacity: 0.6,
            filter: 'brightness(0.5)',
            transition: { type: 'spring', stiffness: 300, damping: 30 },
        },
    };

    return (
        <div className={styles.galleryContainer}>
            {/* Decorative Background Elements */}
            <div className={`${styles.decoration} ${styles.cornerAccent} ${styles.topLeft}`} />
            <div className={`${styles.decoration} ${styles.cornerAccent} ${styles.topRight}`} />
            <div className={`${styles.decoration} ${styles.cornerAccent} ${styles.bottomLeft}`} />
            <div className={`${styles.decoration} ${styles.cornerAccent} ${styles.bottomRight}`} />



            <div className={styles.carouselContainer}>
                <button className={`${styles.navButton} ${styles.prevButton}`} onClick={handlePrev}>
                    <ChevronLeft size={24} />
                </button>

                <div className={styles.carousel}>
                    <AnimatePresence mode='popLayout'>
                        {visibleProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className={`${styles.card} ${project.position === 'center' ? styles.cardActive : ''}`}
                                initial={false}
                                animate={project.position as any}
                                variants={variants}
                                style={{
                                    width: project.position === 'center' ? 'min(500px, 80vw)' : 'min(350px, 60vw)',
                                    height: project.position === 'center' ? 'min(350px, 50vh)' : 'min(250px, 40vh)',
                                }}
                            >
                                <div className={styles.cardImageContainer}>
                                    <img src={project.image} alt={project.title} className={styles.cardImage} />
                                </div>
                                <div className={styles.cardOverlay}>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <button className={`${styles.navButton} ${styles.nextButton}`} onClick={handleNext}>
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}
