public with sharing class RelatedContactsController {
    @AuraEnabled
    public static List<Contact> getRelatedContacts(Id accountId,Integer limitSize, Integer offset){
        System.debug('limitSize: '+limitSize+', offset: '+offset);
        List<Contact> contacts = [  SELECT Id, FirstName,LastName, Email, MobilePhone
                                    FROM Contact
                                    WHERE AccountId =:accountId
                                    Order By CreatedDate DESC
                                    LIMIT :limitSize
                                    OFFSET :offset];
        System.debug('contactss: '+contacts);
        return contacts;
      
    }
}