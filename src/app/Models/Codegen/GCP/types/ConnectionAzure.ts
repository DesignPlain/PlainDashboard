export interface ConnectionAzure {
  // The id of customer's directory that host the data.
  CustomerTenantId?: string;

  // The Azure Application (client) ID where the federated credentials will be hosted.
  FederatedApplicationClientId?: string;

  /*
(Output)
A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's Azure Active Directory Application.
*/
  Identity?: string;

  /*
(Output)
The object id of the Azure Active Directory Application.
*/
  ObjectId?: string;

  /*
(Output)
The URL user will be redirected to after granting consent during connection setup.
*/
  RedirectUri?: string;

  /*
(Output)
The name of the Azure Active Directory Application.
*/
  Application?: string;

  /*
(Output)
The client id of the Azure Active Directory Application.
*/
  ClientId?: string;
}
