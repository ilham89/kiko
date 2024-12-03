'use client';

import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Comics from './comics';
import HomeComponent from '../HomeComponent';
import TransitionComponent from '../TransitionComponent';
import HallComponent from '../HallComponent';

const GoblinPage = dynamic(() => import('@/app/(chat)/goblin-chat/page'), {
  ssr: false,
});

const StyledContainer = styled.div`
  display: flex;
  gap: 0rem;
  margin-bottom: 8rem;
  max-width: 90vw;
  align-items: center;
  justify-content: center;
`;

const AudioControl = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

export default function MergedSections() {
  const [currentPage, setCurrentPage] = useState<'main' | 'comics' | 'goblin'>(
    'main'
  );
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    console.log(
      'Current video source:',
      isMobile ? '/new/vertical/bg-mobile.mp4' : '/new/horizontal/bg-merge.mp4'
    );
  }, [isMobile]);

  const handleMapClick = () => {
    console.log('Map clicked');
    setCurrentPage('comics');
  };

  const handleGoblinClick = () => {
    console.log('Goblin clicked');
    setCurrentPage('goblin');
  };

  const handleBackClick = () => {
    setCurrentPage('main');
  };

  const [page, setPage] = useState(0);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showTransition, setShowTransition] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    // const { clientX, clientY } = event;
    // const moveX = clientX - window.innerWidth / 2;
    // const moveY = clientY - window.innerHeight / 2;
    // x.set(moveX);
    // y.set(moveY);
    // setMousePosition({ x: moveX, y: moveY });
  };

  const onClickHandler = () => {
    setShowTransition(true);

    setTimeout(() => {
      setShowTransition(false);
      setPage(1);
    }, 2000);
  };

  const onBack = () => {
    setShowTransition(true);

    setTimeout(() => {
      setShowTransition(false);
      setPage(0);
    }, 2000);
  };

  if (currentPage === 'comics') {
    return <Comics onBackClick={handleBackClick} />;
  }

  if (currentPage === 'goblin') {
    return <GoblinPage />;
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `url('/images/bg-main.png')`,
      }}
    >
      {showTransition && <TransitionComponent animate={showTransition} />}

      {page === 0 ? (
        <HomeComponent x={x} y={y} onClickHandler={onClickHandler} />
      ) : (
        ''
      )}
      {page === 1 ? <HallComponent x={x} y={y} onBack={onBack} /> : ''}
    </div>
  );
}
