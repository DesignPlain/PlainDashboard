import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_WorkflowTemplateJobHiveJobQueryList,
  dataproc_WorkflowTemplateJobHiveJobQueryList_GetTypes,
} from "./dataproc_WorkflowTemplateJobHiveJobQueryList";

export interface dataproc_WorkflowTemplateJobHiveJob {
  // The HCFS URI of the script that contains Hive queries.
  queryFileUri?: string;

  // A list of queries.
  queryList?: dataproc_WorkflowTemplateJobHiveJobQueryList;

  // Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`).
  scriptVariables?: Map<string, string>;

  // Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  continueOnFailure?: boolean;

  // HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
  jarFileUris?: Array<string>;

  // A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/--site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
  properties?: Map<string, string>;
}

export function dataproc_WorkflowTemplateJobHiveJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "continueOnFailure",
      "Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.",
      [],
      false,
      true,
    ),
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
      "A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "queryFileUri",
      "The HCFS URI of the script that contains Hive queries.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryList",
      "A list of queries.",
      dataproc_WorkflowTemplateJobHiveJobQueryList_GetTypes(),
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
  ];
}
