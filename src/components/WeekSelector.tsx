import { type Dispatch, type SetStateAction } from "react";

interface propTypes {
    week: number,
    setWeek: Dispatch<SetStateAction<number>>
}
const WEEKS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const DEFAULT_WEEK = 1;

function WeekSelector({ week, setWeek }: propTypes) {
    return (<select name="" id="" className="" value={week} onChange={event => setWeek(parseInt(event.target.value))}>
        {WEEKS.map((value, index) => {
            if (value === DEFAULT_WEEK) {
                return <option key={index} value={value} selected>Week {value}</option>;
            } else if (value === 0) {
                return <option key={index} value={value} selected>N/A</option>;
            }
            return <option key={index} value={value}>Week {value}</option>
        })}
    </select>)
}

export default WeekSelector;