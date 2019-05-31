    (function(){
    
    
    // --------------SELECT--------------
    var cat = document.createElement('select');
    cat.innerHTML = "<select name='drop1' id='select1'><option value=''>Select category</option><option value='one'>Change in citizenship</option><option value='two'>Change in tax residence</option><option value='three'>Sole Trader</option><option value='four'>Expected transactions to high risk/sanctioned countries</option><option value='five'>Removal of US Citizenship</option><option value='six'>EU High Risk 3rd Countries</option></select>";
    document.body.appendChild(cat);

    // -------------TABLE----------------
        /* table.classList.add("added", "asdaks"); */
    var table = document.createElement('table');
    table.innerHTML = 
    //first element
    "<style>table{background: red; max-width: 500px; position:absolute;top:100px;; left:0; z-index:1; max-height: 500px; overflow: auto;}.chcn{display: none}</style>" +
    "<tr class='chc none'><td>Changing citizenship</td><td>resonable + no need to OEDD</td><td><button id='chctzone'>PASTE</button></td></tr>"+
    "<tr class='chc none'><td>Changing citizenship</td><td>resonable + no need to OEDD</td><td><button id='chctztwo'>PASTE</button></td></tr>"+
    "<tr class='chc none'><td>Changing citizenship</td><td>resonable + no need to OEDD</td><td><button id='chctzthree'>PASTE</button></td></tr>"+
    "<tr class='ctax none'><td>Change in tax residence</td><td>resonable + no need to OEDD</td><td><button id='chctzone'>PASTE</button></td></tr>"+
    "<tr class='ctax none'><td>Change in tax residence</td><td>resonable + no need to OEDD</td><td><button id='chctztwo'>PASTE</button></td></tr>"+
    "<tr class='ctax none'><td>Change in tax residence</td><td>resonable + no need to OEDD</td><td><button id='chctzthree'>PASTE</button></td></tr>";
    //second element

    document.body.appendChild(table);

    //------------ukrywanie wierszy------------
    
    document.addEventListener('click',function(e){
        if(e.target && e.target.value== 'one'){
            var test = document.getElementsByClassName('chc');
            for(i=0;i<test.length;i++){
                test[i].classList.remove('none');
            };
         }
        if(e.target && e.target.value== 'two'){
            var test = document.getElementsByClassName('ctax');
            for(i=0;i<test.length;i++){
                test[i].classList.remove('none');
            };
       }
     });
//dodanie kodu do wygenerowanych przycisków
document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'chctzone'){
          console.log('chctzone');
     }
    if(e.target && e.target.id== 'chctztwo'){
        console.log('chctztwo');
   }
 });

console.log(table.length);

})();

