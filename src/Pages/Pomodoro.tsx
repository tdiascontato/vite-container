import '../Styles/Pomodoro.css';
import { PomodoroTimer } from "../Assets/pomodoro-timer";

export default function Pomodoro(): JSX.Element{
    return(
    <div className="ContainerPomodoro">
        <PomodoroTimer
        pomodoroTime = {1500} 
        shortRestTime={300} 
        longRestTime={900}
        cycles={4}
        />
    </div>
    )
}
