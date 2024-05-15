import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects,
  Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects_GetTypes,
} from "./Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects";
import {
  Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects,
  Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects_GetTypes,
} from "./Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects";

export interface Datastream_StreamSourceConfigMysqlSourceConfig {
  /*
MySQL objects to retrieve from the source.
Structure is documented below.
*/
  IncludeObjects?: Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects;

  /*
Maximum number of concurrent backfill tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
*/
  MaxConcurrentBackfillTasks?: number;

  /*
Maximum number of concurrent CDC tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
*/
  MaxConcurrentCdcTasks?: number;

  /*
MySQL objects to exclude from the stream.
Structure is documented below.
*/
  ExcludeObjects?: Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects;
}

export function Datastream_StreamSourceConfigMysqlSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IncludeObjects",
      "MySQL objects to retrieve from the source.\nStructure is documented below.",
      Datastream_StreamSourceConfigMysqlSourceConfigIncludeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxConcurrentBackfillTasks",
      "Maximum number of concurrent backfill tasks. The number should be non negative.\nIf not set (or set to 0), the system's default value will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxConcurrentCdcTasks",
      "Maximum number of concurrent CDC tasks. The number should be non negative.\nIf not set (or set to 0), the system's default value will be used.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ExcludeObjects",
      "MySQL objects to exclude from the stream.\nStructure is documented below.",
      Datastream_StreamSourceConfigMysqlSourceConfigExcludeObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
