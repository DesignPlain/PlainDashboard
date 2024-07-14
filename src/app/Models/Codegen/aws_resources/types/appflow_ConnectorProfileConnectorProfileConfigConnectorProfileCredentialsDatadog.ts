import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog {
  // Unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
  apiKey?: string;

  // Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.
  applicationKey?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsDatadog_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "apiKey",
      "Unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "applicationKey",
      "Application keys, in conjunction with your API key, give you full access to Datadog’s programmatic API. Application keys are associated with the user account that created them. The application key is used to log all requests made to the API.",
      [],
      true,
      false,
    ),
  ];
}
