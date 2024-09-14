import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus {
  // The Access Key portion of the credentials.
  accessKeyId?: string;

  // Encryption keys used to encrypt data.
  datakey?: string;

  // The secret key used to sign requests.
  secretAccessKey?: string;

  // Identifier for the user.
  userId?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsInforNexus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessKeyId",
      "The Access Key portion of the credentials.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datakey",
      "Encryption keys used to encrypt data.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretAccessKey",
      "The secret key used to sign requests.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userId",
      "Identifier for the user.",
      () => [],
      true,
      false,
    ),
  ];
}
