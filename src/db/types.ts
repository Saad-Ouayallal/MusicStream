import { ObjectId } from "mongodb";

export interface User {
    email: string;
    password: string;
    username: string;
    favourites?: ObjectId[];
}

export interface Song {
    userId: ObjectId;
    filename: string;
    mimeType: string;
    title: string;
    release?: Date;
    duration: number;
    uploaded: Date;
}