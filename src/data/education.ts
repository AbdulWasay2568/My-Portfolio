export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export const educationData: Education[] = [
  {
    institution: "COMSATS University, Lahore",
    degree: "B.Sc. Computer Science",
    location: "Lahore",
    period: "2022 – 2026",
  },
  {
    institution: "KIPS College, Lahore",
    degree: "Intermediate",
    location: "Lahore",
    period: "2018 – 2020",
  },
  {
    institution: "Dar-e-Arqam School, Lahore",
    degree: "Matric",
    location: "Lahore",
    period: "2016 – 2018",
  }
];
