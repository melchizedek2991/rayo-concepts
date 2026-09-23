// --------------------------------------------------
// Service type
// Defines the information each Rayo Concepts service has
// --------------------------------------------------

export type Service = {
  id: string;
  name: string;
  startingPrice: number;
  description: string;
  includes: string;
};


// --------------------------------------------------
// Rayo Concepts services
// These are the current services offered by the business
// --------------------------------------------------

export const services: Service[] = [
  {
    id: "project-writing",
    name: "Project Writing",
    startingPrice: 45000,
    description:
      "Academic project writing support based on your assigned project topic.",
    includes: "Chapter one to five + preliminary pages",
  },

  {
    id: "project-editing",
    name: "Project Editing",
    startingPrice: 25000,
    description:
      "Professional editing support for your academic project.",
    includes: "Chapter one to five",
  },

  {
    id: "formatting",
    name: "Formatting",
    startingPrice: 10000,
    description:
      "Academic project formatting according to your required structure.",
    includes: "Chapter one to three",
  },

  {
    id: "data-analysis",
    name: "Data Analysis",
    startingPrice: 30000,
    description:
      "Data analysis support for your academic research project.",
    includes: "Chapter four only",
  },
];