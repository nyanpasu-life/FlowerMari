import create from 'zustand';
//꽃말 배열 형태 주의
interface FlowerDto {
    flowerId: number;
    name: string;
    color: string;
    meaning: string;
    imgUrl: string;
}

interface BouquetState {
    bouquetUrl: string;
    apiUsageCount: number;
    usedFlower: number[];
    recommendByMeaning: number[];
    recommendByPopularity: number[];
    allFlowers?: FlowerDto[];
    setBouquetData: (data: any) => void;
}

export const bouquetStore = create<BouquetState>((set) => ({
    bouquetUrl: '',
    apiUsageCount: 0,
    usedFlower: [1,2,3],
    recommendByMeaning: [4,5,6],
    recommendByPopularity: [1,2,3,4,5,6,7], //top7 사용 중복 체크 필요
    allFlowers: [
        {flowerId: 1, name: 'Rose', color: 'Red', meaning: 'love', imgUrl: 'https://'},
        {flowerId: 2, name: 'Tulip', color: 'Yellow', meaning: 'Happiness', imgUrl: 'https://'},
        {flowerId: 3, name: 'Daisy', color: 'White', meaning: 'Innocence', imgUrl: 'https://'},
        {flowerId: 4, name: 'Sunflower', color: 'Yellow', meaning: 'Adoration', imgUrl: 'https://'},
        {flowerId: 5, name: 'Lily', color: 'White', meaning: 'Purity', imgUrl: 'https://'},
        {flowerId: 6, name: 'Orchid', color: 'Purple', meaning: 'Elegance', imgUrl: 'https://'},
        {flowerId: 7, name: 'Peony', color: 'Pink', meaning: 'Prosperity', imgUrl: 'https://'},
        {flowerId: 8, name: 'Lavender', color: 'Purple', meaning: 'Serenity', imgUrl: 'https://'},
        {flowerId: 9, name: 'Hydrangea', color: 'Blue', meaning: 'Understanding', imgUrl: 'https://'},
        {flowerId: 10, name: 'Iris', color: 'Blue', meaning: 'Wisdom', imgUrl: 'https://'},
        {flowerId: 11, name: 'Iris2', color: 'Yellow', meaning: 'Wisdom', imgUrl: 'https://'},
        {flowerId: 12, name: 'Iris3', color: 'Yellow', meaning: 'Wisdom', imgUrl: 'https://'},
        {flowerId: 13, name: 'Iris4', color: 'Red', meaning: 'Wisdom', imgUrl: 'https://'},
        {flowerId: 14, name: 'Iris5', color: 'Red', meaning: 'Wisdom', imgUrl: 'https://'},
        {flowerId: 15, name: 'Iris6', color: 'Purple', meaning: 'Wisdom', imgUrl: 'https://'},
        {flowerId: 16, name: 'Iris7', color: 'Purple', meaning: 'Wisdom', imgUrl: 'https://'},
        {flowerId: 17, name: 'Iris8', color: 'Blue', meaning: 'Wisdom', imgUrl: 'https://'},
        {flowerId: 18, name: 'Iris9', color: 'Blue', meaning: 'Wisdom', imgUrl: 'https://'},
    ],
    setBouquetData: (data) => set({...data}),
}));
