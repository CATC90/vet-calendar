import { DateTime } from "luxon";

export  type AvaliableHourResponse = {
    availableHoursByVet: Array<{
      vet: {
        name: string;
      }
      availableHours: string[];
    }>
  }