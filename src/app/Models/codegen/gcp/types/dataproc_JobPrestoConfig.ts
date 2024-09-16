import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_JobPrestoConfigLoggingConfig,
  dataproc_JobPrestoConfigLoggingConfig_GetTypes,
} from './dataproc_JobPrestoConfigLoggingConfig';

export interface dataproc_JobPrestoConfig {
  // Whether to continue executing queries if a query fails. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  continueOnFailure?: boolean;

  // The runtime logging config of the job
  loggingConfig?: dataproc_JobPrestoConfigLoggingConfig;

  /*
The format in which query output will be displayed. See the Presto documentation for supported output formats.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  outputFormat?: string;

  // A mapping of property names to values. Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.
  properties?: Map<string, string>;

  /*
The HCFS URI of the script that contains SQL queries.
Conflicts with `query_list`
*/
  queryFileUri?: string;

  /*
The list of SQL queries or statements to execute as part of the job.
Conflicts with `query_file_uri`
*/
  queryLists?: Array<string>;

  // Presto client tags to attach to this query.
  clientTags?: Array<string>;
}

export function dataproc_JobPrestoConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'queryFileUri',
      'The HCFS URI of the script that contains SQL queries.\nConflicts with `query_list`',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'queryLists',
      'The list of SQL queries or statements to execute as part of the job.\nConflicts with `query_file_uri`',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'clientTags',
      'Presto client tags to attach to this query.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'continueOnFailure',
      'Whether to continue executing queries if a query fails. Setting to true can be useful when executing independent parallel queries. Defaults to false.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'loggingConfig',
      'The runtime logging config of the job',
      () => dataproc_JobPrestoConfigLoggingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outputFormat',
      "The format in which query output will be displayed. See the Presto documentation for supported output formats.\n\n* `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'properties',
      'A mapping of property names to values. Used to set Presto session properties Equivalent to using the --session flag in the Presto CLI.',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
