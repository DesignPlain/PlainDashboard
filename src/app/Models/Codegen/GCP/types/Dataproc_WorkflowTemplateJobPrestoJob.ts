import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateJobPrestoJobLoggingConfig,
  Dataproc_WorkflowTemplateJobPrestoJobLoggingConfig_GetTypes,
} from "./Dataproc_WorkflowTemplateJobPrestoJobLoggingConfig";
import {
  Dataproc_WorkflowTemplateJobPrestoJobQueryList,
  Dataproc_WorkflowTemplateJobPrestoJobQueryList_GetTypes,
} from "./Dataproc_WorkflowTemplateJobPrestoJobQueryList";

export interface Dataproc_WorkflowTemplateJobPrestoJob {
  // The HCFS URI of the script that contains SQL queries.
  QueryFileUri?: string;

  // A list of queries.
  QueryList?: Dataproc_WorkflowTemplateJobPrestoJobQueryList;

  // Presto client tags to attach to this query
  ClientTags?: Array<string>;

  // Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  ContinueOnFailure?: boolean;

  // The runtime log config for job execution.
  LoggingConfig?: Dataproc_WorkflowTemplateJobPrestoJobLoggingConfig;

  // The format in which query output will be displayed. See the Presto documentation for supported output formats
  OutputFormat?: string;

  // A mapping of property names to values. Used to set Presto (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI
  Properties?: Map<string, string>;
}

export function Dataproc_WorkflowTemplateJobPrestoJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "OutputFormat",
      "The format in which query output will be displayed. See the Presto documentation for supported output formats",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "A mapping of property names to values. Used to set Presto (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI",
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
      Dataproc_WorkflowTemplateJobPrestoJobQueryList_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ClientTags",
      "Presto client tags to attach to this query",
      InputType_String_GetTypes(),
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
      InputType.Object,
      "LoggingConfig",
      "The runtime log config for job execution.",
      Dataproc_WorkflowTemplateJobPrestoJobLoggingConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
