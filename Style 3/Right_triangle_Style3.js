let i,j;
let print_out='';

for (i=1; i<=5;i++){
    for (j=1; j<=i;j++){
        print_out=print_out+'*';
    }
    print_out=print_out+'<br>';
}
document.getElementById('print_out_triangle').innerHTML=print_out+'<br>';
