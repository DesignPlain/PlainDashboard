import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom {
  // The custom authentication type that the connector uses.
  customAuthenticationType?: string;

  // A map that holds custom authentication credentials.
  credentialsMap?: Map<string, string>;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "customAuthenticationType",
      "The custom authentication type that the connector uses.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "credentialsMap",
      "A map that holds custom authentication credentials.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
