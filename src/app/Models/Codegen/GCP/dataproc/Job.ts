import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { JobPysparkConfig } from "../types/JobPysparkConfig";
import { JobScheduling } from "../types/JobScheduling";
import { JobHadoopConfig } from "../types/JobHadoopConfig";
import { JobHiveConfig } from "../types/JobHiveConfig";
import { JobSparkConfig } from "../types/JobSparkConfig";
import { JobPlacement } from "../types/JobPlacement";
import { JobStatus } from "../types/JobStatus";
import { JobPrestoConfig } from "../types/JobPrestoConfig";
import { JobPigConfig } from "../types/JobPigConfig";
import { JobSparksqlConfig } from "../types/JobSparksqlConfig";
import { JobReference } from "../types/JobReference";

export interface JobArgs {
  // The config of presto job
  PrestoConfig?: JobPrestoConfig;

  // The config of pySpark job.
  PysparkConfig?: JobPysparkConfig;

  // Optional. Job scheduling configuration.
  Scheduling?: JobScheduling;

  // The config of pag job.
  PigConfig?: JobPigConfig;

  // The config of Hadoop job
  HadoopConfig?: JobHadoopConfig;

  // The config of hive job
  HiveConfig?: JobHiveConfig;

  /*
The Cloud Dataproc region. This essentially determines which clusters are available
for this job to be submitted to. If not specified, defaults to `global`.
*/
  Region?: string;

  // The config of SparkSql job
  SparksqlConfig?: JobSparksqlConfig;

  /*
By default, you can only delete inactive jobs within
Dataproc. Setting this to true, and calling destroy, will ensure that the
job is first cancelled before issuing the delete.
*/
  ForceDelete?: boolean;

  // The config of the Spark job.
  SparkConfig?: JobSparkConfig;

  // The config of job placement.
  Placement?: JobPlacement;

  /*
The project in which the `cluster` can be found and jobs
subsequently run against. If it is not provided, the provider project is used.
*/
  Project?: string;

  // The reference of the job
  Reference?: JobReference;

  /*
The list of labels (key/value pairs) to add to the job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class Job extends Resource {
  // A URI pointing to the location of the stdout of the job's driver program.
  public DriverOutputResourceUri?: string;

  // The config of pySpark job.
  public PysparkConfig?: JobPysparkConfig;

  // If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
  public DriverControlsFilesUri?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The config of the Spark job.
  public SparkConfig?: JobSparkConfig;

  // The config of hive job
  public HiveConfig?: JobHiveConfig;

  /*
The list of labels (key/value pairs) to add to the job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The config of pag job.
  public PigConfig?: JobPigConfig;

  /*
The project in which the `cluster` can be found and jobs
subsequently run against. If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Optional. Job scheduling configuration.
  public Scheduling?: JobScheduling;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.

- `scheduling.max_failures_per_hour` - (Required) Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

- `scheduling.max_failures_total` - (Required) Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
*/
  public EffectiveLabels?: Map<string, string>;

  /*
By default, you can only delete inactive jobs within
Dataproc. Setting this to true, and calling destroy, will ensure that the
job is first cancelled before issuing the delete.
*/
  public ForceDelete?: boolean;

  // The config of Hadoop job
  public HadoopConfig?: JobHadoopConfig;

  /*
The Cloud Dataproc region. This essentially determines which clusters are available
for this job to be submitted to. If not specified, defaults to `global`.
*/
  public Region?: string;

  // The config of SparkSql job
  public SparksqlConfig?: JobSparksqlConfig;

  // The status of the job.
  public Statuses?: Array<JobStatus>;

  // The config of job placement.
  public Placement?: JobPlacement;

  // The config of presto job
  public PrestoConfig?: JobPrestoConfig;

  // The reference of the job
  public Reference?: JobReference;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PysparkConfig",
        "The config of pySpark job.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HadoopConfig",
        "The config of Hadoop job",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Cloud Dataproc region. This essentially determines which clusters are available\nfor this job to be submitted to. If not specified, defaults to `global`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SparksqlConfig",
        "The config of SparkSql job",
      ),
      new DynamicUIProps(
        InputType.String,
        "SparkConfig",
        "The config of the Spark job.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Placement",
        "The config of job placement.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PrestoConfig",
        "The config of presto job",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scheduling",
        "Optional. Job scheduling configuration.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PigConfig",
        "The config of pag job.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ForceDelete",
        "By default, you can only delete inactive jobs within\nDataproc. Setting this to true, and calling destroy, will ensure that the\njob is first cancelled before issuing the delete.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Reference",
        "The reference of the job",
      ),
      new DynamicUIProps(
        InputType.String,
        "HiveConfig",
        "The config of hive job",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the `cluster` can be found and jobs\nsubsequently run against. If it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The list of labels (key/value pairs) to add to the job.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
      ),
    ];
  }
}
