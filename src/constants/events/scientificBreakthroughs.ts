// Cannot use a map of <Date, string> as can have multiple events on a single date

import LifeEvent from "../../types/lifeEvent";

// Date should be in the format: yyyy-mm-dd
// TODO: Correct all the dates

const scientificBreakthroughs: LifeEvent[] = [
  {
    startDate: "1879-03-14",
    endDate: "1955-04-18",
    contents: "Nicolaus Copernicus - Heliocentric Model of the solar system",
  },
  {
    startDate: "1918-07-18",
    endDate: "2013-12-05",
    contents:
      "Galileo Galilei - Law of the Pendulum and Telescopic Observations",
  },
  {
    startDate: "1929-01-15",
    endDate: "1968-04-04",
    contents: "Isaac Newton - Laws of Motion and Universal Gravitation",
  },
  {
    startDate: "1910-08-26",
    endDate: "1997-09-05",
    contents: "Antoine Lavoisier - Law of Conservation of Mass",
  },
  {
    startDate: "1869-10-02",
    endDate: "1948-01-30",
    contents: "Charles Darwin - Theory of Evolution by Natural Selection",
  },
  {
    startDate: "1867-11-07",
    endDate: "1934-07-04",
    contents: "Gregor Mendel - Laws of Inheritance (Mendelian Genetics)",
  },
  {
    startDate: "1874-11-30",
    endDate: "1965-01-24",
    contents: "Albert Einstein - Theory of Special Relativity",
  },
  {
    startDate: "1913-02-04",
    endDate: "2005-10-24",
    contents: "Marie Curie - Discovery of Radium and Polonium",
  },
  {
    startDate: "1452-04-15",
    endDate: "1519-05-02",
    contents: "Erwin Schrödinger - Schrödinger Equation in Quantum Mechanics",
  },
  {
    startDate: "1881-10-25",
    endDate: "1973-04-08",
    contents: "Richard Feynman - Development of Quantum Electrodynamics",
  },
  {
    startDate: "1907-07-06",
    endDate: "1954-07-13",
    contents: "Jonas Salk - Polio Vaccine",
  },
  {
    startDate: "1901-12-05",
    endDate: "1966-12-15",
    contents: "James Clerk Maxwell - Maxwell's Equations in Electromagnetism",
  },
  {
    startDate: "1897-07-24",
    endDate: "1937-07-02",
    contents: "Niels Bohr - Bohr Model of the Atom",
  },
  {
    startDate: "1917-05-29",
    endDate: "1963-11-22",
    contents: "Louis Pasteur - Pasteurization and Germ Theory",
  },
  {
    startDate: "1867-04-16",
    endDate: "1912-05-30",
    contents: "Ernest Rutherford - Discovery of the Nucleus",
  },
  {
    startDate: "1871-08-19",
    endDate: "1948-01-30",
    contents: "Max Planck - Quantum Theory",
  },
  {
    startDate: "1847-02-11",
    endDate: "1931-10-18",
    contents: "Enrico Fermi - Nuclear Reactions and Fermi's Paradox",
  },
  {
    startDate: "1809-02-12",
    endDate: "1882-04-19",
    contents: "Alexander Fleming - Discovery of Penicillin",
  },
  {
    startDate: "1856-05-06",
    endDate: "1939-09-23",
    contents: "Stephen Hawking - Hawking Radiation and Black Hole Theory",
  },
];

export default scientificBreakthroughs;
