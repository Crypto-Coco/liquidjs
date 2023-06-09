import { TagToken, HTMLToken, HashToken, QuotedToken, LiquidTagToken, OutputToken, ValueToken, Token, RangeToken, FilterToken, TopLevelToken, OperatorToken, IdentifierToken } from '../tokens';
import { TokenizationError } from '../util';
import { Operators, Expression } from '../render';
import { NormalizedFullOptions } from '../liquid-options';
import { FilterArg } from './filter-arg';
export declare class Tokenizer {
    input: string;
    file?: string | undefined;
    p: number;
    N: number;
    private rawBeginAt;
    private opTrie;
    constructor(input: string, operators?: Operators, file?: string | undefined);
    readExpression(): Expression;
    readExpressionTokens(): IterableIterator<Token>;
    readOperator(): OperatorToken | undefined;
    readFilters(): FilterToken[];
    readFilter(): FilterToken | null;
    readFilterArg(): FilterArg | undefined;
    readTopLevelTokens(options?: NormalizedFullOptions): TopLevelToken[];
    readTopLevelToken(options: NormalizedFullOptions): TopLevelToken;
    readHTMLToken(stopStrings: string[]): HTMLToken;
    readTagToken(options?: NormalizedFullOptions): TagToken;
    readToDelimiter(delimiter: string): number;
    readOutputToken(options?: NormalizedFullOptions): OutputToken;
    readEndrawOrRawContent(options: NormalizedFullOptions): HTMLToken | TagToken;
    readLiquidTagTokens(options?: NormalizedFullOptions): LiquidTagToken[];
    readLiquidTagToken(options: NormalizedFullOptions): LiquidTagToken;
    mkError(msg: string, begin: number): TokenizationError;
    snapshot(begin?: number): string;
    /**
     * @deprecated use #readIdentifier instead
     */
    readWord(): IdentifierToken;
    readIdentifier(): IdentifierToken;
    readTagName(): string;
    readHashes(jekyllStyle?: boolean): HashToken[];
    readHash(jekyllStyle?: boolean): HashToken | undefined;
    remaining(): string;
    advance(i?: number): void;
    end(): boolean;
    readTo(end: string): number;
    readValue(): ValueToken | undefined;
    readRange(): RangeToken | undefined;
    readValueOrThrow(): ValueToken;
    readQuoted(): QuotedToken | undefined;
    readFileNameTemplate(options: NormalizedFullOptions): IterableIterator<TopLevelToken>;
    match(word: string): boolean;
    rmatch(pattern: string): boolean;
    peekType(n?: number): number;
    peek(n?: number): string;
    skipBlank(): void;
}
