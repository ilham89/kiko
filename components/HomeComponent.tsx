/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HomeComponent = ({
  x,
  y,
  onClickHandler,
}: {
  onClickHandler: () => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
}) => {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(!isRotating);
    }, 2000); // Change the interval value to adjust rotation speed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/latar.png"
          alt="Castle"
          layout="fill"
          objectFit="cover"
          className="relative"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        initial={{ y: '-70%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Image
          loading="eager"
          src="/gapura.png"
          alt="Castle"
          layout="fill"
          objectFit="cover"
          className="relative z-10"
        />
      </motion.div>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/kolam.png"
          alt="Castle"
          layout="fill"
          objectFit="cover"
          className="relative"
        />
      </motion.div>
      <motion.div
        className="fixed left-[-10%] bottom-[-100px]"
        variants={{ rotate: { rotate: isRotating ? 2 : -2 } }}
        animate="rotate"
        transition={{
          delay: 1.2,
          duration: 1,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image
          loading="eager"
          src="/daun1.png"
          alt="Castle"
          width={500}
          height={500}
          className="relative z-20 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]"
        />
      </motion.div>
      <motion.div
        className="fixed right-[-10%] bottom-[-100px]"
        variants={{ rotate: { rotate: isRotating ? 2 : -2 } }}
        animate="rotate"
        transition={{
          delay: 1.2,
          duration: 1,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Image
          loading="eager"
          src="/daun2.png"
          alt="Castle"
          width={500}
          height={500}
          className="relative z-20 w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[47%] lg:left-1/4 left-2 lg:-translate-x-1/2 z-30 cursor-pointer hover:animate-shake"
        initial={{ y: '20%', x: '50%', scale: 0 }}
        animate={{ y: 0, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Image
          onClick={() =>
            window.open(
              'https://pump.fun/6tpVTrh9T2by1yEoXXUiqQmCLMVyWhmu8hKPZ8Bfpump'
            )
          }
          loading="eager"
          src="/buy.png"
          alt="Castle"
          width={150}
          height={200}
          className="relative z-30 w-[90px] lg:w-[110px] h-[100px] lg:h-[150px] hover:drop-shadow-[10px_5px_33px_#26c947]"
          style={{
            transition: 'all 0.6s',
          }}
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[47%] lg:right-1/4 right-2 lg:-translate-x-1/2 z-30 cursor-pointer hover:animate-shake"
        initial={{ y: '20%', x: '-50%', scale: 0 }}
        animate={{ y: 0, x: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Image
          onClick={() => window.open('https://x.com/kikosimulation')}
          loading="eager"
          src="/x.png"
          alt="Castle"
          width={150}
          height={200}
          className="relative z-30 w-[90px] lg:w-[110px] h-[100px] lg:h-[150px] hover:drop-shadow-[10px_5px_33px_#26c947]"
          style={{
            transition: 'all 0.6s',
          }}
        />
      </motion.div>

      <motion.div className="absolute bottom-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer">
        <Image
          onClick={() => window.open('https://github.com/ceaselesssss/kiko')}
          loading="eager"
          src="/poc.png"
          alt="Castle"
          width={200}
          height={200}
          className="relative hover:drop-shadow-[10px_5px_33px_#26c947] hover:scale-110"
          style={{
            transition: 'all 0.6s',
          }}
        />
      </motion.div>

      <motion.div className="absolute bottom-[46%] left-0 right-0 w-fit z-30 cursor-pointer hover:animate-shake mx-auto">
        <Image
          onClick={() => window.open('https://x.com/ceaseless')}
          loading="eager"
          src="/dev.png"
          alt="Castle"
          width={100}
          height={50}
          className="relative hover:drop-shadow-[10px_5px_33px_#26c947] hover:scale-110"
          style={{
            transition: 'all 0.6s',
          }}
        />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="absolute z-20 h-[300px] w-full top-[60vh] md:top-[50%]"
        transition={{
          delay: 0.8,
          duration: 1,
        }}
      >
        {/* <motion.div
          className="absolute inset-0"
          animate={{ y: [0, -10, 0] }}
          transition={{
            delay: 1.8,
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        > */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="cursor-pointer"
        >
          <Image
            onClick={onClickHandler}
            loading="eager"
            src="/kodok.gif"
            alt="Castle"
            width={260}
            height={260}
            objectFit="cover"
            className=" w-[200px] md:w-[260px] mx-auto"
          />
          {/* </motion.div> */}
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeComponent;
