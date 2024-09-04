export declare const data: {
    ExceptionCode: any;
    ExceptionMsg: string;
    My_Params_Get_Exposed_Property: {
        aname: string;
        currency: string;
        id: number;
        include_sales_rate_plans: boolean;
        is_backend: boolean;
        language: string;
        perma_link: any;
    };
    My_Result: {
        address: string;
        adult_child_constraints: {
            adult_max_nbr: number;
            child_max_age: number;
            child_max_nbr: number;
        };
        affiliates: any[];
        agents: {
            code: string;
            id: number;
            name: string;
            verification_mode: string;
        }[];
        allowed_booking_sources: {
            code: string;
            description: string;
            id: string;
            tag: string;
            type: string;
        }[];
        allowed_cards: {
            id: number;
            name: string;
        }[];
        allowed_payment_methods: ({
            code: string;
            data: any;
            description: string;
            display_order: any;
            id: any;
            is_active: boolean;
            is_payment_gateway: boolean;
            localizables: {
                code: string;
                description: string;
                id: number;
                language: {
                    code: string;
                    culture: any;
                    description: string;
                    direction: any;
                    entries: any;
                    flag: any;
                    id: number;
                };
            }[];
            property_id: number;
        } | {
            code: string;
            data: any;
            description: string;
            display_order: any;
            id: number;
            is_active: boolean;
            is_payment_gateway: boolean;
            localizables: any;
            property_id: number;
        })[];
        amenities: {
            amenity_type: string;
            code: string;
            description: string;
        }[];
        aname: string;
        area: string;
        baby_cot_offering: {
            rate_per_night: number;
            title: string;
        };
        be_listing_mode: string;
        calendar_legends: {
            color: string;
            design: string;
            id: string;
            name: string;
        }[];
        city: {
            id: number;
            name: string;
        };
        contacts: {
            email: string;
            mobile: any;
            name: string;
            phone: string;
            type: string;
        }[];
        country: {
            cities: any;
            code: any;
            currency: any;
            flag: any;
            id: number;
            name: string;
            phone_prefix: string;
        };
        currency: {
            code: string;
            id: number;
            symbol: string;
        };
        description: {
            food_and_beverage: string;
            important_info: string;
            location_and_intro: string;
            non_standard_conditions: string;
            rooming: string;
        };
        id: number;
        images: {
            tooltip: any;
            url: string;
        }[];
        internet_offering: {
            is_public_internet_free: boolean;
            is_room_internet_free: boolean;
            public_internet_statement: string;
            room_internet_statement: string;
            room_rate_per_24_hour: number;
            room_rate_per_hour: number;
        };
        is_be_enabled: boolean;
        is_frontdesk_enabled: boolean;
        is_pms_enabled: boolean;
        is_vacation_rental: boolean;
        location: {
            latitude: number;
            longitude: number;
        };
        max_nights: number;
        name: string;
        parking_offering: {
            pricing: number;
            schedule: string;
            title: string;
        };
        payment_methods: any;
        perma_link: string;
        pets_acceptance: {
            title: string;
        };
        phone: string;
        pickup_service: {
            allowed_locations: {
                description: string;
                id: number;
            }[];
            allowed_options: {
                amount: number;
                currency: {
                    code: string;
                    id: number;
                    symbol: string;
                };
                id: number;
                location: {
                    description: string;
                    id: number;
                };
                pricing_model: {
                    code: string;
                    description: string;
                };
                vehicle: {
                    capacity: number;
                    code: string;
                    description: string;
                };
            }[];
            allowed_pricing_models: {
                code: string;
                description: string;
            }[];
            allowed_vehicle_types: {
                capacity: number;
                code: string;
                description: string;
            }[];
            is_enabled: boolean;
            is_not_allowed_on_same_day: boolean;
            pickup_cancelation_prepayment: {
                code: string;
                description: string;
            };
            pickup_instruction: {
                code: string;
                description: string;
            };
        };
        postal: any;
        privacy_policy: string;
        promotions: {
            from: string;
            id: number;
            is_loyalty: boolean;
            key: string;
            to: string;
        }[];
        roomtypes: {
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
        social_media: {
            code: string;
            link: string;
            name: string;
        }[];
        space_theme: {
            background_image: string;
            button_bg_color: string;
            button_border_radius: string;
            favicon: string;
            heading_bar_color: string;
            heading_font_color: string;
            logo: string;
            website: string;
        };
        tags: {
            key: string;
            value: string;
        }[];
        tax_nbr: string;
        tax_statement: string;
        taxes: {
            is_exlusive: boolean;
            name: string;
            pct: number;
        }[];
        time_constraints: {
            booking_cutoff: string;
            check_in_from: string;
            check_in_till: string;
            check_out_till: string;
        };
    };
};
