import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector {
  // Custom properties that are specific to the connector when it's used as a destination in the flow. Maximum of 50 items.
  customProperties?: Map<string, string>;

  // Entity specified in the custom connector as a destination in the flow.
  entityName?: string;
}

export function appflow_FlowSourceFlowConfigSourceConnectorPropertiesCustomConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "customProperties",
      "Custom properties that are specific to the connector when it's used as a destination in the flow. Maximum of 50 items.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entityName",
      "Entity specified in the custom connector as a destination in the flow.",
      [],
      true,
      false,
    ),
  ];
}
