"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useChat(chatBotId: string) {
    const options = {
        revalidateOnFocus: false,
    };
    const { data, error, mutate } = useSWR(`/api/chat?chatBotId=${chatBotId}`, fetcher, options);

    return {
        data,
        isLoading: !error && !data,
        isError: error,
        mutate,
    };
}