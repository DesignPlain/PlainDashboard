import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_ConnectionAzure {
  /*
(Output)
A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's Azure Active Directory Application.
*/
  identity?: string;

  /*
(Output)
The object id of the Azure Active Directory Application.
*/
  objectId?: string;

  /*
(Output)
The URL user will be redirected to after granting consent during connection setup.
*/
  redirectUri?: string;

  /*
(Output)
The name of the Azure Active Directory Application.
*/
  application?: string;

  /*
(Output)
The client id of the Azure Active Directory Application.
*/
  clientId?: string;

  // The id of customer's directory that host the data.
  customerTenantId?: string;

  // The Azure Application (client) ID where the federated credentials will be hosted.
  federatedApplicationClientId?: string;
}

export function bigquery_ConnectionAzure_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "identity",
      "(Output)\nA unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user's Azure Active Directory Application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "objectId",
      "(Output)\nThe object id of the Azure Active Directory Application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redirectUri",
      "(Output)\nThe URL user will be redirected to after granting consent during connection setup.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "application",
      "(Output)\nThe name of the Azure Active Directory Application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "clientId",
      "(Output)\nThe client id of the Azure Active Directory Application.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customerTenantId",
      "The id of customer's directory that host the data.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "federatedApplicationClientId",
      "The Azure Application (client) ID where the federated credentials will be hosted.",
      [],
      false,
      false,
    ),
  ];
}
