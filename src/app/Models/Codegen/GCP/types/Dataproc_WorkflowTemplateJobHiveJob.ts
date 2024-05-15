import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateJobHiveJobQueryList,
  Dataproc_WorkflowTemplateJobHiveJobQueryList_GetTypes,
} from "./Dataproc_WorkflowTemplateJobHiveJobQueryList";

export interface Dataproc_WorkflowTemplateJobHiveJob {
  // Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  ContinueOnFailure?: boolean;

  // HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
  JarFileUris?: Array<string>;

  // A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/--site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
  Properties?: Map<string, string>;

  // The HCFS URI of the script that contains Hive queries.
  QueryFileUri?: string;

  // A list of queries.
  QueryList?: Dataproc_WorkflowTemplateJobHiveJobQueryList;

  // Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`).
  ScriptVariables?: Map<string, string>;
}

export function Dataproc_WorkflowTemplateJobHiveJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "QueryList",
      "A list of queries.",
      Dataproc_WorkflowTemplateJobHiveJobQueryList_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ScriptVariables",
      'Mapping of query variable names to values (equivalent to the Hive command: `SET name="value";`).',
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ContinueOnFailure",
      "Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "JarFileUris",
      "HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "QueryFileUri",
      "The HCFS URI of the script that contains Hive queries.",
      [],
      false,
      true,
    ),
  ];
}
