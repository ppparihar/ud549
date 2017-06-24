"use strict";
function AddressBook(){
    this.initialized = false;
    this.contactList = [];   
}
AddressBook.prototype.addContact = function(contact){
        this.contactList.push(contact);
};
AddressBook.prototype.getContact = function(index){
        return this.contactList[index];
};
AddressBook.prototype.deleteContact = function(index){
        return this.contactList.splice(index,1);
};
AddressBook.prototype.initContact = function(cb){
        setTimeout(function() {
            this.initialized = true;
            cb();
        }.bind(this), 1000);
};