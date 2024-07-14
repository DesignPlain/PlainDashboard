import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce {
  // Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig;

  // Name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.
  idFieldNames?: Array<string>;

  // Object specified in the flow destination.
  object?: string;

  // Type of write operation to be performed in the custom connector when it's used as destination. Valid values are `INSERT`, `UPSERT`, `UPDATE`, and `DELETE`.
  writeOperationType?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "errorHandlingConfig",
      "Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig_GetTypes(),
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
      "object",
      "Object specified in the flow destination.",
      [],
      true,
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
