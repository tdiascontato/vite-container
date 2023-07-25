import {zeroLeft} from './zero-left';
export default function secondsToTime(seconds: number): string{
    const hours = zeroLeft(seconds / 3600);
    const minutes = zeroLeft((seconds / 60) % 60);
    const second = zeroLeft((seconds % 60) % 60);
    return `${hours}h : ${minutes}min : ${second}sec`;
} 