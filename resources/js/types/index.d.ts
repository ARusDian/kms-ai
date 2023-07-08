export interface User {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    roles?: [
        {
            id: number,
            name: string
        }
    ]
    email_verified_at: string;
}

export interface Roles {
    id: number,
    name: string
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export interface Photo {
    id: number,
    disk: string,
    path: string
}
export interface Children {
    id: number,
    name: string,
    date_of_birth: string,
    gender: string,
    is_alergic: boolean,
    alergic_desc: string,
    blood_type: string,
    photo: Photo
}
