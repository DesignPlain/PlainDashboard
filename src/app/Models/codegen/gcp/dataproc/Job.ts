import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_JobReference,
  dataproc_JobReference_GetTypes,
} from "../types/dataproc_JobReference";
import {
  dataproc_JobPlacement,
  dataproc_JobPlacement_GetTypes,
} from "../types/dataproc_JobPlacement";
import {
  dataproc_JobSparkConfig,
  dataproc_JobSparkConfig_GetTypes,
} from "../types/dataproc_JobSparkConfig";
import {
  dataproc_JobStatus,
  dataproc_JobStatus_GetTypes,
} from "../types/dataproc_JobStatus";
import {
  dataproc_JobSparksqlConfig,
  dataproc_JobSparksqlConfig_GetTypes,
} from "../types/dataproc_JobSparksqlConfig";
import {
  dataproc_JobHadoopConfig,
  dataproc_JobHadoopConfig_GetTypes,
} from "../types/dataproc_JobHadoopConfig";
import {
  dataproc_JobPrestoConfig,
  dataproc_JobPrestoConfig_GetTypes,
} from "../types/dataproc_JobPrestoConfig";
import {
  dataproc_JobPysparkConfig,
  dataproc_JobPysparkConfig_GetTypes,
} from "../types/dataproc_JobPysparkConfig";
import {
  dataproc_JobHiveConfig,
  dataproc_JobHiveConfig_GetTypes,
} from "../types/dataproc_JobHiveConfig";
import {
  dataproc_JobPigConfig,
  dataproc_JobPigConfig_GetTypes,
} from "../types/dataproc_JobPigConfig";
import {
  dataproc_JobScheduling,
  dataproc_JobScheduling_GetTypes,
} from "../types/dataproc_JobScheduling";

export interface JobArgs {
  /*
By default, you can only delete inactive jobs within
Dataproc. Setting this to true, and calling destroy, will ensure that the
job is first cancelled before issuing the delete.
*/
  forceDelete?: boolean;

  // The config of hive job
  hiveConfig?: dataproc_JobHiveConfig;

  // The config of SparkSql job
  sparksqlConfig?: dataproc_JobSparksqlConfig;

  // The config of Hadoop job
  hadoopConfig?: dataproc_JobHadoopConfig;

  // The config of presto job
  prestoConfig?: dataproc_JobPrestoConfig;

  // The config of pySpark job.
  pysparkConfig?: dataproc_JobPysparkConfig;

  /*
The Cloud Dataproc region. This essentially determines which clusters are available
for this job to be submitted to. If not specified, defaults to `global`.
*/
  region?: string;

  /*
The list of labels (key/value pairs) to add to the job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The config of pag job.
  pigConfig?: dataproc_JobPigConfig;

  // The reference of the job
  reference?: dataproc_JobReference;

  // Optional. Job scheduling configuration.
  scheduling?: dataproc_JobScheduling;

  // The config of job placement.
  placement?: dataproc_JobPlacement;

  /*
The project in which the `cluster` can be found and jobs
subsequently run against. If it is not provided, the provider project is used.
*/
  project?: string;

  // The config of the Spark job.
  sparkConfig?: dataproc_JobSparkConfig;
}
export class Job extends DS_Resource {
  // If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files may be placed in the same location as driver_output_uri.
  public driverControlsFilesUri?: string;

  /*
The project in which the `cluster` can be found and jobs
subsequently run against. If it is not provided, the provider project is used.
*/
  public project?: string;

  // The config of pySpark job.
  public pysparkConfig?: dataproc_JobPysparkConfig;

  // The status of the job.
  public statuses?: Array<dataproc_JobStatus>;

  // The config of the Spark job.
  public sparkConfig?: dataproc_JobSparkConfig;

  // The config of SparkSql job
  public sparksqlConfig?: dataproc_JobSparksqlConfig;

  // The config of hive job
  public hiveConfig?: dataproc_JobHiveConfig;

  // The config of pag job.
  public pigConfig?: dataproc_JobPigConfig;

  // The config of job placement.
  public placement?: dataproc_JobPlacement;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  /*
The Cloud Dataproc region. This essentially determines which clusters are available
for this job to be submitted to. If not specified, defaults to `global`.
*/
  public region?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.

- `scheduling.max_failures_per_hour` - (Required) Maximum number of times per hour a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.

- `scheduling.max_failures_total` - (Required) Maximum number of times in total a driver may be restarted as a result of driver exiting with non-zero code before job is reported failed.
*/
  public effectiveLabels?: Map<string, string>;

  // The config of Hadoop job
  public hadoopConfig?: dataproc_JobHadoopConfig;

  /*
The list of labels (key/value pairs) to add to the job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // A URI pointing to the location of the stdout of the job's driver program.
  public driverOutputResourceUri?: string;

  /*
By default, you can only delete inactive jobs within
Dataproc. Setting this to true, and calling destroy, will ensure that the
job is first cancelled before issuing the delete.
*/
  public forceDelete?: boolean;

  // The config of presto job
  public prestoConfig?: dataproc_JobPrestoConfig;

  // The reference of the job
  public reference?: dataproc_JobReference;

  // Optional. Job scheduling configuration.
  public scheduling?: dataproc_JobScheduling;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "prestoConfig",
        "The config of presto job",
        () => dataproc_JobPrestoConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reference",
        "The reference of the job",
        () => dataproc_JobReference_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "placement",
        "The config of job placement.",
        () => dataproc_JobPlacement_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the `cluster` can be found and jobs\nsubsequently run against. If it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sparkConfig",
        "The config of the Spark job.",
        () => dataproc_JobSparkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "forceDelete",
        "By default, you can only delete inactive jobs within\nDataproc. Setting this to true, and calling destroy, will ensure that the\njob is first cancelled before issuing the delete.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sparksqlConfig",
        "The config of SparkSql job",
        () => dataproc_JobSparksqlConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "hadoopConfig",
        "The config of Hadoop job",
        () => dataproc_JobHadoopConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The Cloud Dataproc region. This essentially determines which clusters are available\nfor this job to be submitted to. If not specified, defaults to `global`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "The list of labels (key/value pairs) to add to the job.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "hiveConfig",
        "The config of hive job",
        () => dataproc_JobHiveConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "pysparkConfig",
        "The config of pySpark job.",
        () => dataproc_JobPysparkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "pigConfig",
        "The config of pag job.",
        () => dataproc_JobPigConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduling",
        "Optional. Job scheduling configuration.",
        () => dataproc_JobScheduling_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
