import { defineStore } from "pinia";

export const modeStore = defineStore("color", {
  state: () => {
    return {
      dark: true,
    };
  },
  actions: {
    updateColor(dark) {
      this.dark = dark;
    },
  },
  getters: {
    getMode: (state) => state.dark,
  },
});
