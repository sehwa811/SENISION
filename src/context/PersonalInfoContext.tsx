import React, {createContext} from "react";

export const PersonalInfoContext = createContext({
  personalInfo: {
    age: "67",
    gender: "F",
    username: "이승협",
    wakeup: "07:00:00",
    breakfast: "08:30:00",
    lunch: "12:30:00",
    dinner: "18:00:00",
    bodypart: ["waist", "elbow"],
  },

  setPersonalInfo: () => {},
});
