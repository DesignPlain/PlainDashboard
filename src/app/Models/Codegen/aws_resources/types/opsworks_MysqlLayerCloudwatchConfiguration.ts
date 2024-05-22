import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      opsworks_MysqlLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
