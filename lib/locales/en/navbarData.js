
export const navbarEnData={
    companyName:'LMNAs',
    logo:'LmnasLogo',
    ctas:[
      {
        text: "Products",
        href:`${process.env.HOME_SITE_URL}/#products`,
        navs:[
          {
            text:'ERP & Finance Cloud',
         slug:'erp-and-finance-cloud',
         description:'Powering Your Business Operations',
         icon:'ErpCloudLogo'
          },
          {
            text:'CRM Cloud',
         slug:'crm-cloud',
         description:'Empowering Your Customer Relationship Management',
         icon:'CrmCloudLogo'
          },
          {
            text:'CPQ Cloud',
         slug:'cpq-cloud',
         description:'SaaS solution designed to assist businesses',
         icon:'CPQLogo'
          },
          {
            text:'HRMS Cloud',
         slug:'hrms-cloud',
         description:'Transforming Human Resource Management in the Digital Era',
         icon:'HrmsCloudLogo'
          },
          {
            text:'Analytical Cloud',
         slug:'analytical-cloud',
         description:'Streamline Your Business with Analytics Cloud',
         icon:'AnalyticalCloudLogo'
          }
        ],
        isDropdown:true,
      },
      {
        text:'Industries',
        href:`${process.env.HOME_SITE_URL}/#industries`,
        //isDropdown:false,
        navs:[
          {
            text:'Manufacturing',
         slug:'manufacturing',
         description:'Optimize Your Manufacturing Efficiency',
         icon:'ManufacturePlainLogo'
          },
          {
            text:'Retail ',
         slug:'retail',
         description:'Unleash Your Retail Potential',
         icon:'RetailPlainLogo'
          },
          {
            text:'Distribution',
         slug:'distribution',
         description:'Optimize Your Distribution Efficiency',
         icon:'DistributionPlainLogo'
          }
        ],
        isDropdown:true,

      },
      {
        text:'Solutions',
        href:`${process.env.HOME_SITE_URL}/solutions`,
        isDropdown:false,
        navs:[]
      },

      {
        text:'Pricing',
        href:`${process.env.HOME_SITE_URL}/pricing`,
        isDropdown:false,
        navs:[]
      },
      
      {
        text:'About us',
        href:`${process.env.HOME_SITE_URL}/aboutus`,
        isDropdown:false,
        navs:[]

      },
      {
        text:'Jobs',
        href:`${process.env.HOME_SITE_URL}/jobs`,
        target:'_blank',
        rel:'noopener noreferrer',
        isDropdown:false,
        navs:[]
      },
      {
        text:'Blog',
        href:`${process.env.HOME_SITE_URL}/blog`,
        isDropdown:false,
        navs:[]
      },
    ],
    contactCta:{
      text:'Contact Us',
      href: "https://nectar.lmnas.com/contact",
    }
   }