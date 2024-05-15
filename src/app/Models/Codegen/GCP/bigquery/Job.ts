import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_JobLoad,
  Bigquery_JobLoad_GetTypes,
} from "../types/Bigquery_JobLoad";
import {
  Bigquery_JobQuery,
  Bigquery_JobQuery_GetTypes,
} from "../types/Bigquery_JobQuery";
import {
  Bigquery_JobStatus,
  Bigquery_JobStatus_GetTypes,
} from "../types/Bigquery_JobStatus";
import {
  Bigquery_JobCopy,
  Bigquery_JobCopy_GetTypes,
} from "../types/Bigquery_JobCopy";
import {
  Bigquery_JobExtract,
  Bigquery_JobExtract_GetTypes,
} from "../types/Bigquery_JobExtract";

export interface JobArgs {
  /*
Copies a table.
Structure is documented below.
*/
  Copy?: Bigquery_JobCopy;

  /*
Configures an extract job.
Structure is documented below.
*/
  Extract?: Bigquery_JobExtract;

  /*
The labels associated with this job. You can use these to organize and group your jobs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  JobId?: string;

  // Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  JobTimeoutMs?: string;

  /*
Configures a load job.
Structure is documented below.
*/
  Load?: Bigquery_JobLoad;

  // The geographic location of the job. The default value is US.
  Location?: string;

  /*
SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
-NOTE-: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.
*/
  Query?: Bigquery_JobQuery;
}
export class Job extends Resource {
  /*
Configures a load job.
Structure is documented below.
*/
  public Load?: Bigquery_JobLoad;

  // The geographic location of the job. The default value is US.
  public Location?: string;

  /*
(Output)
The type of the job.
*/
  public JobType?: string;

  // Email address of the user who ran the job.
  public UserEmail?: string;

  /*
Copies a table.
Structure is documented below.
*/
  public Copy?: Bigquery_JobCopy;

  /*
(Output)
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  // Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  public JobTimeoutMs?: string;

  /*
Configures an extract job.
Structure is documented below.
*/
  public Extract?: Bigquery_JobExtract;

  /*
SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
-NOTE-: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.
*/
  public Query?: Bigquery_JobQuery;

  /*
The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
Structure is documented below.
*/
  public Statuses?: Array<Bigquery_JobStatus>;

  /*
(Output)
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  public JobId?: string;

  /*
The labels associated with this job. You can use these to organize and group your jobs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Copy",
        "Copies a table.\nStructure is documented below.",
        Bigquery_JobCopy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "The labels associated with this job. You can use these to organize and group your jobs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "JobTimeoutMs",
        "Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Query",
        'SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.\n*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)\n(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.',
        Bigquery_JobQuery_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Extract",
        "Configures an extract job.\nStructure is documented below.",
        Bigquery_JobExtract_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "JobId",
        "The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Load",
        "Configures a load job.\nStructure is documented below.",
        Bigquery_JobLoad_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location of the job. The default value is US.",
        [],
        false,
        true,
      ),
    ];
  }
}
