export enum HTTP {
    POST = "POST",
    GET = "GET",
    PATCH = "PATCH",
    DELETE = "DELETE",
    PUT = "PUT",
}

export enum environment {
    PRODUCTION = "production",
    DEVELOPMENT = "development",
}

export interface IDAndName {
    id: number;
    name: string;
}

export interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    sex: number;
    profilePicture: string;
    position: string;
}

export interface Company {
    name: string;
    logo: string;
    address: {
        country: {
            name: string
        }
        city: {
            name: string
        }
        street: string;
        house: string;
        zipCode: string;
        longitude: number;
        latitude: number;
    }
}

export interface Product {
    id: number
    name: string;
    description: string;
    picture: string;
    type: IDAndName;
    categories: IDAndName[];
    implementationEffortText: string | null;
    investmentEffort: string
    trl: IDAndName;
    video: string;
    user: User
    company: Company;
    businessModels: IDAndName[];
}

export interface Configuration {
    id: number;
    logo: string;
    mainColor: string;
    hasUserSection: boolean;
}

export interface TRL {
    id: number;
    name: string;
    description: string | null;
}
