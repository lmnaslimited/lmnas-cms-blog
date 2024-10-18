
export const footerEnData={
        column1:{
          logo:'LmnasLogoStroke',
          companyNAme:'LMNAs',
          description:'LMNAs Cloud Solutions: Your Partner in End-to-End Business Transformation. Experience the Power of LENS Cloud ERP for Seamless Digital Integration.'
        },
      column2:{
        title:'Featured Products',
        ctas:[
          {
            text:'ERP & Finance Cloud',
            href:`${process.env.HOME_SITE_URL}/products/erp-and-finance-cloud`
          },
          {
            text:'CRM Cloud',
            href:`${process.env.HOME_SITE_URL}/products/crm-cloud`
          },
          {
            text:'HRMS Cloud',
            href:`${process.env.HOME_SITE_URL}/products/hrms-cloud`
          },
          {
            text:'Analytical Cloud',
            href:`${process.env.HOME_SITE_URL}/products/analytical-cloud`
          },
          {
            text:'CPQ Cloud',
            href:`${process.env.HOME_SITE_URL}/products/cpq-cloud`
          },
        ]
      },
      column3:{
        title:'Information',
        ctas:[
          {
            text:'Products',
            href:`${process.env.HOME_SITE_URL}/#products`,
          },
          {
            text:'Industries',
            href:`${process.env.HOME_SITE_URL}/#industries`
          },
          {
            text:'Pricing',
            href:`${process.env.HOME_SITE_URL}/pricing`
          },
          {
            text:'About us',
            href:`${process.env.HOME_SITE_URL}/aboutus`,
          },
          {
            text:'Jobs',
            href:`${process.env.HOME_SITE_URL}/jobs`,
            target:'_blank',
            rel:'noopener noreferrer',
          }]
      },
      column4:{
        title:'Contacts',
        subTitle:{
          text1:'Phone:',
          text2:'Email:',
          text3:'Address:',
        },
        address:{
          text1:'#B206',
          text2:' Radiance Royal, Poonthalmalle,',
          text3:'CH-56.'
        },
        phoneno:'+91 98840 44470',
        mailid:'hello@lmnas.com',
        contactCta:{
          text: "Contact Us",
        href: "https://nectar.lmnas.com/contact",
        }
      },
      column5:{
        title:'Social',
        socialCta:[
          {
            href:'https://twitter.com/lmnaslimited',
            icon:'NewTwitterIcon',
            text: 'twitter'
          },
          {
            href:'https://www.youtube.com/@lmnascloudsolutions.4549',
            icon:'YoutubeIcon',
            text: 'youtube'
          },
          {
            href:'https://in.linkedin.com/company/lmnaslimited',
            icon:'LinkedinIcon',
            text: 'linkedin'
          },
          {
            href: 'https://www.instagram.com/lmnaslimited/',
            icon:'InstragramIcon',
            text: 'instagram'
          }
        ],
        subTitle:'Stay Connected. Subscribe to our social handles to get bored.'
      },
      bottom:{
        copyright:'© Copyright 2024 LMNAs Cloud Solutions LLP. All rights reserved.',
        ctas:[
          {
            text:'F.A.Q',
            href:`${process.env.HOME_SITE_URL}/pricing/#faq`,
          },
          {
            text:'Privacy Policy',
            href:`${process.env.HOME_SITE_URL}/privacy-policy`,
            target:'_blank',
            rel:'noopener noreferrer',
          },
          {
            text:'Terms & Conditions',
            href:`${process.env.HOME_SITE_URL}/terms-and-conditions`,
            target:'_blank',
            rel:'noopener noreferrer',
          }
        ]
      }}
