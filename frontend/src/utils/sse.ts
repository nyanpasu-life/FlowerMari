import { bouquetStore } from '../stores/bouquetStore';

const setupSSE = () => {
    console.log("sse 시작");
    const { setBouquetData } = bouquetStore.getState();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const sseUrl = `${apiUrl}/bouquet/subscribe`;
    console.log('sseUrl: ' + sseUrl);
    const eventSource = new EventSource(sseUrl);

    console.log("SSE 연결 상태:", eventSource.readyState);

    // 'firstGenerateEvent' 이벤트에 대한 리스너 등록
    eventSource.addEventListener('firstGenerateEvent', (event) => {
        console.log("firstGenerateEvent 메시지 수신");
        const data = JSON.parse(event.data);
        setBouquetData(data);
        console.log(data.allFlowers);
        console.log("SSE 연결 상태:", eventSource.readyState);

    });

    // 'reGenerateEvent' 이벤트에 대한 리스너 등록
    eventSource.addEventListener('reGenerateEvent', (event) => {
        console.log("reGenerateEvent 메시지 수신");
        const data = JSON.parse(event.data);
        setBouquetData(data);
        console.log(data);
        console.log("SSE 연결 상태:", eventSource.readyState);
    });

    eventSource.onerror = (error) => {
        console.error('SSE error:', error);
        console.log("SSE 연결 상태:", eventSource.readyState);
        eventSource.close();
    };

};

export default setupSSE;
