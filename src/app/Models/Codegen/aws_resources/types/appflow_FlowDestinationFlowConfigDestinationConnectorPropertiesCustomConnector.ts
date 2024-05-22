import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector {
  // Custom properties that are specific to the connector when it's used as a destination in the flow. Maximum of 50 items.
  customProperties?: Map<string, string>;

  // Entity specified in the custom connector as a destination in the flow.
  entityName?: string;

  // Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig;

  // Name of the field that Amazon AppFlow uses as an ID when performing a write operation such as update, delete, or upsert.
  idFieldNames?: Array<string>;

  // Type of write operation to be performed in the custom connector when it's used as destination. Valid values are `INSERT`, `UPSERT`, `UPDATE`, and `DELETE`.
  writeOperationType?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "errorHandlingConfig",
      "Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig_GetTypes(),
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
      "writeOperationType",
      "Type of write operation to be performed in the custom connector when it's used as destination. Valid values are `INSERT`, `UPSERT`, `UPDATE`, and `DELETE`.",
      [],
      false,
      false,
    ),
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
