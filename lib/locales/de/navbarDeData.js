
export const navbarDEData={
    companyName:'LMNAs',
    logo:'LmnasLogo',
    
    ctas:[
     {
        text: "Produkte",
        href:"/#products",
        navs: [
          {
            text: 'ERP & Finanzen Cloud',
            slug: 'erp-and-finance-cloud',
            description: 'Ihre Geschäftsprozesse mit der ERP & Finanzen Cloud optimieren',
            icon: 'ErpCloudLogo'
          },
          {
            text: 'CRM Cloud',
            slug: 'crm-cloud',
            description: 'Ihr Kundenbeziehungsmanagement mit der CRM Cloud stärken',
            icon: 'CrmCloudLogo'
          },
          {
            text: 'CPQ Cloud',
            slug: 'cpq-cloud',
            description: 'SaaS-Lösung, die Unternehmen unterstützt',
            icon: 'CPQLogo'
          },             
          {
            text: 'HRMS Cloud',
            slug: 'hrms-cloud',
            description: 'Das Personalmanagement im digitalen Zeitalter mit der HRMS Cloud transformieren',
            icon: 'HrmsCloudLogo'
          },
          {
            text: 'analytische Cloud',
            slug: 'analytical-cloud',
            description: 'Ihr Unternehmen mit der analytische Cloud effizienter gestalten',
            icon: 'AnalyticalCloudLogo'
          }
        ],
        isDropdown:true,
      },
      {
        text:'Branchen',
        href:'/#industries',
        //isDropdown:false,
        navs:[ 
          {
          text: 'Fertigung',
          slug: 'manufacturing',
          description: 'Optimieren Sie Ihre Fertigungseffizienz',
          icon: 'ManufacturePlainLogo'
        },
        {
          text: 'Einzelhandel',
          slug: 'retail',
          description: 'Entfesseln Sie Ihr Einzelhandelspotenzial',
          icon: 'RetailPlainLogo'
        },
        {
          text: 'Vertrieb',
          slug: 'distribution',
          description: 'Optimieren Sie Ihre Vertriebseffizienz',
          icon: 'DistributionPlainLogo'
        },   
      ],
      isDropdown:true
      },

      {
        text:'Lösungen',
        href:'/solutions',
        isDropdown:false,
        navs:[]
      },

      {
        text:'Preisgestaltung',
        href:'/pricing',
        isDropdown:false,
        navs:[]

      },
      
      {
        text:'Über uns',
        href:'/aboutus',
        isDropdown:false,
        navs:[]


      },
      {
        text:'Stellenangebote',
        href:'/jobs',
        target:'_blank',
        rel:'noopener noreferrer',
        isDropdown:false,
        navs:[]

      },
      {
        text:'Blog',
        href:'/blog',
        isDropdown:false,
        navs:[]

      },
    ],
    contactCta:{
        text:'Kontaktiere uns',
        href: "https://nectar.lmnas.com/contact",
    }
   }
