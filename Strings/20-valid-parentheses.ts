function isValid(s: string): boolean {
  const str = s.split('');

  const MappedParentheses = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  const stack: string[] = [];

  if (!MappedParentheses.get(s[0])) return false;

  const getParenthesisPair = (parenthesisToCheck: string) => {
    if (parenthesisToCheck === ')') return '(';
    if (parenthesisToCheck === '}') return '{';
    if (parenthesisToCheck === ']') return '[';
  };

  let flag = true;

  str.forEach((s, index) => {
    const isOpenerParenthesis = Boolean(MappedParentheses.get(s));
    if (!index || isOpenerParenthesis) return stack.push(s);
    const hasItsPairInStack = stack[stack.length - 1] === getParenthesisPair(s);

    if (!hasItsPairInStack) return (flag = false);
    stack.pop();
  });

  if (stack.length !== 0) return false;
  return flag;
}

// *** Personal notes:
// Steps to solve this problem:
// 1. For each opening parentheses, push it into a stack arr;
// 2. For each closing parentheses, check if the stack contains its opening parentheses pair on the top of the stack, if true: remove it from stack. if false: return false.
// 3. After all iterations, check if the stack is empty. Return `true` when empty and `false` when filled with data.