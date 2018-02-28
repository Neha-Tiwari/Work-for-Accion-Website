import { Component, OnInit } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'vertical',
  slidesPerView: 'auto'
};

@Component({
  selector: 'app-accionmain',
  templateUrl: './accionmain.component.html',
  styleUrls: ['./accionmain.component.css']
})
export class AccionmainComponent implements OnInit {

  basePath = 'assets/img//';
  config: SwiperConfigInterface = {};
  /* headerarray for Header section starts here */

  clogoarray = [{clogo1:`${this.basePath}logo.svg`}];

  headerarray= [
    {
      ldesc1:'What do we do',
      lhead1:'Capabilities'
    },
    {
      ldesc1:'Whom do we serve',
      lhead1:'Customers'
    },
    {
      ldesc1:'What have we',
      lhead1:'Case Studies',
    },
    {
      ldesc1:'Work with us',
      lhead1:'Careers',
    }
    /*
    {
      lhead:'Menu',
      search:'#search',
      talkbutton:'#talk'
    }
    */
  ];

  /* headerarray for Header section ends here */

  /* slidearr1 new for slider starts here */
  basePath1= './assets/img/';

  sliderarr1 = [
    {
      img1:`${this.basePath1}tagline.svg`,
      img2:`${this.basePath1}burst.svg`,
      title1:'Crafting',
      title2:'Innovations',
      title3:'with Emerging',
      title4:'Technologies',
      desc:'Gear up for the future with latest technology trends and explore new ways of doing business',
      link:'#capability'
    },
    {
      img1:`${this.basePath1}tagline.svg`,
      img2:`${this.basePath1}burst.svg`,
      title1:'Accelerating',
      title2:'Product ',
      title3:'Development & ',
      title4:'Go-To Market Strategy',
      desc:'Get to market faster and scale to unpredictable customer demands quickly'
      // link:'#product'
    },

    {
      img1:`${this.basePath1}tagline.svg`,
      img2:`${this.basePath1}burst.svg`,
      title1:'Designing',
      title2:'Additive And',
      title3:'Engaging User',
      title4:'Experiences',
      desc:'Build personalized, seamless and conversational digital interface for users'
      // link:'#design'
    },
    {
      img1:`${this.basePath1}tagline.svg`,
      img2:`${this.basePath1}burst.svg`,
      title1:'Re-Enginnering',
      title2:'Conventional',
      title3:'Problems with',
      title4:'Smart Technology',
      desc:'Solve simple to complex technology or business problems with faster , leaner digital engineering'
      // link:'#Re-engineer'
    }
  
  
  ];
  /* slidearr1 new for slider ends here */



  /* caparray for capability component strats here  */
  caparray = [
    { 
    img:`${this.basePath}icon-ux.svg`, 
    title:'UX and UI Design', 
    desc:'Design delightful user experiences for smart, intelligent and impactful digital conversations with Accion Digital Experience Studio.' , 
    link:'#ui&ux'},
    { 
    img:`${this.basePath}icon-microservices.svg`, 
    title:'Micro-Services', 
    desc:'Shift from monolithic large applications to lightweight apps that make it easy to develop new solutions in small, modular and independent ways.' , 
    link:'#micro'},
    { 
    img:`${this.basePath}icon-bigdata.svg`, 
    title:'Big Data Applications', 
    desc:'Become a data-driven company that leverages big data analytics, applications and infrastructure for new insights on customers and business opportunities.', 
    link:'#bigdata'},
    { 
    img:`${this.basePath}icon-devops.svg`, 
    title:'Dev-Ops & Cloud', 
    desc:'Take advantage of the synergy to power your digital transformation with lower cost of development, testing, deployment and operations on the cloud.' , 
    link:'#devops'},
    { 
    img:`${this.basePath}icon-iot.svg`, 
    title:'IoT & Distributed Computing', 
    desc:'Make your data go fast and work hard in a world of connected devices to explore new business opportunities with advanced automation and data analytics.',
    link:'#iot&dc'},
    { 
    img:`${this.basePath}icon-bi.svg`, 
    title:'Business Intelligence & Analytics', 
    desc:'Realize the value of BI for data reporting across industries and technology platforms without reinventing the wheel or losing valuable time.',
    link:'#bi&a'},
    { 
    img:`${this.basePath}icon-blockchain.svg`, 
    title:'Block- Chain', 
    desc:'Digitize your transactions workflow using a highly secured, shared and replicated ledger with our team of experts for the best strategy and use cases for your business.',
    link:'#blockchain'},
    { 
    img:`${this.basePath}icon-ui.svg`, 
    title:'Machine Learning & Aritificial Intelligence', 
    desc:'Keep pace in an era of smart machines and intelligent applications with our in-depth expertise in natural language processing (NLP) and team of data scientists.',
    link:'#ml&ai'}
    ];
    /* caparray for capability component ends here  */

    /* fimgarray & entarray for enterprise component strats here  */
    fimgarray =
    [
    {img:`${this.basePath}corporate.jpg`, icon:`${this.basePath}enterprise.svg`}
     ];
    entarray = 
    [
      // { img:`${this.basePath}icon-ux.svg`, title:'UX and UI Design', desc:'Design delightful user experiences for smart, intelligent and impactful digital conversations with Accion Digital Experience Studio.' , link:'#ui&ux'}
      {
      maintitle:'FOR ENTERPRISES',
      title:'Solve Conventional Problems with Smart Re-engineering', 
      desc:'You have to keep pace on exploring new ways of doing business in a fast-changing technology environment. So what should be the next best technology move for your company and customers? Talk to us.', 
      link:'#ent', 
      logo1:`${this.basePath}awlogo.png`, 
      casestudy1:'How we designed an Amazon workplace experience for the largest water utility company in US.', 
      logo2:`${this.basePath}awlogo.png`, 
      casestudy2:'An intelligent customer app that tells users everything about their water consumption in few clicks.'
      }  
    ];
    /* fimgarray & entarray for enterprise component strats here  */

    /* startup & simgarray for tech & startup companies array starts here */
    startuparray = [
      {
        maintitle:'For Technology Companies / Startups',
        title:'Nurturing Ideas And Building Products with Emerging Technologies',
        desc:'Shorten the wait to go from ideas to products with our development accelerators, technology blueprints & frameworks that help you take the fastest route using emerging technologies. Looking for a partner to build or re-engineer digital products, talk to us.',
        link:'#startup',
        logo1:`${this.basePath}awlogo.png`,
        casestudy1:'How we helped a US-based healthcare startup design an innovative device & app that alters mood using ultrasound waves.',
        logo2:`${this.basePath}awlogo.png`,
        casestudy2:'How we designed a web-based personal wealth investment platform for a UK-based startup to disrupt the traditional market '
      }
    ];
    simgarray = [
      {img:`${this.basePath}technology.jpg`, icon:`${this.basePath}startup.svg`}

    ];
    /* startup & simgarray for tech & startup companies array ends here */

    /* oimgarray & opensarray for Open Source Solutions starts here */
    oimgarray = [
      {img:`${this.basePath}retail.jpg`, icon:`${this.basePath}opensource.svg`}
    ];
    opensarray = [
      {
        maintitle:'Open Source Solutions',
        title:'Easy-to-use Scalable Affordable Technologies',
        desc:'Experience the freedom and flexibility of open source technologies for your IT environment with easy customization of features to align with your business needs.',
        link:'#opensource',
        logo1:`${this.basePath}awlogo.png`, 
        casestudy1:'How a travel agency saved costs on IT and staff by shifting to open source for accounting software',
        logo2:`${this.basePath}awlogo.png`, 
        casestudy2:'Learn How we built a conversational UI to assist staff and partners.'
      }
    ];
    /* oimgarray & opensarray for Open Source Solutions ends here */

    /* enmodelarray for engagement model starts here */
      enmodelarray = [
        {
          img:`${this.basePath}icon-pm.svg`,
          title:'Project Management',
          desc:'Project Services Group (PSG) for rigorous estimation, planning, SOW development and agile-based design/development/testing methodology to deliver projects.',
          link:'#pm'
        },
        {
          img:`${this.basePath}icon-extended.svg`,
          title:'Extended Teams',
          desc:'We work with our customers to execute onsite, offshore and onsite/offshore model turnkey projects through full SDLC using Agile methodologies.',
          link:'#et'
        },
        {
          img:`${this.basePath}icon-shared.svg`,
          title:'Shared IP',
          desc:'A number of measures to ensure our client’s IP is protected also offers its own IP to enable our customers accelerate the delivery of their products and solutions.',
          link:'#sip'
        },
        {
          img:`${this.basePath}icon-codev.svg`,
          title:'Co-Development',
          desc:'Collaborative Delivery Centre (CDC) as a "white-box” execution model to setup remote delivery teams onsite/offsite  to ensure control, quality, time-to-market and IP protection.',
          link:'#cod'
        },
        {
          img:`${this.basePath}icon-consulting.svg`,
          title:'Outcome Based Consulting',
          desc:'We offer strategic advisory services and technology blueprinting for companies by analyzing application environments, infrastructure, assets, technology needs and goals.',
          link:'#obc'
        },
        {
          img:`${this.basePath}icon-staffing.svg`,
          title:'Pro-Staffing Services',
          desc:'Augment technology teams from time-to-time for qualified talent with 600+ resources and database of 14000+ highly skilled resources for professional staffing needs of our clients.',
          link:'#pss'
        }
        
      ];

    /* modelarray for engagement model ends here */

    /* clientarray for Our Client section starts here */
      clientlogoarray = [
        { img:`${this.basePath}amex-logo.png`, alt:'american express'} ,
        { img:`${this.basePath}amw-logo.png`, alt:'american express'},
        { img:`${this.basePath}awana-logo.png`, alt:'american express'},
        { img:`${this.basePath}ep-logo.png`, alt:'american express'},

        { img:`${this.basePath}awana-logo.png`, alt:'american express'},
        { img:`${this.basePath}rackspace-logo.png`, alt:'american express'},
        { img:`${this.basePath}ep-logo.png`, alt:'american express'},
        { img:`${this.basePath}amw-logo.png`, alt:'american express'},

        { img:`${this.basePath}amex-logo.png`, alt:'american express'},
        { img:`${this.basePath}ep-logo.png`, alt:'american express'},
        { img:`${this.basePath}awana-logo.png`, alt:'american express'},
        { img:`${this.basePath}rackspace-logo.png`, alt:'american express'},
      ];

    /* clientarray for Our Client section ends here */

    /* cstudytalk for Footer section starts here */

      cstudytalk = [
        {
          bgimg:`${this.basePath}work.jpeg`,
          title:'Case Studies',
          desc:'See how we transformed some of these projects in to lorem ipsum '
        },
        {
          bgimg:`${this.basePath}letstalk.jpeg`, 
          title:"Let's Talk",
          desc:"Got a project? Don't know where to start? Let's start talking."
        }
      ];
      
      newsletter = [
        {

        }
      ];

    /* newsarray for Footer section ends here */

    /* Footerarray for external linkss in footer section starts here */

      line1footer = [
        {
          clogo:`${this.basePath}logo.svg`,
          title1:'Driving Outcomes',
          title2:'Through Actions',
          link1:'#Accion Story',
          link2:'#Accion Leadership',
          link3:'#Global Offices',
          link4:'#Contact Us',
          title3:'#Follow us on:',
          icon1:'fb',
          icon2:'tw',
          icon3:'g+',
          icon4:'in',
          icon5:'you'
        }
      ];

      line2footer = [
        {
          title1:'What Do We Do?',
          link1:'#UX and UI Design',
          link2:'#Big Data and Machine Learning',
          link3:'#DevOps and Cloud Computing',
          link4:'#Microservices',
          link5:'#IoT and Distributed Computing',
          link6:'#Business Intelligence &amp; Analytics',
          link7:'#Blockchain',
          link8:'#Open Source Solutions',
          link9:'#UI and Front-end'
        }
      ];

      line3footer = [
        {
          title1:'Who Do We Serve?',
          link1:'#For Enterprises',
          link2:'#For Technology Companies',
          link3:'#For Startups',
          link4:'#For Open Source Solutions',
          title2:'Work With Us',
          link5:'#Careers',
          link6:'#Accion Culture',
          link7:'#Current Openings',
          link8:'#Get in touch'
        }
      ];

      line4footer = [
        {
          title1:'What Have We Done ?',
          link1:'#Case Studies',
          link2:'#Our Clients',
          link3:'#Zephyr - Conversational Framework',
          link4:'#Breeze - Some Framework',
          title2:'Accion Websites',
          link5:'#Conversations',
          link6:'#Frameworks',
         
        }
      ];

      baseline1 = [
        {
          copyright:'2018 -- All rights reserved'
        }
      ];

      baseline2 = [
        {
          terms:'#Terms of use',
          policy:'#Privacy Policy',
          crafted:'#Handcrafted with',
          cname:'#by AccionLabs'
        }
      ];
    
    /* Footerarray for external linkss in footer section starts here */

  constructor() {

    this.config = {
      navigation: true,
      pagination: true,
      direction:'horizontal',
      slidesPerView:1,
      mousewheel: true,
      spaceBetween: 30,
      autoplay:true,
      speed:4000
    };
   }

  ngOnInit() {
  }

}
