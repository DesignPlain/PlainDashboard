import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_EcsClusterLayerCloudwatchConfigurationLogStream,
  opsworks_EcsClusterLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_EcsClusterLayerCloudwatchConfigurationLogStream";

export interface opsworks_EcsClusterLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_EcsClusterLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_EcsClusterLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      opsworks_EcsClusterLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
