import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular {
  // Unique alphanumeric identifier used to authenticate a user, developer, or calling program to your API.
  apiKey?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsSingular_GetTypes(): DynamicUIProps[] {
  return [
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
