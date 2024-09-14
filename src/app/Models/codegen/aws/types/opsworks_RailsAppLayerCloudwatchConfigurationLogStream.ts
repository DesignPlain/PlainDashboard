import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opsworks_RailsAppLayerCloudwatchConfigurationLogStream {
  //
  batchSize?: number;

  //
  encoding?: string;

  //
  file?: string;

  //
  fileFingerprintLines?: string;

  //
  initialPosition?: string;

  //
  logGroupName?: string;

  //
  multilineStartPattern?: string;

  //
  batchCount?: number;

  //
  timeZone?: string;

  //
  datetimeFormat?: string;

  //
  bufferDuration?: number;
}

export function opsworks_RailsAppLayerCloudwatchConfigurationLogStream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "batchCount",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timeZone",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encoding",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "file", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "fileFingerprintLines",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "initialPosition",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logGroupName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "multilineStartPattern",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "batchSize",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datetimeFormat",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferDuration",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
