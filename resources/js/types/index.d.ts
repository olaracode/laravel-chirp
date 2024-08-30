export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export interface IChirp {
    id: number;
    message: string;
    created_at: string;
    updated_at?: string | null;
    user_id: number;
    user: {
        id: number;
        name: string;
    };
}
