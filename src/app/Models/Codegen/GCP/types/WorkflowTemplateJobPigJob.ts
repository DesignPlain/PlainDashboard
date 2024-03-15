import { WorkflowTemplateJobPigJobLoggingConfig } from "./WorkflowTemplateJobPigJobLoggingConfig";
import { WorkflowTemplateJobPigJobQueryList } from "./WorkflowTemplateJobPigJobQueryList";

export interface WorkflowTemplateJobPigJob {
  // Mapping of query variable names to values (equivalent to the Pig command: `name=`).
  ScriptVariables?: Map<string, string>;

  // Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  ContinueOnFailure?: boolean;

  // HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
  JarFileUris?: Array<string>;

  // The runtime log config for job execution.
  LoggingConfig?: WorkflowTemplateJobPigJobLoggingConfig;

  // A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Dataproc API may be overwritten. Can include properties set in /etc/hadoop/conf/--site.xml, /etc/pig/conf/pig.properties, and classes in user code.
  Properties?: Map<string, string>;

  // The HCFS URI of the script that contains the Pig queries.
  QueryFileUri?: string;

  // A list of queries.
  QueryList?: WorkflowTemplateJobPigJobQueryList;
}
