import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { JobQuery } from "../types/JobQuery";
import { JobCopy } from "../types/JobCopy";
import { JobExtract } from "../types/JobExtract";
import { JobLoad } from "../types/JobLoad";
import { JobStatus } from "../types/JobStatus";

export interface JobArgs {
  // The geographic location of the job. The default value is US.
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
-NOTE-: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.
*/
  Query?: JobQuery;

  /*
Copies a table.
Structure is documented below.
*/
  Copy?: JobCopy;

  /*
Configures an extract job.
Structure is documented below.
*/
  Extract?: JobExtract;

  // The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  JobId?: string;

  // Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  JobTimeoutMs?: string;

  /*
Configures a load job.
Structure is documented below.
*/
  Load?: JobLoad;

  /*
The labels associated with this job. You can use these to organize and group your jobs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class Job extends Resource {
  /*
Copies a table.
Structure is documented below.
*/
  public Copy?: JobCopy;

  /*
Configures an extract job.
Structure is documented below.
*/
  public Extract?: JobExtract;

  // The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.
  public JobId?: string;

  /*
Configures a load job.
Structure is documented below.
*/
  public Load?: JobLoad;

  /*
(Output)
The type of the job.
*/
  public JobType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
(Output)
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.
  public JobTimeoutMs?: string;

  /*
The labels associated with this job. You can use these to organize and group your jobs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The geographic location of the job. The default value is US.
  public Location?: string;

  /*
(Output)
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  /*
SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.
-NOTE-: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)
(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.
*/
  public Query?: JobQuery;

  /*
The status of this job. Examine this value when polling an asynchronous job to see if the job is complete.
Structure is documented below.
*/
  public Statuses?: Array<JobStatus>;

  // Email address of the user who ran the job.
  public UserEmail?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "JobId",
        "The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Load",
        "Configures a load job.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Copy",
        "Copies a table.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Extract",
        "Configures an extract job.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The labels associated with this job. You can use these to organize and group your jobs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location of the job. The default value is US.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Query",
        'SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL.\n*NOTE*: queries containing [DML language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language)\n(`DELETE`, `UPDATE`, `MERGE`, `INSERT`) must specify `create_disposition = ""` and `write_disposition = ""`.',
      ),
      new DynamicUIProps(
        InputType.String,
        "JobTimeoutMs",
        "Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job.",
      ),
    ];
  }
}
