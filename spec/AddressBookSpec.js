"use strict";
describe('AddressBook', () => { 


    let addressBook;
    let contact;
    beforeEach(() => {
          addressBook = new AddressBook();
        contact = new Contact("prem","12345");
       
    });
           
    it('should be able to add contact', () => {       
          addressBook.addContact(contact);
        expect(addressBook.getContact(0)).toBe(contact);         

    });  

    it('should be able to delete contact', () => {    
        addressBook.addContact(contact);   
        addressBook.deleteContact(0)
        expect(addressBook.getContact(0)).not.toBeDefined();                  

    });    
  
    
});


describe('Async Addressbook', () => {
    
    let addressBook;
    let contact;
    beforeEach((done) => {
        addressBook = new AddressBook();
        contact = new Contact("prem","12345");
       addressBook.initContact(function(){
           done();
       });
    });
    
     it('should grab initial contact', (done) => { 
            
        
        expect(addressBook.initialized).toBe(true);                  
        done();
    });   
    
});
    
    