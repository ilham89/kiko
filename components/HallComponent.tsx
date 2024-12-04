import { getModelId } from '@/app/(chat)/goblin-chat/actions';

import { generateUUID } from '@/lib/utils';
import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Chat } from './custom/chat';

const AnimatedPNG = ({
  frameCount = 86,
  frameRate = 10,
  width = 2000,
  height = 2000,
}) => {
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prevFrame) =>
        prevFrame < frameCount ? prevFrame + 1 : 1
      );
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [frameCount, frameRate]);

  return (
    <div className="flex justify-center items-center h-full">
      <Image
        src={`/assets/animation2/2-unscreen-${currentFrame}.png`}
        alt={`Frame ${currentFrame}`}
        width={width}
        height={height}
      />
    </div>
  );
};

const HallComponent = ({
  x,
  y,
  onBack,
}: {
  onBack: () => void;
  x: MotionValue<number>;
  y: MotionValue<number>;
}) => {
  const [selectedModelId, setSelectedModelId] = useState('');
  const id = generateUUID();

  useEffect(() => {
    const fetchModelId = async () => {
      const modelId = await getModelId();
      setSelectedModelId(modelId);
    };
    fetchModelId();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex">
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/bg-chatbot2.png"
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
          className="size-full"
        />
      </motion.div>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/chatbot-1.png"
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
          className="size-full"
        />
      </motion.div>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/chatbot-2.png"
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
          className="size-full"
        />
      </motion.div>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/chatbot-3.png"
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
          className="size-full"
        />
      </motion.div>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/chatbot-4.png"
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
          className="size-full"
        />
      </motion.div>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/chatbot-5.png"
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
          className="size-full"
        />
      </motion.div>
      <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/kodok-chatbot.gif"
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
          className="size-full"
        />
      </motion.div>
      {/* 
      <motion.div
        className="absolute inset-0"
        style={{
          y: useTransform(y, [-100, 100], [8, -8]),
        }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Image
          loading="eager"
          src={WORKGATE}
          alt="Mountain"
          layout="fill"
          objectFit="cover"
          className="size-full"
        />
      </motion.div> */}
      {/* 
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <Image
          loading="eager"
          src={WORKCLOUD}
          alt="Castle"
          layout="fill"
          objectFit="cover"
          className="size-full"
        />
      </motion.div> */}

      {/* <div className="size-full flex flex-col lg:flex-row lg:mx-28 m-0">
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full"> */}

      {/* <motion.div className="absolute inset-0">
        <Image
          loading="eager"
          src="/gerbang-ijo.png"
          alt="Background Screen"
          layout="fill"
          objectFit="cover"
          priority
          className="size-full"
        /> */}

      {/* </motion.div> */}
      <div
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '800px',
          height: '100%',
          background: 'url(/gerbang-ijo-fix.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          // backgroundOrigin: 'content-box, border-box',
          backgroundPosition: 'center',
          position: 'relative',
          margin: 'auto auto',
        }}
      >
        <Chat
          key={id}
          id={id}
          initialMessages={[]}
          selectedModelId={selectedModelId}
        />
      </div>

      {/* </div> */}
      {/* <div className="w-full lg:w-1/2 h-1/2 lg:h-full lg:relative absolute z-10 lg:right-[unset] -right-1/3 bottom-0">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <Image
              loading="eager"
              src={MEDITATION}
              alt="Gate"
              width={400}
              height={400}
              className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-[40%] z-10 w-[200px] md:w-[400px] "
            />
          </motion.div>
        </div> */}
      {/* // </div> */}

      <motion.div
        className="absolute top-4 left-2 cursor-pointer hover:animate-shake"
        onClick={onBack}
      >
        <Image
          loading="eager"
          src="/back-ijo2.png"
          alt="Background Screen"
          width={100}
          height={50}
        />
      </motion.div>
    </div>
  );
};

export default HallComponent;
