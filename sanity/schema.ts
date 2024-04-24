import { type SchemaTypeDefinition } from 'sanity'
import pricingPlan from './schemas/pricingPlan'
import termsConditions from './schemas/termsConditions'
import privacyPolicy from './schemas/privacyPolicy'
import safetyResponsibility from './schemas/safetyResponsibility'
// import ourProduct from './schemas/ourProduct'
import researchInitialCards from './schemas/researchInitialCards'
import chatbotResearch from './schemas/chatbotResearch'
import chatbotProduct from './schemas/chatbotProduct'
// import safetyPractice from './schemas/safetyPractice'
import coreValue from './schemas/coreValue'
import featuredRoles from './schemas/featuredRoles'
import chatbotInovationCompany from './schemas/chatbotInovationCompany'
// import newsCards from './schemas/newsCards'
import popup from './schemas/popup'
import researchHeroImage from './schemas/researchHeroImage'
import productHeroImage from './schemas/productHeroImage'
import pricingPlanHeroImage from './schemas/pricingPlanHeroImage'
import newsHeroImage from './schemas/newsHeroImage'
import blogPost from './schemas/blogPost'
import productBlogPost from './schemas/productBlogPost'
import companyHeroImage from './schemas/companyHeroImage'
import footerlink from './schemas/footerlink'
import footerSociallink from './schemas/footerSociallink'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    
    
    
    /* Home Page */
    safetyResponsibility,
    // ourProduct,
    productBlogPost,



    /* Resarch Page */
    researchInitialCards,
    chatbotResearch,
    
    
    /* Product Page */
    chatbotProduct,

    /* Terms & Condition Page */
    termsConditions,

    /* Privacy & Policy Page */
    privacyPolicy,

    /* Hero Section Images Pagees */
    newsHeroImage,
    companyHeroImage,
    researchHeroImage,
    pricingPlanHeroImage,
    productHeroImage,


    /* Pricing Plan Pagees*/
    pricingPlan,
    
    /* Company Pagees*/
    chatbotInovationCompany,
    coreValue,
    featuredRoles,



    // safetyPractice, 

     /* News Page */
    //  newsCards,
     blogPost, 
    
     popup, 
     footerlink,
     footerSociallink,
    
    ],
}                      
