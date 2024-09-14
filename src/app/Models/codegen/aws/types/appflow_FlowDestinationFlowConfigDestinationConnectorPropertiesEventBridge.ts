import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge {
  //
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig;

  //
  object?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "errorHandlingConfig",
      "",
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "object", "", () => [], true, false),
  ];
}
