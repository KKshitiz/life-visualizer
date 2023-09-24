// Cannot use a map of <Date, string> as can have multiple events on a single date

import LifeEvent from "../../types/lifeEvent";

// Date should be in the format: yyyy-mm-dd

const famousDeaths: LifeEvent[] = [
  {
    startDate: "1879-03-14",
    endDate: "1955-04-18",
    contents: "Albert Einstein",
  },
  {
    startDate: "1918-07-18",
    endDate: "2013-12-05",
    contents: "Nelson Mandela",
  },
  {
    startDate: "1929-01-15",
    endDate: "1968-04-04",
    contents: "Martin Luther King Jr.",
  },
  {
    startDate: "1910-08-26",
    endDate: "1997-09-05",
    contents: "Mother Teresa",
  },
  {
    startDate: "1869-10-02",
    endDate: "1948-01-30",
    contents: "Mahatma Gandhi",
  },
  {
    startDate: "1867-11-07",
    endDate: "1934-07-04",
    contents: "Marie Curie",
  },
  {
    startDate: "1874-11-30",
    endDate: "1965-01-24",
    contents: "Winston Churchill",
  },
  {
    startDate: "1913-02-04",
    endDate: "2005-10-24",
    contents: "Rosa Parks",
  },
  {
    startDate: "1452-04-15",
    endDate: "1519-05-02",
    contents: "Leonardo da Vinci",
  },
  {
    startDate: "1881-10-25",
    endDate: "1973-04-08",
    contents: "Pablo Picasso",
  },
  {
    startDate: "1907-07-06",
    endDate: "1954-07-13",
    contents: "Frida Kahlo",
  },
  {
    startDate: "1901-12-05",
    endDate: "1966-12-15",
    contents: "Walt Disney",
  },
  {
    startDate: "1897-07-24",
    endDate: "1937-07-02",
    contents: "Amelia Earhart",
  },
  {
    startDate: "1917-05-29",
    endDate: "1963-11-22",
    contents: "John F. Kennedy",
  },
  {
    startDate: "1867-04-16",
    endDate: "1912-05-30",
    contents: "Wilbur Wright",
  },
  {
    startDate: "1871-08-19",
    endDate: "1948-01-30",
    contents: "Orville Wright",
  },
  {
    startDate: "1847-02-11",
    endDate: "1931-10-18",
    contents: "Thomas Edison",
  },
  {
    startDate: "1809-02-12",
    endDate: "1882-04-19",
    contents: "Charles Darwin",
  },
  {
    startDate: "1856-05-06",
    endDate: "1939-09-23",
    contents: "Sigmund Freud",
  },
  {
    startDate: "1884-10-11",
    endDate: "1962-11-07",
    contents: "Eleanor Roosevelt",
  },
  {
    startDate: "1882-01-30",
    endDate: "1945-04-12",
    contents: "Franklin D. Roosevelt",
  },
  {
    startDate: "1926-06-01",
    endDate: "1962-08-05",
    contents: "Marilyn Monroe",
  },
  {
    startDate: "1929-05-04",
    endDate: "1993-01-20",
    contents: "Audrey Hepburn",
  },
  {
    startDate: "1935-01-08",
    endDate: "1977-08-16",
    contents: "Elvis Presley",
  },
  {
    startDate: "1940-10-09",
    endDate: "1980-12-08",
    contents: "John Lennon",
  },
  {
    startDate: "1961-07-01",
    endDate: "1997-08-31",
    contents: "Princess Diana",
  },
];

export default famousDeaths;
