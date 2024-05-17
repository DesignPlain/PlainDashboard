import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_ConnectionAzure {
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

  // The id of customer's directory that host the data.
  CustomerTenantId?: string;
}

export function Bigquery_ConnectionAzure_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ClientId",
      "(Output)\nThe client id of the Azure Active Directory Application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CustomerTenantId",
      "The id of customer's directory that host the data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "FederatedApplicationClientId",
      "The Azure Application (client) ID where the federated credentials will be hosted.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Identity",
      "(Output)\nA unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's Azure Active Directory Application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ObjectId",
      "(Output)\nThe object id of the Azure Active Directory Application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RedirectUri",
      "(Output)\nThe URL user will be redirected to after granting consent during connection setup.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Application",
      "(Output)\nThe name of the Azure Active Directory Application.",
      [],
      false,
      false,
    ),
  ];
}
