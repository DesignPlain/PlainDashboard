import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace {
  //
  instanceUrl?: string;
}

export function appflow_ConnectorProfileConnectorProfileConfigConnectorProfilePropertiesDynatrace_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceUrl",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
