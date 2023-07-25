import secondsToMinutes from "./seconds-to-minutes";

interface Props{
    mainTime: number
}
export function Timer(props: Props) : JSX.Element{
  return (
    <div className='Timer'>{secondsToMinutes(props.mainTime)}</div>
  )
} 
