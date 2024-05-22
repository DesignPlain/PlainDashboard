import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects,
  datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects_GetTypes,
} from "./datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects";
import {
  datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects,
  datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects_GetTypes,
} from "./datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects";

export interface datastream_StreamSourceConfigMysqlSourceConfig {
  /*
MySQL objects to exclude from the stream.
Structure is documented below.
*/
  excludeObjects?: datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects;

  /*
MySQL objects to retrieve from the source.
Structure is documented below.
*/
  includeObjects?: datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects;

  /*
Maximum number of concurrent backfill tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
*/
  maxConcurrentBackfillTasks?: number;

  /*
Maximum number of concurrent CDC tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
*/
  maxConcurrentCdcTasks?: number;
}

export function datastream_StreamSourceConfigMysqlSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "excludeObjects",
      "MySQL objects to exclude from the stream.\nStructure is documented below.",
      datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "includeObjects",
      "MySQL objects to retrieve from the source.\nStructure is documented below.",
      datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrentBackfillTasks",
      "Maximum number of concurrent backfill tasks. The number should be non negative.\nIf not set (or set to 0), the system's default value will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrentCdcTasks",
      "Maximum number of concurrent CDC tasks. The number should be non negative.\nIf not set (or set to 0), the system's default value will be used.",
      [],
      false,
      false,
    ),
  ];
}
