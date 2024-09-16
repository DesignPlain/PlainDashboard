import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamSourceConfigOracleSourceConfigIncludeObjects,
  datastream_StreamSourceConfigOracleSourceConfigIncludeObjects_GetTypes,
} from './datastream_StreamSourceConfigOracleSourceConfigIncludeObjects';
import {
  datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects,
  datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects_GetTypes,
} from './datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects';
import {
  datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects,
  datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects_GetTypes,
} from './datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects';
import {
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjects,
  datastream_StreamSourceConfigOracleSourceConfigExcludeObjects_GetTypes,
} from './datastream_StreamSourceConfigOracleSourceConfigExcludeObjects';

export interface datastream_StreamSourceConfigOracleSourceConfig {
  /*
Oracle objects to retrieve from the source.
Structure is documented below.
*/
  includeObjects?: datastream_StreamSourceConfigOracleSourceConfigIncludeObjects;

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

  // Configuration to drop large object values.
  streamLargeObjects?: datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects;

  // Configuration to drop large object values.
  dropLargeObjects?: datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects;

  /*
Oracle objects to exclude from the stream.
Structure is documented below.
*/
  excludeObjects?: datastream_StreamSourceConfigOracleSourceConfigExcludeObjects;
}

export function datastream_StreamSourceConfigOracleSourceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'includeObjects',
      'Oracle objects to retrieve from the source.\nStructure is documented below.',
      () =>
        datastream_StreamSourceConfigOracleSourceConfigIncludeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxConcurrentBackfillTasks',
      "Maximum number of concurrent backfill tasks. The number should be non negative.\nIf not set (or set to 0), the system's default value will be used.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxConcurrentCdcTasks',
      "Maximum number of concurrent CDC tasks. The number should be non negative.\nIf not set (or set to 0), the system's default value will be used.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'streamLargeObjects',
      'Configuration to drop large object values.',
      () =>
        datastream_StreamSourceConfigOracleSourceConfigStreamLargeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'dropLargeObjects',
      'Configuration to drop large object values.',
      () =>
        datastream_StreamSourceConfigOracleSourceConfigDropLargeObjects_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'excludeObjects',
      'Oracle objects to exclude from the stream.\nStructure is documented below.',
      () =>
        datastream_StreamSourceConfigOracleSourceConfigExcludeObjects_GetTypes(),
      false,
      false,
    ),
  ];
}
