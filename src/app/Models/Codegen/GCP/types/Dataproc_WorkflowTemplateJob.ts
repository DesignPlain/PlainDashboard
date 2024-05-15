import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_WorkflowTemplateJobScheduling,
  Dataproc_WorkflowTemplateJobScheduling_GetTypes,
} from "./Dataproc_WorkflowTemplateJobScheduling";
import {
  Dataproc_WorkflowTemplateJobPysparkJob,
  Dataproc_WorkflowTemplateJobPysparkJob_GetTypes,
} from "./Dataproc_WorkflowTemplateJobPysparkJob";
import {
  Dataproc_WorkflowTemplateJobSparkJob,
  Dataproc_WorkflowTemplateJobSparkJob_GetTypes,
} from "./Dataproc_WorkflowTemplateJobSparkJob";
import {
  Dataproc_WorkflowTemplateJobSparkSqlJob,
  Dataproc_WorkflowTemplateJobSparkSqlJob_GetTypes,
} from "./Dataproc_WorkflowTemplateJobSparkSqlJob";
import {
  Dataproc_WorkflowTemplateJobSparkRJob,
  Dataproc_WorkflowTemplateJobSparkRJob_GetTypes,
} from "./Dataproc_WorkflowTemplateJobSparkRJob";
import {
  Dataproc_WorkflowTemplateJobHadoopJob,
  Dataproc_WorkflowTemplateJobHadoopJob_GetTypes,
} from "./Dataproc_WorkflowTemplateJobHadoopJob";
import {
  Dataproc_WorkflowTemplateJobHiveJob,
  Dataproc_WorkflowTemplateJobHiveJob_GetTypes,
} from "./Dataproc_WorkflowTemplateJobHiveJob";
import {
  Dataproc_WorkflowTemplateJobPigJob,
  Dataproc_WorkflowTemplateJobPigJob_GetTypes,
} from "./Dataproc_WorkflowTemplateJobPigJob";
import {
  Dataproc_WorkflowTemplateJobPrestoJob,
  Dataproc_WorkflowTemplateJobPrestoJob_GetTypes,
} from "./Dataproc_WorkflowTemplateJobPrestoJob";

export interface Dataproc_WorkflowTemplateJob {
  // Job is a SparkR job.
  SparkRJob?: Dataproc_WorkflowTemplateJobSparkRJob;

  // Job is a Hadoop job.
  HadoopJob?: Dataproc_WorkflowTemplateJobHadoopJob;

  // Job is a Hive job.
  HiveJob?: Dataproc_WorkflowTemplateJobHiveJob;

  // Job is a Pig job.
  PigJob?: Dataproc_WorkflowTemplateJobPigJob;

  // The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
  PrerequisiteStepIds?: Array<string>;

  // Job is a Presto job.
  PrestoJob?: Dataproc_WorkflowTemplateJobPrestoJob;

  // Job scheduling configuration.
  Scheduling?: Dataproc_WorkflowTemplateJobScheduling;

  // The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: {0,63} No more than 32 labels can be associated with a given job.
  Labels?: Map<string, string>;

  // Job is a PySpark job.
  PysparkJob?: Dataproc_WorkflowTemplateJobPysparkJob;

  // Job is a Spark job.
  SparkJob?: Dataproc_WorkflowTemplateJobSparkJob;

  // Job is a SparkSql job.
  SparkSqlJob?: Dataproc_WorkflowTemplateJobSparkSqlJob;

  // Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
  StepId?: string;
}

export function Dataproc_WorkflowTemplateJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SparkRJob",
      "Job is a SparkR job.",
      Dataproc_WorkflowTemplateJobSparkRJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HadoopJob",
      "Job is a Hadoop job.",
      Dataproc_WorkflowTemplateJobHadoopJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PigJob",
      "Job is a Pig job.",
      Dataproc_WorkflowTemplateJobPigJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PrerequisiteStepIds",
      "The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Labels",
      "The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: {0,63} No more than 32 labels can be associated with a given job.",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SparkSqlJob",
      "Job is a SparkSql job.",
      Dataproc_WorkflowTemplateJobSparkSqlJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "StepId",
      "Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HiveJob",
      "Job is a Hive job.",
      Dataproc_WorkflowTemplateJobHiveJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PrestoJob",
      "Job is a Presto job.",
      Dataproc_WorkflowTemplateJobPrestoJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Scheduling",
      "Job scheduling configuration.",
      Dataproc_WorkflowTemplateJobScheduling_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PysparkJob",
      "Job is a PySpark job.",
      Dataproc_WorkflowTemplateJobPysparkJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SparkJob",
      "Job is a Spark job.",
      Dataproc_WorkflowTemplateJobSparkJob_GetTypes(),
      false,
      true,
    ),
  ];
}
