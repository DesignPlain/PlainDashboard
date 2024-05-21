import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_WorkflowTemplateJobPrestoJobLoggingConfig,
  dataproc_WorkflowTemplateJobPrestoJobLoggingConfig_GetTypes,
} from "./dataproc_WorkflowTemplateJobPrestoJobLoggingConfig";
import {
  dataproc_WorkflowTemplateJobPrestoJobQueryList,
  dataproc_WorkflowTemplateJobPrestoJobQueryList_GetTypes,
} from "./dataproc_WorkflowTemplateJobPrestoJobQueryList";

export interface dataproc_WorkflowTemplateJobPrestoJob {
  // Presto client tags to attach to this query
  clientTags?: Array<string>;

  // Whether to continue executing queries if a query fails. The default value is `false`. Setting to `true` can be useful when executing independent parallel queries.
  continueOnFailure?: boolean;

  // The runtime log config for job execution.
  loggingConfig?: dataproc_WorkflowTemplateJobPrestoJobLoggingConfig;

  // The format in which query output will be displayed. See the Presto documentation for supported output formats
  outputFormat?: string;

  // A mapping of property names to values. Used to set Presto (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI
  properties?: Map<string, string>;

  // The HCFS URI of the script that contains SQL queries.
  queryFileUri?: string;

  // A list of queries.
  queryList?: dataproc_WorkflowTemplateJobPrestoJobQueryList;
}

export function dataproc_WorkflowTemplateJobPrestoJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "queryList",
      "A list of queries.",
      dataproc_WorkflowTemplateJobPrestoJobQueryList_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "clientTags",
      "Presto client tags to attach to this query",
      InputType_String_GetTypes(),
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
      InputType.Object,
      "loggingConfig",
      "The runtime log config for job execution.",
      dataproc_WorkflowTemplateJobPrestoJobLoggingConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputFormat",
      "The format in which query output will be displayed. See the Presto documentation for supported output formats",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "A mapping of property names to values. Used to set Presto (https://prestodb.io/docs/current/sql/set-session.html) Equivalent to using the --session flag in the Presto CLI",
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
  ];
}
