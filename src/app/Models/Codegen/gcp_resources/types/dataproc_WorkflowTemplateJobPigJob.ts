import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_WorkflowTemplateJobPigJobQueryList,
  dataproc_WorkflowTemplateJobPigJobQueryList_GetTypes,
} from "./dataproc_WorkflowTemplateJobPigJobQueryList";
import {
  dataproc_WorkflowTemplateJobPigJobLoggingConfig,
  dataproc_WorkflowTemplateJobPigJobLoggingConfig_GetTypes,
} from "./dataproc_WorkflowTemplateJobPigJobLoggingConfig";

export interface dataproc_WorkflowTemplateJobPigJob {
  // The HCFS URI of the script that contains the Pig queries.
  queryFileUri?: string;

  // A list of queries.
  queryList?: dataproc_WorkflowTemplateJobPigJobQueryList;

  // Mapping of query variable names to values (equivalent to the Pig command: `name=`).
  scriptVariables?: Map<string, string>;

  // Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  continueOnFailure?: boolean;

  // HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
  jarFileUris?: Array<string>;

  // The runtime log config for job execution.
  loggingConfig?: dataproc_WorkflowTemplateJobPigJobLoggingConfig;

  // A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/--site.xml, /etc/pig/conf/pig.properties, and classes in user code.
  properties?: Map<string, string>;
}

export function dataproc_WorkflowTemplateJobPigJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "queryFileUri",
      "The HCFS URI of the script that contains the Pig queries.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryList",
      "A list of queries.",
      dataproc_WorkflowTemplateJobPigJobQueryList_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "scriptVariables",
      "Mapping of query variable names to values (equivalent to the Pig command: `name=`).",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
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
      "HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "loggingConfig",
      "The runtime log config for job execution.",
      dataproc_WorkflowTemplateJobPigJobLoggingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/*-site.xml, /etc/pig/conf/pig.properties, and classes in user code.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
