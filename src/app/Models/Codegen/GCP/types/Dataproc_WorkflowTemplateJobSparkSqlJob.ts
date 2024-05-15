import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig,
  Dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig_GetTypes,
} from "./Dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig";
import {
  Dataproc_WorkflowTemplateJobSparkSqlJobQueryList,
  Dataproc_WorkflowTemplateJobSparkSqlJobQueryList_GetTypes,
} from "./Dataproc_WorkflowTemplateJobSparkSqlJobQueryList";

export interface Dataproc_WorkflowTemplateJobSparkSqlJob {
  // Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`).
  ScriptVariables?: Map<string, string>;

  // HCFS URIs of jar files to be added to the Spark CLASSPATH.
  JarFileUris?: Array<string>;

  // The runtime log config for job execution.
  LoggingConfig?: Dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig;

  // A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.
  Properties?: Map<string, string>;

  // The HCFS URI of the script that contains SQL queries.
  QueryFileUri?: string;

  // A list of queries.
  QueryList?: Dataproc_WorkflowTemplateJobSparkSqlJobQueryList;
}

export function Dataproc_WorkflowTemplateJobSparkSqlJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LoggingConfig",
      "The runtime log config for job execution.",
      Dataproc_WorkflowTemplateJobSparkSqlJobLoggingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "QueryFileUri",
      "The HCFS URI of the script that contains SQL queries.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "QueryList",
      "A list of queries.",
      Dataproc_WorkflowTemplateJobSparkSqlJobQueryList_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "ScriptVariables",
      'Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`).',
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "JarFileUris",
      "HCFS URIs of jar files to be added to the Spark CLASSPATH.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
  ];
}
