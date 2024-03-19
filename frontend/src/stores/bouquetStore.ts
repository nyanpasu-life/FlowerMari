import create from 'zustand';

interface BouquetState {
    bouquetUrl: string;
    apiUsageCount: number;
    usedFlower: number[];
    recommendByMeaning: number[];
    recommendByPopularity: number[];
    allFlowers?: FlowerDto[];
    setBouquetData: (data: any) => void;
}

interface FlowerDto {
    flowerId: number;
    name: string;
    color: string;
    meaning: string;
    imgUrl: string;
}

export const bouquetStore = create<BouquetState>((set) => ({
    bouquetUrl: '',
    apiUsageCount: 0,
    usedFlower: [],
    recommendByMeaning: [],
    recommendByPopularity: [],
    allFlowers: [],
    setBouquetData: (data) => set({ ...data }),
}));