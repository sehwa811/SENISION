import React, {createContext} from "react";

export const PersonalInfoContext = createContext({
  personalInfo: {
    username: "박주혁",
    age: 20,
    phone: "01092223413",
  },

  setPersonalInfo: () => {},
});
