import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  bigquery_JobCopy,
  bigquery_JobCopy_GetTypes,
} from "../types/bigquery_JobCopy";
import {
  bigquery_JobExtract,
  bigquery_JobExtract_GetTypes,
} from "../types/bigquery_JobExtract";
import {
  bigquery_JobLoad,
  bigquery_JobLoad_GetTypes,
} from "../types/bigquery_JobLoad";
import {
  bigquery_JobQuery,
  bigquery_JobQuery_GetTypes,
} from "../types/bigquery_JobQuery";
import {
  bigquery_JobStatus,
  bigquery_JobStatus_GetTypes,
} from "../types/bigquery_JobStatus";

export interface JobArgs {
  /*
Copies a table.
Structure is documented below.
*/
  copy?: bigquery_JobCopy;

  // The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  jobId?: string;

  /*
The labels associated with this job. You can use these to organize and group your jobs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Configures an extract job.
Structure is documented below.
*/
  extract?: bigquery_JobExtract;

  // Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  jobTimeoutMs?: string;

  /*
Configures a load job.
Structure is documented below.
*/
  load?: bigquery_JobLoad;

  // The geographic location of the job. The default value is US.
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
-NOTE-: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.
*/
  query?: bigquery_JobQuery;
}
export class Job extends Resource {
  /*
(Output)
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
*/
  public effectiveLabels?: Map<string, string>;

  // The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  public jobId?: string;

  /*
(Output)
The type of the job.
*/
  public jobType?: string;

  /*
Copies a table.
Structure is documented below.
*/
  public copy?: bigquery_JobCopy;

  // Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  public jobTimeoutMs?: string;

  /*
Configures a load job.
Structure is documented below.
*/
  public load?: bigquery_JobLoad;

  /*
(Output)
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
-NOTE-: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.
*/
  public query?: bigquery_JobQuery;

  /*
The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
Structure is documented below.
*/
  public statuses?: Array<bigquery_JobStatus>;

  /*
Configures an extract job.
Structure is documented below.
*/
  public extract?: bigquery_JobExtract;

  /*
The labels associated with this job. You can use these to organize and group your jobs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The geographic location of the job. The default value is US.
  public location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Email address of the user who ran the job.
  public userEmail?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "copy",
        "Copies a table.\nStructure is documented below.",
        bigquery_JobCopy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "jobId",
        "The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "load",
        "Configures a load job.\nStructure is documented below.",
        bigquery_JobLoad_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "query",
        'SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.\n*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)\n(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.',
        bigquery_JobQuery_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "The labels associated with this job. You can use these to organize and group your jobs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "extract",
        "Configures an extract job.\nStructure is documented below.",
        bigquery_JobExtract_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "jobTimeoutMs",
        "Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The geographic location of the job. The default value is US.",
        [],
        false,
        true,
      ),
    ];
  }
}
