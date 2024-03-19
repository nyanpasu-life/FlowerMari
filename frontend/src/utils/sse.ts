import { bouquetStore } from '../stores/bouquetStore';

//언마운트시 연결 종료 고려 안함
const setupSSE = () => {
    const { setBouquetData } = bouquetStore.getState();

    const eventSource = new EventSource('/path/to/sse');

    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.eventType === 'firstGenerateEvent') {
            setBouquetData(data);
        }
    };

    eventSource.onerror = (error) => {
        console.error('SSE error:', error);
        eventSource.close();
    };
};

export default setupSSE;
