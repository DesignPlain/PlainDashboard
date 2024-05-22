import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver {
  // Amazon S3 bucket prefix.
  bucketPrefix?: string;

  // Configuration that determines how Amazon AppFlow should format the flow output data when Amazon S3 is used as the destination. See S3 Output Format Config for more details.
  s3OutputFormatConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig;

  // Name of the Amazon S3 bucket.
  bucketName?: string;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver_GetTypes(): DynamicUIProps[] {
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
      appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
