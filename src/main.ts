import { setupColors } from './colors';
import './style.css';
import { wakeLock } from './utils/wakeLock';

wakeLock();
setupColors(document.querySelector<HTMLBodyElement>('body')!);
