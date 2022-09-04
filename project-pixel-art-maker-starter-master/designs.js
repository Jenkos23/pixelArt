// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
//References
//This code was written following review of several forum posts on udacity on the subject matter, particularly this one:
//https://knowledge.udacity.com
//Furthermore, the following youtube tutorials on the subject matter were particularly helpful:
//https://www.youtube.com/watch?v=OtSiwcq67j4&t=614s;


// Your code goes here!
  const pixelForm = document.getElementById("sizePicker"); //create variable for selection of sizes
  const table =document.getElementById("pixelCanvas");
  
  // variable for width and height selection
  const width = document.getElementById("inputWidth");
  const height = document.getElementById("inputHeight");
  
  //function for calling event listener
  pixelForm.addeventListener('submit', function(grid)){
         table.innerHtml = ''; //this call enables users to clear the grid
         grid.preventDefault() // prohibits the default system to initiate thereby letting the user to submit
         const heightValue = height.value;
         const widthValue = width.value;
         makeGrid() // this function is defined below enabling the user to draw/create a grid

}

function makeGrid(pixel){
    for (let t = 0; t< height.value; t++){
      const row = table.insertRow(0); ///The insertRow() method creates an empty <tr>  element in html and adds it to a table.
          for (let p = 0; p< width.value; p++){
            row.insertCell(0);
          }
    }
}
