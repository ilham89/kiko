import { useEffect, useState } from 'react';

import './index.css';

const TransitionComponent = ({ animate = false }) => {
  function createSpongeBobBubbles() {
    const container = document.getElementById('bubbleContainer');
    const bubbleCount = 300;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');

      // Randomize size
      const size = Math.random() * 80 + 20; // 20-100px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Start from bottom right
      bubble.style.right = `${Math.random() * 100}%`;
      bubble.style.bottom = `${Math.random() * 100}%`;

      // Randomize animation delay
      bubble.style.animationDelay = `${Math.random() * 0.5}s`;

      // Add slight variation to bubble appearance
      bubble.style.border = `${Math.random() * 2 + 1}px solid rgba(255,255,255,0.5)`;

      // @ts-ignore
      container.appendChild(bubble);
    }
  }

  useEffect(() => {
    createSpongeBobBubbles();
  }, []);

  return (
    <>
      <div className="bubble-container" id="bubbleContainer"></div>

      {/* {animate && (
        <>
          <motion.div
            className="fixed inset-y-0 left-0 w-screen h-screen z-40"
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud1.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-1/4 left-[45%] -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
          <motion.div
            className="fixed inset-y-0 left-0 w-screen h-screen z-40"
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud2.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[35%] left-[55%] -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
          <motion.div
            className="fixed inset-y-0 left-0 w-screen h-screen z-40"
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud1.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[45%] left-[65%] -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
          <motion.div
            className="fixed inset-y-0 left-0 w-screen h-screen z-40"
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud2.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[65%] left-3/4 -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>
          <motion.div
            className="fixed inset-y-0 left-0 w-screen h-screen z-40"
            initial={{ x: '100%', width: '100%' }}
            animate={{ x: '0', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud1.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2"
            />
          </motion.div>

          <motion.div
            className="fixed inset-y-0 right-0 w-screen h-screen z-40"
            initial={{ x: '-100%', width: '100%' }}
            animate={{ x: '0%', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud2.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[55%] left-[35%] -translate-x-1/2 -translate-y-1/2 -scale-x-100"
            />
          </motion.div>
          <motion.div
            className="fixed inset-y-0 right-0 w-screen h-screen z-40"
            initial={{ x: '-100%', width: '100%' }}
            animate={{ x: '0%', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud1.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[65%] left-1/4 -translate-x-1/2 -translate-y-1/2 -scale-x-100"
            />
          </motion.div>
          <motion.div
            className="fixed inset-y-0 right-0 w-screen h-screen z-40"
            initial={{ x: '-100%', width: '100%' }}
            animate={{ x: '0%', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud2.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[15%] left-[35%] -translate-x-1/2 -translate-y-1/2 -scale-x-100"
            />
          </motion.div>
          <motion.div
            className="fixed inset-y-0 right-0 w-screen h-screen z-40"
            initial={{ x: '-100%', width: '100%' }}
            animate={{ x: '0%', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud1.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[85%] left-1/4 -translate-x-1/2 -translate-y-1/2 -scale-x-100"
            />
          </motion.div>
          <motion.div
            className="fixed inset-y-0 right-0 w-screen h-screen z-40"
            initial={{ x: '-100%', width: '100%' }}
            animate={{ x: '0%', width: '100%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Image
              loading="eager"
              src="/cloud2.png"
              alt="cloud"
              width={1000}
              height={1000}
              className="absolute top-[35%] left-3/4 -translate-x-1/2 -translate-y-1/2 -scale-x-100"
            />
          </motion.div>
        </>
      )} */}
    </>
  );
};

export default TransitionComponent;
