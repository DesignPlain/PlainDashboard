import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3 {
  //
  bucketName?: string;

  //
  bucketPrefix?: string;

  //
  s3OutputFormatConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "",
      () => [],
      true,
      false,
    ),
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
      "s3OutputFormatConfig",
      "",
      () =>
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
