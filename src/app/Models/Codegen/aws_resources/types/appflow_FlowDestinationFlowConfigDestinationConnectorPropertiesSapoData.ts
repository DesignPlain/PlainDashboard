import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData {
  // Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig;

  // Name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.
  idFieldNames?: Array<string>;

  // Object path specified in the SAPOData flow destination.
  objectPath?: string;

  // Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data. See Success Response Handling Config for more details.
  successResponseHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig;

  // Type of write operation to be performed in the custom connector when it's used as destination. Valid values are `INSERT`, `UPSERT`, `UPDATE`, and `DELETE`.
  writeOperationType?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "errorHandlingConfig",
      "Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "idFieldNames",
      "Name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "objectPath",
      "Object path specified in the SAPOData flow destination.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "successResponseHandlingConfig",
      "Determines how Amazon AppFlow handles the success response that it gets from the connector after placing data. See Success Response Handling Config for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "writeOperationType",
      "Type of write operation to be performed in the custom connector when it's used as destination. Valid values are `INSERT`, `UPSERT`, `UPDATE`, and `DELETE`.",
      [],
      false,
      false,
    ),
  ];
}
