type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag,
}

type RecordItem = {  //TS类型声明只写类型，JS类型声明写具体内容
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?: string
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
}