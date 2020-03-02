let i;
let j;

for (i=1; i<=5; i++){
    let print_out='';
    for (j=1; j<=i; j++){
    print_out=print_out+'*';
    console.log(print_out);
}
    document.write(print_out+'<br>');
}