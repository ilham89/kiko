import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CLOUD } from '@/lib/constants';

const TransitionComponent = ({ animate = false }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  }, []);

  return (
    <>
      {animate && (
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
      )}
    </>
  );
};

export default TransitionComponent;
