import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector {
  //
  customProperties?: Map<string, string>;

  //
  entityName?: string;

  //
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig;

  //
  idFieldNames?: Array<string>;

  //
  writeOperationType?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "customProperties",
      "",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entityName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "errorHandlingConfig",
      "",
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "idFieldNames",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "writeOperationType",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
