import { FilterImpl } from '../template';
import { Scope } from '../context';
export declare const join: (v: any[], arg: string) => any;
export declare const last: (v: any) => any;
export declare const first: (v: any) => any;
export declare const reverse: (v: any[]) => any;
export declare function sort<T>(this: FilterImpl, arr: T[], property?: string): IterableIterator<unknown>;
export declare function sort_natural<T>(input: T[], property?: string): any[];
export declare const size: (v: string | any[]) => number;
export declare function map(this: FilterImpl, arr: Scope[], property: string): IterableIterator<unknown>;
export declare function compact<T>(this: FilterImpl, arr: T[]): any[];
export declare function concat<T1, T2>(v: T1[], arg?: T2[]): (T1 | T2)[];
export declare function slice<T>(v: T[] | string, begin: number, length?: number): T[] | string;
export declare function where<T extends object>(this: FilterImpl, arr: T[], property: string, expected?: any): IterableIterator<unknown>;
export declare function uniq<T>(arr: T[]): T[];
