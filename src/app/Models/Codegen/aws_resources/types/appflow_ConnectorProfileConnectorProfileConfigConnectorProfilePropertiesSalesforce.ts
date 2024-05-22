import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce {
  // The location of the Datadog resource.
  instanceUrl?: string;

  // Indicates whether the connector profile applies to a sandbox or production environment.
  isSandboxEnvironment?: boolean;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesSalesforce_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceUrl",
      "The location of the Datadog resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isSandboxEnvironment",
      "Indicates whether the connector profile applies to a sandbox or production environment.",
      [],
      false,
      false,
    ),
  ];
}
