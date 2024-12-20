// Change Theme
function setTheme(theme) {
    document.documentElement.style.setProperty("--primary-color", theme);
    localStorage.setItem("movie-theme", theme);
  }
var cond = true;

  function setDark(){
    console.log(cond)
    if(cond){
      document.documentElement.style.setProperty("--dark-color", '070707e3');
      document.documentElement.style.setProperty("--dark1-color", 'white');
      cond= false;
    }else{
      document.documentElement.style.setProperty("--dark-color", 'white');
      document.documentElement.style.setProperty("--dark1-color", 'balck');
      cond= true;
    }
  }
  setTheme(localStorage.getItem("movie-theme") || chathams_blue);


    
 
