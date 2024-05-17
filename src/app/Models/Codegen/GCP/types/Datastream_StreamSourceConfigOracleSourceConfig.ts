import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects,
  Datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects";
import {
  Datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects,
  Datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects";
import {
  Datastream_StreamSourceConfigOracleSourceConfigExcludeObjects,
  Datastream_StreamSourceConfigOracleSourceConfigExcludeObjects_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfigExcludeObjects";
import {
  Datastream_StreamSourceConfigOracleSourceConfigIncludeObjects,
  Datastream_StreamSourceConfigOracleSourceConfigIncludeObjects_GetTypes,
} from "./Datastream_StreamSourceConfigOracleSourceConfigIncludeObjects";

export interface Datastream_StreamSourceConfigOracleSourceConfig {
  /*
Maximum number of concurrent CDC tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
*/
  MaxConcurrentCdcTasks?: number;

  // Configuration to drop large object values.
  StreamLargeObjects?: Datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects;

  // Configuration to drop large object values.
  DropLargeObjects?: Datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects;

  /*
Oracle objects to exclude from the stream.
Structure is documented below.
*/
  ExcludeObjects?: Datastream_StreamSourceConfigOracleSourceConfigExcludeObjects;

  /*
Oracle objects to retrieve from the source.
Structure is documented below.
*/
  IncludeObjects?: Datastream_StreamSourceConfigOracleSourceConfigIncludeObjects;

  /*
Maximum number of concurrent backfill tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
*/
  MaxConcurrentBackfillTasks?: number;
}

export function Datastream_StreamSourceConfigOracleSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ExcludeObjects",
      "Oracle objects to exclude from the stream.\nStructure is documented below.",
      Datastream_StreamSourceConfigOracleSourceConfigExcludeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IncludeObjects",
      "Oracle objects to retrieve from the source.\nStructure is documented below.",
      Datastream_StreamSourceConfigOracleSourceConfigIncludeObjects_GetTypes(),
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
      "StreamLargeObjects",
      "Configuration to drop large object values.",
      Datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DropLargeObjects",
      "Configuration to drop large object values.",
      Datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
