const calculateStylePoints = (styleNotes) => {
  var sumNotes = 0;
  var sumNotes = styleNotes.reduce((accumulator, currentValue) =>
   accumulator + currentValue,
    0);
  return (sumNotes - Math.max(...styleNotes)- Math.min(...styleNotes));
};


module.exports = calculateStylePoints;
