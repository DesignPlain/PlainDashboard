import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode {
  // Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig;

  // Object specified in the flow destination.
  object?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "errorHandlingConfig",
      "Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "object",
      "Object specified in the flow destination.",
      [],
      true,
      false,
    ),
  ];
}
