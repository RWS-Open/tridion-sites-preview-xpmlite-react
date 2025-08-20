import {create} from "zustand"


interface IXpmMinimal{
    publicationId:string | null;
    pageData:any[];
    setPublicationId:(id:string) => void;
    setPageData:(pageData:any) => void;
}
export const usePageStore = create<IXpmMinimal>((set) => ({
    publicationId:null,
    pageData:[],
    setPublicationId:(publicationId:string) => set({publicationId}),
    setPageData:(pageData:any) => set({pageData})
}))
