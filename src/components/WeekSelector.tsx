import { type Dispatch, type SetStateAction } from "react";

interface propTypes {
    week: number,
    setWeek: Dispatch<SetStateAction<number>>
}
const WEEKS = [1, 2, 3, 4, 5, 7, 8, 9, 10, 0];

function WeekSelector({ week, setWeek }: propTypes) {
    return (<select name="" id="" className="focus:outline-0" value={week} onChange={event => setWeek(parseInt(event.target.value))}>
        {WEEKS.map((value, index) => {
            if (value === 0) {
                return <option key={index} value={value}>N/A</option>;
            }
            return <option key={index} value={value}>Week {value}</option>
        })}
    </select>)
}

export default WeekSelector;