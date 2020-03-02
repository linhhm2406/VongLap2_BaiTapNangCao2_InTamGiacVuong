let i;
let j;

for (i=5; i>=1; i--){
    let print_out='';
    for (j=1; j<=i;j++){
        print_out=print_out+'*';
    }
    document.write(print_out+'<br>');
}