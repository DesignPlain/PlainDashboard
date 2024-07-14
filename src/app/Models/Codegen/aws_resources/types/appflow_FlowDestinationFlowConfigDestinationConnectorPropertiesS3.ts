import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3 {
  // Name of the Amazon S3 bucket.
  bucketName?: string;

  // Amazon S3 bucket prefix.
  bucketPrefix?: string;

  // Configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. See S3 Output Format Config for more details.
  s3OutputFormatConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "Name of the Amazon S3 bucket.",
      [],
      true,
      false,
    ),
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
      "s3OutputFormatConfig",
      "Configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. See S3 Output Format Config for more details.",
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
