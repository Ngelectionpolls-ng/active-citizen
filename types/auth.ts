export interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    dob: string; // ISO format: "YYYY-MM-DD", should be at least 18 years old
    gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
}

export interface OrganizationSignUpFormData {
    organization_name: string;
    email: string;
    password: string;
    year_of_registration: string;
    address: string;
    industry_id: string;
    contact_person: string;
    contact_designation: string;
    country_id: string;
    organization_document?: File;
}