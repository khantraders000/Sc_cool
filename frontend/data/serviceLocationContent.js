
// export const serviceLocationContent = {
//   service: {
//     label: "AC Service",
//     title: (name) => `AC Service in ${name}, Mumbai | SC Cool Service`,
//     description: (name) =>
//       `Need AC servicing in ${name}, Mumbai? Contact SC Cool Service to discuss AC cleaning, airflow or routine inspection and arrange a service visit.`,
//     h1: (name) => `AC service that fits your needs in ${name}`,
//     intro: (name) =>
//       `If your AC needs cleaning, inspection or attention because its cooling has changed, share the details with SC Cool Service. We can discuss the service required at your location in ${name}.`,
//     faqs: (name) => [
//       {
//         question: `How do I book AC service in ${name}?`,
//         answer:
//           "Call or WhatsApp with your locality, AC type and the issue you have noticed. The team can discuss the next steps and visit availability.",
//       },
//       {
//         question: "What does an AC service include?",
//         answer:
//           "The scope depends on your unit and its condition. Confirm which checks and cleaning tasks are included before work begins.",
//       },
//       {
//         question: "Can I request service if the AC is not cooling?",
//         answer:
//           "Yes. Describe the symptoms so the unit can be inspected and the cause assessed before repair work is recommended.",
//       },
//     ],
//   },

//   installation: {
//     label: "AC Installation",
//     title: (name) => `AC Installation in ${name}, Mumbai | SC Cool Service`,
//     description: (name) =>
//       `Planning AC installation in ${name}, Mumbai? Discuss unit placement, piping, mounting and installation requirements with SC Cool Service.`,
//     h1: (name) => `A better start for your new AC in ${name}`,
//     intro: (name) =>
//       `Before installing an AC, consider the room layout, unit position, drainage and pipe routing. Share your site details with SC Cool Service to discuss installation in ${name}.`,
//     faqs: (name) => [
//       {
//         question: `How can I book AC installation in ${name}?`,
//         answer:
//           "Share your location, AC type and whether the unit is new or being relocated. The installation requirements and availability can then be discussed.",
//       },
//       {
//         question: "Can installation charges vary?",
//         answer:
//           "Yes. Site access, piping, mounting and additional materials can affect the cost. Ask for a quote based on the actual work required.",
//       },
//       {
//         question: "Can you reinstall a relocated AC?",
//         answer:
//           "Relocation requirements depend on the unit and new site. Ask for an assessment of dismantling, transport, piping and installation.",
//       },
//     ],
//   },

//   maintenance: {
//     label: "AC Maintenance",
//     title: (name) => `AC Maintenance in ${name}, Mumbai | SC Cool Service`,
//     description: (name) =>
//       `Arrange AC maintenance in ${name}, Mumbai. Contact SC Cool Service to discuss preventive checks, cleaning and routine upkeep for your unit.`,
//     h1: (name) => `Keep your AC cared for in ${name}`,
//     intro: (name) =>
//       `Dust build-up, restricted airflow and drainage issues can affect AC operation. Discuss the unit's age, usage and maintenance needs with SC Cool Service in ${name}.`,
//     faqs: (name) => [
//       {
//         question: `How often should an AC be maintained in ${name}?`,
//         answer:
//           "It depends on usage, the environment and the manufacturer's recommendations. Ask for a maintenance schedule suited to your unit.",
//       },
//       {
//         question: "Is maintenance different from repair?",
//         answer:
//           "Maintenance focuses on checks and upkeep, while repair addresses a fault. An inspection may reveal that repair work is also needed.",
//       },
//       {
//         question: "Can offices request AC maintenance?",
//         answer:
//           "Share the office location, number of units and AC types so the maintenance requirements can be discussed.",
//       },
//     ],
//   },

//   near: {
//     label: "Local AC Service",
//     title: (name) => `AC Service Near ${name}, Mumbai | SC Cool Service`,
//     description: (name) =>
//       `Searching for AC service near ${name}, Mumbai? Contact SC Cool Service with your exact locality and AC issue to check service coverage and visit availability.`,
//     h1: (name) => `Looking for AC service near ${name}?`,
//     intro: (name) =>
//       `Tell us your exact locality, a nearby landmark and the AC problem you are facing. SC Cool Service can discuss whether a visit to your address can be arranged.`,
//     faqs: (name) => [
//       {
//         question: `How do I check AC service availability near ${name}?`,
//         answer:
//           "Share your exact address area and AC issue by phone or WhatsApp. Confirm availability before relying on a particular visit time.",
//       },
//       {
//         question: "Is same-day AC service guaranteed?",
//         answer:
//           "No fixed arrival time should be assumed. Availability depends on the schedule and your address, so contact the team to check.",
//       },
//       {
//         question: "What should I share when booking?",
//         answer:
//           "Provide your locality, AC type, the issue and your preferred time so the service request can be discussed.",
//       },
//     ],
//   },
// };

// export function getLocationServiceContent(serviceKey, location) {
//   const service = serviceLocationContent[serviceKey];

//   if (!service || !location) return null;

//   const name = location.name;

//   return {
//     label: service.label,
//     title: service.title(name),
//     description: service.description(name),
//     h1: service.h1(name),
//     intro: service.intro(name),
//     faqs: service.faqs(name),
//   };
// }










export const serviceLocationContent = {
  "service": {
    "colaba": {
      "slug": "colaba",
      "locationName": "Colaba",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Colaba, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Colaba. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "AC servicing and cleaning for Colaba",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Colaba. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Colaba",
          "content": "When planning work at a property in Colaba, share the building access arrangements and the unit's location before a visit is discussed. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Colaba?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "cuffe-parade": {
      "slug": "cuffe-parade",
      "locationName": "Cuffe Parade",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Cuffe Parade, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Cuffe Parade? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Plan routine AC servicing in Cuffe Parade",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Cuffe Parade so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Cuffe Parade address",
          "content": "For an enquiry from Cuffe Parade, include the exact address and whether the AC is in a home, workplace or another type of property. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "nariman-point": {
      "slug": "nariman-point",
      "locationName": "Nariman Point",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Nariman Point, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Nariman Point, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "A practical AC service visit in Nariman Point",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Nariman Point, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Nariman Point",
          "content": "A useful request from Nariman Point explains the AC type, the work needed and any access details that could affect the visit. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Nariman Point?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "churchgate": {
      "slug": "churchgate",
      "locationName": "Churchgate",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Churchgate, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Churchgate? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Arrange AC cleaning and checks in Churchgate",
      "intro": "For routine AC servicing in Churchgate, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Churchgate",
          "content": "Before arranging work in Churchgate, confirm the address, the unit's position and the service tasks expected. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Churchgate?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "fort": {
      "slug": "fort",
      "locationName": "Fort",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Fort, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Fort. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "Routine AC care for properties in Fort",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Fort. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Fort",
          "content": "When planning work at a property in Fort, share the building access arrangements and the unit's location before a visit is discussed. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "kala-ghoda": {
      "slug": "kala-ghoda",
      "locationName": "Kala Ghoda",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Kala Ghoda, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Kala Ghoda? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Discuss your AC servicing needs in Kala Ghoda",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Kala Ghoda so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Kala Ghoda address",
          "content": "For an enquiry from Kala Ghoda, include the exact address and whether the AC is in a home, workplace or another type of property. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Kala Ghoda?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "marine-lines": {
      "slug": "marine-lines",
      "locationName": "Marine Lines",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Marine Lines, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Marine Lines, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "AC servicing and cleaning for Marine Lines",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Marine Lines, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Marine Lines",
          "content": "A useful request from Marine Lines explains the AC type, the work needed and any access details that could affect the visit. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Marine Lines?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "charni-road": {
      "slug": "charni-road",
      "locationName": "Charni Road",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Charni Road, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Charni Road? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Plan routine AC servicing in Charni Road",
      "intro": "For routine AC servicing in Charni Road, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Charni Road",
          "content": "Before arranging work in Charni Road, confirm the address, the unit's position and the service tasks expected. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "girgaon": {
      "slug": "girgaon",
      "locationName": "Girgaon",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Girgaon, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Girgaon. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "A practical AC service visit in Girgaon",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Girgaon. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Girgaon",
          "content": "When planning work at a property in Girgaon, share the building access arrangements and the unit's location before a visit is discussed. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Girgaon?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "walkeshwar": {
      "slug": "walkeshwar",
      "locationName": "Walkeshwar",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Walkeshwar, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Walkeshwar? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Arrange AC cleaning and checks in Walkeshwar",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Walkeshwar so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Walkeshwar address",
          "content": "For an enquiry from Walkeshwar, include the exact address and whether the AC is in a home, workplace or another type of property. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Walkeshwar?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "malabar-hill": {
      "slug": "malabar-hill",
      "locationName": "Malabar Hill",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Malabar Hill, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Malabar Hill, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "Routine AC care for properties in Malabar Hill",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Malabar Hill, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Malabar Hill",
          "content": "A useful request from Malabar Hill explains the AC type, the work needed and any access details that could affect the visit. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "cumballa-hill": {
      "slug": "cumballa-hill",
      "locationName": "Cumballa Hill",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Cumballa Hill, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Cumballa Hill? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Discuss your AC servicing needs in Cumballa Hill",
      "intro": "For routine AC servicing in Cumballa Hill, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Cumballa Hill",
          "content": "Before arranging work in Cumballa Hill, confirm the address, the unit's position and the service tasks expected. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Cumballa Hill?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "breach-candy": {
      "slug": "breach-candy",
      "locationName": "Breach Candy",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Breach Candy, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Breach Candy. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "AC servicing and cleaning for Breach Candy",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Breach Candy. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Breach Candy",
          "content": "When planning work at a property in Breach Candy, share the building access arrangements and the unit's location before a visit is discussed. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Breach Candy?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "tardeo": {
      "slug": "tardeo",
      "locationName": "Tardeo",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Tardeo, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Tardeo? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Plan routine AC servicing in Tardeo",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Tardeo so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Tardeo address",
          "content": "For an enquiry from Tardeo, include the exact address and whether the AC is in a home, workplace or another type of property. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "byculla": {
      "slug": "byculla",
      "locationName": "Byculla",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Byculla, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Byculla, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "A practical AC service visit in Byculla",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Byculla, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Byculla",
          "content": "A useful request from Byculla explains the AC type, the work needed and any access details that could affect the visit. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Byculla?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "mazgaon": {
      "slug": "mazgaon",
      "locationName": "Mazgaon",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Mazgaon, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Mazgaon? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Arrange AC cleaning and checks in Mazgaon",
      "intro": "For routine AC servicing in Mazgaon, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Mazgaon",
          "content": "Before arranging work in Mazgaon, confirm the address, the unit's position and the service tasks expected. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Mazgaon?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "parel": {
      "slug": "parel",
      "locationName": "Parel",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Parel, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Parel. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "Routine AC care for properties in Parel",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Parel. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Parel",
          "content": "When planning work at a property in Parel, share the building access arrangements and the unit's location before a visit is discussed. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "lower-parel": {
      "slug": "lower-parel",
      "locationName": "Lower Parel",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Lower Parel, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Lower Parel? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Discuss your AC servicing needs in Lower Parel",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Lower Parel so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Lower Parel address",
          "content": "For an enquiry from Lower Parel, include the exact address and whether the AC is in a home, workplace or another type of property. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Lower Parel?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "worli": {
      "slug": "worli",
      "locationName": "Worli",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Worli, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Worli, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "AC servicing and cleaning for Worli",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Worli, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Worli",
          "content": "A useful request from Worli explains the AC type, the work needed and any access details that could affect the visit. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Worli?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "prabhadevi": {
      "slug": "prabhadevi",
      "locationName": "Prabhadevi",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Prabhadevi, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Prabhadevi? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Plan routine AC servicing in Prabhadevi",
      "intro": "For routine AC servicing in Prabhadevi, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Prabhadevi",
          "content": "Before arranging work in Prabhadevi, confirm the address, the unit's position and the service tasks expected. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "dadar": {
      "slug": "dadar",
      "locationName": "Dadar",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Dadar, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Dadar. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "A practical AC service visit in Dadar",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Dadar. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Dadar",
          "content": "When planning work at a property in Dadar, share the building access arrangements and the unit's location before a visit is discussed. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Dadar?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "matunga": {
      "slug": "matunga",
      "locationName": "Matunga",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Matunga, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Matunga? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Arrange AC cleaning and checks in Matunga",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Matunga so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Matunga address",
          "content": "For an enquiry from Matunga, include the exact address and whether the AC is in a home, workplace or another type of property. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Matunga?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "sion": {
      "slug": "sion",
      "locationName": "Sion",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Sion, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Sion, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "Routine AC care for properties in Sion",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Sion, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Sion",
          "content": "A useful request from Sion explains the AC type, the work needed and any access details that could affect the visit. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "wadala": {
      "slug": "wadala",
      "locationName": "Wadala",
      "region": "South Mumbai",
      "label": "AC Service",
      "title": "AC Service in Wadala, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Wadala? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Discuss your AC servicing needs in Wadala",
      "intro": "For routine AC servicing in Wadala, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Wadala",
          "content": "Before arranging work in Wadala, confirm the address, the unit's position and the service tasks expected. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Wadala?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "bandra": {
      "slug": "bandra",
      "locationName": "Bandra",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Bandra, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Bandra. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "AC servicing and cleaning for Bandra",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Bandra. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Bandra",
          "content": "For a property in Bandra, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Bandra?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "khar": {
      "slug": "khar",
      "locationName": "Khar",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Khar, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Khar? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Plan routine AC servicing in Khar",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Khar so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Khar address",
          "content": "When enquiring from Khar, mention the property type, AC model if known and the time window you would prefer. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "santacruz": {
      "slug": "santacruz",
      "locationName": "Santacruz",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Santacruz, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Santacruz, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "A practical AC service visit in Santacruz",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Santacruz, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Santacruz",
          "content": "A clear request for Santacruz includes the address area, the unit type and what you want the technician to check or do. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Santacruz?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "vile-parle": {
      "slug": "vile-parle",
      "locationName": "Vile Parle",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Vile Parle, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Vile Parle? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Arrange AC cleaning and checks in Vile Parle",
      "intro": "For routine AC servicing in Vile Parle, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Vile Parle",
          "content": "For work at an address in Vile Parle, confirm coverage and visit timing rather than assuming availability from the locality name alone. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Vile Parle?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "juhu": {
      "slug": "juhu",
      "locationName": "Juhu",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Juhu, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Juhu. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "Routine AC care for properties in Juhu",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Juhu. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Juhu",
          "content": "For a property in Juhu, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "andheri": {
      "slug": "andheri",
      "locationName": "Andheri",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Andheri, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Andheri? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Discuss your AC servicing needs in Andheri",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Andheri so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Andheri address",
          "content": "When enquiring from Andheri, mention the property type, AC model if known and the time window you would prefer. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Andheri?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "jogeshwari": {
      "slug": "jogeshwari",
      "locationName": "Jogeshwari",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Jogeshwari, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Jogeshwari, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "AC servicing and cleaning for Jogeshwari",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Jogeshwari, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Jogeshwari",
          "content": "A clear request for Jogeshwari includes the address area, the unit type and what you want the technician to check or do. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Jogeshwari?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "goregaon": {
      "slug": "goregaon",
      "locationName": "Goregaon",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Goregaon, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Goregaon? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Plan routine AC servicing in Goregaon",
      "intro": "For routine AC servicing in Goregaon, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Goregaon",
          "content": "For work at an address in Goregaon, confirm coverage and visit timing rather than assuming availability from the locality name alone. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "malad": {
      "slug": "malad",
      "locationName": "Malad",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Malad, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Malad. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "A practical AC service visit in Malad",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Malad. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Malad",
          "content": "For a property in Malad, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Malad?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "kandivali": {
      "slug": "kandivali",
      "locationName": "Kandivali",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Kandivali, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Kandivali? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Arrange AC cleaning and checks in Kandivali",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Kandivali so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Kandivali address",
          "content": "When enquiring from Kandivali, mention the property type, AC model if known and the time window you would prefer. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Kandivali?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "borivali": {
      "slug": "borivali",
      "locationName": "Borivali",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Borivali, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Borivali, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "Routine AC care for properties in Borivali",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Borivali, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Borivali",
          "content": "A clear request for Borivali includes the address area, the unit type and what you want the technician to check or do. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "dahisar": {
      "slug": "dahisar",
      "locationName": "Dahisar",
      "region": "Western Suburbs",
      "label": "AC Service",
      "title": "AC Service in Dahisar, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Dahisar? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Discuss your AC servicing needs in Dahisar",
      "intro": "For routine AC servicing in Dahisar, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Dahisar",
          "content": "For work at an address in Dahisar, confirm coverage and visit timing rather than assuming availability from the locality name alone. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Dahisar?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "kurla": {
      "slug": "kurla",
      "locationName": "Kurla",
      "region": "Central Suburbs",
      "label": "AC Service",
      "title": "AC Service in Kurla, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Kurla. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "AC servicing and cleaning for Kurla",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Kurla. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Kurla",
          "content": "For an AC request in Kurla, describe the unit and the work needed, then confirm the exact address and appointment availability. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Kurla?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "sakinaka": {
      "slug": "sakinaka",
      "locationName": "Sakinaka",
      "region": "Central Suburbs",
      "label": "AC Service",
      "title": "AC Service in Sakinaka, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Sakinaka? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Plan routine AC servicing in Sakinaka",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Sakinaka so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Sakinaka address",
          "content": "When contacting the team from Sakinaka, explain whether the request is for a single unit or several units at the same property. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "ghatkopar": {
      "slug": "ghatkopar",
      "locationName": "Ghatkopar",
      "region": "Central Suburbs",
      "label": "AC Service",
      "title": "AC Service in Ghatkopar, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Ghatkopar, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "A practical AC service visit in Ghatkopar",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Ghatkopar, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Ghatkopar",
          "content": "The most useful enquiry for Ghatkopar includes the AC type, symptoms or task, and any access information relevant to the visit. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Ghatkopar?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "vidyavihar": {
      "slug": "vidyavihar",
      "locationName": "Vidyavihar",
      "region": "Central Suburbs",
      "label": "AC Service",
      "title": "AC Service in Vidyavihar, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Vidyavihar? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Arrange AC cleaning and checks in Vidyavihar",
      "intro": "For routine AC servicing in Vidyavihar, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Vidyavihar",
          "content": "Before scheduling work in Vidyavihar, confirm the service scope and whether the requested address is currently covered. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Vidyavihar?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "vikhroli": {
      "slug": "vikhroli",
      "locationName": "Vikhroli",
      "region": "Central Suburbs",
      "label": "AC Service",
      "title": "AC Service in Vikhroli, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Vikhroli. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "Routine AC care for properties in Vikhroli",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Vikhroli. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Vikhroli",
          "content": "For an AC request in Vikhroli, describe the unit and the work needed, then confirm the exact address and appointment availability. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "kanjurmarg": {
      "slug": "kanjurmarg",
      "locationName": "Kanjurmarg",
      "region": "Central Suburbs",
      "label": "AC Service",
      "title": "AC Service in Kanjurmarg, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Kanjurmarg? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Discuss your AC servicing needs in Kanjurmarg",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Kanjurmarg so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Kanjurmarg address",
          "content": "When contacting the team from Kanjurmarg, explain whether the request is for a single unit or several units at the same property. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Kanjurmarg?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "bhandup": {
      "slug": "bhandup",
      "locationName": "Bhandup",
      "region": "Central Suburbs",
      "label": "AC Service",
      "title": "AC Service in Bhandup, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Bhandup, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "AC servicing and cleaning for Bhandup",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Bhandup, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Bhandup",
          "content": "The most useful enquiry for Bhandup includes the AC type, symptoms or task, and any access information relevant to the visit. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Bhandup?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "mulund": {
      "slug": "mulund",
      "locationName": "Mulund",
      "region": "Central Suburbs",
      "label": "AC Service",
      "title": "AC Service in Mulund, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Mulund? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Plan routine AC servicing in Mulund",
      "intro": "For routine AC servicing in Mulund, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Mulund",
          "content": "Before scheduling work in Mulund, confirm the service scope and whether the requested address is currently covered. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "chembur": {
      "slug": "chembur",
      "locationName": "Chembur",
      "region": "Harbour Suburbs",
      "label": "AC Service",
      "title": "AC Service in Chembur, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Chembur. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "A practical AC service visit in Chembur",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Chembur. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Chembur",
          "content": "For a request from Chembur, share the exact address area and AC details so coverage and the type of work can be discussed. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Chembur?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "govandi": {
      "slug": "govandi",
      "locationName": "Govandi",
      "region": "Harbour Suburbs",
      "label": "AC Service",
      "title": "AC Service in Govandi, Mumbai | SC Cool Service",
      "description": "Need routine AC care in Govandi? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Arrange AC cleaning and checks in Govandi",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Govandi so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Govandi address",
          "content": "When arranging an enquiry in Govandi, explain the issue or task clearly and ask the team to confirm timing before planning around a visit. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Govandi?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "mankhurd": {
      "slug": "mankhurd",
      "locationName": "Mankhurd",
      "region": "Harbour Suburbs",
      "label": "AC Service",
      "title": "AC Service in Mankhurd, Mumbai | SC Cool Service",
      "description": "Enquire about AC servicing in Mankhurd, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "Routine AC care for properties in Mankhurd",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Mankhurd, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Mankhurd",
          "content": "A request from Mankhurd is easier to assess when it includes the unit type, the symptoms and any site-access requirements. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "trombay": {
      "slug": "trombay",
      "locationName": "Trombay",
      "region": "Harbour Suburbs",
      "label": "AC Service",
      "title": "AC Service in Trombay, Mumbai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Trombay? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Discuss your AC servicing needs in Trombay",
      "intro": "For routine AC servicing in Trombay, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Trombay",
          "content": "For an address in Trombay, confirm the visit window and agreed work scope directly with the service team. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Trombay?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "anushakti-nagar": {
      "slug": "anushakti-nagar",
      "locationName": "Anushakti Nagar",
      "region": "Harbour Suburbs",
      "label": "AC Service",
      "title": "AC Service in Anushakti Nagar, Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Anushakti Nagar. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "AC servicing and cleaning for Anushakti Nagar",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Anushakti Nagar. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Anushakti Nagar",
          "content": "For a request from Anushakti Nagar, share the exact address area and AC details so coverage and the type of work can be discussed. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Anushakti Nagar?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "mira-road": {
      "slug": "mira-road",
      "locationName": "Mira Road",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Mira Road | SC Cool Service",
      "description": "Need routine AC care in Mira Road? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Plan routine AC servicing in Mira Road",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Mira Road so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Mira Road address",
          "content": "When enquiring from Mira Road, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "bhayandar": {
      "slug": "bhayandar",
      "locationName": "Bhayandar",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Bhayandar | SC Cool Service",
      "description": "Enquire about AC servicing in Bhayandar, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "A practical AC service visit in Bhayandar",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Bhayandar, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Bhayandar",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Bhayandar should be confirmed before an appointment is treated as booked. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Bhayandar?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "vasai": {
      "slug": "vasai",
      "locationName": "Vasai",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Vasai | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Vasai? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Arrange AC cleaning and checks in Vasai",
      "intro": "For routine AC servicing in Vasai, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Vasai",
          "content": "For an AC requirement in Vasai, share the address and work details first; coverage and scheduling should be confirmed directly. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Vasai?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "virar": {
      "slug": "virar",
      "locationName": "Virar",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Virar | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Virar. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "Routine AC care for properties in Virar",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Virar. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Virar",
          "content": "For a request from Virar, confirm the exact address and current service coverage before relying on a technician visit. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "thane": {
      "slug": "thane",
      "locationName": "Thane",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Thane | SC Cool Service",
      "description": "Need routine AC care in Thane? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Discuss your AC servicing needs in Thane",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Thane so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Thane address",
          "content": "When enquiring from Thane, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. Ask which cleaning and inspection tasks are included, and whether diagnosis or repair would be quoted separately if a fault is found."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Thane?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "kalyan": {
      "slug": "kalyan",
      "locationName": "Kalyan",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Kalyan | SC Cool Service",
      "description": "Enquire about AC servicing in Kalyan, including cleaning and agreed operating checks. Confirm service coverage and inclusions for your exact address.",
      "h1": "AC servicing and cleaning for Kalyan",
      "intro": "Rather than assuming every AC needs the same treatment, describe the unit's condition and last service if known. For an address in Kalyan, confirm which cleaning and operating checks are included before booking.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Before arranging work in Kalyan",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Kalyan should be confirmed before an appointment is treated as booked. If cooling has changed as well as airflow, mention both symptoms because routine cleaning alone may not resolve every cause."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Kalyan?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    },
    "dombivli": {
      "slug": "dombivli",
      "locationName": "Dombivli",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Dombivli | SC Cool Service",
      "description": "Planning AC maintenance cleaning in Dombivli? Tell SC Cool Service what you have noticed and ask which inspection and cleaning tasks are available.",
      "h1": "Plan routine AC servicing in Dombivli",
      "intro": "For routine AC servicing in Dombivli, mention whether the concern is dust, airflow, odour or simply scheduled upkeep. The checks required can vary by model and condition, so confirm the work scope before arranging a visit.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "What to confirm for Dombivli",
          "content": "For an AC requirement in Dombivli, share the address and work details first; coverage and scheduling should be confirmed directly. If the unit has not been serviced recently, mention the approximate date if you remember it; otherwise, describe the current symptoms."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        },
        {
          "question": "Can I enquire about servicing for more than one AC?",
          "answer": "Yes. Share the number of units, their types and the property address in {name}. The team can discuss the scope and availability for the request."
        },
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        }
      ]
    },
    "navi-mumbai": {
      "slug": "navi-mumbai",
      "locationName": "Navi Mumbai",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Navi Mumbai | SC Cool Service",
      "description": "Discuss AC cleaning, airflow concerns and routine servicing for your property in Navi Mumbai. Contact SC Cool Service to confirm the work scope and availability.",
      "h1": "A practical AC service visit in Navi Mumbai",
      "intro": "If your AC has collected dust, airflow seems weaker than usual, or it is due for a routine check, explain what you have noticed when enquiring in Navi Mumbai. The service scope should be confirmed for your unit before work begins.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Planning the visit for Navi Mumbai",
          "content": "For a request from Navi Mumbai, confirm the exact address and current service coverage before relying on a technician visit. If multiple units need attention, list each unit's type and main concern so the scope can be clarified before the visit."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What should I confirm before the visit?",
          "answer": "Confirm the appointment availability, tasks included, expected charges and whether any parts or additional work would be quoted separately."
        },
        {
          "question": "How do I prepare my AC for servicing?",
          "answer": "Keep the area around the unit accessible if safe to do so, and share any known issues or recent changes. Do not open electrical or refrigerant components yourself."
        },
        {
          "question": "What details should I share for AC service in Navi Mumbai?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        }
      ]
    },
    "panvel": {
      "slug": "panvel",
      "locationName": "Panvel",
      "region": "Extended Suburbs & MMR",
      "label": "AC Service",
      "title": "AC Service in Panvel | SC Cool Service",
      "description": "Need routine AC care in Panvel? Share your unit type, service history and any changes in performance with SC Cool Service before arranging a visit.",
      "h1": "Arrange AC cleaning and checks in Panvel",
      "intro": "A useful service visit starts with the unit type, how often it runs and any changes you have noticed. Share those details for your property in Panvel so the team can discuss suitable cleaning and inspection tasks.",
      "sections": [
        {
          "heading": "What to mention before servicing",
          "content": "Tell the team the AC type, approximate last service date and any change in airflow, smell or cooling. These details help clarify the enquiry; the actual work should be agreed after the unit is assessed."
        },
        {
          "heading": "What a service visit may cover",
          "content": "Depending on the unit and agreed scope, routine work may involve filter cleaning, visual inspection and checks of airflow or drainage. Confirm inclusions and any extra charges before work starts."
        },
        {
          "heading": "Details for your Panvel address",
          "content": "When enquiring from Panvel, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. If the concern is limited to airflow, odour or visible dust, explain that clearly instead of assuming a particular part has failed."
        },
        {
          "heading": "After the service",
          "content": "Ask what was cleaned or inspected and whether the technician noticed an issue that needs separate repair. Keep the service details so you can compare the unit's performance later."
        }
      ],
      "faqs": [
        {
          "question": "What details should I share for AC service in Panvel?",
          "answer": "Share the AC type, approximate last service date and any symptoms such as weak airflow or an unusual smell. Confirm the available service scope for your exact address in {name}."
        },
        {
          "question": "Does AC servicing include repairs?",
          "answer": "Not necessarily. Routine servicing and fault repair are different tasks; describe the issue and confirm whether diagnosis or repair is included in the quoted work."
        },
        {
          "question": "Should I book service if cooling has reduced?",
          "answer": "You can enquire, but reduced cooling may need fault diagnosis rather than cleaning alone. Describe the symptoms and ask what inspection is appropriate for your unit."
        }
      ]
    }
  },
  "installation": {
    "colaba": {
      "slug": "colaba",
      "locationName": "Colaba",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Colaba, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Colaba? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Plan your AC installation in Colaba",
      "intro": "Before arranging installation in Colaba, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Colaba address",
          "content": "For an enquiry from Colaba, include the exact address and whether the AC is in a home, workplace or another type of property. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "cuffe-parade": {
      "slug": "cuffe-parade",
      "locationName": "Cuffe Parade",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Cuffe Parade, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Cuffe Parade. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation planning for Cuffe Parade properties",
      "intro": "A smooth installation begins with a clear picture of the site. For your Cuffe Parade address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Cuffe Parade",
          "content": "A useful request from Cuffe Parade explains the AC type, the work needed and any access details that could affect the visit. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "nariman-point": {
      "slug": "nariman-point",
      "locationName": "Nariman Point",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Nariman Point, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Nariman Point? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Get your new AC installation organised in Nariman Point",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Nariman Point before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Nariman Point",
          "content": "Before arranging work in Nariman Point, confirm the address, the unit's position and the service tasks expected. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Nariman Point?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "churchgate": {
      "slug": "churchgate",
      "locationName": "Churchgate",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Churchgate, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Churchgate, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "Discuss AC fitting requirements in Churchgate",
      "intro": "If you are planning AC fitting in Churchgate, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Churchgate",
          "content": "When planning work at a property in Churchgate, share the building access arrangements and the unit's location before a visit is discussed. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "fort": {
      "slug": "fort",
      "locationName": "Fort",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Fort, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Fort? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Prepare for a new AC installation in Fort",
      "intro": "Before arranging installation in Fort, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Fort address",
          "content": "For an enquiry from Fort, include the exact address and whether the AC is in a home, workplace or another type of property. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "kala-ghoda": {
      "slug": "kala-ghoda",
      "locationName": "Kala Ghoda",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Kala Ghoda, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Kala Ghoda. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation support for your address in Kala Ghoda",
      "intro": "A smooth installation begins with a clear picture of the site. For your Kala Ghoda address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Kala Ghoda",
          "content": "A useful request from Kala Ghoda explains the AC type, the work needed and any access details that could affect the visit. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Kala Ghoda?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "marine-lines": {
      "slug": "marine-lines",
      "locationName": "Marine Lines",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Marine Lines, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Marine Lines? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Plan your AC installation in Marine Lines",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Marine Lines before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Marine Lines",
          "content": "Before arranging work in Marine Lines, confirm the address, the unit's position and the service tasks expected. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "charni-road": {
      "slug": "charni-road",
      "locationName": "Charni Road",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Charni Road, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Charni Road, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation planning for Charni Road properties",
      "intro": "If you are planning AC fitting in Charni Road, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Charni Road",
          "content": "When planning work at a property in Charni Road, share the building access arrangements and the unit's location before a visit is discussed. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "girgaon": {
      "slug": "girgaon",
      "locationName": "Girgaon",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Girgaon, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Girgaon? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Get your new AC installation organised in Girgaon",
      "intro": "Before arranging installation in Girgaon, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Girgaon address",
          "content": "For an enquiry from Girgaon, include the exact address and whether the AC is in a home, workplace or another type of property. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Girgaon?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "walkeshwar": {
      "slug": "walkeshwar",
      "locationName": "Walkeshwar",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Walkeshwar, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Walkeshwar. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "Discuss AC fitting requirements in Walkeshwar",
      "intro": "A smooth installation begins with a clear picture of the site. For your Walkeshwar address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Walkeshwar",
          "content": "A useful request from Walkeshwar explains the AC type, the work needed and any access details that could affect the visit. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "malabar-hill": {
      "slug": "malabar-hill",
      "locationName": "Malabar Hill",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Malabar Hill, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Malabar Hill? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Prepare for a new AC installation in Malabar Hill",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Malabar Hill before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Malabar Hill",
          "content": "Before arranging work in Malabar Hill, confirm the address, the unit's position and the service tasks expected. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "cumballa-hill": {
      "slug": "cumballa-hill",
      "locationName": "Cumballa Hill",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Cumballa Hill, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Cumballa Hill, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation support for your address in Cumballa Hill",
      "intro": "If you are planning AC fitting in Cumballa Hill, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Cumballa Hill",
          "content": "When planning work at a property in Cumballa Hill, share the building access arrangements and the unit's location before a visit is discussed. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Cumballa Hill?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "breach-candy": {
      "slug": "breach-candy",
      "locationName": "Breach Candy",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Breach Candy, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Breach Candy? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Plan your AC installation in Breach Candy",
      "intro": "Before arranging installation in Breach Candy, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Breach Candy address",
          "content": "For an enquiry from Breach Candy, include the exact address and whether the AC is in a home, workplace or another type of property. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "tardeo": {
      "slug": "tardeo",
      "locationName": "Tardeo",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Tardeo, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Tardeo. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation planning for Tardeo properties",
      "intro": "A smooth installation begins with a clear picture of the site. For your Tardeo address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Tardeo",
          "content": "A useful request from Tardeo explains the AC type, the work needed and any access details that could affect the visit. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "byculla": {
      "slug": "byculla",
      "locationName": "Byculla",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Byculla, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Byculla? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Get your new AC installation organised in Byculla",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Byculla before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Byculla",
          "content": "Before arranging work in Byculla, confirm the address, the unit's position and the service tasks expected. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Byculla?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "mazgaon": {
      "slug": "mazgaon",
      "locationName": "Mazgaon",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Mazgaon, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Mazgaon, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "Discuss AC fitting requirements in Mazgaon",
      "intro": "If you are planning AC fitting in Mazgaon, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Mazgaon",
          "content": "When planning work at a property in Mazgaon, share the building access arrangements and the unit's location before a visit is discussed. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "parel": {
      "slug": "parel",
      "locationName": "Parel",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Parel, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Parel? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Prepare for a new AC installation in Parel",
      "intro": "Before arranging installation in Parel, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Parel address",
          "content": "For an enquiry from Parel, include the exact address and whether the AC is in a home, workplace or another type of property. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "lower-parel": {
      "slug": "lower-parel",
      "locationName": "Lower Parel",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Lower Parel, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Lower Parel. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation support for your address in Lower Parel",
      "intro": "A smooth installation begins with a clear picture of the site. For your Lower Parel address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Lower Parel",
          "content": "A useful request from Lower Parel explains the AC type, the work needed and any access details that could affect the visit. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Lower Parel?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "worli": {
      "slug": "worli",
      "locationName": "Worli",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Worli, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Worli? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Plan your AC installation in Worli",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Worli before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Worli",
          "content": "Before arranging work in Worli, confirm the address, the unit's position and the service tasks expected. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "prabhadevi": {
      "slug": "prabhadevi",
      "locationName": "Prabhadevi",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Prabhadevi, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Prabhadevi, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation planning for Prabhadevi properties",
      "intro": "If you are planning AC fitting in Prabhadevi, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Prabhadevi",
          "content": "When planning work at a property in Prabhadevi, share the building access arrangements and the unit's location before a visit is discussed. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "dadar": {
      "slug": "dadar",
      "locationName": "Dadar",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Dadar, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Dadar? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Get your new AC installation organised in Dadar",
      "intro": "Before arranging installation in Dadar, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Dadar address",
          "content": "For an enquiry from Dadar, include the exact address and whether the AC is in a home, workplace or another type of property. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Dadar?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "matunga": {
      "slug": "matunga",
      "locationName": "Matunga",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Matunga, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Matunga. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "Discuss AC fitting requirements in Matunga",
      "intro": "A smooth installation begins with a clear picture of the site. For your Matunga address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Matunga",
          "content": "A useful request from Matunga explains the AC type, the work needed and any access details that could affect the visit. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "sion": {
      "slug": "sion",
      "locationName": "Sion",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Sion, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Sion? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Prepare for a new AC installation in Sion",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Sion before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Sion",
          "content": "Before arranging work in Sion, confirm the address, the unit's position and the service tasks expected. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "wadala": {
      "slug": "wadala",
      "locationName": "Wadala",
      "region": "South Mumbai",
      "label": "AC Installation",
      "title": "AC Installation in Wadala, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Wadala, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation support for your address in Wadala",
      "intro": "If you are planning AC fitting in Wadala, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Wadala",
          "content": "When planning work at a property in Wadala, share the building access arrangements and the unit's location before a visit is discussed. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Wadala?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "bandra": {
      "slug": "bandra",
      "locationName": "Bandra",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Bandra, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Bandra? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Plan your AC installation in Bandra",
      "intro": "Before arranging installation in Bandra, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Bandra address",
          "content": "When enquiring from Bandra, mention the property type, AC model if known and the time window you would prefer. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "khar": {
      "slug": "khar",
      "locationName": "Khar",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Khar, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Khar. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation planning for Khar properties",
      "intro": "A smooth installation begins with a clear picture of the site. For your Khar address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Khar",
          "content": "A clear request for Khar includes the address area, the unit type and what you want the technician to check or do. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "santacruz": {
      "slug": "santacruz",
      "locationName": "Santacruz",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Santacruz, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Santacruz? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Get your new AC installation organised in Santacruz",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Santacruz before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Santacruz",
          "content": "For work at an address in Santacruz, confirm coverage and visit timing rather than assuming availability from the locality name alone. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Santacruz?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "vile-parle": {
      "slug": "vile-parle",
      "locationName": "Vile Parle",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Vile Parle, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Vile Parle, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "Discuss AC fitting requirements in Vile Parle",
      "intro": "If you are planning AC fitting in Vile Parle, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Vile Parle",
          "content": "For a property in Vile Parle, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "juhu": {
      "slug": "juhu",
      "locationName": "Juhu",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Juhu, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Juhu? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Prepare for a new AC installation in Juhu",
      "intro": "Before arranging installation in Juhu, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Juhu address",
          "content": "When enquiring from Juhu, mention the property type, AC model if known and the time window you would prefer. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "andheri": {
      "slug": "andheri",
      "locationName": "Andheri",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Andheri, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Andheri. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation support for your address in Andheri",
      "intro": "A smooth installation begins with a clear picture of the site. For your Andheri address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Andheri",
          "content": "A clear request for Andheri includes the address area, the unit type and what you want the technician to check or do. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Andheri?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "jogeshwari": {
      "slug": "jogeshwari",
      "locationName": "Jogeshwari",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Jogeshwari, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Jogeshwari? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Plan your AC installation in Jogeshwari",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Jogeshwari before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Jogeshwari",
          "content": "For work at an address in Jogeshwari, confirm coverage and visit timing rather than assuming availability from the locality name alone. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "goregaon": {
      "slug": "goregaon",
      "locationName": "Goregaon",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Goregaon, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Goregaon, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation planning for Goregaon properties",
      "intro": "If you are planning AC fitting in Goregaon, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Goregaon",
          "content": "For a property in Goregaon, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "malad": {
      "slug": "malad",
      "locationName": "Malad",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Malad, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Malad? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Get your new AC installation organised in Malad",
      "intro": "Before arranging installation in Malad, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Malad address",
          "content": "When enquiring from Malad, mention the property type, AC model if known and the time window you would prefer. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Malad?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "kandivali": {
      "slug": "kandivali",
      "locationName": "Kandivali",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Kandivali, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Kandivali. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "Discuss AC fitting requirements in Kandivali",
      "intro": "A smooth installation begins with a clear picture of the site. For your Kandivali address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Kandivali",
          "content": "A clear request for Kandivali includes the address area, the unit type and what you want the technician to check or do. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "borivali": {
      "slug": "borivali",
      "locationName": "Borivali",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Borivali, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Borivali? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Prepare for a new AC installation in Borivali",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Borivali before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Borivali",
          "content": "For work at an address in Borivali, confirm coverage and visit timing rather than assuming availability from the locality name alone. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "dahisar": {
      "slug": "dahisar",
      "locationName": "Dahisar",
      "region": "Western Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Dahisar, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Dahisar, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation support for your address in Dahisar",
      "intro": "If you are planning AC fitting in Dahisar, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Dahisar",
          "content": "For a property in Dahisar, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Dahisar?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "kurla": {
      "slug": "kurla",
      "locationName": "Kurla",
      "region": "Central Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Kurla, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Kurla? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Plan your AC installation in Kurla",
      "intro": "Before arranging installation in Kurla, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Kurla address",
          "content": "When contacting the team from Kurla, explain whether the request is for a single unit or several units at the same property. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "sakinaka": {
      "slug": "sakinaka",
      "locationName": "Sakinaka",
      "region": "Central Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Sakinaka, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Sakinaka. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation planning for Sakinaka properties",
      "intro": "A smooth installation begins with a clear picture of the site. For your Sakinaka address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Sakinaka",
          "content": "The most useful enquiry for Sakinaka includes the AC type, symptoms or task, and any access information relevant to the visit. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "ghatkopar": {
      "slug": "ghatkopar",
      "locationName": "Ghatkopar",
      "region": "Central Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Ghatkopar, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Ghatkopar? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Get your new AC installation organised in Ghatkopar",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Ghatkopar before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Ghatkopar",
          "content": "Before scheduling work in Ghatkopar, confirm the service scope and whether the requested address is currently covered. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Ghatkopar?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "vidyavihar": {
      "slug": "vidyavihar",
      "locationName": "Vidyavihar",
      "region": "Central Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Vidyavihar, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Vidyavihar, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "Discuss AC fitting requirements in Vidyavihar",
      "intro": "If you are planning AC fitting in Vidyavihar, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Vidyavihar",
          "content": "For an AC request in Vidyavihar, describe the unit and the work needed, then confirm the exact address and appointment availability. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "vikhroli": {
      "slug": "vikhroli",
      "locationName": "Vikhroli",
      "region": "Central Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Vikhroli, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Vikhroli? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Prepare for a new AC installation in Vikhroli",
      "intro": "Before arranging installation in Vikhroli, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Vikhroli address",
          "content": "When contacting the team from Vikhroli, explain whether the request is for a single unit or several units at the same property. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "kanjurmarg": {
      "slug": "kanjurmarg",
      "locationName": "Kanjurmarg",
      "region": "Central Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Kanjurmarg, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Kanjurmarg. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation support for your address in Kanjurmarg",
      "intro": "A smooth installation begins with a clear picture of the site. For your Kanjurmarg address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Kanjurmarg",
          "content": "The most useful enquiry for Kanjurmarg includes the AC type, symptoms or task, and any access information relevant to the visit. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Kanjurmarg?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "bhandup": {
      "slug": "bhandup",
      "locationName": "Bhandup",
      "region": "Central Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Bhandup, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Bhandup? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Plan your AC installation in Bhandup",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Bhandup before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Bhandup",
          "content": "Before scheduling work in Bhandup, confirm the service scope and whether the requested address is currently covered. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "mulund": {
      "slug": "mulund",
      "locationName": "Mulund",
      "region": "Central Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Mulund, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Mulund, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation planning for Mulund properties",
      "intro": "If you are planning AC fitting in Mulund, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Mulund",
          "content": "For an AC request in Mulund, describe the unit and the work needed, then confirm the exact address and appointment availability. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "chembur": {
      "slug": "chembur",
      "locationName": "Chembur",
      "region": "Harbour Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Chembur, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Chembur? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Get your new AC installation organised in Chembur",
      "intro": "Before arranging installation in Chembur, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Chembur address",
          "content": "When arranging an enquiry in Chembur, explain the issue or task clearly and ask the team to confirm timing before planning around a visit. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Chembur?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "govandi": {
      "slug": "govandi",
      "locationName": "Govandi",
      "region": "Harbour Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Govandi, Mumbai | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Govandi. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "Discuss AC fitting requirements in Govandi",
      "intro": "A smooth installation begins with a clear picture of the site. For your Govandi address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Govandi",
          "content": "A request from Govandi is easier to assess when it includes the unit type, the symptoms and any site-access requirements. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "mankhurd": {
      "slug": "mankhurd",
      "locationName": "Mankhurd",
      "region": "Harbour Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Mankhurd, Mumbai | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Mankhurd? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Prepare for a new AC installation in Mankhurd",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Mankhurd before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Mankhurd",
          "content": "For an address in Mankhurd, confirm the visit window and agreed work scope directly with the service team. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "trombay": {
      "slug": "trombay",
      "locationName": "Trombay",
      "region": "Harbour Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Trombay, Mumbai | SC Cool Service",
      "description": "Ask about AC fitting in Trombay, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation support for your address in Trombay",
      "intro": "If you are planning AC fitting in Trombay, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Trombay",
          "content": "For a request from Trombay, share the exact address area and AC details so coverage and the type of work can be discussed. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Trombay?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "anushakti-nagar": {
      "slug": "anushakti-nagar",
      "locationName": "Anushakti Nagar",
      "region": "Harbour Suburbs",
      "label": "AC Installation",
      "title": "AC Installation in Anushakti Nagar, Mumbai | SC Cool Service",
      "description": "Planning AC installation in Anushakti Nagar? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Plan your AC installation in Anushakti Nagar",
      "intro": "Before arranging installation in Anushakti Nagar, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Anushakti Nagar address",
          "content": "When arranging an enquiry in Anushakti Nagar, explain the issue or task clearly and ask the team to confirm timing before planning around a visit. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "mira-road": {
      "slug": "mira-road",
      "locationName": "Mira Road",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Mira Road | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Mira Road. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation planning for Mira Road properties",
      "intro": "A smooth installation begins with a clear picture of the site. For your Mira Road address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Mira Road",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Mira Road should be confirmed before an appointment is treated as booked. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "bhayandar": {
      "slug": "bhayandar",
      "locationName": "Bhayandar",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Bhayandar | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Bhayandar? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Get your new AC installation organised in Bhayandar",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Bhayandar before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Bhayandar",
          "content": "For an AC requirement in Bhayandar, share the address and work details first; coverage and scheduling should be confirmed directly. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Bhayandar?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "vasai": {
      "slug": "vasai",
      "locationName": "Vasai",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Vasai | SC Cool Service",
      "description": "Ask about AC fitting in Vasai, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "Discuss AC fitting requirements in Vasai",
      "intro": "If you are planning AC fitting in Vasai, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Vasai",
          "content": "For a request from Vasai, confirm the exact address and current service coverage before relying on a technician visit. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "virar": {
      "slug": "virar",
      "locationName": "Virar",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Virar | SC Cool Service",
      "description": "Planning AC installation in Virar? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Prepare for a new AC installation in Virar",
      "intro": "Before arranging installation in Virar, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Virar address",
          "content": "When enquiring from Virar, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "thane": {
      "slug": "thane",
      "locationName": "Thane",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Thane | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Thane. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "AC installation support for your address in Thane",
      "intro": "A smooth installation begins with a clear picture of the site. For your Thane address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Thane",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Thane should be confirmed before an appointment is treated as booked. If the unit is being installed for the first time, mention the proposed indoor-unit position and whether an outdoor-unit location has been identified."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Thane?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "kalyan": {
      "slug": "kalyan",
      "locationName": "Kalyan",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Kalyan | SC Cool Service",
      "description": "Need a new or relocated AC fitted in Kalyan? Contact SC Cool Service to discuss mounting, pipe routing and the actual work required at your address.",
      "h1": "Plan your AC installation in Kalyan",
      "intro": "Installation requirements depend on the unit and the property. Share the AC type, intended indoor and outdoor locations and any access restrictions for your address in Kalyan before a visit is confirmed.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "What to confirm for Kalyan",
          "content": "For an AC requirement in Kalyan, share the address and work details first; coverage and scheduling should be confirmed directly. Ask whether piping, drain routing, mounting, wiring and commissioning are included in the quote; the scope depends on the site."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    },
    "dombivli": {
      "slug": "dombivli",
      "locationName": "Dombivli",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Dombivli | SC Cool Service",
      "description": "Ask about AC fitting in Dombivli, including site access and installation inclusions. Final requirements and charges should be confirmed for the property.",
      "h1": "AC installation planning for Dombivli properties",
      "intro": "If you are planning AC fitting in Dombivli, avoid assuming every site needs the same work. The route for piping and drainage, mounting surface and electrical readiness should be discussed based on the actual property.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Planning the visit for Dombivli",
          "content": "For a request from Dombivli, confirm the exact address and current service coverage before relying on a technician visit. If this is a replacement or relocation, explain what equipment already exists and whether dismantling or transport is part of the request."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        },
        {
          "question": "What should be checked after installation?",
          "answer": "Ask the technician to explain the basic operating checks, drainage and controls, and to note any site limitations or follow-up recommendations."
        },
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        }
      ]
    },
    "navi-mumbai": {
      "slug": "navi-mumbai",
      "locationName": "Navi Mumbai",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Navi Mumbai | SC Cool Service",
      "description": "Planning AC installation in Navi Mumbai? Discuss unit placement, piping, drainage and site requirements with SC Cool Service before confirming a visit.",
      "h1": "Get your new AC installation organised in Navi Mumbai",
      "intro": "Before arranging installation in Navi Mumbai, share the AC model, room details and proposed unit positions. Mounting, drainage, pipe routing, electrical arrangements and site access can affect the work, so the scope should be checked first.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Details for your Navi Mumbai address",
          "content": "When enquiring from Navi Mumbai, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. Share the AC model or capacity if available, but do not guess specifications if you are unsure."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Should I buy installation materials separately?",
          "answer": "Do not assume either way. Ask which materials and tasks are included in the quote and whether any site-specific extras would be charged separately."
        },
        {
          "question": "What information is needed for AC installation in Navi Mumbai?",
          "answer": "Share the AC model or type, property address, proposed installation location and whether the unit is new or relocated. The team can discuss site requirements and availability."
        },
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        }
      ]
    },
    "panvel": {
      "slug": "panvel",
      "locationName": "Panvel",
      "region": "Extended Suburbs & MMR",
      "label": "AC Installation",
      "title": "AC Installation in Panvel | SC Cool Service",
      "description": "Arrange an AC installation enquiry for Panvel. Share the AC model and property details so site requirements, materials and availability can be confirmed.",
      "h1": "Discuss AC fitting requirements in Panvel",
      "intro": "A smooth installation begins with a clear picture of the site. For your Panvel address, explain whether the AC is new or being relocated and ask which materials, mounting tasks and installation checks are included.",
      "sections": [
        {
          "heading": "Details to share before installation",
          "content": "Provide the AC model or capacity if known, the room where it will be installed and whether the unit is new or relocated. Mention any site access limitations so the required work can be discussed."
        },
        {
          "heading": "Site items to assess",
          "content": "The installation plan may depend on indoor and outdoor unit placement, mounting support, drainage route, pipe length and electrical arrangements. A qualified technician should assess the site and confirm the agreed scope."
        },
        {
          "heading": "Before arranging work in Panvel",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Panvel should be confirmed before an appointment is treated as booked. Let the team know about any access limitations, mounting constraints or building permissions that you already know about."
        },
        {
          "heading": "Confirm the quote and inclusions",
          "content": "Ask whether standard mounting, piping, wiring, drain arrangements, commissioning and any extra materials are included. Costs depend on the actual site and should be confirmed before work starts."
        }
      ],
      "faqs": [
        {
          "question": "Can installation cost vary by property?",
          "answer": "Yes. Access, piping length, mounting requirements and additional materials can affect the total. Request a quote based on the actual site and agreed scope."
        },
        {
          "question": "Can an AC be installed in a room that has no existing unit?",
          "answer": "It may be possible, but the site needs to be assessed for placement, drainage, piping and electrical requirements before installation is confirmed."
        },
        {
          "question": "Can you reinstall an AC after relocation?",
          "answer": "Relocation can involve dismantling, transport, checking the unit and fitting it at the new site. Share the old and new requirements so the team can confirm the scope."
        }
      ]
    }
  },
  "maintenance": {
    "colaba": {
      "slug": "colaba",
      "locationName": "Colaba",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Colaba, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Colaba. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "Plan preventive AC maintenance in Colaba",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Colaba address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Colaba",
          "content": "A useful request from Colaba explains the AC type, the work needed and any access details that could affect the visit. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "cuffe-parade": {
      "slug": "cuffe-parade",
      "locationName": "Cuffe Parade",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Cuffe Parade, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Cuffe Parade? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Keep your AC maintenance on track in Cuffe Parade",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Cuffe Parade property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Cuffe Parade",
          "content": "Before arranging work in Cuffe Parade, confirm the address, the unit's position and the service tasks expected. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Cuffe Parade?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "nariman-point": {
      "slug": "nariman-point",
      "locationName": "Nariman Point",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Nariman Point, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Nariman Point, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "AC upkeep and performance checks in Nariman Point",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Nariman Point.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Nariman Point",
          "content": "When planning work at a property in Nariman Point, share the building access arrangements and the unit's location before a visit is discussed. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Nariman Point?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "churchgate": {
      "slug": "churchgate",
      "locationName": "Churchgate",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Churchgate, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Churchgate. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Arrange routine AC maintenance in Churchgate",
      "intro": "For maintenance in Churchgate, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Churchgate address",
          "content": "For an enquiry from Churchgate, include the exact address and whether the AC is in a home, workplace or another type of property. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "fort": {
      "slug": "fort",
      "locationName": "Fort",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Fort, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Fort. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "A practical maintenance plan for your AC in Fort",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Fort address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Fort",
          "content": "A useful request from Fort explains the AC type, the work needed and any access details that could affect the visit. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Fort?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "kala-ghoda": {
      "slug": "kala-ghoda",
      "locationName": "Kala Ghoda",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Kala Ghoda, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Kala Ghoda? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Discuss recurring AC concerns in Kala Ghoda",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Kala Ghoda property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Kala Ghoda",
          "content": "Before arranging work in Kala Ghoda, confirm the address, the unit's position and the service tasks expected. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Kala Ghoda?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "marine-lines": {
      "slug": "marine-lines",
      "locationName": "Marine Lines",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Marine Lines, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Marine Lines, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "Plan preventive AC maintenance in Marine Lines",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Marine Lines.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Marine Lines",
          "content": "When planning work at a property in Marine Lines, share the building access arrangements and the unit's location before a visit is discussed. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "charni-road": {
      "slug": "charni-road",
      "locationName": "Charni Road",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Charni Road, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Charni Road. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Keep your AC maintenance on track in Charni Road",
      "intro": "For maintenance in Charni Road, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Charni Road address",
          "content": "For an enquiry from Charni Road, include the exact address and whether the AC is in a home, workplace or another type of property. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Charni Road?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "girgaon": {
      "slug": "girgaon",
      "locationName": "Girgaon",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Girgaon, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Girgaon. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "AC upkeep and performance checks in Girgaon",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Girgaon address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Girgaon",
          "content": "A useful request from Girgaon explains the AC type, the work needed and any access details that could affect the visit. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Girgaon?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "walkeshwar": {
      "slug": "walkeshwar",
      "locationName": "Walkeshwar",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Walkeshwar, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Walkeshwar? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Arrange routine AC maintenance in Walkeshwar",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Walkeshwar property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Walkeshwar",
          "content": "Before arranging work in Walkeshwar, confirm the address, the unit's position and the service tasks expected. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "malabar-hill": {
      "slug": "malabar-hill",
      "locationName": "Malabar Hill",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Malabar Hill, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Malabar Hill, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "A practical maintenance plan for your AC in Malabar Hill",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Malabar Hill.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Malabar Hill",
          "content": "When planning work at a property in Malabar Hill, share the building access arrangements and the unit's location before a visit is discussed. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Malabar Hill?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "cumballa-hill": {
      "slug": "cumballa-hill",
      "locationName": "Cumballa Hill",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Cumballa Hill, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Cumballa Hill. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Discuss recurring AC concerns in Cumballa Hill",
      "intro": "For maintenance in Cumballa Hill, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Cumballa Hill address",
          "content": "For an enquiry from Cumballa Hill, include the exact address and whether the AC is in a home, workplace or another type of property. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Cumballa Hill?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "breach-candy": {
      "slug": "breach-candy",
      "locationName": "Breach Candy",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Breach Candy, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Breach Candy. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "Plan preventive AC maintenance in Breach Candy",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Breach Candy address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Breach Candy",
          "content": "A useful request from Breach Candy explains the AC type, the work needed and any access details that could affect the visit. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "tardeo": {
      "slug": "tardeo",
      "locationName": "Tardeo",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Tardeo, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Tardeo? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Keep your AC maintenance on track in Tardeo",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Tardeo property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Tardeo",
          "content": "Before arranging work in Tardeo, confirm the address, the unit's position and the service tasks expected. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Tardeo?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "byculla": {
      "slug": "byculla",
      "locationName": "Byculla",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Byculla, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Byculla, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "AC upkeep and performance checks in Byculla",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Byculla.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Byculla",
          "content": "When planning work at a property in Byculla, share the building access arrangements and the unit's location before a visit is discussed. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Byculla?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "mazgaon": {
      "slug": "mazgaon",
      "locationName": "Mazgaon",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Mazgaon, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Mazgaon. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Arrange routine AC maintenance in Mazgaon",
      "intro": "For maintenance in Mazgaon, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Mazgaon address",
          "content": "For an enquiry from Mazgaon, include the exact address and whether the AC is in a home, workplace or another type of property. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "parel": {
      "slug": "parel",
      "locationName": "Parel",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Parel, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Parel. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "A practical maintenance plan for your AC in Parel",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Parel address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Parel",
          "content": "A useful request from Parel explains the AC type, the work needed and any access details that could affect the visit. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Parel?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "lower-parel": {
      "slug": "lower-parel",
      "locationName": "Lower Parel",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Lower Parel, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Lower Parel? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Discuss recurring AC concerns in Lower Parel",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Lower Parel property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Lower Parel",
          "content": "Before arranging work in Lower Parel, confirm the address, the unit's position and the service tasks expected. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Lower Parel?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "worli": {
      "slug": "worli",
      "locationName": "Worli",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Worli, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Worli, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "Plan preventive AC maintenance in Worli",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Worli.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Worli",
          "content": "When planning work at a property in Worli, share the building access arrangements and the unit's location before a visit is discussed. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "prabhadevi": {
      "slug": "prabhadevi",
      "locationName": "Prabhadevi",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Prabhadevi, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Prabhadevi. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Keep your AC maintenance on track in Prabhadevi",
      "intro": "For maintenance in Prabhadevi, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Prabhadevi address",
          "content": "For an enquiry from Prabhadevi, include the exact address and whether the AC is in a home, workplace or another type of property. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Prabhadevi?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "dadar": {
      "slug": "dadar",
      "locationName": "Dadar",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Dadar, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Dadar. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "AC upkeep and performance checks in Dadar",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Dadar address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Dadar",
          "content": "A useful request from Dadar explains the AC type, the work needed and any access details that could affect the visit. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Dadar?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "matunga": {
      "slug": "matunga",
      "locationName": "Matunga",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Matunga, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Matunga? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Arrange routine AC maintenance in Matunga",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Matunga property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Matunga",
          "content": "Before arranging work in Matunga, confirm the address, the unit's position and the service tasks expected. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "sion": {
      "slug": "sion",
      "locationName": "Sion",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Sion, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Sion, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "A practical maintenance plan for your AC in Sion",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Sion.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Sion",
          "content": "When planning work at a property in Sion, share the building access arrangements and the unit's location before a visit is discussed. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Sion?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "wadala": {
      "slug": "wadala",
      "locationName": "Wadala",
      "region": "South Mumbai",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Wadala, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Wadala. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Discuss recurring AC concerns in Wadala",
      "intro": "For maintenance in Wadala, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Wadala address",
          "content": "For an enquiry from Wadala, include the exact address and whether the AC is in a home, workplace or another type of property. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Wadala?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "bandra": {
      "slug": "bandra",
      "locationName": "Bandra",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Bandra, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Bandra. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "Plan preventive AC maintenance in Bandra",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Bandra address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Bandra",
          "content": "A clear request for Bandra includes the address area, the unit type and what you want the technician to check or do. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "khar": {
      "slug": "khar",
      "locationName": "Khar",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Khar, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Khar? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Keep your AC maintenance on track in Khar",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Khar property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Khar",
          "content": "For work at an address in Khar, confirm coverage and visit timing rather than assuming availability from the locality name alone. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Khar?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "santacruz": {
      "slug": "santacruz",
      "locationName": "Santacruz",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Santacruz, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Santacruz, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "AC upkeep and performance checks in Santacruz",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Santacruz.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Santacruz",
          "content": "For a property in Santacruz, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Santacruz?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "vile-parle": {
      "slug": "vile-parle",
      "locationName": "Vile Parle",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Vile Parle, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Vile Parle. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Arrange routine AC maintenance in Vile Parle",
      "intro": "For maintenance in Vile Parle, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Vile Parle address",
          "content": "When enquiring from Vile Parle, mention the property type, AC model if known and the time window you would prefer. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "juhu": {
      "slug": "juhu",
      "locationName": "Juhu",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Juhu, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Juhu. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "A practical maintenance plan for your AC in Juhu",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Juhu address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Juhu",
          "content": "A clear request for Juhu includes the address area, the unit type and what you want the technician to check or do. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Juhu?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "andheri": {
      "slug": "andheri",
      "locationName": "Andheri",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Andheri, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Andheri? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Discuss recurring AC concerns in Andheri",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Andheri property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Andheri",
          "content": "For work at an address in Andheri, confirm coverage and visit timing rather than assuming availability from the locality name alone. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Andheri?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "jogeshwari": {
      "slug": "jogeshwari",
      "locationName": "Jogeshwari",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Jogeshwari, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Jogeshwari, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "Plan preventive AC maintenance in Jogeshwari",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Jogeshwari.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Jogeshwari",
          "content": "For a property in Jogeshwari, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "goregaon": {
      "slug": "goregaon",
      "locationName": "Goregaon",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Goregaon, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Goregaon. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Keep your AC maintenance on track in Goregaon",
      "intro": "For maintenance in Goregaon, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Goregaon address",
          "content": "When enquiring from Goregaon, mention the property type, AC model if known and the time window you would prefer. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Goregaon?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "malad": {
      "slug": "malad",
      "locationName": "Malad",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Malad, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Malad. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "AC upkeep and performance checks in Malad",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Malad address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Malad",
          "content": "A clear request for Malad includes the address area, the unit type and what you want the technician to check or do. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Malad?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "kandivali": {
      "slug": "kandivali",
      "locationName": "Kandivali",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Kandivali, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Kandivali? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Arrange routine AC maintenance in Kandivali",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Kandivali property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Kandivali",
          "content": "For work at an address in Kandivali, confirm coverage and visit timing rather than assuming availability from the locality name alone. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "borivali": {
      "slug": "borivali",
      "locationName": "Borivali",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Borivali, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Borivali, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "A practical maintenance plan for your AC in Borivali",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Borivali.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Borivali",
          "content": "For a property in Borivali, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Borivali?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "dahisar": {
      "slug": "dahisar",
      "locationName": "Dahisar",
      "region": "Western Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Dahisar, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Dahisar. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Discuss recurring AC concerns in Dahisar",
      "intro": "For maintenance in Dahisar, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Dahisar address",
          "content": "When enquiring from Dahisar, mention the property type, AC model if known and the time window you would prefer. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Dahisar?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "kurla": {
      "slug": "kurla",
      "locationName": "Kurla",
      "region": "Central Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Kurla, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Kurla. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "Plan preventive AC maintenance in Kurla",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Kurla address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Kurla",
          "content": "The most useful enquiry for Kurla includes the AC type, symptoms or task, and any access information relevant to the visit. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "sakinaka": {
      "slug": "sakinaka",
      "locationName": "Sakinaka",
      "region": "Central Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Sakinaka, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Sakinaka? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Keep your AC maintenance on track in Sakinaka",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Sakinaka property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Sakinaka",
          "content": "Before scheduling work in Sakinaka, confirm the service scope and whether the requested address is currently covered. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Sakinaka?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "ghatkopar": {
      "slug": "ghatkopar",
      "locationName": "Ghatkopar",
      "region": "Central Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Ghatkopar, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Ghatkopar, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "AC upkeep and performance checks in Ghatkopar",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Ghatkopar.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Ghatkopar",
          "content": "For an AC request in Ghatkopar, describe the unit and the work needed, then confirm the exact address and appointment availability. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Ghatkopar?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "vidyavihar": {
      "slug": "vidyavihar",
      "locationName": "Vidyavihar",
      "region": "Central Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Vidyavihar, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Vidyavihar. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Arrange routine AC maintenance in Vidyavihar",
      "intro": "For maintenance in Vidyavihar, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Vidyavihar address",
          "content": "When contacting the team from Vidyavihar, explain whether the request is for a single unit or several units at the same property. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "vikhroli": {
      "slug": "vikhroli",
      "locationName": "Vikhroli",
      "region": "Central Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Vikhroli, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Vikhroli. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "A practical maintenance plan for your AC in Vikhroli",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Vikhroli address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Vikhroli",
          "content": "The most useful enquiry for Vikhroli includes the AC type, symptoms or task, and any access information relevant to the visit. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Vikhroli?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "kanjurmarg": {
      "slug": "kanjurmarg",
      "locationName": "Kanjurmarg",
      "region": "Central Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Kanjurmarg, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Kanjurmarg? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Discuss recurring AC concerns in Kanjurmarg",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Kanjurmarg property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Kanjurmarg",
          "content": "Before scheduling work in Kanjurmarg, confirm the service scope and whether the requested address is currently covered. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Kanjurmarg?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "bhandup": {
      "slug": "bhandup",
      "locationName": "Bhandup",
      "region": "Central Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Bhandup, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Bhandup, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "Plan preventive AC maintenance in Bhandup",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Bhandup.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Bhandup",
          "content": "For an AC request in Bhandup, describe the unit and the work needed, then confirm the exact address and appointment availability. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "mulund": {
      "slug": "mulund",
      "locationName": "Mulund",
      "region": "Central Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Mulund, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Mulund. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Keep your AC maintenance on track in Mulund",
      "intro": "For maintenance in Mulund, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Mulund address",
          "content": "When contacting the team from Mulund, explain whether the request is for a single unit or several units at the same property. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Mulund?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "chembur": {
      "slug": "chembur",
      "locationName": "Chembur",
      "region": "Harbour Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Chembur, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Chembur. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "AC upkeep and performance checks in Chembur",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Chembur address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Chembur",
          "content": "A request from Chembur is easier to assess when it includes the unit type, the symptoms and any site-access requirements. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Chembur?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "govandi": {
      "slug": "govandi",
      "locationName": "Govandi",
      "region": "Harbour Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Govandi, Mumbai | SC Cool Service",
      "description": "Need AC upkeep in Govandi? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Arrange routine AC maintenance in Govandi",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Govandi property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Govandi",
          "content": "For an address in Govandi, confirm the visit window and agreed work scope directly with the service team. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "mankhurd": {
      "slug": "mankhurd",
      "locationName": "Mankhurd",
      "region": "Harbour Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Mankhurd, Mumbai | SC Cool Service",
      "description": "Enquire about AC maintenance in Mankhurd, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "A practical maintenance plan for your AC in Mankhurd",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Mankhurd.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Mankhurd",
          "content": "For a request from Mankhurd, share the exact address area and AC details so coverage and the type of work can be discussed. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Mankhurd?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "trombay": {
      "slug": "trombay",
      "locationName": "Trombay",
      "region": "Harbour Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Trombay, Mumbai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Trombay. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Discuss recurring AC concerns in Trombay",
      "intro": "For maintenance in Trombay, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Trombay address",
          "content": "When arranging an enquiry in Trombay, explain the issue or task clearly and ask the team to confirm timing before planning around a visit. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Trombay?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "anushakti-nagar": {
      "slug": "anushakti-nagar",
      "locationName": "Anushakti Nagar",
      "region": "Harbour Suburbs",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Anushakti Nagar, Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Anushakti Nagar. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "Plan preventive AC maintenance in Anushakti Nagar",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Anushakti Nagar address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Anushakti Nagar",
          "content": "A request from Anushakti Nagar is easier to assess when it includes the unit type, the symptoms and any site-access requirements. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "mira-road": {
      "slug": "mira-road",
      "locationName": "Mira Road",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Mira Road | SC Cool Service",
      "description": "Need AC upkeep in Mira Road? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Keep your AC maintenance on track in Mira Road",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Mira Road property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Mira Road",
          "content": "For an AC requirement in Mira Road, share the address and work details first; coverage and scheduling should be confirmed directly. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Mira Road?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "bhayandar": {
      "slug": "bhayandar",
      "locationName": "Bhayandar",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Bhayandar | SC Cool Service",
      "description": "Enquire about AC maintenance in Bhayandar, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "AC upkeep and performance checks in Bhayandar",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Bhayandar.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Bhayandar",
          "content": "For a request from Bhayandar, confirm the exact address and current service coverage before relying on a technician visit. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Bhayandar?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "vasai": {
      "slug": "vasai",
      "locationName": "Vasai",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Vasai | SC Cool Service",
      "description": "Plan AC maintenance for your property in Vasai. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Arrange routine AC maintenance in Vasai",
      "intro": "For maintenance in Vasai, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Vasai address",
          "content": "When enquiring from Vasai, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "virar": {
      "slug": "virar",
      "locationName": "Virar",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Virar | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Virar. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "A practical maintenance plan for your AC in Virar",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Virar address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Virar",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Virar should be confirmed before an appointment is treated as booked. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Virar?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "thane": {
      "slug": "thane",
      "locationName": "Thane",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Thane | SC Cool Service",
      "description": "Need AC upkeep in Thane? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Discuss recurring AC concerns in Thane",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Thane property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Thane",
          "content": "For an AC requirement in Thane, share the address and work details first; coverage and scheduling should be confirmed directly. If a problem returns after a previous visit, describe when it started again and what work was done previously, if known."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Thane?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "kalyan": {
      "slug": "kalyan",
      "locationName": "Kalyan",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Kalyan | SC Cool Service",
      "description": "Enquire about AC maintenance in Kalyan, from planned checks to recurring issues. Confirm the inspection scope and any additional repair costs before work begins.",
      "h1": "Plan preventive AC maintenance in Kalyan",
      "intro": "Preventive upkeep is not identical for every AC. Share the model, service history if available and any repeated drainage, airflow or noise concerns when enquiring about maintenance in Kalyan.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Planning the visit for Kalyan",
          "content": "For a request from Kalyan, confirm the exact address and current service coverage before relying on a technician visit. If several units are involved, list their locations within the property and any different symptoms rather than describing them as one issue."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    },
    "dombivli": {
      "slug": "dombivli",
      "locationName": "Dombivli",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Dombivli | SC Cool Service",
      "description": "Plan AC maintenance for your property in Dombivli. Describe the unit and its operating history so suitable checks and availability can be discussed.",
      "h1": "Keep your AC maintenance on track in Dombivli",
      "intro": "For maintenance in Dombivli, start with what the unit has been doing over time: whether airflow has changed, the unit has become noisy, or servicing is overdue. Confirm the proposed inspection tasks before booking.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Details for your Dombivli address",
          "content": "When enquiring from Dombivli, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. Maintenance can identify concerns but cannot guarantee that future faults will never occur; ask for findings and recommendations after inspection."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        },
        {
          "question": "What should I keep after a maintenance visit?",
          "answer": "Keep a note of the tasks performed, any findings and recommendations, plus the next suggested check if provided. Ask which items were inspected and which were outside the agreed scope."
        },
        {
          "question": "How often should I arrange AC maintenance in Dombivli?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        }
      ]
    },
    "navi-mumbai": {
      "slug": "navi-mumbai",
      "locationName": "Navi Mumbai",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Navi Mumbai | SC Cool Service",
      "description": "Discuss preventive AC maintenance in Navi Mumbai. Share the unit's usage, service history and recurring symptoms with SC Cool Service to clarify the required checks.",
      "h1": "AC upkeep and performance checks in Navi Mumbai",
      "intro": "Maintenance is easier to plan when the unit's age, usage and past issues are known. For an AC at your Navi Mumbai address, share its operating pattern and any recurring symptoms so the checks can be discussed.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "Before arranging work in Navi Mumbai",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Navi Mumbai should be confirmed before an appointment is treated as booked. Mention whether the unit is used occasionally or for long daily periods; the usage pattern helps frame the maintenance enquiry."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "How often should I arrange AC maintenance in Navi Mumbai?",
          "answer": "The interval depends on the manufacturer's guidance, usage, environment and unit condition. Share these details and ask for a schedule appropriate to your AC."
        },
        {
          "question": "Is maintenance the same as AC repair?",
          "answer": "No. Maintenance is intended for checks and upkeep, while repair addresses a fault. If a fault is found during inspection, confirm the diagnosis and cost separately."
        },
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        }
      ]
    },
    "panvel": {
      "slug": "panvel",
      "locationName": "Panvel",
      "region": "Extended Suburbs & MMR",
      "label": "AC Maintenance",
      "title": "AC Maintenance in Panvel | SC Cool Service",
      "description": "Need AC upkeep in Panvel? Contact SC Cool Service about routine inspection, performance concerns and maintenance requirements for your unit.",
      "h1": "Arrange routine AC maintenance in Panvel",
      "intro": "If the AC is used frequently or has shown repeated changes in performance, describe the pattern rather than waiting for a complete breakdown. The maintenance requirements for your Panvel property depend on the unit and its condition.",
      "sections": [
        {
          "heading": "Information that helps plan maintenance",
          "content": "Mention the AC type, approximate age, usage pattern and any issues that have returned after earlier servicing. This helps the team understand the request without assuming a diagnosis."
        },
        {
          "heading": "Preventive checks and repair are different",
          "content": "Maintenance focuses on inspection and upkeep; repair addresses a fault. If a check reveals a defect, ask for the diagnosis, repair recommendation and separate cost before approving additional work."
        },
        {
          "heading": "What to confirm for Panvel",
          "content": "For an AC requirement in Panvel, share the address and work details first; coverage and scheduling should be confirmed directly. Keep a simple record of service dates and the tasks completed so future visits can take the unit's history into account."
        },
        {
          "heading": "Keep a simple service record",
          "content": "Record the service date, tasks completed and any recommendations. This can help you recognise recurring issues and discuss the unit's history at the next visit."
        }
      ],
      "faqs": [
        {
          "question": "What should I mention for a recurring AC issue?",
          "answer": "Explain when the issue occurs, how often it returns and whether any previous work was done. This history can help the team discuss the next inspection steps."
        },
        {
          "question": "Can I request maintenance for multiple units?",
          "answer": "Yes. Share the number of units, their types and any known issues at the property in {name}. The team can discuss the requested scope and availability."
        },
        {
          "question": "Does maintenance guarantee that an AC will not break down?",
          "answer": "No maintenance visit can guarantee that a unit will never develop a fault. Routine checks can help identify some concerns, but performance depends on the unit's condition and use."
        }
      ]
    }
  },
  "near": {
    "colaba": {
      "slug": "colaba",
      "locationName": "Colaba",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Colaba, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Colaba? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Check AC service availability near Colaba",
      "intro": "To check whether a visit can be arranged near Colaba, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Colaba",
          "content": "Before arranging work in Colaba, confirm the address, the unit's position and the service tasks expected. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Colaba?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "cuffe-parade": {
      "slug": "cuffe-parade",
      "locationName": "Cuffe Parade",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Cuffe Parade, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Cuffe Parade. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Looking for AC service near Cuffe Parade?",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Cuffe Parade, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Cuffe Parade",
          "content": "When planning work at a property in Cuffe Parade, share the building access arrangements and the unit's location before a visit is discussed. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Cuffe Parade?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Cuffe Parade?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "nariman-point": {
      "slug": "nariman-point",
      "locationName": "Nariman Point",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Nariman Point, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Nariman Point? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Discuss a local AC service visit near Nariman Point",
      "intro": "If you are searching for AC service near Nariman Point, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Nariman Point address",
          "content": "For an enquiry from Nariman Point, include the exact address and whether the AC is in a home, workplace or another type of property. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Nariman Point?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Nariman Point?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "churchgate": {
      "slug": "churchgate",
      "locationName": "Churchgate",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Churchgate, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Churchgate. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Check coverage for your AC service request in Churchgate",
      "intro": "For an enquiry near Churchgate, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Churchgate",
          "content": "A useful request from Churchgate explains the AC type, the work needed and any access details that could affect the visit. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Churchgate?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "fort": {
      "slug": "fort",
      "locationName": "Fort",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Fort, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Fort? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Find out whether AC service is available near Fort",
      "intro": "To check whether a visit can be arranged near Fort, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Fort",
          "content": "Before arranging work in Fort, confirm the address, the unit's position and the service tasks expected. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Fort?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Fort?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "kala-ghoda": {
      "slug": "kala-ghoda",
      "locationName": "Kala Ghoda",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Kala Ghoda, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Kala Ghoda. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Arrange an AC service enquiry near Kala Ghoda",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Kala Ghoda, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Kala Ghoda",
          "content": "When planning work at a property in Kala Ghoda, share the building access arrangements and the unit's location before a visit is discussed. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Kala Ghoda?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Kala Ghoda?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "marine-lines": {
      "slug": "marine-lines",
      "locationName": "Marine Lines",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Marine Lines, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Marine Lines? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Check AC service availability near Marine Lines",
      "intro": "If you are searching for AC service near Marine Lines, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Marine Lines address",
          "content": "For an enquiry from Marine Lines, include the exact address and whether the AC is in a home, workplace or another type of property. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Marine Lines?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "charni-road": {
      "slug": "charni-road",
      "locationName": "Charni Road",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Charni Road, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Charni Road. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Looking for AC service near Charni Road?",
      "intro": "For an enquiry near Charni Road, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Charni Road",
          "content": "A useful request from Charni Road explains the AC type, the work needed and any access details that could affect the visit. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Charni Road?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Charni Road?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "girgaon": {
      "slug": "girgaon",
      "locationName": "Girgaon",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Girgaon, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Girgaon? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Discuss a local AC service visit near Girgaon",
      "intro": "To check whether a visit can be arranged near Girgaon, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Girgaon",
          "content": "Before arranging work in Girgaon, confirm the address, the unit's position and the service tasks expected. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Girgaon?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Girgaon?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "walkeshwar": {
      "slug": "walkeshwar",
      "locationName": "Walkeshwar",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Walkeshwar, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Walkeshwar. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Check coverage for your AC service request in Walkeshwar",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Walkeshwar, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Walkeshwar",
          "content": "When planning work at a property in Walkeshwar, share the building access arrangements and the unit's location before a visit is discussed. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Walkeshwar?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "malabar-hill": {
      "slug": "malabar-hill",
      "locationName": "Malabar Hill",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Malabar Hill, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Malabar Hill? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Find out whether AC service is available near Malabar Hill",
      "intro": "If you are searching for AC service near Malabar Hill, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Malabar Hill address",
          "content": "For an enquiry from Malabar Hill, include the exact address and whether the AC is in a home, workplace or another type of property. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Malabar Hill?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Malabar Hill?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "cumballa-hill": {
      "slug": "cumballa-hill",
      "locationName": "Cumballa Hill",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Cumballa Hill, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Cumballa Hill. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Arrange an AC service enquiry near Cumballa Hill",
      "intro": "For an enquiry near Cumballa Hill, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Cumballa Hill",
          "content": "A useful request from Cumballa Hill explains the AC type, the work needed and any access details that could affect the visit. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Cumballa Hill?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Cumballa Hill?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "breach-candy": {
      "slug": "breach-candy",
      "locationName": "Breach Candy",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Breach Candy, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Breach Candy? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Check AC service availability near Breach Candy",
      "intro": "To check whether a visit can be arranged near Breach Candy, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Breach Candy",
          "content": "Before arranging work in Breach Candy, confirm the address, the unit's position and the service tasks expected. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Breach Candy?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "tardeo": {
      "slug": "tardeo",
      "locationName": "Tardeo",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Tardeo, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Tardeo. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Looking for AC service near Tardeo?",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Tardeo, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Tardeo",
          "content": "When planning work at a property in Tardeo, share the building access arrangements and the unit's location before a visit is discussed. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Tardeo?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Tardeo?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "byculla": {
      "slug": "byculla",
      "locationName": "Byculla",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Byculla, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Byculla? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Discuss a local AC service visit near Byculla",
      "intro": "If you are searching for AC service near Byculla, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Byculla address",
          "content": "For an enquiry from Byculla, include the exact address and whether the AC is in a home, workplace or another type of property. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Byculla?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Byculla?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "mazgaon": {
      "slug": "mazgaon",
      "locationName": "Mazgaon",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Mazgaon, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Mazgaon. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Check coverage for your AC service request in Mazgaon",
      "intro": "For an enquiry near Mazgaon, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Mazgaon",
          "content": "A useful request from Mazgaon explains the AC type, the work needed and any access details that could affect the visit. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Mazgaon?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "parel": {
      "slug": "parel",
      "locationName": "Parel",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Parel, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Parel? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Find out whether AC service is available near Parel",
      "intro": "To check whether a visit can be arranged near Parel, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Parel",
          "content": "Before arranging work in Parel, confirm the address, the unit's position and the service tasks expected. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Parel?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Parel?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "lower-parel": {
      "slug": "lower-parel",
      "locationName": "Lower Parel",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Lower Parel, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Lower Parel. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Arrange an AC service enquiry near Lower Parel",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Lower Parel, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Lower Parel",
          "content": "When planning work at a property in Lower Parel, share the building access arrangements and the unit's location before a visit is discussed. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Lower Parel?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Lower Parel?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "worli": {
      "slug": "worli",
      "locationName": "Worli",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Worli, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Worli? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Check AC service availability near Worli",
      "intro": "If you are searching for AC service near Worli, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Worli address",
          "content": "For an enquiry from Worli, include the exact address and whether the AC is in a home, workplace or another type of property. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Worli?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "prabhadevi": {
      "slug": "prabhadevi",
      "locationName": "Prabhadevi",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Prabhadevi, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Prabhadevi. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Looking for AC service near Prabhadevi?",
      "intro": "For an enquiry near Prabhadevi, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Prabhadevi",
          "content": "A useful request from Prabhadevi explains the AC type, the work needed and any access details that could affect the visit. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Prabhadevi?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Prabhadevi?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "dadar": {
      "slug": "dadar",
      "locationName": "Dadar",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Dadar, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Dadar? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Discuss a local AC service visit near Dadar",
      "intro": "To check whether a visit can be arranged near Dadar, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Dadar",
          "content": "Before arranging work in Dadar, confirm the address, the unit's position and the service tasks expected. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Dadar?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Dadar?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "matunga": {
      "slug": "matunga",
      "locationName": "Matunga",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Matunga, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Matunga. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Check coverage for your AC service request in Matunga",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Matunga, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Matunga",
          "content": "When planning work at a property in Matunga, share the building access arrangements and the unit's location before a visit is discussed. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Matunga?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "sion": {
      "slug": "sion",
      "locationName": "Sion",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Sion, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Sion? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Find out whether AC service is available near Sion",
      "intro": "If you are searching for AC service near Sion, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Sion address",
          "content": "For an enquiry from Sion, include the exact address and whether the AC is in a home, workplace or another type of property. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Sion?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Sion?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "wadala": {
      "slug": "wadala",
      "locationName": "Wadala",
      "region": "South Mumbai",
      "label": "Local AC Service",
      "title": "AC Service Near in Wadala, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Wadala. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Arrange an AC service enquiry near Wadala",
      "intro": "For an enquiry near Wadala, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Wadala",
          "content": "A useful request from Wadala explains the AC type, the work needed and any access details that could affect the visit. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Wadala?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Wadala?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "bandra": {
      "slug": "bandra",
      "locationName": "Bandra",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Bandra, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Bandra? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Check AC service availability near Bandra",
      "intro": "To check whether a visit can be arranged near Bandra, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Bandra",
          "content": "For work at an address in Bandra, confirm coverage and visit timing rather than assuming availability from the locality name alone. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Bandra?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "khar": {
      "slug": "khar",
      "locationName": "Khar",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Khar, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Khar. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Looking for AC service near Khar?",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Khar, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Khar",
          "content": "For a property in Khar, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Khar?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Khar?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "santacruz": {
      "slug": "santacruz",
      "locationName": "Santacruz",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Santacruz, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Santacruz? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Discuss a local AC service visit near Santacruz",
      "intro": "If you are searching for AC service near Santacruz, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Santacruz address",
          "content": "When enquiring from Santacruz, mention the property type, AC model if known and the time window you would prefer. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Santacruz?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Santacruz?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "vile-parle": {
      "slug": "vile-parle",
      "locationName": "Vile Parle",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Vile Parle, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Vile Parle. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Check coverage for your AC service request in Vile Parle",
      "intro": "For an enquiry near Vile Parle, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Vile Parle",
          "content": "A clear request for Vile Parle includes the address area, the unit type and what you want the technician to check or do. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Vile Parle?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "juhu": {
      "slug": "juhu",
      "locationName": "Juhu",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Juhu, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Juhu? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Find out whether AC service is available near Juhu",
      "intro": "To check whether a visit can be arranged near Juhu, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Juhu",
          "content": "For work at an address in Juhu, confirm coverage and visit timing rather than assuming availability from the locality name alone. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Juhu?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Juhu?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "andheri": {
      "slug": "andheri",
      "locationName": "Andheri",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Andheri, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Andheri. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Arrange an AC service enquiry near Andheri",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Andheri, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Andheri",
          "content": "For a property in Andheri, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Andheri?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Andheri?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "jogeshwari": {
      "slug": "jogeshwari",
      "locationName": "Jogeshwari",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Jogeshwari, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Jogeshwari? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Check AC service availability near Jogeshwari",
      "intro": "If you are searching for AC service near Jogeshwari, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Jogeshwari address",
          "content": "When enquiring from Jogeshwari, mention the property type, AC model if known and the time window you would prefer. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Jogeshwari?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "goregaon": {
      "slug": "goregaon",
      "locationName": "Goregaon",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Goregaon, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Goregaon. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Looking for AC service near Goregaon?",
      "intro": "For an enquiry near Goregaon, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Goregaon",
          "content": "A clear request for Goregaon includes the address area, the unit type and what you want the technician to check or do. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Goregaon?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Goregaon?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "malad": {
      "slug": "malad",
      "locationName": "Malad",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Malad, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Malad? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Discuss a local AC service visit near Malad",
      "intro": "To check whether a visit can be arranged near Malad, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Malad",
          "content": "For work at an address in Malad, confirm coverage and visit timing rather than assuming availability from the locality name alone. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Malad?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Malad?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "kandivali": {
      "slug": "kandivali",
      "locationName": "Kandivali",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Kandivali, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Kandivali. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Check coverage for your AC service request in Kandivali",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Kandivali, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Kandivali",
          "content": "For a property in Kandivali, share the exact locality and the AC's symptoms or installation requirements so the service request can be assessed. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Kandivali?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "borivali": {
      "slug": "borivali",
      "locationName": "Borivali",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Borivali, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Borivali? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Find out whether AC service is available near Borivali",
      "intro": "If you are searching for AC service near Borivali, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Borivali address",
          "content": "When enquiring from Borivali, mention the property type, AC model if known and the time window you would prefer. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Borivali?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Borivali?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "dahisar": {
      "slug": "dahisar",
      "locationName": "Dahisar",
      "region": "Western Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Dahisar, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Dahisar. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Arrange an AC service enquiry near Dahisar",
      "intro": "For an enquiry near Dahisar, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Dahisar",
          "content": "A clear request for Dahisar includes the address area, the unit type and what you want the technician to check or do. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Dahisar?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Dahisar?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "kurla": {
      "slug": "kurla",
      "locationName": "Kurla",
      "region": "Central Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Kurla, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Kurla? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Check AC service availability near Kurla",
      "intro": "To check whether a visit can be arranged near Kurla, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Kurla",
          "content": "Before scheduling work in Kurla, confirm the service scope and whether the requested address is currently covered. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Kurla?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "sakinaka": {
      "slug": "sakinaka",
      "locationName": "Sakinaka",
      "region": "Central Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Sakinaka, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Sakinaka. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Looking for AC service near Sakinaka?",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Sakinaka, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Sakinaka",
          "content": "For an AC request in Sakinaka, describe the unit and the work needed, then confirm the exact address and appointment availability. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Sakinaka?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Sakinaka?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "ghatkopar": {
      "slug": "ghatkopar",
      "locationName": "Ghatkopar",
      "region": "Central Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Ghatkopar, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Ghatkopar? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Discuss a local AC service visit near Ghatkopar",
      "intro": "If you are searching for AC service near Ghatkopar, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Ghatkopar address",
          "content": "When contacting the team from Ghatkopar, explain whether the request is for a single unit or several units at the same property. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Ghatkopar?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Ghatkopar?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "vidyavihar": {
      "slug": "vidyavihar",
      "locationName": "Vidyavihar",
      "region": "Central Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Vidyavihar, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Vidyavihar. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Check coverage for your AC service request in Vidyavihar",
      "intro": "For an enquiry near Vidyavihar, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Vidyavihar",
          "content": "The most useful enquiry for Vidyavihar includes the AC type, symptoms or task, and any access information relevant to the visit. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Vidyavihar?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "vikhroli": {
      "slug": "vikhroli",
      "locationName": "Vikhroli",
      "region": "Central Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Vikhroli, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Vikhroli? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Find out whether AC service is available near Vikhroli",
      "intro": "To check whether a visit can be arranged near Vikhroli, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Vikhroli",
          "content": "Before scheduling work in Vikhroli, confirm the service scope and whether the requested address is currently covered. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Vikhroli?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Vikhroli?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "kanjurmarg": {
      "slug": "kanjurmarg",
      "locationName": "Kanjurmarg",
      "region": "Central Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Kanjurmarg, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Kanjurmarg. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Arrange an AC service enquiry near Kanjurmarg",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Kanjurmarg, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Kanjurmarg",
          "content": "For an AC request in Kanjurmarg, describe the unit and the work needed, then confirm the exact address and appointment availability. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Kanjurmarg?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Kanjurmarg?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "bhandup": {
      "slug": "bhandup",
      "locationName": "Bhandup",
      "region": "Central Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Bhandup, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Bhandup? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Check AC service availability near Bhandup",
      "intro": "If you are searching for AC service near Bhandup, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Bhandup address",
          "content": "When contacting the team from Bhandup, explain whether the request is for a single unit or several units at the same property. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Bhandup?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "mulund": {
      "slug": "mulund",
      "locationName": "Mulund",
      "region": "Central Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Mulund, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Mulund. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Looking for AC service near Mulund?",
      "intro": "For an enquiry near Mulund, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Mulund",
          "content": "The most useful enquiry for Mulund includes the AC type, symptoms or task, and any access information relevant to the visit. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Mulund?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Mulund?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "chembur": {
      "slug": "chembur",
      "locationName": "Chembur",
      "region": "Harbour Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Chembur, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Chembur? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Discuss a local AC service visit near Chembur",
      "intro": "To check whether a visit can be arranged near Chembur, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Chembur",
          "content": "For an address in Chembur, confirm the visit window and agreed work scope directly with the service team. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Chembur?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Chembur?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "govandi": {
      "slug": "govandi",
      "locationName": "Govandi",
      "region": "Harbour Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Govandi, Mumbai | SC Cool Service",
      "description": "Check whether AC service is available near Govandi. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Check coverage for your AC service request in Govandi",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Govandi, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Govandi",
          "content": "For a request from Govandi, share the exact address area and AC details so coverage and the type of work can be discussed. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Govandi?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "mankhurd": {
      "slug": "mankhurd",
      "locationName": "Mankhurd",
      "region": "Harbour Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Mankhurd, Mumbai | SC Cool Service",
      "description": "Need a local AC service enquiry around Mankhurd? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Find out whether AC service is available near Mankhurd",
      "intro": "If you are searching for AC service near Mankhurd, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Mankhurd address",
          "content": "When arranging an enquiry in Mankhurd, explain the issue or task clearly and ask the team to confirm timing before planning around a visit. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Mankhurd?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Mankhurd?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "trombay": {
      "slug": "trombay",
      "locationName": "Trombay",
      "region": "Harbour Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Trombay, Mumbai | SC Cool Service",
      "description": "Ask about AC service coverage near Trombay. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Arrange an AC service enquiry near Trombay",
      "intro": "For an enquiry near Trombay, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Trombay",
          "content": "A request from Trombay is easier to assess when it includes the unit type, the symptoms and any site-access requirements. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Trombay?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Trombay?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "anushakti-nagar": {
      "slug": "anushakti-nagar",
      "locationName": "Anushakti Nagar",
      "region": "Harbour Suburbs",
      "label": "Local AC Service",
      "title": "AC Service Near in Anushakti Nagar, Mumbai | SC Cool Service",
      "description": "Looking for AC service near Anushakti Nagar? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Check AC service availability near Anushakti Nagar",
      "intro": "To check whether a visit can be arranged near Anushakti Nagar, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Anushakti Nagar",
          "content": "For an address in Anushakti Nagar, confirm the visit window and agreed work scope directly with the service team. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Anushakti Nagar?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "mira-road": {
      "slug": "mira-road",
      "locationName": "Mira Road",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Mira Road | SC Cool Service",
      "description": "Check whether AC service is available near Mira Road. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Looking for AC service near Mira Road?",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Mira Road, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Mira Road",
          "content": "For a request from Mira Road, confirm the exact address and current service coverage before relying on a technician visit. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Mira Road?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Mira Road?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "bhayandar": {
      "slug": "bhayandar",
      "locationName": "Bhayandar",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Bhayandar | SC Cool Service",
      "description": "Need a local AC service enquiry around Bhayandar? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Discuss a local AC service visit near Bhayandar",
      "intro": "If you are searching for AC service near Bhayandar, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Bhayandar address",
          "content": "When enquiring from Bhayandar, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Bhayandar?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Bhayandar?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "vasai": {
      "slug": "vasai",
      "locationName": "Vasai",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Vasai | SC Cool Service",
      "description": "Ask about AC service coverage near Vasai. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Check coverage for your AC service request in Vasai",
      "intro": "For an enquiry near Vasai, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Vasai",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Vasai should be confirmed before an appointment is treated as booked. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Vasai?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "virar": {
      "slug": "virar",
      "locationName": "Virar",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Virar | SC Cool Service",
      "description": "Looking for AC service near Virar? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Find out whether AC service is available near Virar",
      "intro": "To check whether a visit can be arranged near Virar, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Virar",
          "content": "For an AC requirement in Virar, share the address and work details first; coverage and scheduling should be confirmed directly. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Virar?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Virar?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "thane": {
      "slug": "thane",
      "locationName": "Thane",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Thane | SC Cool Service",
      "description": "Check whether AC service is available near Thane. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Arrange an AC service enquiry near Thane",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Thane, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Thane",
          "content": "For a request from Thane, confirm the exact address and current service coverage before relying on a technician visit. Treat a submitted enquiry as a request, not a confirmed appointment, until the team confirms the address and visit window."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Thane?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Thane?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "kalyan": {
      "slug": "kalyan",
      "locationName": "Kalyan",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Kalyan | SC Cool Service",
      "description": "Need a local AC service enquiry around Kalyan? Confirm your address, the task required and the available visit window directly with SC Cool Service.",
      "h1": "Check AC service availability near Kalyan",
      "intro": "If you are searching for AC service near Kalyan, the first step is to confirm that your exact address is covered. Describe the work required and ask the team to confirm the visit window before making arrangements.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Details for your Kalyan address",
          "content": "When enquiring from Kalyan, include your locality, AC type and requested work so the team can assess whether a visit can be arranged. A nearby reference point can help identify the general area, but the exact address is still needed to confirm coverage."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Kalyan?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    },
    "dombivli": {
      "slug": "dombivli",
      "locationName": "Dombivli",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Dombivli | SC Cool Service",
      "description": "Ask about AC service coverage near Dombivli. A locality name alone does not confirm availability, so share the exact address area and AC requirement.",
      "h1": "Looking for AC service near Dombivli?",
      "intro": "For an enquiry near Dombivli, send the address area, AC type and a short description of the work. The team can discuss the request and confirm current coverage rather than assuming every nearby address is serviceable.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Before arranging work in Dombivli",
          "content": "The distance and exact address can affect visit availability, so an enquiry for Dombivli should be confirmed before an appointment is treated as booked. If your preferred time is important, mention it in the first message and ask what appointment windows are actually available."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        },
        {
          "question": "How can I check AC service availability near Dombivli?",
          "answer": "Share your exact locality or address area, AC type and service requirement by phone or WhatsApp. Wait for confirmation of coverage and timing before planning around a visit."
        },
        {
          "question": "Is same-day AC service guaranteed near Dombivli?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        }
      ]
    },
    "navi-mumbai": {
      "slug": "navi-mumbai",
      "locationName": "Navi Mumbai",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Navi Mumbai | SC Cool Service",
      "description": "Looking for AC service near Navi Mumbai? Share your exact address area and requested work with SC Cool Service to confirm coverage and appointment availability.",
      "h1": "Discuss a local AC service visit near Navi Mumbai",
      "intro": "To check whether a visit can be arranged near Navi Mumbai, share your exact locality or address area, AC type and the problem you have noticed. Coverage and appointment timing should be confirmed directly before you rely on a visit.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "What to confirm for Navi Mumbai",
          "content": "For an AC requirement in Navi Mumbai, share the address and work details first; coverage and scheduling should be confirmed directly. Tell the team whether you need repair, cleaning, installation or maintenance; 'AC service' can refer to different kinds of work."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Is same-day AC service guaranteed near Navi Mumbai?",
          "answer": "No arrival time should be assumed until the team confirms it. Availability depends on the schedule, address and type of work requested."
        },
        {
          "question": "What should I include in a local service enquiry?",
          "answer": "Include the location, AC type, symptoms or requested task, and your preferred time window. This helps the team discuss the requirement and confirm availability."
        },
        {
          "question": "Can I request installation as well as repair near Navi Mumbai?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        }
      ]
    },
    "panvel": {
      "slug": "panvel",
      "locationName": "Panvel",
      "region": "Extended Suburbs & MMR",
      "label": "Local AC Service",
      "title": "AC Service Near in Panvel | SC Cool Service",
      "description": "Check whether AC service is available near Panvel. Contact SC Cool Service with your AC type, issue and preferred time window before relying on a visit.",
      "h1": "Check coverage for your AC service request in Panvel",
      "intro": "Service availability can depend on the precise address and current schedule. When enquiring near Panvel, include a nearby reference point if useful, the type of AC and whether you need repair, cleaning, installation or maintenance.",
      "sections": [
        {
          "heading": "Help confirm the exact service area",
          "content": "Share the locality and full address details privately with the team, along with a nearby reference point if it helps identify the property. Do not assume coverage based only on a broad area name."
        },
        {
          "heading": "Explain what kind of visit you need",
          "content": "State whether you need fault diagnosis, routine servicing, new installation or maintenance. This helps clarify the nature of the request before availability is discussed."
        },
        {
          "heading": "Planning the visit for Panvel",
          "content": "For a request from Panvel, confirm the exact address and current service coverage before relying on a technician visit. Ask about any inspection or call-out charge before confirming a visit, and clarify how additional work would be quoted."
        },
        {
          "heading": "Confirm timing before you plan around it",
          "content": "Ask for the available visit window, any call-out or inspection charge and what happens if the scope changes after assessment. Do not treat an enquiry as a confirmed appointment."
        }
      ],
      "faqs": [
        {
          "question": "Can I request installation as well as repair near Panvel?",
          "answer": "Explain which service you need and whether the AC is already installed. Installation and repair have different requirements, so confirm the requested scope and availability."
        },
        {
          "question": "Will a nearby landmark confirm service coverage?",
          "answer": "A landmark can help identify the area, but it does not by itself confirm coverage. Provide the exact address area and wait for confirmation from the service team."
        },
        {
          "question": "What if my address is outside the usual service area?",
          "answer": "Share the address and requirement first. The team can tell you whether a visit can be arranged; do not assume an out-of-area request will be accepted."
        }
      ]
    }
  }
};

export function getLocationServiceContent(serviceKey, location) {
  const slug = typeof location === "string" ? location : location?.slug;
  if (!slug || !serviceLocationContent[serviceKey]) return null;

  const content = serviceLocationContent[serviceKey][slug];
  if (!content) return null;

  return {
    ...content,
    // Compatibility aliases if existing components expect `name`.
    name: content.locationName,
  };
}

