export interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    dob: string; // ISO format: "YYYY-MM-DD", should be at least 18 years old
    gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  }