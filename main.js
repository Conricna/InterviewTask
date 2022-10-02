var array = [6, 2, 3, 1, 7, 4, 8, 5]

function DrawArray() {
    var wrapper = $(".blocks-wrapper");
    wrapper.html('');
    for(i=0; i<array.length; i++){
        for(j=0; j<array.length; j++){
            if(array[i]<array[j]){
                ans = array[i];
                array[i]=array[j]
                array[j]= ans                
            }
        }        
    }
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)

    
}
