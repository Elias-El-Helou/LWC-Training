import { LightningElement, wire } from "lwc";
import { gql, graphql } from "lightning/uiGraphQLApi";

export default class GraphqlWithFilter extends LightningElement {
    records;
    errors;
    minAmount="50000";
    minAmounts = [
        { label: "All", value: "0" },
        { label: "$5,000,000", value: "5000000" },
        { label: "$50,000,000", value: "50000000" },
        { label: "$500,000,000", value: "500000000" },
      ];
    get variables(){
        return{
            minAmount:this.minAmount
        };
    }
    @wire(graphql, {
        query: gql`
          query AccountWithName($minAmount: Currency) {
            uiapi {
              query {
                Account(first: 10,
                        orderBy: { Name : { order: ASC } },
                        where:{
                            AnnualRevenue: { gte: $minAmount}
                        }
                ) {
                  edges {
                    node {
                      Id
                      Name {
                        value
                      }
                      AnnualRevenue{
                        displayValue
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        variables:'$variables',
      })
    graphqlQueryResult({ data, errors }) {
        if (data) {
          this.records = data.uiapi.query.Account.edges.map((edge) => edge.node);
        }
        this.errors = errors;
    }

    handleMinAmountChange(event) {
        this.minAmount = event.detail.value;
      }
}