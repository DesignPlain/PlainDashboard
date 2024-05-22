import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift {
  // Amazon S3 bucket prefix.
  bucketPrefix?: string;

  // Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.
  errorHandlingConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig;

  // Intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift.
  intermediateBucketName?: string;

  // Object specified in the flow destination.
  object?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshift_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "Amazon S3 bucket prefix.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "errorHandlingConfig",
      "Settings that determine how Amazon AppFlow handles an error when placing data in the custom connector as destination. See Error Handling Config for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "intermediateBucketName",
      "Intermediate bucket that Amazon AppFlow uses when moving data into Amazon Redshift.",
      [],
      true,
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
