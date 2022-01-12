let multiplyBy7 = createMultiplier(7);

function createMultiplier(multiplier) {
    return {
        multiply: function (number) {
            return number * multiplier;
        }
    };
  };