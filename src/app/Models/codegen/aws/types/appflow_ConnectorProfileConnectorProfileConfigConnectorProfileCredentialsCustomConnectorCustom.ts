import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom {
  // A map that holds custom authentication credentials.
  credentialsMap?: Map<string, string>;

  // The custom authentication type that the connector uses.
  customAuthenticationType?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfileCredentialsCustomConnectorCustom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "credentialsMap",
      "A map that holds custom authentication credentials.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customAuthenticationType",
      "The custom authentication type that the connector uses.",
      () => [],
      true,
      false,
    ),
  ];
}
