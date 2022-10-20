const operations = (nb1: number, nb2: number, type: string): number | null => {
  let result: number = 0;
  switch (type) {
    case 'addition':
      result += nb1 + nb2;
      return result;
      break;
    case 'substraction':
      return nb1 - nb2;
      break;
    case 'multiplication':
      return nb1 * nb2;
      break;
    case 'division':
      return nb1 / nb2;
      break;
    default:
      return result;
      break;
  }
};

export default operations;
