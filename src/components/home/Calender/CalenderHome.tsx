import  Calendar from "react-calendar";
import './calender.css'
import { MdKeyboardArrowRight ,MdKeyboardArrowLeft} from 'react-icons/md';

export default function Scedule() {
    return (
        <div>
            <div className="flex w-full h-full rounded-md flex-col px-3 py-3 shadow bg-white">
                <Calendar
                view={"month"}
                prevLabel={<MdKeyboardArrowLeft className="ml-1 h-6 w-6 " />}
                nextLabel={<MdKeyboardArrowRight className="ml-1 h-6 w-6 " />}
                />
            </div>
        </div>
    )
}