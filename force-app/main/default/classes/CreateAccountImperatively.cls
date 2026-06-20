public with sharing class CreateAccountImperatively {
    @AuraEnabled
    public static Account createAccount(String name){
        try {
            Account acc = new Account(Name=name);
            insert acc;
            return acc;
        } catch (Exception e) {
            System.debug('Error: '+e.getMessage());
            throw new AuraHandledException(e.getMessage());
        }
    }
}