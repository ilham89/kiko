'use client';

import Image from 'next/image';
import { Attachment, Message } from 'ai';
import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { Message as PreviewMessage } from '@/components/custom/message';
import { MultimodalInput } from './multimodal-input';

export function Chat({
  id,
  initialMessages,
  selectedModelId,
}: {
  id: string;
  initialMessages: Array<Message>;
  selectedModelId: string;
}) {
  const {
    messages,
    setMessages,
    handleSubmit,
    input,
    setInput,
    append,
    isLoading,
    stop,
    data: streamingData,
  } = useChat({
    body: { id, modelId: selectedModelId },
    initialMessages,
  });

  const [attachments, setAttachments] = useState<Array<Attachment>>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isNearBottom, setIsNearBottom] = useState(true);

  const checkIfNearBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      const threshold = 100;
      const isNear =
        container.scrollHeight - container.scrollTop - container.clientHeight <
        threshold;
      setIsNearBottom(isNear);
    }
  };

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container && (autoScroll || isNearBottom)) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    checkIfNearBottom();
    const container = chatContainerRef.current;
    if (container) {
      setAutoScroll(
        container.scrollHeight - container.scrollTop === container.clientHeight
      );
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isNearBottom, autoScroll, scrollToBottom]);

  const visibleMessages = messages;

  return (
    <div className="absolute left-2 lg:left-[17%] md:left-[18%] bottom-[14%] lg:bottom-[120px] w-[95%] md:w-[63%]">
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0"> */}
      <div
        className="relative w-full h-full"
        style={
          {
            // background: 'url(/bg-chat.png)',
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: '50%',
          }
        }
      >
        <div
          ref={chatContainerRef}
          onScroll={handleScroll}
          className="overflow-y-auto max-h-[400px] scrollbar-hide"
          // className="flex-1 overflow-y-auto bg-[#ddb66ea6] rounded-t-lg shadow-xl border-t border-l border-r border-[#fed284] p-4 scrollbar-hide"
        >
          {visibleMessages.map((message) => (
            <PreviewMessage
              key={message.id}
              role={message.role}
              content={message.content}
              attachments={message.experimental_attachments}
              toolInvocations={message.toolInvocations}
            />
          ))}
        </div>

        <div
        // className="bg-[#ddb66ea6] shadow-xl rounded-b-lg border-b border-l border-r border-[#fed284] p-4"
        >
          <div className="h-[3px] mx-4 mb-4 bg-[#783714]"></div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <MultimodalInput
              className="flex-1 min-h-[40px] max-h-[120px] placeholder:text-black text-black text-sm sm:text-base resize-none bg-transparent px-3 py-2 shadow-sm"
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              stop={stop}
              attachments={attachments}
              setAttachments={setAttachments}
              messages={messages}
              setMessages={setMessages}
              append={append}
            />
          </form>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
