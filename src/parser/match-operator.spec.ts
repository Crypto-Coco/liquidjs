import { matchOperator } from './match-operator'
import { defaultOperators } from '..'
import { createTrie } from '../util/operator-trie'

describe('parser/matchOperator()', function () {
  const trie = createTrie(defaultOperators)
  it('should match contains', () => {
    expect(matchOperator('contains', 0, trie)).toBe(8)
  })
  it('should match comparision', () => {
    expect(matchOperator('>', 0, trie)).toBe(1)
    expect(matchOperator('>=', 0, trie)).toBe(2)
    expect(matchOperator('<', 0, trie)).toBe(1)
    expect(matchOperator('<=', 0, trie)).toBe(2)
  })
  it('should match binary logic', () => {
    expect(matchOperator('and', 0, trie)).toBe(3)
    expect(matchOperator('or', 0, trie)).toBe(2)
  })
  it('should not match if word not terminate', () => {
    expect(matchOperator('true1', 0, trie)).toBe(-1)
    expect(matchOperator('containsa', 0, trie)).toBe(-1)
  })
  it('should match if word boundary found', () => {
    expect(matchOperator('>=1', 0, trie)).toBe(2)
    expect(matchOperator('contains b', 0, trie)).toBe(8)
  })
})
