import { of } from 'rxjs';
import { takeLast } from 'rxjs/operators';

const srcList$ = of('Ignore', 'Ignore', 'Hello', 'World!');
// take the last 2 emitted values
const example = srcList$.pipe(takeLast(3));
const subscribe = example.subscribe((val) => console.log(val));
// Hello, World!
