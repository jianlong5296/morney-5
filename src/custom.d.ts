type RecordItem = {  //TS类型声明只写类型，JS类型声明写具体内容
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?: Date
}

type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated'
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean;
    save: () => void
}

interface Window {   //声明window属性
    tagList: Tag[];
    createTag: (name: string) => void
    findTag:(id:string)=> Tag | undefined;
    removeTag: (id: string) => boolean
    updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    //也可以写为 updateTag: TagListModel['update']
}