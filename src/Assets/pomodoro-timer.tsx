import { useEffect, useState} from "react";
import { useInterval } from "../Hooks/use-interval";
import Button from "./button";
import { Timer } from "./timer";
import secondsToTime from "./seconds-to-time";

interface Props{
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element{
    
    const [mainTime, setMaintime] = useState(props.pomodoroTime);
    const [timeCount, setTimeCount] = useState(false);
    const [working, setWorking] = useState(false);
    const [resting, setResting] = useState(false);
    const [cycles, setCycles] = useState(new Array(props.cycles - 1).fill(true));
    const [completedCycles, setCompletedCycles] = useState(0);
    const [fullWorkingtime, setFullWorkingtime] = useState(0);
    const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

    
    useInterval(()=> {
        setMaintime(mainTime - 1);
        if(working) setFullWorkingtime(fullWorkingtime + 1);

    }, timeCount ? 1000 : null);
    
    const configWork = () => {
        setTimeCount(true);
        setWorking(true);
        setResting(false);
        setMaintime(props.pomodoroTime);
    };
    
    const configRest = (long: boolean) => {
        setTimeCount(true);
        setWorking(false);
        setResting(true);
        
        if (long){
            setMaintime(props.longRestTime);
        }else{ 
            setMaintime(props.shortRestTime);
        }
    };
 
    useEffect(()=>{
        if(working) document.body.classList.add('working');
        if(resting) document.body.classList.remove('working');
        if(mainTime > 0) return;
        if(working && cycles.length > 0){
            configRest(false);
            cycles.pop()
        }else if(working && cycles.length <= 0){
            configRest(true);
            setCycles(new Array(props.cycles - 1).fill(true));
            setCompletedCycles(completedCycles + 1);
        }
        if(working) setNumberOfPomodoros(numberOfPomodoros + 1);
        if(resting) configWork();
    }, [working, resting, 
        mainTime, cycles, 
        numberOfPomodoros, 
        completedCycles, 
        configRest, setCycles, 
        configWork, props.cycles]); 
    
    return(
        
        <div className= 'Pomodoro'>
            <h2>Estamos {working ? 'trabalhando...' : 'descansando'}</h2>

            <Timer mainTime={mainTime}/>
            
            <div className="Buttons">
            <Button text='COMEÇAR!' onClick={()=> configWork()}></Button>
            <Button text='DESCANSAR!' onClick={()=> configRest(false)}></Button>
            <Button 
            className={!working && !resting ? 'hidden' : ''}
            text={timeCount ? 'PAUSAR!' : 'PLAY!'} 
            onClick={()=> setTimeCount(!timeCount)}></Button>
            </div>

            <div className="Details">
                <p>Ciclos concluidos: {completedCycles}</p> 
                <p>Tempo trabalhado: {secondsToTime(fullWorkingtime)}</p> 
                <p>Pomodoros concluídos: {numberOfPomodoros}</p> 
            </div>

        </div>
    )
}