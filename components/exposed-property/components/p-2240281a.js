const data = {
    "ExceptionCode": null,
    "ExceptionMsg": "",
    "My_Params_Get_Exposed_Property": {
        "aname": "",
        "currency": "USD",
        "id": 42,
        "include_sales_rate_plans": true,
        "is_backend": false,
        "language": "EN",
        "perma_link": null
    },
    "My_Result": {
        "address": "Ice Venue 11",
        "adult_child_constraints": {
            "adult_max_nbr": 20,
            "child_max_age": 3,
            "child_max_nbr": 20
        },
        "affiliates": [],
        "agents": [
            {
                "code": "",
                "id": 2,
                "name": "Alitalia Cabin Crew",
                "verification_mode": "question"
            },
            {
                "code": "HUTCH",
                "id": 1,
                "name": "Demo Agency",
                "verification_mode": "code"
            }
        ],
        "allowed_booking_sources": [
            {
                "code": "003",
                "description": "Phone/Email",
                "id": "de6ac4bb-1980-48fe-9ea5-fe4591426154",
                "tag": "",
                "type": "SETUP"
            },
            {
                "code": "002",
                "description": "Walk-in",
                "id": "606cef96-5c32-4f69-92b6-c82a99258f96",
                "tag": "",
                "type": "SETUP"
            },
            {
                "code": "005",
                "description": "Social media",
                "id": "12b02511-f229-4df2-a543-92e4584bd623",
                "tag": "",
                "type": "SETUP"
            },
            {
                "code": "000",
                "description": "-- Agents/Corpo --",
                "id": "d116fbe0-c8d3-42b9-a8f4-bbd5008ba5e8",
                "tag": "",
                "type": "LABEL"
            },
            {
                "code": "001",
                "description": "Alitalia Cabin Crew",
                "id": "4908b2a4-6a6b-40c7-a224-c1bf4a4ca685",
                "tag": "2",
                "type": "TRAVEL_AGENCY"
            },
            {
                "code": "001",
                "description": "Demo Agency",
                "id": "c083b7be-b34a-47e1-bf8a-fa4c1d63b181",
                "tag": "1",
                "type": "TRAVEL_AGENCY"
            }
        ],
        "allowed_cards": [
            {
                "id": 14,
                "name": "Visa"
            },
            {
                "id": 1,
                "name": "Euro/Mastercard"
            }
        ],
        "allowed_payment_methods": [
            {
                "code": "000",
                "data": null,
                "description": "No payment required",
                "display_order": null,
                "id": null,
                "is_active": false,
                "is_payment_gateway": false,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "005",
                "data": null,
                "description": "Bank or Money Transfer",
                "display_order": null,
                "id": null,
                "is_active": true,
                "is_payment_gateway": false,
                "localizables": [
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "Your booking will be held for 3 days until the transfer is made to the following&nbsp;bank account.<br />\n<strong>PARADISE BANK</strong><br />\n<b>Accoun name</b>: Blue Hotel<br />\n<b>Account number</b>: 108608010001<br />\n<strong>IBAN</strong>: XX92 8000 0108 6080 1000 0002",
                        "id": 1,
                        "language": {
                            "code": "EN",
                            "culture": null,
                            "description": "English",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 2
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 2,
                        "language": {
                            "code": "AR",
                            "culture": null,
                            "description": "العربية",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 4
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 3,
                        "language": {
                            "code": "FR",
                            "culture": null,
                            "description": "Français",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 3
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 4,
                        "language": {
                            "code": "EL",
                            "culture": null,
                            "description": "Ελληνικά",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 8
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 5,
                        "language": {
                            "code": "HE",
                            "culture": null,
                            "description": "עברית",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 9
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 6,
                        "language": {
                            "code": "PL",
                            "culture": null,
                            "description": "Polski",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 10
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 7,
                        "language": {
                            "code": "PR",
                            "culture": null,
                            "description": "Português",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 1
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 8,
                        "language": {
                            "code": "RO",
                            "culture": null,
                            "description": "Română",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 6
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 9,
                        "language": {
                            "code": "RU",
                            "culture": null,
                            "description": "Русский",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 7
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 1006,
                        "language": {
                            "code": "DE",
                            "culture": null,
                            "description": "Deutsch",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 11
                        }
                    },
                    {
                        "code": "BANK_TRANSFER_INFO",
                        "description": "",
                        "id": 1007,
                        "language": {
                            "code": "UA",
                            "culture": null,
                            "description": "Українська",
                            "direction": null,
                            "entries": null,
                            "flag": null,
                            "id": 12
                        }
                    }
                ],
                "property_id": 42
            },
            {
                "code": "004",
                "data": null,
                "description": "Manual card processing (without CVC)",
                "display_order": null,
                "id": null,
                "is_active": false,
                "is_payment_gateway": false,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "001",
                "data": null,
                "description": "Manual card processing",
                "display_order": null,
                "id": null,
                "is_active": false,
                "is_payment_gateway": false,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "JCC",
                "data": null,
                "description": "JCC",
                "display_order": null,
                "id": 16,
                "is_active": false,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "NetCommerce",
                "data": null,
                "description": "NetCommerce",
                "display_order": null,
                "id": 12,
                "is_active": true,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "PayPal",
                "data": null,
                "description": "PayPal",
                "display_order": null,
                "id": 1,
                "is_active": true,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "Stripe",
                "data": null,
                "description": "Stripe",
                "display_order": null,
                "id": 11,
                "is_active": true,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            },
            {
                "code": "MPGS",
                "data": null,
                "description": "MPGS",
                "display_order": null,
                "id": 8,
                "is_active": true,
                "is_payment_gateway": true,
                "localizables": null,
                "property_id": 42
            }
        ],
        "amenities": [
            {
                "amenity_type": "property",
                "code": "24hourdesk",
                "description": "24-hour front desk"
            },
            {
                "amenity_type": "property",
                "code": "coffeeshop",
                "description": "Coffee shop"
            },
            {
                "amenity_type": "room",
                "code": "climatecontrol",
                "description": "A/C"
            },
            {
                "amenity_type": "service",
                "code": "concierge",
                "description": "Concierge services"
            },
            {
                "amenity_type": "property",
                "code": "multilingualstaff",
                "description": "Multilingual staff"
            },
            {
                "amenity_type": "service",
                "code": "laundry",
                "description": "Laundry, ironing, dry cleaning at extra cost"
            },
            {
                "amenity_type": "property",
                "code": "nonsmoking",
                "description": "Non-smoking rooms / floors"
            },
            {
                "amenity_type": "property",
                "code": "elevator",
                "description": "Elevator / Lift"
            },
            {
                "amenity_type": "property",
                "code": "safereception",
                "description": "Safe at reception"
            },
            {
                "amenity_type": "property",
                "code": "restaurant",
                "description": "Restaurant / Bar"
            },
            {
                "amenity_type": "property",
                "code": "wheelchair",
                "description": "Wheelchair access"
            },
            {
                "amenity_type": "property",
                "code": "creditcard",
                "description": "Credit cards accepted"
            },
            {
                "amenity_type": "room",
                "code": "housekeeping",
                "description": "Daily housekeeping"
            },
            {
                "amenity_type": "room",
                "code": "toiletries",
                "description": "Complimentary toiletries"
            },
            {
                "amenity_type": "room",
                "code": "balcony",
                "description": "Balcony"
            },
            {
                "amenity_type": "service",
                "code": "airporttransfer",
                "description": "Airport transfer"
            },
            {
                "amenity_type": "property",
                "code": "busparking",
                "description": "Bus parking"
            },
            {
                "amenity_type": "room",
                "code": "complimentarywater",
                "description": "Complimentary water in room"
            },
            {
                "amenity_type": "service",
                "code": "valetparking",
                "description": "Valet parking"
            },
            {
                "amenity_type": "property",
                "code": "luggagestorage",
                "description": "Luggage storage"
            },
            {
                "amenity_type": "service",
                "code": "carhire",
                "description": "Car hire"
            },
            {
                "amenity_type": "room",
                "code": "sittingarea",
                "description": "Seating area"
            },
            {
                "amenity_type": "room",
                "code": "bathroom",
                "description": "Bathroom"
            },
            {
                "amenity_type": "room",
                "code": "bathrobes ",
                "description": "Bathrobes"
            },
            {
                "amenity_type": "room",
                "code": "breakfastinroompaid",
                "description": "Breakfast in room (charged extra)"
            },
            {
                "amenity_type": "room",
                "code": "freewifi",
                "description": "Free WiFi"
            },
            {
                "amenity_type": "room",
                "code": "shower",
                "description": "Shower"
            },
            {
                "amenity_type": "room",
                "code": "slippers",
                "description": "Slippers"
            },
            {
                "amenity_type": "room",
                "code": "amenities",
                "description": "Welcome amenities"
            },
            {
                "amenity_type": "activity",
                "code": "bicyclerental",
                "description": "Bicycle rental"
            },
            {
                "amenity_type": "service",
                "code": "faxservices",
                "description": "Fax services"
            }
        ],
        "aname": "A35",
        "area": "Adma",
        "baby_cot_offering": {
            "rate_per_night": 30.000,
            "title": "Baby cots are available upon request"
        },
        "be_listing_mode": "list",
        "calendar_legends": [
            {
                "color": "#31bef1",
                "design": "skew",
                "id": "1",
                "name": "In-house"
            },
            {
                "color": "#45b16d",
                "design": "skew",
                "id": "2",
                "name": "Confirmed"
            },
            {
                "color": "#f4d552",
                "design": "skew",
                "id": "3",
                "name": "Pending confirmation"
            },
            {
                "color": "#ffffff",
                "design": "skew-bordered",
                "id": "4",
                "name": "OTA booking"
            },
            {
                "color": "#a0a0a0",
                "design": "skew",
                "id": "5",
                "name": "Checked out"
            },
            {
                "color": "#f34752",
                "design": "skew",
                "id": "6",
                "name": "Blocked dates"
            },
            {
                "color": "#f88c91",
                "design": "skew",
                "id": "7",
                "name": "Blocked with release"
            },
            {
                "color": "#f4d552",
                "design": "circle",
                "id": "8",
                "name": "Notes"
            },
            {
                "color": "#f34752",
                "design": "circle",
                "id": "9",
                "name": "Outstanding balance"
            }
        ],
        "city": {
            "id": 8,
            "name": "Jounieh"
        },
        "contacts": [
            {
                "email": "sales+demo@igloorooms.com",
                "mobile": null,
                "name": "John",
                "phone": "",
                "type": "booking"
            },
            {
                "email": "rony@igloorooms.com",
                "mobile": null,
                "name": "QA",
                "phone": "",
                "type": "manager"
            },
            {
                "email": "sales@igloorooms.com",
                "mobile": null,
                "name": "Gary Winter",
                "phone": "",
                "type": "finance"
            }
        ],
        "country": {
            "cities": null,
            "code": null,
            "currency": null,
            "flag": null,
            "id": 2,
            "name": "Lebanon",
            "phone_prefix": "+961"
        },
        "currency": {
            "code": "USD",
            "id": 4,
            "symbol": "US$"
        },
        "description": {
            "food_and_beverage": "The hotel provides a delicious breakfast and an assortment of coffee, tea and various drinks.",
            "important_info": "During peak season we sometimes require a 2-nights minimum stay.",
            "location_and_intro": "From stunning hills of Harissa to the scenic Jounieh Bay, this seaside hotel is close to various attractive sites. High Season Hotel is a smart accommodation choice and it sets high standard on the quality to price ratio.<br />\n<br />\nIf you prefer to pamper yourself, book a Premium Suites located on the 3rd floor to bath in a Jacuzzi while enjoying the sunset.<br />\n<br />\nHigh Season Hotel has everything guests want for a romantic getaway or fun family vacation. The hotel gets very busy during the summer so it&#39;s always recommended to secure your stay earlky enough.",
            "non_standard_conditions": "Here it is",
            "rooming": "All rooms have a stunning sea view and balcony. They are offered as single, double, premium suite with Jacuzzi and family connected rooms. Sizes range between 25 and 50sqm. Interior is elegant and trendy."
        },
        "id": 42,
        "images": [
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_238.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_240.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_248.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_249.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_252.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_256.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_242.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_272.jpg"
            },
            {
                "tooltip": null,
                "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_270.jpg"
            }
        ],
        "internet_offering": {
            "is_public_internet_free": false,
            "is_room_internet_free": false,
            "public_internet_statement": "FREE Internet",
            "room_internet_statement": "FREE Internet",
            "room_rate_per_24_hour": 0.000,
            "room_rate_per_hour": 0.000
        },
        "is_be_enabled": true,
        "is_frontdesk_enabled": true,
        "is_pms_enabled": true,
        "is_vacation_rental": false,
        "location": {
            "latitude": 34.022000,
            "longitude": 35.628000
        },
        "max_nights": 90,
        "name": "igloorooms Demo Hotel",
        "parking_offering": {
            "pricing": 5.000,
            "schedule": "day",
            "title": "Paid parking available"
        },
        "payment_methods": null,
        "perma_link": "iglooroomsdemohotel",
        "pets_acceptance": {
            "title": "Pets are not allowed"
        },
        "phone": "9968454545",
        "pickup_service": {
            "allowed_locations": [
                {
                    "description": "Beirut International Airport",
                    "id": 1
                }
            ],
            "allowed_options": [
                {
                    "amount": 50.000,
                    "currency": {
                        "code": "USD",
                        "id": 4,
                        "symbol": "US$"
                    },
                    "id": 19,
                    "location": {
                        "description": "Beirut International Airport",
                        "id": 1
                    },
                    "pricing_model": {
                        "code": "001",
                        "description": "Vehicle"
                    },
                    "vehicle": {
                        "capacity": 4,
                        "code": "002",
                        "description": "Sedan car (2 large & 3 small suitcases)"
                    }
                },
                {
                    "amount": 90.000,
                    "currency": {
                        "code": "USD",
                        "id": 4,
                        "symbol": "US$"
                    },
                    "id": 20,
                    "location": {
                        "description": "Beirut International Airport",
                        "id": 1
                    },
                    "pricing_model": {
                        "code": "001",
                        "description": "Vehicle"
                    },
                    "vehicle": {
                        "capacity": 6,
                        "code": "005",
                        "description": "6-seater car (6 suitcases)"
                    }
                },
                {
                    "amount": 0.000,
                    "currency": {
                        "code": "USD",
                        "id": 4,
                        "symbol": "US$"
                    },
                    "id": 65,
                    "location": {
                        "description": "Beirut International Airport",
                        "id": 1
                    },
                    "pricing_model": {
                        "code": "001",
                        "description": "Vehicle"
                    },
                    "vehicle": {
                        "capacity": 3,
                        "code": "008",
                        "description": "Sedan car (night service)"
                    }
                },
                {
                    "amount": 100.000,
                    "currency": {
                        "code": "USD",
                        "id": 4,
                        "symbol": "US$"
                    },
                    "id": 103,
                    "location": {
                        "description": "Beirut International Airport",
                        "id": 1
                    },
                    "pricing_model": {
                        "code": "001",
                        "description": "Vehicle"
                    },
                    "vehicle": {
                        "capacity": 5,
                        "code": "004",
                        "description": "7-seater"
                    }
                }
            ],
            "allowed_pricing_models": [
                {
                    "code": "001",
                    "description": "Vehicle"
                },
                {
                    "code": "002",
                    "description": "Person"
                }
            ],
            "allowed_vehicle_types": [
                {
                    "capacity": 1,
                    "code": "001",
                    "description": "Airport shuttle"
                },
                {
                    "capacity": 4,
                    "code": "002",
                    "description": "Sedan car (2 large & 3 small suitcases)"
                },
                {
                    "capacity": 4,
                    "code": "003",
                    "description": "Limousine"
                },
                {
                    "capacity": 5,
                    "code": "004",
                    "description": "7-seater"
                },
                {
                    "capacity": 6,
                    "code": "005",
                    "description": "6-seater car (6 suitcases)"
                },
                {
                    "capacity": 7,
                    "code": "006",
                    "description": "Minivan for 11"
                },
                {
                    "capacity": 11,
                    "code": "007",
                    "description": "Minivan for 14"
                },
                {
                    "capacity": 3,
                    "code": "008",
                    "description": "Sedan car (night service)"
                },
                {
                    "capacity": 4,
                    "code": "009",
                    "description": "Station wagon (3 large & 4 small suitcases)"
                },
                {
                    "capacity": 2,
                    "code": "010",
                    "description": "Sedan car (2 suitcases)"
                }
            ],
            "is_enabled": true,
            "is_not_allowed_on_same_day": false,
            "pickup_cancelation_prepayment": {
                "code": "001",
                "description": "The hotel reserves the right to charge your card on the same day of pickup or in case of no-show."
            },
            "pickup_instruction": {
                "code": "001",
                "description": "Driver will be holding your name at the arrivals exit."
            }
        },
        "postal": null,
        "privacy_policy": "<h2><strong>Information and Consent</strong></h2><p>This&nbsp;Privacy Policy&nbsp;describes how we collect, use, process, and disclose your information, including personal information about you (hereinafter, the \"User\"), in conjunction with your access to and use of our booking system.</p><p>By reading this Privacy Policy, the user is hereby informed on how we collect, process and protect personal data furnished through the booking engine.</p><p>The User must carefully read this Privacy Policy to determine whether they wish to provide their personal data, or those of third parties, to <b>[AC_NAME]</b>.</p><p>When this policy mentions \"booking system\", \"booking engine\", \"system\", \"website\", \"platform\", \"app\", \"webapp\", \"services\" or \"online services\" it refers to all pages and functions under <b>[URL]</b> unless specified otherwise.</p><p>By accessing the platform or providing information, you agree to our privacy practices as set out in this privacy statement. We may change this policy from time to time. You should check this policy to ensure you are aware of the most recent version.</p><h2><strong>Identity</strong></h2><p>When this policy mentions \"we\", \"us\", \"our\", \"data controller\" or \"controller\" it refers to the&nbsp;<b>[AC_NAME]</b>.</p><h3><strong>Data Controller</strong></h3><p><b>[AC_NAME]</b> operates this booking system through a data processor, as explained below. For the purposes of the General Data Protection Regulation (\"GDPR\")&nbsp;<a href=\"https://ec.europa.eu/info/files/regulation-eu-2016-679-protection-natural-persons-regard-processing-personal-data-and-free-movement-such-data_en\" target=\"_new\">(EU) 2016/679</a>, we are the Data Controller. There is a strict contractual framework between the data controller and the data processor for the protection of your personal information. We are:</p><p></p><div><b>[AC_NAME]</b></div><div><b>[ADDRESS]</b></div><div><b>[AREA]</b></div><div><b>[LEVEL2]</b></div><div><b>[COUNTRY]</b></div><p></p><h3><strong>Data Processor</strong></h3><p>A third-party Data Processor operates this booking system on behalf of&nbsp;<b>[AC_NAME]</b> and is committed to protecting the privacy of the users of this system.</p><p>For the purposes of the GDPR, this third-party is the Data Processor.</p><h2><strong>Obligatory nature of providing the data</strong></h2><p>The data requested in the forms accessible from the booking engine are, in general, mandatory (unless specified otherwise in the required field) to meet the stated purposes. Accordingly, if they are not provided or are not provided correctly, we will be unable to process the request.</p><h2><strong>Personal data we collect and process</strong></h2><p><strong>This will include:</strong></p><ul><li>personal information about you which we ask you for (e.g. your name, address, and email address) when you make a booking from our booking engine;</li><li>financial details in order to process your booking when we require pre-payment;</li><li>details of transactions you carry out through our booking engine and details of the fulfilment of your orders.</li><li>our data processor may only collect and process personal data collected and/or processed on behalf of us in accordance with our instructions.</li></ul><p><strong>We grant permission to our data processor:</strong></p><ul><li>to use your personal information for reserving rooms and/or other services for you at&nbsp;<b>[AC_NAME]</b></li><li>to pass on your financial details to <b>[AC_NAME]</b> and/or appropriate third party (for example, credit card company) for the purpose of confirming or paying for a booking;</li><li>to use your information for marketing purposes (where you explicitly agree to this); and</li><li>to pre-complete forms and other details on our website to make your next visit to our booking engine easier (e.g. when amending or cancelling a booking).</li></ul><p><strong>Social Login:</strong></p><p>In the event of registration and/or access through a third-party account, we may collect and access certain information of the User’s profile from the corresponding social network, solely for internal administrative purposes and/or for the purposes indicated above.</p><p><strong>Third-party data (e.g. book for a friend)</strong></p><p>In the event that the User provides third-party data, they declare that they have the third party’s consent and undertake to provide the interested party -the data holder- with the information contained in this Privacy Policy, duly exonerating us and our data processor from any liability in this regard. However, we may carry out the necessary verifications to verify this fact, adopting the corresponding due diligence measures, in accordance with the data protection regulations.</p><p><strong>Sensitive Data</strong></p><p>Unless specifically requested, we ask that you not send us, and you not disclose, on or through the Services or otherwise to us, any Sensitive Personal Data (e.g., social security numbers, national identification number, data related to racial or ethnic origin, political opinions, religion, ideological or other beliefs, health, biometrics or genetic characteristics, criminal background, trade union membership, or administrative or criminal proceedings and sanctions).</p><p><strong>Use of Services by Minors</strong></p><p>The Services are not directed to individuals under the age of sixteen (16), and we request that they not provide Personal Data through the Services.</p><h2><strong>Purpose of processing personal data</strong></h2><p>Depending on the User’s requests, the personal data collected will be processed in accordance with the following purposes:</p><ul><li>To manage the bookings made, including payment management (where applicable) and the management of the user’s requests and preferences.</li><li>To manage registration in loyalty or membership programs, as well as obtaining and redeeming points.</li><li>To manage the User’s contact requests with us through the channels provided to this end.</li><li>To manage the sending of personalised commercial communications from us, by electronic and/or conventional means, in cases in which the User expressly consents.</li><li>To manage the provision of the contracted accommodation service, as well as additional services.</li><li>To manage surveys and/or evaluations regarding the quality of the services provided by us and/or the perception of its image as a company.</li></ul><h2><strong>Data Retention</strong></h2><p>We will retain your Personal Data for the period necessary to fulfil the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law or if the User requests their withdrawal from us, opposes or revokes their consent.</p><p>The criteria used to determine our retention periods include:</p><ul><li>The length of time we have an ongoing relationship with you and provide the Services to you (for example, for as long as you have an account with us or keep using the Services or if you have a booking that has not yet been fulfilled)</li><li>Whether there is a legal obligation to which we are subject (for example, certain laws require us to keep records of your transactions for a certain period of time before we can delete them)</li><li>Whether retention is advisable considering our legal position (such as, for statutes of limitations, litigation or regulatory investigations)</li></ul><h2><strong>Legitimate interest for processing your data</strong></h2><p>The data processing required in fulfilment of the aforementioned purposes that require the User’s consent cannot be undertaken without said consent.</p><p>Likewise, in the event that the User withdraws their consent to any of the processing, this will not affect the legality of the processing carried out previously.</p><p>To revoke such consent, the User may contact us through the appropriate channels.</p><p>By the same token, in those cases in which it is necessary to process the User’s data for the fulfilment of a legal obligation or for the execution of the existing contractual relationship between us and the User, the processing would be legitimized as it is necessary for compliance with said purposes.</p><h2><strong>Data Disclosure</strong></h2><p>We will use and disclose Personal Data as we believe to be necessary or appropriate:</p><ul><li>to comply with applicable law, including laws outside your country of residence;</li><li>to comply with legal process;</li><li>to respond to requests from public and government authorities, including authorities outside your country of residence and to meet national security or law enforcement requirements;</li><li>to enforce our terms and conditions;</li><li>to protect our operations;</li><li>to protect the rights, privacy, safety or property of our own, you or others; and</li><li>to allow us to pursue available remedies or limit the damages that we may sustain.</li></ul><p>We may use and disclose Other Data for any purpose, except where we are not allowed to under applicable law. In some instances, we may combine Other Data with Personal Data (such as combining your name with your location). If we do, we will treat the combined data as Personal Data as long as it is combined.</p><h2><strong>International transfers of personal data</strong></h2><p>We may transfer your personal information to our data processor(s) or/and sub-processor(s) based outside of the EEA for the purposes described in this policy. If we do this, your personal information will continue to be subject to one or more appropriate safeguards set out in the law. These might be the use of model contracts in a form approved by regulators, or having our suppliers sign up to an independent privacy scheme approved by regulators (like the US <a href=\"https://www.privacyshield.gov/\">Privacy Shield</a> scheme).</p><h2><strong>User's Responsibility</strong></h2><p>The User:</p><p>Guarantees that they are of legal age or legally emancipated, where applicable, fully capable, and that the information furnished to us is true, accurate, complete and up-to-date. For these purposes, the User is responsible for the truthfulness of all the data communicated and will keep the information updated, so that said data reflects their actual situation.</p><p>Guarantees that he/she has informed third parties on whose behalf he/she has provided data, where applicable, of the aspects contained in this document. Also guarantees that he/she has obtained the third party’s authorisation to provide their data to us for the purposes indicated.</p><p>Will be responsible for false or inaccurate information provided through the Website and for damages, whether direct or indirect, that this may cause to us or third parties.</p><h2><strong>Exercise of Rights and Data Deletion</strong></h2><p>The User may contact us at any time free of charge by emailing support@igloorooms.com and providing his unique account email, to:</p><ul><li>To obtain confirmation about whether or not personal data concerning the User are being processed by us.</li><li>To access their personal details.</li><li>To rectify any inaccurate or incomplete data.</li><li>To request the deletion of their personal data when, among other reasons, the data are no longer necessary for the purposes for which they were collected.</li><li>To confirm revocation of consent.</li><li>To obtain from us the limitation of data processing when any of the conditions provided in the data protection regulations are met.</li><li>To request the portability of your data.</li></ul><p>Likewise, the user is informed that at any time he/she may file a complaint regarding the protection of their personal data before the competent Data Protection Authority.</p><h2><strong>Security Measures</strong></h2><p>We will process the User’s data at all times in an absolute confidential way and maintaining the mandatory duty to secrecy with regard to said data, in accordance with the provisions set out in applicable regulations, and to this end adopting the measures of a technical and organisational nature required to guarantee the security of their data and prevent them from being altered, lost, processed or accessed illegally, depending on the state of the technology, the nature of the stored data and the risks to which they are exposed.</p>",
        "promotions": [
            {
                "from": "2024-02-14",
                "id": 19385,
                "is_loyalty": false,
                "key": "",
                "to": "2024-10-05"
            },
            {
                "from": "2024-04-08",
                "id": 19503,
                "is_loyalty": true,
                "key": "ZOUZOU",
                "to": "2024-11-02"
            },
            {
                "from": "2024-04-08",
                "id": 20652,
                "is_loyalty": true,
                "key": "",
                "to": "2024-09-28"
            },
            {
                "from": "2024-02-14",
                "id": 19386,
                "is_loyalty": false,
                "key": "",
                "to": "2024-10-05"
            },
            {
                "from": "2024-04-08",
                "id": 19504,
                "is_loyalty": true,
                "key": "ZOUZOU",
                "to": "2024-11-02"
            },
            {
                "from": "2024-04-08",
                "id": 20653,
                "is_loyalty": true,
                "key": "",
                "to": "2024-09-28"
            },
            {
                "from": "2024-02-14",
                "id": 19387,
                "is_loyalty": false,
                "key": "",
                "to": "2024-10-05"
            },
            {
                "from": "2024-04-08",
                "id": 20654,
                "is_loyalty": true,
                "key": "",
                "to": "2024-09-28"
            },
            {
                "from": "2024-04-08",
                "id": 20655,
                "is_loyalty": true,
                "key": "",
                "to": "2024-09-28"
            }
        ],
        "roomtypes": [
            {
                "amenities": [
                    {
                        "amenity_type": "room",
                        "code": "amenities",
                        "description": "Welcome amenities"
                    },
                    {
                        "amenity_type": "room",
                        "code": "viewslopes",
                        "description": "Slopes view"
                    },
                    {
                        "amenity_type": "room",
                        "code": "soundproof",
                        "description": "Soundproof"
                    }
                ],
                "availabilities": null,
                "bedding_setup": [
                    {
                        "code": "kingsizebed",
                        "count": 1,
                        "name": "King size bed"
                    },
                    {
                        "code": "singlebed",
                        "count": 1,
                        "name": "Single bed"
                    }
                ],
                "description": "Our Modern and Classic Rooms averages 322 square feet with custom furnishings,every room in Hotel High Season includes the finest attention to detail, from the triple-sheeted 300 thread count sheets to the one-touch “Goodnight” button.Each room will be everything you are looking for in a Lebanon hotel, and drastically more than you thought possible and our custom beds by will make you want to snooze through your morning plans.When you enter our Modern and Classic Room, you’ll only have one thought: this is what all hotels at Lebanon should be like. ",
                "exposed_inventory": null,
                "id": 110,
                "images": [
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_235.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_271.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_224.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_251.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_225.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_236.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_241.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_234.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_223.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_231.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_226.jpg"
                    },
                    {
                        "tooltip": "Standard Rooms",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_229.jpg"
                    }
                ],
                "inventory": null,
                "is_active": true,
                "is_bed_configuration_enabled": false,
                "main_image": {
                    "tooltip": "Standard Rooms",
                    "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_235.jpg"
                },
                "name": "Standard Rooms",
                "occupancy_default": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": null
                },
                "occupancy_max": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": 0
                },
                "physicalrooms": [
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 16,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Naji Tanjara",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 24,
                        "name": "01"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 25,
                        "name": "02"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 14,
                        "name": "03"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 15,
                        "name": "04"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 16,
                        "name": "05"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 8,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Ahmad",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 17,
                        "name": "06"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 26,
                        "name": "07"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 8,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Ahmad",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 28,
                        "name": "08"
                    }
                ],
                "rate": null,
                "rateplans": [
                    {
                        "agents": [
                            {
                                "code": "HUTCH",
                                "id": 1,
                                "name": "Demo Agency",
                                "verification_mode": null
                            },
                            {
                                "code": "",
                                "id": 2,
                                "name": "Alitalia Cabin Crew",
                                "verification_mode": null
                            }
                        ],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": null,
                        "guarantee": null,
                        "id": 123,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": true,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": true,
                        "name": "Standard Rooms/Bed-&-breakfast/Dem/Ali",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": null,
                        "guarantee": null,
                        "id": 2001,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": true,
                        "is_closed": null,
                        "is_non_refundable": true,
                        "is_targeting_travel_agency": false,
                        "name": "Standard Rooms/Bed-&-breakfast/Non-ref./Dem",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "WS",
                        "guarantee": null,
                        "id": 3156,
                        "is_active": true,
                        "is_booking_engine_enabled": false,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Standard Rooms/WS/Bed-only",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed only",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "Breakfast at $7/person",
                        "guarantee": null,
                        "id": 3882,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Standard Rooms/Breakfast at $7/person/Bed-only",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed only",
                        "variations": null
                    }
                ],
                "size": 25.000,
                "smoking_option": {
                    "allowed_smoking_options": [
                        {
                            "code": "002",
                            "description": "Non-smoking"
                        }
                    ],
                    "code": "003",
                    "description": "Non smoking"
                }
            },
            {
                "amenities": [
                    {
                        "amenity_type": "room",
                        "code": "jacuzzi",
                        "description": "Jacuzzi"
                    },
                    {
                        "amenity_type": "room",
                        "code": "view",
                        "description": "Scenic view"
                    },
                    {
                        "amenity_type": "room",
                        "code": "terracegrass",
                        "description": "Terrace with grass"
                    },
                    {
                        "amenity_type": "room",
                        "code": "bathroomshared",
                        "description": "Shared bathroom"
                    }
                ],
                "availabilities": null,
                "bedding_setup": [
                    {
                        "code": "kingsizebed",
                        "count": 1,
                        "name": "King size bed"
                    }
                ],
                "description": "Large room with sitting area and Jacuzzi",
                "exposed_inventory": null,
                "id": 111,
                "images": [
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_221.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_224.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_251.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_225.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_222.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_234.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_223.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_231.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_226.jpg"
                    },
                    {
                        "tooltip": "Premium Suites",
                        "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_229.jpg"
                    }
                ],
                "inventory": null,
                "is_active": true,
                "is_bed_configuration_enabled": false,
                "main_image": {
                    "tooltip": "Premium Suites",
                    "url": "https://dhl6m8m6g2w2j.cloudfront.net/ac/AcImage_42_221.jpg"
                },
                "name": "Premium Suites",
                "occupancy_default": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": null
                },
                "occupancy_max": {
                    "adult_nbr": 5,
                    "children_nbr": 0,
                    "infant_nbr": 0
                },
                "physicalrooms": [
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 10,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Bassam",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 2,
                        "name": "101"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 3,
                        "name": "102"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 8,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Ahmad",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 4,
                        "name": "103"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 5,
                        "name": "104"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 8,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Ahmad",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 6,
                        "name": "105"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": {
                            "assigned_units": null,
                            "id": 7,
                            "is_active": false,
                            "is_soft_deleted": false,
                            "mobile": null,
                            "name": "Matilda",
                            "note": null,
                            "password": null,
                            "phone_prefix": null,
                            "property_id": 0,
                            "username": null
                        },
                        "id": 1,
                        "name": "106"
                    }
                ],
                "rate": null,
                "rateplans": [
                    {
                        "agents": [
                            {
                                "code": "HUTCH",
                                "id": 1,
                                "name": "Demo Agency",
                                "verification_mode": null
                            }
                        ],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": null,
                        "guarantee": null,
                        "id": 124,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": true,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": true,
                        "name": "Premium Suites/Bed-&-breakfast/Dem",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [
                            {
                                "code": "HUTCH",
                                "id": 1,
                                "name": "Demo Agency",
                                "verification_mode": null
                            },
                            {
                                "code": "",
                                "id": 2,
                                "name": "Alitalia Cabin Crew",
                                "verification_mode": null
                            }
                        ],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": null,
                        "guarantee": null,
                        "id": 1946,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": true,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": true,
                        "name": "Premium Suites/Bed-&-breakfast/Dem/Ali",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "Breakfast & dinner",
                        "guarantee": null,
                        "id": 3755,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Premium Suites/Breakfast & dinner/Half-board",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Half board",
                        "variations": null
                    }
                ],
                "size": 50.000,
                "smoking_option": {
                    "allowed_smoking_options": [
                        {
                            "code": "",
                            "description": "No preferences"
                        },
                        {
                            "code": "001",
                            "description": "Smoking"
                        },
                        {
                            "code": "002",
                            "description": "Non-smoking"
                        }
                    ],
                    "code": "001",
                    "description": "Ask"
                }
            },
            {
                "amenities": [
                    {
                        "amenity_type": "room",
                        "code": "cablesatellitetv",
                        "description": "Cable / Satellite TV"
                    },
                    {
                        "amenity_type": "room",
                        "code": "cdplayer",
                        "description": "CD player"
                    },
                    {
                        "amenity_type": "room",
                        "code": "newspaperfree",
                        "description": "Complimentary newspaper"
                    },
                    {
                        "amenity_type": "room",
                        "code": "faxmachine",
                        "description": "Fax machine"
                    },
                    {
                        "amenity_type": "room",
                        "code": "directphone",
                        "description": "Direct-dial phone"
                    },
                    {
                        "amenity_type": "room",
                        "code": "bathtub",
                        "description": "Bathtub"
                    },
                    {
                        "amenity_type": "room",
                        "code": "hairdryeronrequest",
                        "description": "Hair dryer on request"
                    },
                    {
                        "amenity_type": "room",
                        "code": "espressomachine",
                        "description": "Espresso machine"
                    }
                ],
                "availabilities": null,
                "bedding_setup": [
                    {
                        "code": "twinqueenbeds",
                        "count": 4,
                        "name": "Twin queen beds"
                    },
                    {
                        "code": "bunkbeds",
                        "count": 1,
                        "name": "Bunk beds"
                    },
                    {
                        "code": "twindoublechangeable",
                        "count": 1,
                        "name": "Twin/Double changeable beds"
                    },
                    {
                        "code": "sofabed",
                        "count": 6,
                        "name": "Sofa bed"
                    }
                ],
                "description": "",
                "exposed_inventory": null,
                "id": 2352,
                "images": [],
                "inventory": null,
                "is_active": true,
                "is_bed_configuration_enabled": true,
                "main_image": null,
                "name": "Penthouse",
                "occupancy_default": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": null
                },
                "occupancy_max": {
                    "adult_nbr": 2,
                    "children_nbr": 0,
                    "infant_nbr": 0
                },
                "physicalrooms": [
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 317,
                        "name": "P1"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 318,
                        "name": "P2"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 319,
                        "name": "P3"
                    },
                    {
                        "calendar_cell": null,
                        "housekeeper": null,
                        "id": 320,
                        "name": "P4"
                    }
                ],
                "rate": null,
                "rateplans": [
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "",
                        "guarantee": null,
                        "id": 3766,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Penthouse/Bed-&-breakfast",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "Bone fire express and 30 minutes massage or yoga",
                        "guarantee": null,
                        "id": 3929,
                        "is_active": true,
                        "is_booking_engine_enabled": true,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Penthouse/Bone fire express and 30 minutes massage or yoga/All-inclusive",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "All-inclusive",
                        "variations": null
                    },
                    {
                        "agents": [],
                        "assignable_units": null,
                        "cancelation": null,
                        "custom_text": "WS",
                        "guarantee": null,
                        "id": 3942,
                        "is_active": true,
                        "is_booking_engine_enabled": false,
                        "is_channel_enabled": false,
                        "is_closed": null,
                        "is_non_refundable": false,
                        "is_targeting_travel_agency": false,
                        "name": "Penthouse/WS/Bed-&-breakfast",
                        "pre_payment_amount": null,
                        "pre_payment_amount_gross": null,
                        "rate_restrictions": null,
                        "selected_variation": null,
                        "sell_mode": {
                            "code": "001",
                            "description": "Per Room"
                        },
                        "short_name": "Bed & breakfast",
                        "variations": null
                    }
                ],
                "size": 100.000,
                "smoking_option": {
                    "allowed_smoking_options": [
                        {
                            "code": "002",
                            "description": "Non-smoking"
                        }
                    ],
                    "code": "003",
                    "description": "Non smoking"
                }
            }
        ],
        "social_media": [
            {
                "code": "001",
                "link": "https://www.facebook.com/DemoHotel",
                "name": "Facebook"
            },
            {
                "code": "002",
                "link": "https://www.instagram.com/DemoHotel",
                "name": "Instragram"
            },
            {
                "code": "003",
                "link": "",
                "name": "Twitter"
            },
            {
                "code": "004",
                "link": "https://www.youtube.com",
                "name": "YouTube"
            },
            {
                "code": "005",
                "link": "",
                "name": "Skype"
            },
            {
                "code": "006",
                "link": "96170103222",
                "name": "WhatsApp"
            },
            {
                "code": "007",
                "link": "https://www.tripadvisor.com",
                "name": "Trip Advisor"
            }
        ],
        "space_theme": {
            "background_image": "https://x.igloorooms.com/irimages/acbg/AcBg_42.jpg?t=1595742815420",
            "button_bg_color": "af1f2f",
            "button_border_radius": "28",
            "favicon": "https://x.igloorooms.com/irimages/acfavicon/AcFavicon_42.png",
            "heading_bar_color": "949494",
            "heading_font_color": "FFFFFF",
            "logo": "https://x.igloorooms.com/irimages/aclogo/AcLogo_42.png",
            "website": "www.demo.igloospace.com"
        },
        "tags": [
            {
                "key": "conversion",
                "value": ""
            },
            {
                "key": "header",
                "value": ""
            },
            {
                "key": "body",
                "value": ""
            },
            {
                "key": "footer",
                "value": ""
            },
            {
                "key": "css",
                "value": ""
            }
        ],
        "tax_nbr": "DEMO8998",
        "tax_statement": "Excluding 11.00% V.A.T - Including 5.00% City tax",
        "taxes": [
            {
                "is_exlusive": true,
                "name": "V.A.T",
                "pct": 11.000
            },
            {
                "is_exlusive": false,
                "name": "City tax",
                "pct": 5.000
            }
        ],
        "time_constraints": {
            "booking_cutoff": "22:00",
            "check_in_from": "14:00",
            "check_in_till": "24:00",
            "check_out_till": "12:00"
        }
    }
};

export { data as d };

//# sourceMappingURL=p-2240281a.js.map