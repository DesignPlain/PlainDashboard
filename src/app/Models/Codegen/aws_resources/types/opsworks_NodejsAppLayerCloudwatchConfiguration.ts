import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_NodejsAppLayerCloudwatchConfigurationLogStream,
  opsworks_NodejsAppLayerCloudwatchConfigurationLogStream_GetTypes,
} from "./opsworks_NodejsAppLayerCloudwatchConfigurationLogStream";

export interface opsworks_NodejsAppLayerCloudwatchConfiguration {
  //
  enabled?: boolean;

  //
  logStreams?: Array<opsworks_NodejsAppLayerCloudwatchConfigurationLogStream>;
}

export function opsworks_NodejsAppLayerCloudwatchConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enabled", "", [], false, false),
    new DynamicUIProps(
      InputType.Array,
      "logStreams",
      "",
      opsworks_NodejsAppLayerCloudwatchConfigurationLogStream_GetTypes(),
      false,
      false,
    ),
  ];
}
