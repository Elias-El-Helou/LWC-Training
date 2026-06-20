public with sharing class wiredDataController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        List<Account> accs = [SELECT Id, Name 
                              FROM Account 
                              ORDER BY Createddate DESC 
                              LIMIT 10];
        return accs;
    }
}