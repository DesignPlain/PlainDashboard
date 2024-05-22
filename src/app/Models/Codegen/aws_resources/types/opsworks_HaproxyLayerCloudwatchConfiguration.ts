import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opsworks_HaproxyLayerCloudwatchConfigurationLogStream,
  opsworks_HaproxyLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_HaproxyLayerCloudwatchConfigurationLogStream";

export interface opsworks_HaproxyLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_HaproxyLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_HaproxyLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      opsworks_HaproxyLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
