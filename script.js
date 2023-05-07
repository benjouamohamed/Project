let ele, counter;
counter = 1;

this.onclick = e => {
   if (counter++%2 > 0) {
      document.getElementsByClassName("title")[0].childNodes[3].classList.add('intro')
   }else{
      document.getElementsByClassName("title")[0].childNodes[3].classList.add('intro2')
   }
}