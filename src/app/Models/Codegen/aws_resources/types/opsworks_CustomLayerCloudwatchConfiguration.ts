import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opsworks_CustomLayerCloudwatchConfigurationLogStream,
  opsworks_CustomLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_CustomLayerCloudwatchConfigurationLogStream";

export interface opsworks_CustomLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  // A block the specifies how an opsworks logs look like. See Log Streams.
  logStreams?: Array<opsworks_CustomLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_CustomLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "A block the specifies how an opsworks logs look like. See Log Streams.",
      opsworks_CustomLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
