var color = prompt("Type in a color", "");
      if (
        color == "blue" ||
        color == "red" ||
        color == "yellow" ||
        color == "BLUE" ||
        color == "RED" ||
        color == "YELLOW"
      ) {
        console.log(`You picked a primary color: ${color}`);
      } else if (
        color == "orange" ||
        color == "green" ||
        color == "purple" ||
        color == "ORANGE" ||
        color == "GREEN" ||
        color == "PURPLE"
      ) {
        console.log(`You picked a secondary color: ${color}`);
      } else {
        console.log("You didn't pick a primary or secondary color");
      }