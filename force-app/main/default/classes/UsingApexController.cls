public with sharing class UsingApexController {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts(Integer maxRecords){
        try {
            List<Account> accs = [  SELECT Id, Name 
                                    FROM Account 
                                    ORDER BY CreatedDate DESC LIMIT :maxRecords];
            return accs;
        } catch (Exception e) {
            System.debug(e.getMessage());
            throw new AuraHandledException(e.getMessage());
            
        }
    }

    @AuraEnabled
    public static Account createNewAccount(String accountName) {
        try{
            Account acc = new Account();
            acc.Name = accountName;

            insert acc;
            return acc;
        }
        catch(Exception e){
            System.debug(e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }

}