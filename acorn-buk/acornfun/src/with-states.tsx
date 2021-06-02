import { useCallback, useEffect, useState } from "react";

export interface NavbarProps {}

const WithStates: React.FC<NavbarProps> = () => {
  const [output, setOutput] = useState<number>(0);

  const MouseEventHandler = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.currentTarget.id === "buyer") {
      outputController("Increase");
    } else if (e.currentTarget.id === "eater") {
      outputController("tryDecrease");
    }
  };

  const outputController = useCallback(
    (action: "Increase" | "tryDecrease"): void => {
      if (action === "Increase") {
        console.log(output);

        setOutput(output + 1);
        console.log(output);
      } else if (action === "tryDecrease") {
        output !== 0 && setOutput(output - 1);
      }
    },
    [output],
  );

  useEffect(() => {
    const KeyEventHandler = (e: KeyboardEvent): void => {
      if (e.key === "ArrowUp") {
        outputController("Increase");
      } else if (e.key === "ArrowDown") {
        outputController("tryDecrease");
      }
    };
    window.addEventListener("keydown", KeyEventHandler);
    return () => {
      window.removeEventListener("keydown", KeyEventHandler);
    };
  }, [outputController]);

  return (
    <div id="states-page">
      <h1>Golden Acorn aplication with states</h1>
      <div id="excercise-wrapper">
        <button id="buyer" onClick={MouseEventHandler}>
          Buy one
        </button>
        <p id="output">{output}</p>
        <button id="eater" onClick={MouseEventHandler}>
          Eat one
        </button>
      </div>
    </div>
  );
};

export default WithStates;
