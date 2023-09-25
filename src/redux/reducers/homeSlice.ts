import { createSlice } from "@reduxjs/toolkit";
import Events from "../../constants/events";
import BoxDetails from "../../types/box";
import LifeEvent from "../../types/lifeEvent";
import LifeUnit from "../../types/lifeUnit";
import { convertLifeEventToUnit } from "../../utils/dateToLifeConverter";
import LocalStorageService from "../../utils/localStorageService";
import { PayloadAction, RootState } from "../store";

type HomeState = {
  status: "loading" | "succeeded" | "failed" | "idle";
  tutorialDialogOpen: boolean;
  config: {
    unit: LifeUnit;
    lifeExpectancyInYears: number;
    dateOfBirth: string;
  };
  events: {
    famousDeaths: boolean;
    scientificBreakthroughs: boolean;
  };
  boxes: {
    total: number;
    perRow: number;
    completed: number;
    details: BoxDetails[];
    selection: {
      startIndex: number;
      endIndex: number;
    };
  };
};

const initialState: HomeState = {
  status: "idle",
  tutorialDialogOpen: false,
  config: {
    unit: "year",
    lifeExpectancyInYears: 90,
    dateOfBirth: (LocalStorageService.getDateOfBirth() ?? new Date())
      .toISOString()
      .split("T")[0],
  },
  events: {
    famousDeaths: false,
    scientificBreakthroughs: false,
  },
  boxes: {
    total: 0,
    perRow: 0,
    completed: 0,
    selection: {
      startIndex: 0,
      endIndex: 0,
    },
    details: [],
  },
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateUnit: (state, action: PayloadAction<LifeUnit>) => {
      state.config.unit = action.payload;
      updateBoxDetails(state);
    },
    updateLifeExpectancy: (state, action: PayloadAction<number>) => {
      state.config.lifeExpectancyInYears = action.payload;
      updateBoxDetails(state);
    },
    updateDateOfBirth: (state, action: PayloadAction<Date>) => {
      state.config.dateOfBirth = action.payload.toISOString().split("T")[0];
      updateBoxDetails(state);
      LocalStorageService.saveDateOfBirth(action.payload);
    },
    toggleFamousDeathEvents: (state) => {
      state.events.famousDeaths = !state.events.famousDeaths;
      updateBoxDetails(state);
    },
    toggleScientificBreakthroughEvents: (state) => {
      state.events.scientificBreakthroughs =
        !state.events.scientificBreakthroughs;
      updateBoxDetails(state);
    },
    toggleTutorialDialog: (state) => {
      state.tutorialDialogOpen = !state.tutorialDialogOpen;
    },
    updateSelectBoxes: (
      state,
      action: PayloadAction<{ startIndex: number; endIndex: number }>
    ) => {
      state.boxes.selection = action.payload;
      updateBoxDetails(state);
    },
  },
});

const updateBoxDetails = (state: HomeState) => {
  const lifeUnit = state.config.unit;
  const numberOfBoxes =
    lifeUnit === "year"
      ? state.config.lifeExpectancyInYears
      : lifeUnit === "month"
      ? state.config.lifeExpectancyInYears * 12
      : state.config.lifeExpectancyInYears * 52;
  const numberOfUnitsPerRow =
    lifeUnit === "year" ? 10 : lifeUnit === "month" ? 36 : 52;
  const elapsedTimeInMs = Math.abs(
    Date.now() - new Date(state.config.dateOfBirth).valueOf()
  );
  const elapsedDays = Math.ceil(elapsedTimeInMs / (1000 * 60 * 60 * 24));

  const numberOfUnitsCompleted =
    lifeUnit === "year"
      ? elapsedDays / 365
      : lifeUnit === "month"
      ? elapsedDays / 31
      : elapsedDays / 7;
  const serialNumberEvents = new Map<number, LifeEvent[]>();

  if (state.events.famousDeaths) {
    addEventsToVisualizer(serialNumberEvents, Events.famousDeaths, lifeUnit);
  }
  if (state.events.scientificBreakthroughs) {
    addEventsToVisualizer(
      serialNumberEvents,
      Events.scientificBreakthroughs,
      lifeUnit
    );
  }

  const boxes = new Array(numberOfBoxes).fill(null);
  const details: BoxDetails[] = boxes.map((_, index) => {
    return {
      events: serialNumberEvents.get(index + 1) ?? [],
      isCompleted: index < numberOfUnitsCompleted,
      index,
      unit: lifeUnit,
      isSelected:
        index >= state.boxes.selection.startIndex &&
        index <= state.boxes.selection.endIndex,
    };
  });
  state.boxes = {
    ...state.boxes,
    details,
    completed: numberOfUnitsCompleted,
    perRow: numberOfUnitsPerRow,
    total: numberOfBoxes,
  };
};

function addEventsToVisualizer(
  map: Map<number, LifeEvent[]>,
  events: LifeEvent[],
  unit: LifeUnit
) {
  events.forEach((event) => {
    const serialNumber = convertLifeEventToUnit(event, unit);
    const existingEvents = map.get(serialNumber);
    if (existingEvents !== undefined) {
      map.set(serialNumber, [...existingEvents, event]);
    } else {
      map.set(serialNumber, [event]);
    }
  });
}

export const homeState = (state: RootState) => state.home;
export const homeActions = { ...homeSlice.actions };
export default homeSlice.reducer;
