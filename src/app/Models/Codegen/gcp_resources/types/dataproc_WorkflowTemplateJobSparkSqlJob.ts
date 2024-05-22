import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_WorkflowTemplateJobSparkSqlJobQueryList,
  dataproc_WorkflowTemplateJobSparkSqlJobQueryList_GetTypes,
} from "./dataproc_WorkflowTemplateJobSparkSqlJobQueryList";
import {
  dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig,
  dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig_GetTypes,
} from "./dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig";

export interface dataproc_WorkflowTemplateJobSparkSqlJob {
  // A list of queries.
  queryList?: dataproc_WorkflowTemplateJobSparkSqlJobQueryList;

  // Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`).
  scriptVariables?: Map<string, string>;

  // HCFS URIs of jar files to be added to the Spark CLASSPATH.
  jarFileUris?: Array<string>;

  // The runtime log config for job execution.
  loggingConfig?: dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig;

  // A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.
  properties?: Map<string, string>;

  // The HCFS URI of the script that contains SQL queries.
  queryFileUri?: string;
}

export function dataproc_WorkflowTemplateJobSparkSqlJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "scriptVariables",
      'Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`).',
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "jarFileUris",
      "HCFS URIs of jar files to be added to the Spark CLASSPATH.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "loggingConfig",
      "The runtime log config for job execution.",
      dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "queryFileUri",
      "The HCFS URI of the script that contains SQL queries.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryList",
      "A list of queries.",
      dataproc_WorkflowTemplateJobSparkSqlJobQueryList_GetTypes(),
      false,
      true,
    ),
  ];
}
