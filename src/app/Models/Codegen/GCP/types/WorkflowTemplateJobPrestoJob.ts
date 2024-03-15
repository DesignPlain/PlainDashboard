import { WorkflowTemplateJobPrestoJobLoggingConfig } from "./WorkflowTemplateJobPrestoJobLoggingConfig";
import { WorkflowTemplateJobPrestoJobQueryList } from "./WorkflowTemplateJobPrestoJobQueryList";

export interface WorkflowTemplateJobPrestoJob {
  // The runtime log config for job execution.
  LoggingConfig?: WorkflowTemplateJobPrestoJobLoggingConfig;

  // The format in which query output will be displayed. See the Presto documentation for supported output formats
  OutputFormat?: string;

  // A mapping of property names to values. Used to set Presto (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI
  Properties?: Map<string, string>;

  // The HCFS URI of the script that contains SQL queries.
  QueryFileUri?: string;

  // A list of queries.
  QueryList?: WorkflowTemplateJobPrestoJobQueryList;

  // Presto client tags to attach to this query
  ClientTags?: Array<string>;

  // Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  ContinueOnFailure?: boolean;
}
