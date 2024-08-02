// prettier-ignore
export type Transaction = {
    id:          number;
    user_id:     number;
    category_id: number;
    name:        string;
    amount:      number;
    description: Description;
    type:        string;
    date:        Date;
    created_at:  Date;
    updated_at:  Date;
}

// prettier-ignore
export type Description = {
    String: string;
    Valid:  boolean;
}

// prettier-ignore
export type TransactionForm = {
    user_id:     number;
    category_id: number;
    name:        string;
    amount:      number;
    description: string;
    type:        string;
    date:        Date;
}