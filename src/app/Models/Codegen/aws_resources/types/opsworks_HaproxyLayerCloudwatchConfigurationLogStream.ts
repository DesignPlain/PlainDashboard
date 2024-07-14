import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opsworks_HaproxyLayerCloudwatchConfigurationLogStream {
  //
  datetimeFormat?: string;

  //
  timeZone?: string;

  //
  file?: string;

  //
  fileFingerprintLines?: string;

  //
  initialPosition?: string;

  //
  logGroupName?: string;

  //
  batchCount?: number;

  //
  batchSize?: number;

  //
  bufferDuration?: number;

  //
  encoding?: string;

  //
  multilineStartPattern?: string;
}

export function opsworks_HaproxyLayerCloudwatchConfigurationLogStream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "batchSize", "", [], false, false),
    new DynamicUIProps(InputType.String, "encoding", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "multilineStartPattern",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datetimeFormat",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "timeZone", "", [], false, false),
    new DynamicUIProps(InputType.Number, "batchCount", "", [], false, false),
    new DynamicUIProps(InputType.String, "logGroupName", "", [], true, false),
    new DynamicUIProps(
      InputType.Number,
      "bufferDuration",
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
    new DynamicUIProps(
      InputType.String,
      "initialPosition",
      "",
      [],
      false,
      false,
    ),
  ];
}
