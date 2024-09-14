import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig {
  // Name of the Amazon S3 bucket.
  bucketName?: string;

  // Amazon S3 bucket prefix.
  bucketPrefix?: string;

  // If the flow should fail after the first instance of a failure when attempting to place data in the destination.
  failOnFirstDestinationError?: boolean;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Name of the Amazon S3 bucket.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "Amazon S3 bucket prefix.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "failOnFirstDestinationError",
      "If the flow should fail after the first instance of a failure when attempting to place data in the destination.",
      () => [],
      false,
      false,
    ),
  ];
}
