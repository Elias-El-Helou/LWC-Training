public with sharing class WiredController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Id accountId, Integer x){
            System.debug('accountId: '+accountId);
            System.debug(x);
            List<Account> accs = [SELECT Id, Name 
                              FROM Account 
                              WHERE Id =: accountId];
            
            return accs;
         
    }
}