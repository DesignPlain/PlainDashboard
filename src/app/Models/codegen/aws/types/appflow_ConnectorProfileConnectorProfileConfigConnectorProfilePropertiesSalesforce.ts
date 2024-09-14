import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce {
  //
  instanceUrl?: string;

  // Indicates whether the connector profile applies to a sandbox or production environment.
  isSandboxEnvironment?: boolean;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceUrl",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isSandboxEnvironment",
      "Indicates whether the connector profile applies to a sandbox or production environment.",
      () => [],
      false,
      false,
    ),
  ];
}
