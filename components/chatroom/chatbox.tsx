"use client";
import { useState, useEffect, useRef } from 'react';
import { useChat } from "app/hooks/useChat";

export default function ChatBox({ chatBotId }: { chatBotId: string }) {
    const { data, isLoading, isError } = useChat(chatBotId);

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>failed to load</div>;

    return (
        <div className="flex flex-col-reverse p-5 h-[450px] max-h-[450px] overflow-y-scroll mt-8">
            {data.map((msg: any, i: number) => (
                <ChatBubble key={i} role={msg.role} message={msg.msg} />
            ))}
        </div>
    );
}

function ChatBubble({ role, message }) {
    const [expanded, setExpanded] = useState(false);
    const [needsTruncation, setNeedsTruncation] = useState(false);
    const truncatedRef = useRef(null);

    useEffect(() => {
        if (truncatedRef.current) {
            const lineHeight = parseInt(window.getComputedStyle(truncatedRef.current).lineHeight, 10);
            const maxHeight = lineHeight * 7;
            if (truncatedRef.current.scrollHeight > maxHeight) {
                setNeedsTruncation(true);
            }
        }
    }, [message]);

    const handleExpand = () => {
        setExpanded(true);
    };

    const bubbleStyles = role === 'user' ?
        "bg-[#94beb8] float-right m-3 p-5 rounded-lg border border-black max-w-[55%]" :
        "bg-white float-left m-3 p-5 rounded-lg border border-black max-w-[55%]";

    const buttonStyle = {
        color: 'gray',
        cursor: 'pointer',
        fontSize: '0.8rem',
        padding: '5px 10px',
        borderRadius: '5px',
        backgroundColor: 'transparent',
        border: 'none',
        display: 'block',
        marginLeft: 'auto',
        marginTop: '5px'
    };

    return (
        <div className="flex-3">
            <div className={bubbleStyles}>
                <div
                    ref={truncatedRef}
                    className={`max-w-full ${expanded ? '' : 'overflow-hidden'}`}
                    style={{
                        display: expanded ? 'block' : '-webkit-box',
                        WebkitLineClamp: expanded ? 'none' : 7,
                        WebkitBoxOrient: 'vertical',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {message}
                </div>
                {needsTruncation && !expanded && (
                    <button onClick={handleExpand} style={buttonStyle}>
                        전체보기
                    </button>
                )}
            </div>
        </div>
    );
}