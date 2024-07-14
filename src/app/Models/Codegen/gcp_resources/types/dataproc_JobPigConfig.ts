import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_JobPigConfigLoggingConfig,
  dataproc_JobPigConfigLoggingConfig_GetTypes,
} from "./dataproc_JobPigConfigLoggingConfig";

export interface dataproc_JobPigConfig {
  // Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  continueOnFailure?: boolean;

  /*
HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.

- `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'
*/
  jarFileUris?: Array<string>;

  // The runtime logging config of the job
  loggingConfig?: dataproc_JobPigConfigLoggingConfig;

  // A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/hadoop/conf/--site.xml`, `/etc/pig/conf/pig.properties`, and classes in user code.
  properties?: Map<string, string>;

  /*
HCFS URI of file containing Hive script to execute as the job.
Conflicts with `query_list`
*/
  queryFileUri?: string;

  /*
The list of Hive queries or statements to execute as part of the job.
Conflicts with `query_file_uri`
*/
  queryLists?: Array<string>;

  // Mapping of query variable names to values (equivalent to the Pig command: `name=[value]`).
  scriptVariables?: Map<string, string>;
}

export function dataproc_JobPigConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "queryFileUri",
      "HCFS URI of file containing Hive script to execute as the job.\nConflicts with `query_list`",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryLists",
      "The list of Hive queries or statements to execute as part of the job.\nConflicts with `query_file_uri`",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "scriptVariables",
      "Mapping of query variable names to values (equivalent to the Pig command: `name=[value]`).",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "continueOnFailure",
      "Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "jarFileUris",
      "HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.\n\n* `logging_config.driver_log_levels`- (Required) The per-package log levels for the driver. This may include 'root' package name to configure rootLogger. Examples: 'com.google = FATAL', 'root = INFO', 'org.apache = DEBUG'",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "loggingConfig",
      "The runtime logging config of the job",
      dataproc_JobPigConfigLoggingConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/hadoop/conf/*-site.xml`, `/etc/pig/conf/pig.properties`, and classes in user code.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
