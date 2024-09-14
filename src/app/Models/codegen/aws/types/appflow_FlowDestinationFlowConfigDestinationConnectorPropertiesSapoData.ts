import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData {
  //
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig;

  //
  idFieldNames?: Array<string>;

  //
  objectPath?: string;

  // Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data. See Success Response Handling Config for more details.
  successResponseHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig;

  //
  writeOperationType?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "objectPath",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successResponseHandlingConfig",
      "Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data. See Success Response Handling Config for more details.",
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig_GetTypes(),
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
    new DynamicUIProps(
      InputType.Object,
      "errorHandlingConfig",
      "",
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig_GetTypes(),
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
  ];
}
