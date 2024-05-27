const click = document.getElementById('nameBtn');

click.addEventListener('click' , () => {
    const colorValue = document.getElementById('colorName').value;
     var allData = document.getElementById('color_name_data');
    
    allData.style.backgroundColor = `${colorValue}`;

})