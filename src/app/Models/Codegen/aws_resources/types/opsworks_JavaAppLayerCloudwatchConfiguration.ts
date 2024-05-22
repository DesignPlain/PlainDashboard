import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opsworks_JavaAppLayerCloudwatchConfigurationLogStream,
  opsworks_JavaAppLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_JavaAppLayerCloudwatchConfigurationLogStream";

export interface opsworks_JavaAppLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_JavaAppLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_JavaAppLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      opsworks_JavaAppLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
