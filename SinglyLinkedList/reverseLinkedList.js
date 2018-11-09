var linkedList = {
    val: 10,
    next: {
      val: 20,
      next: {
        val: 30,
        next: {
          val: 40,
          next: null
        }
      }
    }
  };
  
  function reverseLinkedList(linkedList) {
    if (linkedList === null) return null;
    var current = linkedList;
    var prev = null; // initialize a prev val to null
  
    while (current) {
      var next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev; // prev will be the reversed linked list
  }
  
  reverseLinkedList(linkedList);
  