let temp1 = 0;
let temp2 = 0;
let temp3 = 0;
let temp4 = 0;
let sum = 0;
const generateOutput = (text: string, output = '0') => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0') {
        return (text);
      } else {
        return (output + text);
      }
    case '.':
      if (output.indexOf('.') >= 0) {return output;}
      return (output + '.');
    case '删除':
      if (output.length === 1) {
        return '';
      } else {
        return (output.slice(0, -1)) || '';
      }
    case '清空':
      return '';
    case 'OK':
      return '';
    case '+':
      if (output !== '0') {
        temp1 = parseInt(output);
      }
      return '';
    case '-':
      if (output !== '0') {
        temp2 = parseInt(output);
      }
      return '';
    case '×':
      if (output !== '0') {
        temp3 = parseInt(output);
      }
      return ''
    case '÷':
      if (output !== '0') {
        temp4 = parseInt(output);
      }
      return ''
    case '=':
      if (temp1) {
        sum += temp1 + parseInt(output);
      }else if(temp2){
        sum += temp2 - parseInt(output);
      }else if(temp3){
        sum += temp3 * parseInt(output);
      }else if(temp4){
        sum += temp4 / parseInt(output);
      }
      const res = sum.toString();
      sum = 0;
      temp1 = 0;
      temp2 = 0;
      temp3 = 0;
      temp4 = 0;
      return (res);
    default:
      return '';
  }
};

export {generateOutput};