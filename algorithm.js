/**
 * @typedef {import('@babel/types').Expression} Expression
 */

/**
 * @param {Expression} ast
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function lexicalSort(_ast, a, b) {
  return a > b ? 1 : -1;
}

/**
 * @callback SortFunction
 * @param {Expression} ast
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */

/**
 * @param {SortFunction} sortFunction
 */
function reverseSort(sortFunction) {
  return (ast, a, b) => {
    return -1 * sortFunction(ast, a, b);
  };
}

/**
 * @param {Expression} ast
 * @param {string} a
 * @param {string} b
 * @returns {Record<PropertyKey, string> | undefined}
 */
exports.jsonSortAlgorithmFunction = function (ast, a, b) {
  console.info('ast', ast)

  return lexicalSort(ast, a, b);
  return reverseSort(ast, a, b);

  if (currentNode.type === 'object' && typeof currentNode.properties === 'object' && currentNode.properties !== null) {
    return {
      "/^[^\\d+]/": "lexical"
    }
  }
}
