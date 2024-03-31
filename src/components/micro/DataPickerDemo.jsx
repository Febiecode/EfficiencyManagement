"use client"

import * as React from "react"
import {useState} from 'react';
import {useRangeStore} from "../../Context/Store"

import { addDays, format, formatDate } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"


import { cn } from "../../lib/utils"
import { Button } from "../../components/ui/button"
import { Calendar } from "../../components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"


function DatePickerWithRange({ className }) {
  const range = useRangeStore((state)=>state.range)
  const [date, setDate] = useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  const formattedFromDate = date?.from?.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  const formattedToDate = date?.to?.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });
  const formattedString = `${formattedFromDate} - ${formattedToDate}`;
  const updateRange = useRangeStore((state)=>state.updateRange)
  updateRange(formattedString)




  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
export default DatePickerWithRange;

