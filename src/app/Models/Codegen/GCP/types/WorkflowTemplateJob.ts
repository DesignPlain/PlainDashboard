import { WorkflowTemplateJobSparkJob } from "./WorkflowTemplateJobSparkJob";
import { WorkflowTemplateJobSparkSqlJob } from "./WorkflowTemplateJobSparkSqlJob";
import { WorkflowTemplateJobHiveJob } from "./WorkflowTemplateJobHiveJob";
import { WorkflowTemplateJobPigJob } from "./WorkflowTemplateJobPigJob";
import { WorkflowTemplateJobPrestoJob } from "./WorkflowTemplateJobPrestoJob";
import { WorkflowTemplateJobPysparkJob } from "./WorkflowTemplateJobPysparkJob";
import { WorkflowTemplateJobScheduling } from "./WorkflowTemplateJobScheduling";
import { WorkflowTemplateJobHadoopJob } from "./WorkflowTemplateJobHadoopJob";
import { WorkflowTemplateJobSparkRJob } from "./WorkflowTemplateJobSparkRJob";

export interface WorkflowTemplateJob {
  // Job is a Hadoop job.
  HadoopJob?: WorkflowTemplateJobHadoopJob;

  // The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: {0,63} No more than 32 labels can be associated with a given job.
  Labels?: Map<string, string>;

  // The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
  PrerequisiteStepIds?: Array<string>;

  // Job is a SparkR job.
  SparkRJob?: WorkflowTemplateJobSparkRJob;

  // Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
  StepId?: string;

  // Job is a Hive job.
  HiveJob?: WorkflowTemplateJobHiveJob;

  // Job is a Pig job.
  PigJob?: WorkflowTemplateJobPigJob;

  // Job is a Presto job.
  PrestoJob?: WorkflowTemplateJobPrestoJob;

  // Job is a PySpark job.
  PysparkJob?: WorkflowTemplateJobPysparkJob;

  // Job scheduling configuration.
  Scheduling?: WorkflowTemplateJobScheduling;

  // Job is a Spark job.
  SparkJob?: WorkflowTemplateJobSparkJob;

  // Job is a SparkSql job.
  SparkSqlJob?: WorkflowTemplateJobSparkSqlJob;
}
