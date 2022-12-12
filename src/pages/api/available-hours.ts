// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DateTime } from "luxon";
import { AvaliableHourResponse } from '../../interfaces';

const LIMITS_WORKING_HOUR = { min: 9, max: 20 };

const getAllHours = (hour: number, interval: number = 30) => {
  const minHour = hour < LIMITS_WORKING_HOUR.min ? LIMITS_WORKING_HOUR.min : hour;

  return Array.from(Array((LIMITS_WORKING_HOUR.max - minHour) * 2).keys()).map((number) => {
    if (number % 2 === 0) {
      return { hour: minHour + number/2, minutes: 0 }
    }
    return { hour: minHour + Math.floor(number/2), minutes: interval };
  })

}

const isOnWorkingHour = (date: DateTime) => {
  return date.hour < LIMITS_WORKING_HOUR.max;
}

const validateDate = (currentDate: DateTime, selectedDate: DateTime) => {
  return currentDate.hasSame(selectedDate, 'day') && isOnWorkingHour(currentDate)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AvaliableHourResponse>
) {
  let availableHoursByVet: any = [];
  /** TODO: getting vets from bd */
  const vets = [{ name: 'Isabel de Rodt' }];
  

  const currentDate =  DateTime.now().setLocale('es-CL');
  const selectedDate =  DateTime.fromISO(req.query.currentDate as string).setLocale('es-CL');

  if(validateDate(currentDate, selectedDate) || !selectedDate.hasSame(currentDate, 'day')) {
    const allHours = getAllHours(currentDate.hasSame(selectedDate, 'day') ? selectedDate.hour + 1 : 9);

    const availableHours = allHours.map(hour => {
      return selectedDate.set(hour).toISO()
    })
  
    availableHoursByVet = vets.map(vet => {
      return { vet, availableHours };
    });
  }

 
  
  res.status(200).json({ availableHoursByVet } as AvaliableHourResponse)
}
