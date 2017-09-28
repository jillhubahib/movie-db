const createConstantObject = (...args) =>
  args.reduce(
    (accumulator, current) => ({ ...accumulator, [current]: current }),
    {}
  );

export default createConstantObject;
