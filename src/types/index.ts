import { ReactNode } from "react";

export interface PricingPlan {
    title: string;
    description: string;
    price: string;
    features: string[];
    buttonText: string;
}

export interface TermsConditions {
    title: string;
    description: string;
}

export interface PrivacyPolicy {
    title: string;
    description: string;
}

export interface ResearchInitialCards {
    title: string;
    description: string;
}
export interface ChatbotSolution {
    title: string,
    description: string,
    imageUrl: string | any
}


export interface ImageAsset {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface SafetyPractice {
    title: string;
    image: ImageAsset;
}

export interface SafetyPractice {
    _id: string;
    title: string;
    image: ImageAsset;
    date: string;
}
export interface ProductBlogPost {
    _id: string;
    cardTitle: string;
    cardImage: ImageAsset;
    date: string;
}


export interface CoreValue {
    _id?: string;
    heading: string;
    description: string;
}
export interface featuredRoles {
    _id: string;
    title: string;
    description: string;
    href?: any;
}

export interface CompanyChatbot {
    _id: string;
    title: string;
    description: string;
    image: {
        _type: 'image';
        asset: {
            _ref: string;
            _type: 'reference';
        };
    };
}


export interface VisionCardProps {
    title: string;
    description: string;
    icon: any
}





export interface SafetyResponsibilityInitiative {
    _id?: string;
    title: string;
    description: string;
    // Add other fields as needed
}
export interface SafetyResponsibilityProps {
    safetyInitiatives: SafetyResponsibilityInitiative[];
}