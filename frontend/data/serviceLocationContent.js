
export const serviceLocationContent = {
  service: {
    label: "AC Service",
    title: (name) => `AC Service in ${name}, Mumbai | SC Cool Service`,
    description: (name) =>
      `Need AC servicing in ${name}, Mumbai? Contact SC Cool Service to discuss AC cleaning, airflow or routine inspection and arrange a service visit.`,
    h1: (name) => `AC service that fits your needs in ${name}`,
    intro: (name) =>
      `If your AC needs cleaning, inspection or attention because its cooling has changed, share the details with SC Cool Service. We can discuss the service required at your location in ${name}.`,
    faqs: (name) => [
      {
        question: `How do I book AC service in ${name}?`,
        answer:
          "Call or WhatsApp with your locality, AC type and the issue you have noticed. The team can discuss the next steps and visit availability.",
      },
      {
        question: "What does an AC service include?",
        answer:
          "The scope depends on your unit and its condition. Confirm which checks and cleaning tasks are included before work begins.",
      },
      {
        question: "Can I request service if the AC is not cooling?",
        answer:
          "Yes. Describe the symptoms so the unit can be inspected and the cause assessed before repair work is recommended.",
      },
    ],
  },

  installation: {
    label: "AC Installation",
    title: (name) => `AC Installation in ${name}, Mumbai | SC Cool Service`,
    description: (name) =>
      `Planning AC installation in ${name}, Mumbai? Discuss unit placement, piping, mounting and installation requirements with SC Cool Service.`,
    h1: (name) => `A better start for your new AC in ${name}`,
    intro: (name) =>
      `Before installing an AC, consider the room layout, unit position, drainage and pipe routing. Share your site details with SC Cool Service to discuss installation in ${name}.`,
    faqs: (name) => [
      {
        question: `How can I book AC installation in ${name}?`,
        answer:
          "Share your location, AC type and whether the unit is new or being relocated. The installation requirements and availability can then be discussed.",
      },
      {
        question: "Can installation charges vary?",
        answer:
          "Yes. Site access, piping, mounting and additional materials can affect the cost. Ask for a quote based on the actual work required.",
      },
      {
        question: "Can you reinstall a relocated AC?",
        answer:
          "Relocation requirements depend on the unit and new site. Ask for an assessment of dismantling, transport, piping and installation.",
      },
    ],
  },

  maintenance: {
    label: "AC Maintenance",
    title: (name) => `AC Maintenance in ${name}, Mumbai | SC Cool Service`,
    description: (name) =>
      `Arrange AC maintenance in ${name}, Mumbai. Contact SC Cool Service to discuss preventive checks, cleaning and routine upkeep for your unit.`,
    h1: (name) => `Keep your AC cared for in ${name}`,
    intro: (name) =>
      `Dust build-up, restricted airflow and drainage issues can affect AC operation. Discuss the unit's age, usage and maintenance needs with SC Cool Service in ${name}.`,
    faqs: (name) => [
      {
        question: `How often should an AC be maintained in ${name}?`,
        answer:
          "It depends on usage, the environment and the manufacturer's recommendations. Ask for a maintenance schedule suited to your unit.",
      },
      {
        question: "Is maintenance different from repair?",
        answer:
          "Maintenance focuses on checks and upkeep, while repair addresses a fault. An inspection may reveal that repair work is also needed.",
      },
      {
        question: "Can offices request AC maintenance?",
        answer:
          "Share the office location, number of units and AC types so the maintenance requirements can be discussed.",
      },
    ],
  },

  near: {
    label: "Local AC Service",
    title: (name) => `AC Service Near ${name}, Mumbai | SC Cool Service`,
    description: (name) =>
      `Searching for AC service near ${name}, Mumbai? Contact SC Cool Service with your exact locality and AC issue to check service coverage and visit availability.`,
    h1: (name) => `Looking for AC service near ${name}?`,
    intro: (name) =>
      `Tell us your exact locality, a nearby landmark and the AC problem you are facing. SC Cool Service can discuss whether a visit to your address can be arranged.`,
    faqs: (name) => [
      {
        question: `How do I check AC service availability near ${name}?`,
        answer:
          "Share your exact address area and AC issue by phone or WhatsApp. Confirm availability before relying on a particular visit time.",
      },
      {
        question: "Is same-day AC service guaranteed?",
        answer:
          "No fixed arrival time should be assumed. Availability depends on the schedule and your address, so contact the team to check.",
      },
      {
        question: "What should I share when booking?",
        answer:
          "Provide your locality, AC type, the issue and your preferred time so the service request can be discussed.",
      },
    ],
  },
};

export function getLocationServiceContent(serviceKey, location) {
  const service = serviceLocationContent[serviceKey];

  if (!service || !location) return null;

  const name = location.name;

  return {
    label: service.label,
    title: service.title(name),
    description: service.description(name),
    h1: service.h1(name),
    intro: service.intro(name),
    faqs: service.faqs(name),
  };
}
