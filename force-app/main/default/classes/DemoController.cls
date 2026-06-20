public with sharing class DemoController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getMethod(Integer maxRecords){
        return [Select Id,name FROM Account Limit :maxRecords];
    }
}