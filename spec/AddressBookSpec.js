
describe('AddressBook', function() { 


    var addressBook;
    var contact;
    beforeEach(function() {
        addressBook = new AddressBook();
        contact = new Contact("prem","12345");
       
    });
           
    it('should be able to add contact', function() {       
          addressBook.addContact(contact);
        expect(addressBook.getContact(0)).toBe(contact);         

    });  

    it('should be able to delete contact', function() {    
        addressBook.addContact(contact);   
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();                  

    });    
  
    
});


describe('Async Addressbook', function() {
    
   var addressBook;
    var contact;
    beforeEach(function(done) {
        addressBook = new AddressBook();
        contact = new Contact("prem","12345");
       addressBook.initContact(function(){
           done();
       });
    });
    
     it('should grab initial contact', function(done){         
        
        expect(addressBook.initialized).toBe(true);                  
        done();
    });   
    
});
    
    