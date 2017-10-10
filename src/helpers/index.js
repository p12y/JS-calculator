export function formatNumber(num) {
  let operands = num.toString().split(/(\+|×|-|÷)/);

  let result = operands.map(operand => {
    let parts = operand.split(".");
    parts[0] = parts[0].replace(/,/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  });

  return result.join('');
}

export function prepareForEval(string) {
  return string
          .replace(/×/g, '*')
          .replace(/÷/g, '/')
          .replace(/,/g, "")
          .replace(/[.]$/, "")
          .replace(/[/+*-]$/, "");
}

export function toLocaleString(calculation) {
  if (calculation[0].match(/\d/) || calculation[0] === '-') {
    return parseFloat(eval(calculation).toFixed(6)).toLocaleString();
  }
  return "";
}

export function removeOperators(calculation) {
  return calculation.replace(/[+÷×-]$/, "");
}