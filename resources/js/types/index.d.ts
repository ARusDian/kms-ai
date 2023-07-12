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
    photo?: Photo
    measurements?: Measurement[],
}

export interface ChildrenWithParent extends Children {
    user: User
}

export interface Measurement {
    id: number,
    height: number,
    weight: number,
    head_circumference: number,
    is_birth_measurement: boolean,
    date_of_measurement: string,
    children_id: number,
    note: string,
    updated_at: string,
}

export interface Immunization {
    id: number,
    name: string,
    type: string,
    prevention: string,
    indication: string,
    contraindication: string,
    chase_immunization: string,
    KIPI: string,
    schedule: string,
    recommended_days: string,
}

export interface ChildImmunization {
    id: number,
    children_id: number,
    immunization_id: number,
    date_of_immunization: string,
    recommended_date: string,
    status: string,
    note: string,
    immunization: Immunization
}
