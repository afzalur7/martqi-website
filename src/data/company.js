// Company facts — single source of truth for legal / compliance data.
// Update here to reflect on every page that references this info.

import kamalAgarwalPhoto from '../assets/kamal-agarwal.webp';

const company = {
  legalName: 'MARTQI LLP',
  shortName: 'MartQi',
  type: 'Limited Liability Partnership',
  registeredIn: 'India',
  registeredAddress: 'Darbhanga, Bihar',
  gst: {
    registered: true,
    states: ['Delhi', 'Telangana'],
    delhi: '07ABZFM2033K1ZT',
    telangana: '36ABZFM2033K1ZS',
  },
  iec: {
    code: 'ABZFM2033K',
    label: 'IEC (Importer-Exporter Code)',
  },
  apeda: {
    status: 'active',
    label: 'APEDA RCMC Registration',
    rcmcNumber: 'RCMC/APEDA/33691/2026-2027',
  },
  fssai: {
    license: '13626999000662',
    type: 'Central License',
  },
  udyam: {
    number: 'UDYAM-TS-25-0085335',
    type: 'Micro Enterprise',
  },
  icegate: {
    id: 'ABZFM2033KPIE000',
  },
  contact: {
    principalPlaceOfBusiness:
      'Floor No. 1, Flat No. 10-900011, Adarsh Nagar, Pothireddy Palli X Road, Lane Beside TVS Showroom, Chow Rasta, Sangareddy, Telangana 502295, India',
    email: 'info@martqi.com',
    llpin: 'ACE-4894',
    contactPerson: {
      name: 'Mr. Kamal Agarwal',
      photo: kamalAgarwalPhoto,
      photoAlt: 'Mr. Kamal Agarwal',
      mobiles: ['+91 98375 19670', '+91 97175 50353'],
    },
  },
};

export default company;
