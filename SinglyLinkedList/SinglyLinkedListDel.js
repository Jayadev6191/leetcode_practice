function List() {
    this.head = null;
    this.numberOfValues = 0;
  };
  
  function Node(data){
    this.data = data;
    this.next = null;
  };
  
  List.prototype.add = function(element){
    var node = new Node(element);
    if(this.head === null) {
      this.head = node;
    }else{
      var currentNode = this.head;
      
      while(currentNode.next!==null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    
    this.numberOfValues++;
  };
  
  List.prototype.length = function(){
    console.log(`length of linked list ${this.numberOfValues}`);
  };
  
  List.prototype.print = function(){
    var current = this.head;
    var result = '';
    while(current){
      result+= (
                current.next !== null ? 
                `[${current.data}] -->` : 
                `[${current.data}] --> null`
               );
      current = current.next;
    }
    console.log(result);
  };
  
  List.prototype.remove = function(value){
    if(!value) {
      throw 'You need a value to remove the node';
    }
    
    var current = this.head;
    
    if(current.data === value){
       console.log("removing the current head");
       this.head = current.next;
       this.print();
       return;
    }
    
    while(current){
      console.log('next data',current.next.data);
      if(current.next.data === value) {
        console.log('found node');
        current.next = current.next.next;
      }
      
      current = current.next;
      this.print();
    }
  };
  
  
  var nl = new List();
  nl.add(20);
  nl.add(30);
  nl.add(40);
  nl.print();
  nl.remove(40);
  nl.length();

  