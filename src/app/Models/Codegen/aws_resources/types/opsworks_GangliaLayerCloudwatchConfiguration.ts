import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_GangliaLayerCloudwatchConfigurationLogStream,
  opsworks_GangliaLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_GangliaLayerCloudwatchConfigurationLogStream";

export interface opsworks_GangliaLayerCloudwatchConfiguration {
  //
  logStreams?: Array<opsworks_GangliaLayerCloudwatchConfigurationLogStream>;

  //
  enabled?: boolean;
}

export function opsworks_GangliaLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      opsworks_GangliaLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
  ];
}
