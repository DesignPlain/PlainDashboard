import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig,
  appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig_GetTypes,
} from "./appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig";

export interface appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver {
  //
  bucketName?: string;

  //
  bucketPrefix?: string;

  //
  s3OutputFormatConfig?: appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig;
}

export function appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver_GetTypes(): DynamicUIProps[] {
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
        appflow_FlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
