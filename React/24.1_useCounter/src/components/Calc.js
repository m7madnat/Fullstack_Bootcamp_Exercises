import { useState } from "react";

const Calc = (initial) => {
  const [number, setNumber] = useState(initial);
  const addOne = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };
  const removeOne = () => {
    setNumber((prev) => {
      return prev - 1;
    });
  };
  const double = () => {
    setNumber((prev) => {
      return prev * 2;
    });
  };
  const divide = () => {
    setNumber((prev) => {
      return prev / 2;
    });
  };

  return { number, addOne, removeOne, double, divide};
};

export default Calc;