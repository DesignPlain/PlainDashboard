import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_JobHiveConfig,
  Dataproc_JobHiveConfig_GetTypes,
} from "../types/Dataproc_JobHiveConfig";
import {
  Dataproc_JobPysparkConfig,
  Dataproc_JobPysparkConfig_GetTypes,
} from "../types/Dataproc_JobPysparkConfig";
import {
  Dataproc_JobHadoopConfig,
  Dataproc_JobHadoopConfig_GetTypes,
} from "../types/Dataproc_JobHadoopConfig";
import {
  Dataproc_JobPigConfig,
  Dataproc_JobPigConfig_GetTypes,
} from "../types/Dataproc_JobPigConfig";
import {
  Dataproc_JobSparksqlConfig,
  Dataproc_JobSparksqlConfig_GetTypes,
} from "../types/Dataproc_JobSparksqlConfig";
import {
  Dataproc_JobSparkConfig,
  Dataproc_JobSparkConfig_GetTypes,
} from "../types/Dataproc_JobSparkConfig";
import {
  Dataproc_JobReference,
  Dataproc_JobReference_GetTypes,
} from "../types/Dataproc_JobReference";
import {
  Dataproc_JobScheduling,
  Dataproc_JobScheduling_GetTypes,
} from "../types/Dataproc_JobScheduling";
import {
  Dataproc_JobPrestoConfig,
  Dataproc_JobPrestoConfig_GetTypes,
} from "../types/Dataproc_JobPrestoConfig";
import {
  Dataproc_JobStatus,
  Dataproc_JobStatus_GetTypes,
} from "../types/Dataproc_JobStatus";
import {
  Dataproc_JobPlacement,
  Dataproc_JobPlacement_GetTypes,
} from "../types/Dataproc_JobPlacement";

export interface JobArgs {
  /*
The Cloud Dataproc region. This essentially determines which clusters are available
for this job to be submitted to. If not specified, defaults to `global`.
*/
  Region?: string;

  // The config of the Spark job.
  SparkConfig?: Dataproc_JobSparkConfig;

  /*
By default, you can only delete inactive jobs within
Dataproc. Setting this to true, and calling destroy, will ensure that the
job is first cancelled before issuing the delete.
*/
  ForceDelete?: boolean;

  // The config of job placement.
  Placement?: Dataproc_JobPlacement;

  /*
The project in which the `cluster` can be found and jobs
subsequently run against. If it is not provided, the provider project is used.
*/
  Project?: string;

  // The reference of the job
  Reference?: Dataproc_JobReference;

  // The config of hive job
  HiveConfig?: Dataproc_JobHiveConfig;

  /*
The list of labels (key/value pairs) to add to the job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The config of pySpark job.
  PysparkConfig?: Dataproc_JobPysparkConfig;

  // Optional. Job scheduling configuration.
  Scheduling?: Dataproc_JobScheduling;

  // The config of Hadoop job
  HadoopConfig?: Dataproc_JobHadoopConfig;

  // The config of pag job.
  PigConfig?: Dataproc_JobPigConfig;

  // The config of presto job
  PrestoConfig?: Dataproc_JobPrestoConfig;

  // The config of SparkSql job
  SparksqlConfig?: Dataproc_JobSparksqlConfig;
}
export class Job extends Resource {
  // A URI pointing to the location of the stdout of the job's driver program.
  public DriverOutputResourceUri?: string;

  // The reference of the job
  public Reference?: Dataproc_JobReference;

  // The config of SparkSql job
  public SparksqlConfig?: Dataproc_JobSparksqlConfig;

  // The status of the job.
  public Statuses?: Array<Dataproc_JobStatus>;

  // The config of Hadoop job
  public HadoopConfig?: Dataproc_JobHadoopConfig;

  /*
The project in which the `cluster` can be found and jobs
subsequently run against. If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The config of presto job
  public PrestoConfig?: Dataproc_JobPrestoConfig;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The config of pySpark job.
  public PysparkConfig?: Dataproc_JobPysparkConfig;

  // If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
  public DriverControlsFilesUri?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.

- `scheduling.max_failures_per_hour` - (Required) Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

- `scheduling.max_failures_total` - (Required) Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
*/
  public EffectiveLabels?: Map<string, string>;

  // The config of hive job
  public HiveConfig?: Dataproc_JobHiveConfig;

  // The config of pag job.
  public PigConfig?: Dataproc_JobPigConfig;

  // The config of job placement.
  public Placement?: Dataproc_JobPlacement;

  /*
The Cloud Dataproc region. This essentially determines which clusters are available
for this job to be submitted to. If not specified, defaults to `global`.
*/
  public Region?: string;

  // The config of the Spark job.
  public SparkConfig?: Dataproc_JobSparkConfig;

  /*
By default, you can only delete inactive jobs within
Dataproc. Setting this to true, and calling destroy, will ensure that the
job is first cancelled before issuing the delete.
*/
  public ForceDelete?: boolean;

  /*
The list of labels (key/value pairs) to add to the job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Optional. Job scheduling configuration.
  public Scheduling?: Dataproc_JobScheduling;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "HiveConfig",
        "The config of hive job",
        Dataproc_JobHiveConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PysparkConfig",
        "The config of pySpark job.",
        Dataproc_JobPysparkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SparksqlConfig",
        "The config of SparkSql job",
        Dataproc_JobSparksqlConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ForceDelete",
        "By default, you can only delete inactive jobs within\nDataproc. Setting this to true, and calling destroy, will ensure that the\njob is first cancelled before issuing the delete.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Placement",
        "The config of job placement.",
        Dataproc_JobPlacement_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PrestoConfig",
        "The config of presto job",
        Dataproc_JobPrestoConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SparkConfig",
        "The config of the Spark job.",
        Dataproc_JobSparkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "HadoopConfig",
        "The config of Hadoop job",
        Dataproc_JobHadoopConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the `cluster` can be found and jobs\nsubsequently run against. If it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PigConfig",
        "The config of pag job.",
        Dataproc_JobPigConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "The list of labels (key/value pairs) to add to the job.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Scheduling",
        "Optional. Job scheduling configuration.",
        Dataproc_JobScheduling_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Cloud Dataproc region. This essentially determines which clusters are available\nfor this job to be submitted to. If not specified, defaults to `global`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Reference",
        "The reference of the job",
        Dataproc_JobReference_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
