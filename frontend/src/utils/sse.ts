import { bouquetStore } from '../stores/bouquetStore';
// setupSSE.ts

interface SSECallbacks {
    onOpen?: () => void;
    onDataReceived?: (data: any) => void;
    onError?: (error: Event) => void;
}

const setupSSE = (callbacks: SSECallbacks) => {
    console.log("sse 시작");
    const { setBouquetData } = bouquetStore.getState();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const sseUrl = `${apiUrl}/bouquet/subscribe`;
    const eventSource = new EventSource(sseUrl);

    eventSource.onopen = () => {
        console.log("SSE 연결 상태:", eventSource.readyState);
        callbacks.onOpen?.();
    };

    eventSource.addEventListener('firstGenerateEvent', (event) => {
        console.log("firstGenerateEvent 메시지 수신");
        const data = JSON.parse(event.data);
        setBouquetData(data);
        console.log('서버 데이터', data);
        callbacks.onDataReceived?.(data);
    });

    eventSource.addEventListener('reGenerateEvent', (event) => {
        console.log("reGenerateEvent 메시지 수신");
        const data = JSON.parse(event.data);
        setBouquetData(data);
        console.log('서버 데이터', data);
        callbacks.onDataReceived?.(data);
    });

    eventSource.onerror = (error) => {
        console.error('SSE error:', error);
        callbacks.onError?.(error);
        eventSource.close();
    };
};

export default setupSSE;
