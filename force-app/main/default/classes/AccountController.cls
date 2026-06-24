public with sharing class AccountController {
    @AuraEnabled
    public static string createNewAccount(String accountName){
        Account acc= new Account();
        acc.Name=accountName;
        insert acc;
        return acc.Id;
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(Integer maxRecords) {
        List<Account> accounts=[SELECT Id, Name FROM Account ORDER BY CreatedDate DESC LIMIT :maxRecords];
        return accounts;
    }
}