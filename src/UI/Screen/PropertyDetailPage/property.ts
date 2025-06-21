export interface PropertyImage {
    srcUrl: string;
    order?: number;
}

export interface AlgoliaData {
    thumbnail?: string;
    price?: number;
    title?: string;
    slug?: string;
    description?: string;
    bedroom?: number;
    bathroom?: number;
    reception?: number;
}
export interface Address {
    address1: string,
    address2: string,
    address3: string,
    address4: string,
    postcode: string,
    building_name: string,
    building_number: string
}


export interface PropertyAttributes {
    thumbnail?: string;
    address: Address;
    images?: PropertyImage[];
    price?: number;
    title?: string;
    slug?: string;
    bedroom?: number;
    bathroom?: number;
    reception?: number;
    brochure?: string;
    description?: string;
    algoliaData?: AlgoliaData;
    floorplan:[]
}

export interface Property {
    id: number;
    attributes: PropertyAttributes;
}
