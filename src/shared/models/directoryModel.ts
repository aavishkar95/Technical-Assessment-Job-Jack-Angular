export class DirectoryModel{
    id: number;
    name: string;
    fileObj: fileModel[];
}

export class fileModel{
    file: string;
    size: string;
    dateCreated: string;
}