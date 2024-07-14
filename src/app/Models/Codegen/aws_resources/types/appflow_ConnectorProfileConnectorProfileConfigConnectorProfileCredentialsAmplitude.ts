import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude {
  // Unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
  apiKey?: string;

  // The Secret Access Key portion of the credentials.
  secretKey?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsAmplitude_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secretKey",
      "The Secret Access Key portion of the credentials.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "apiKey",
      "Unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.",
      [],
      true,
      false,
    ),
  ];
}
