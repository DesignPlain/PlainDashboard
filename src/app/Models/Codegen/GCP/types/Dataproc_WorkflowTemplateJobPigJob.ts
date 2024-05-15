import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateJobPigJobLoggingConfig,
  Dataproc_WorkflowTemplateJobPigJobLoggingConfig_GetTypes,
} from "./Dataproc_WorkflowTemplateJobPigJobLoggingConfig";
import {
  Dataproc_WorkflowTemplateJobPigJobQueryList,
  Dataproc_WorkflowTemplateJobPigJobQueryList_GetTypes,
} from "./Dataproc_WorkflowTemplateJobPigJobQueryList";

export interface Dataproc_WorkflowTemplateJobPigJob {
  // A list of queries.
  QueryList?: Dataproc_WorkflowTemplateJobPigJobQueryList;

  // Mapping of query variable names to values (equivalent to the Pig command: `name=`).
  ScriptVariables?: Map<string, string>;

  // Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  ContinueOnFailure?: boolean;

  // HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
  JarFileUris?: Array<string>;

  // The runtime log config for job execution.
  LoggingConfig?: Dataproc_WorkflowTemplateJobPigJobLoggingConfig;

  // A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/--site.xml, /etc/pig/conf/pig.properties, and classes in user code.
  Properties?: Map<string, string>;

  // The HCFS URI of the script that contains the Pig queries.
  QueryFileUri?: string;
}

export function Dataproc_WorkflowTemplateJobPigJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "QueryFileUri",
      "The HCFS URI of the script that contains the Pig queries.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "QueryList",
      "A list of queries.",
      Dataproc_WorkflowTemplateJobPigJobQueryList_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ScriptVariables",
      "Mapping of query variable names to values (equivalent to the Pig command: `name=`).",
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
      "HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LoggingConfig",
      "The runtime log config for job execution.",
      Dataproc_WorkflowTemplateJobPigJobLoggingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
