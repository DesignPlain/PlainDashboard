export interface WorkforcePoolProviderOidcClientSecretValue {
  /*
The plain text of the client secret value.
--Note--: This property is sensitive and will not be displayed in the plan.
*/
  PlainText?: string;

  /*
(Output)
A thumbprint to represent the current client secret value.
*/
  Thumbprint?: string;
}
