import { Token } from './token';
import { TokenKind } from '../parser';
export declare abstract class DelimitedToken extends Token {
    trimLeft: boolean;
    trimRight: boolean;
    content: string;
    constructor(kind: TokenKind, content: string, input: string, begin: number, end: number, trimLeft: boolean, trimRight: boolean, file?: string);
}
