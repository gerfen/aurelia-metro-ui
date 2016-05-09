export class SelectIntConverter{
    
  toView(value) {
    return value;
  }

  fromView(value) {
    
        if(value){
            return  parseInt(value.toString());
        }else{
            return  null;
        }
    
  }
  
}