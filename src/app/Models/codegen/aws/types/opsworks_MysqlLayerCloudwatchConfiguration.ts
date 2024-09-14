import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_MysqlLayerCloudwatchConfigurationLogStream,
  opsworks_MysqlLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_MysqlLayerCloudwatchConfigurationLogStream";

export interface opsworks_MysqlLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_MysqlLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_MysqlLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      () => opsworks_MysqlLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], false, false),
  ];
}
