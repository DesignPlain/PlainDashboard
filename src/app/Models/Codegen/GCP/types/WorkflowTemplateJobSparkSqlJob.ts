import { WorkflowTemplateJobSparkSqlJobLoggingConfig } from "./WorkflowTemplateJobSparkSqlJobLoggingConfig";
import { WorkflowTemplateJobSparkSqlJobQueryList } from "./WorkflowTemplateJobSparkSqlJobQueryList";

export interface WorkflowTemplateJobSparkSqlJob {
  // HCFS URIs of jar files to be added to the Spark CLASSPATH.
  JarFileUris?: Array<string>;

  // The runtime log config for job execution.
  LoggingConfig?: WorkflowTemplateJobSparkSqlJobLoggingConfig;

  // A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Dataproc API may be overwritten.
  Properties?: Map<string, string>;

  // The HCFS URI of the script that contains SQL queries.
  QueryFileUri?: string;

  // A list of queries.
  QueryList?: WorkflowTemplateJobSparkSqlJobQueryList;

  // Mapping of query variable names to values (equivalent to the Spark SQL command: SET `name="value";`).
  ScriptVariables?: Map<string, string>;
}
