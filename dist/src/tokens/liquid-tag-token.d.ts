import { DelimitedToken } from './delimited-token';
import { NormalizedFullOptions } from '../liquid-options';
export declare class LiquidTagToken extends DelimitedToken {
    name: string;
    args: string;
    constructor(input: string, begin: number, end: number, options: NormalizedFullOptions, file?: string);
}
