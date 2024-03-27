import {useEffect, useState} from 'react';
import { bouquetStore } from '../../stores/bouquetStore';
import setupSSE from "../../utils/sse.ts";

export const GenerateTestPage = () => {
    const {bouquetUrl,usedFlower, recommendByMeaning, allFlowers, setBouquetData,recommendByPopularity} = bouquetStore.getState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setupSSE({
            onOpen: () => setIsLoading(true),
            onDataReceived: (data) => {
                setBouquetData(data);
                setIsLoading(false);
            },
            onError: () => setIsLoading(false)
        });

        return () => {

        };
    }, []);

    useEffect(() => {
        console.log("usedFlower:", usedFlower);
    }, [usedFlower]);
    return (
        <>
            <div>
                <img src={bouquetUrl} alt=""/>
            </div>
        </>
    );
};
