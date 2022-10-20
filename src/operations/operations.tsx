const operations = (nb1: number, nb2: number, type: string): number | null => {
  switch (type) {
    case 'addition':
      return nb1 + nb2;
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
      return null;
      break;
  }
};

export default operations;
