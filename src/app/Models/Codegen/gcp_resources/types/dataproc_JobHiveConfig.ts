import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataproc_JobHiveConfig {
  // HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
  jarFileUris?: Array<string>;

  // A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/hadoop/conf/--site.xml`, `/etc/hive/conf/hive-site.xml`, and classes in user code..
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

  // Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`).
  scriptVariables?: Map<string, string>;

  // Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent parallel queries. Defaults to false.
  continueOnFailure?: boolean;
}

export function dataproc_JobHiveConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "jarFileUris",
      "HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be overwritten. Can include properties set in `/etc/hadoop/conf/*-site.xml`, `/etc/hive/conf/hive-site.xml`, and classes in user code..",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
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
      'Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`).',
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
  ];
}
