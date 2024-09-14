import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift {
  //
  bucketPrefix?: string;

  //
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig;

  //
  intermediateBucketName?: string;

  //
  object?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
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
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "intermediateBucketName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "object", "", () => [], true, false),
  ];
}
