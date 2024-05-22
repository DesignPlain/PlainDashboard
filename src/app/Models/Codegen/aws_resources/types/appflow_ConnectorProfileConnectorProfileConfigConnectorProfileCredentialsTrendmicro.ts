import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro {
  // The API secret key required for API key authentication.
  apiSecretKey?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsTrendmicro_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "apiSecretKey",
      "The API secret key required for API key authentication.",
      [],
      true,
      false,
    ),
  ];
}
