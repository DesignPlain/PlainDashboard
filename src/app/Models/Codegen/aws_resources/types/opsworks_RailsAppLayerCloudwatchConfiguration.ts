import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_RailsAppLayerCloudwatchConfigurationLogStream,
  opsworks_RailsAppLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_RailsAppLayerCloudwatchConfigurationLogStream";

export interface opsworks_RailsAppLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_RailsAppLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_RailsAppLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      opsworks_RailsAppLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
