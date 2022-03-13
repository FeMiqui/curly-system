export interface User{
    id?:string;
    name: string;
    lastSeen: Date;
    status: Status;
}

export interface Status{
    safe: boolean;
    comments: string;
}