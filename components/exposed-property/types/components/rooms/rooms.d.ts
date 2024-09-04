import { EventEmitter } from '../../stencil-public-runtime';
export declare class Rooms {
    element: HTMLElement;
    rooms: {
        amenities: {
            amenity_type: string;
            code: string;
            description: string;
        }[];
        availabilities: any;
        bedding_setup: {
            code: string;
            count: number;
            name: string;
        }[];
        description: string;
        exposed_inventory: any;
        id: number;
        images: {
            tooltip: string;
            url: string;
        }[];
        inventory: any;
        is_active: boolean;
        is_bed_configuration_enabled: boolean;
        main_image: {
            tooltip: string;
            url: string;
        };
        name: string;
        occupancy_default: {
            adult_nbr: number;
            children_nbr: number;
            infant_nbr: any;
        };
        occupancy_max: {
            adult_nbr: number;
            children_nbr: number;
            infant_nbr: number;
        };
        physicalrooms: {
            calendar_cell: any;
            housekeeper: {
                assigned_units: any;
                id: number;
                is_active: boolean;
                is_soft_deleted: boolean;
                mobile: any;
                name: string;
                note: any;
                password: any;
                phone_prefix: any;
                property_id: number;
                username: any;
            };
            id: number;
            name: string;
        }[];
        rate: any;
        rateplans: ({
            agents: {
                code: string;
                id: number;
                name: string;
                verification_mode: any;
            }[];
            assignable_units: any;
            cancelation: any;
            custom_text: any;
            guarantee: any;
            id: number;
            is_active: boolean;
            is_booking_engine_enabled: boolean;
            is_channel_enabled: boolean;
            is_closed: any;
            is_non_refundable: boolean;
            is_targeting_travel_agency: boolean;
            name: string;
            pre_payment_amount: any;
            pre_payment_amount_gross: any;
            rate_restrictions: any;
            selected_variation: any;
            sell_mode: {
                code: string;
                description: string;
            };
            short_name: string;
            variations: any;
        } | {
            agents: any[];
            assignable_units: any;
            cancelation: any;
            custom_text: string;
            guarantee: any;
            id: number;
            is_active: boolean;
            is_booking_engine_enabled: boolean;
            is_channel_enabled: boolean;
            is_closed: any;
            is_non_refundable: boolean;
            is_targeting_travel_agency: boolean;
            name: string;
            pre_payment_amount: any;
            pre_payment_amount_gross: any;
            rate_restrictions: any;
            selected_variation: any;
            sell_mode: {
                code: string;
                description: string;
            };
            short_name: string;
            variations: any;
        })[];
        size: number;
        smoking_option: {
            allowed_smoking_options: {
                code: string;
                description: string;
            }[];
            code: string;
            description: string;
        };
    }[];
    amenities: {
        amenity_type: string;
        code: string;
        description: string;
    }[];
    componentDidLoad(): void;
    rf_sendId: EventEmitter<number>;
    sendId(id: number): void;
    render(): any;
}
