import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface opsworks_EcsClusterLayerCloudwatchConfigurationLogStream {
  //
  initialPosition?: string;

  //
  logGroupName?: string;

  //
  timeZone?: string;

  //
  batchSize?: number;

  //
  encoding?: string;

  //
  datetimeFormat?: string;

  //
  file?: string;

  //
  fileFingerprintLines?: string;

  //
  multilineStartPattern?: string;

  //
  batchCount?: number;

  //
  bufferDuration?: number;
}

export function opsworks_EcsClusterLayerCloudwatchConfigurationLogStream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "bufferDuration",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "initialPosition",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "logGroupName", "", [], true, false),
    new DynamicUIProps(InputType.String, "timeZone", "", [], false, false),
    new DynamicUIProps(InputType.Number, "batchSize", "", [], false, false),
    new DynamicUIProps(InputType.String, "encoding", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "datetimeFormat",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "multilineStartPattern",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "file", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "fileFingerprintLines",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "batchCount", "", [], false, false),
  ];
}
