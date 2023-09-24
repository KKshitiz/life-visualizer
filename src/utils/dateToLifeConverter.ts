import LifeEvent from "../types/lifeEvent";
import LifeUnit from "../types/lifeUnit";

export function convertLifeEventToUnit(
  lifeEvent: LifeEvent,
  lifeUnit: LifeUnit = "year"
) {
  const start = Date.parse(lifeEvent.startDate);
  const end = Date.parse(lifeEvent.endDate);
  const elapsedTimeInMilliseconds = Math.abs(end - start);
  const elapsedTimeInDays = elapsedTimeInMilliseconds / (1000 * 60 * 60 * 24);
  if (lifeUnit === "week") return Math.floor(elapsedTimeInDays / 7);
  if (lifeUnit === "month") return Math.floor(elapsedTimeInDays / 31);

  return Math.floor(elapsedTimeInDays / 365);
}
