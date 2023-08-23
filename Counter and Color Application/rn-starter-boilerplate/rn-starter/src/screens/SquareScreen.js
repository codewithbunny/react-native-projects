import React, { useReducer } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_VALUE = 15;

const reducer = (state, action) => {
  switch(action.colorToChange){
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0 
        ? state    
        : { ...state, red: state.red + action.amount };
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
}
export default function SquareScreen() {

  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);
  const [state, runMyReducer] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const {red, green, blue} = state;


 /* const setColor = (color, change) => {
    switch (color) {
        case "red":
        // if (red + change > 255 || red + change < 0) {
        //   return;
        // } else {
        //   setRed(red + change);
        // }
            (red + change > 255 || red + change < 0) ? null : setRed(red + change);
            return;
    
        case "green":
            (green + change > 255 || green + change < 0) ? null : setGreen(green + change);
            return;
        
        case "blue":
            (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change);
            return;
        default:
            return;
    }
  };*/

  return (
    <View>
      <ColorCounter
        onIncrease={() => runMyReducer({colorToChange: 'red', amount: COLOR_VALUE})} //setColor("red", COLOR_VALUE)
        onDecrease={() => runMyReducer({colorToChange: 'red', amount: -1 * COLOR_VALUE})} //setColor("red", -1 * COLOR_VALUE)
        color="Red"
      />

      <ColorCounter
        onIncrease={() => runMyReducer({colorToChange: 'green', amount: COLOR_VALUE})}
        onDecrease={() => runMyReducer({colorToChange: 'green', amount: -1 * COLOR_VALUE})}
        color="Green"
      />

      <ColorCounter
        onIncrease={() => runMyReducer({colorToChange: 'blue', amount: COLOR_VALUE})}
        onDecrease={() => runMyReducer({colorToChange: 'blue', amount: -1 * COLOR_VALUE})}
        color="Blue"
      />

      <View
        style={{
          height: 150,
          width: 150,
          // backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({});
