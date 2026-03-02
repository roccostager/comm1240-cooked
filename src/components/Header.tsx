import WeekSelector from './WeekSelector';
import { type Dispatch, type SetStateAction } from "react";

interface propTypes {
    week: number,
    setWeek: Dispatch<SetStateAction<number>>
}

function Header({ week, setWeek }: propTypes) {
    return (<div className="border-b-2 border-neutral-200/50 w-full h-12 px-4 bg-neutral-50/50 backdrop-blur-xs sticky top-0 flex items-center justify-center flex-row">
        <div className="max-w-5xl w-full">
            <WeekSelector week={week} setWeek={setWeek} />
        </div>
    </div>)
}

export default Header;