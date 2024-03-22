import { bouquetStore } from '../stores/bouquetStore';

const setupSSE = () => {
    const { setBouquetData } = bouquetStore.getState();
    const eventSource = new EventSource('/path/to/sse');

    eventSource.onmessage = (event) => {
        const data = JSON.parse(event.data);

        // 첫 번째 생성 이벤트 처리
        if (data.eventType === 'firstGenerateEvent') {
            // 최초 데이터 설정. allFlowers 포함하여 상태 업데이트
            setBouquetData(data.data);
        }
        // 재생성 이벤트 처리
        else if (data.eventType === 'regenerateEvent') {
            // 재생성 이벤트에 대한 데이터 설정. allFlowers는 현재 상태 유지
            setBouquetData(data.data);
        }
    };

    eventSource.onerror = (error) => {
        console.error('SSE error:', error);
        eventSource.close();
    };

    // 언마운트 시 연결 종료
    return () => {
        eventSource.close();
    };
};

export default setupSSE;
