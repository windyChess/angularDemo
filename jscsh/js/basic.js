/**
 * Created by hfq on 2016/8/18.
 */
/*label语句使用*/
//未使用label语句
 for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
        if(j == 5 && i == 5){
            console.log('j for--'+j);
            break;
        }
    }
    console.log('i for--'+i);
}

//使用label语句
/* start:for(var i=0; i<10; i++){
    for(var j=0; j<10; j++){
        if(j == 5 && i == 5){
            console.log('j for--'+j);
            break start;
        }
    }
    console.log('i for--'+i);
} */
