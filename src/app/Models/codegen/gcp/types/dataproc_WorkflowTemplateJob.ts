import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_WorkflowTemplateJobSparkJob,
  dataproc_WorkflowTemplateJobSparkJob_GetTypes,
} from './dataproc_WorkflowTemplateJobSparkJob';
import {
  dataproc_WorkflowTemplateJobSparkRJob,
  dataproc_WorkflowTemplateJobSparkRJob_GetTypes,
} from './dataproc_WorkflowTemplateJobSparkRJob';
import {
  dataproc_WorkflowTemplateJobSparkSqlJob,
  dataproc_WorkflowTemplateJobSparkSqlJob_GetTypes,
} from './dataproc_WorkflowTemplateJobSparkSqlJob';
import {
  dataproc_WorkflowTemplateJobHiveJob,
  dataproc_WorkflowTemplateJobHiveJob_GetTypes,
} from './dataproc_WorkflowTemplateJobHiveJob';
import {
  dataproc_WorkflowTemplateJobPigJob,
  dataproc_WorkflowTemplateJobPigJob_GetTypes,
} from './dataproc_WorkflowTemplateJobPigJob';
import {
  dataproc_WorkflowTemplateJobPysparkJob,
  dataproc_WorkflowTemplateJobPysparkJob_GetTypes,
} from './dataproc_WorkflowTemplateJobPysparkJob';
import {
  dataproc_WorkflowTemplateJobScheduling,
  dataproc_WorkflowTemplateJobScheduling_GetTypes,
} from './dataproc_WorkflowTemplateJobScheduling';
import {
  dataproc_WorkflowTemplateJobHadoopJob,
  dataproc_WorkflowTemplateJobHadoopJob_GetTypes,
} from './dataproc_WorkflowTemplateJobHadoopJob';
import {
  dataproc_WorkflowTemplateJobPrestoJob,
  dataproc_WorkflowTemplateJobPrestoJob_GetTypes,
} from './dataproc_WorkflowTemplateJobPrestoJob';

export interface dataproc_WorkflowTemplateJob {
  // Job scheduling configuration.
  scheduling?: dataproc_WorkflowTemplateJobScheduling;

  // Job is a Spark job.
  sparkJob?: dataproc_WorkflowTemplateJobSparkJob;

  // Job is a SparkR job.
  sparkRJob?: dataproc_WorkflowTemplateJobSparkRJob;

  // Job is a SparkSql job.
  sparkSqlJob?: dataproc_WorkflowTemplateJobSparkSqlJob;

  // Job is a Hadoop job.
  hadoopJob?: dataproc_WorkflowTemplateJobHadoopJob;

  // Job is a Hive job.
  hiveJob?: dataproc_WorkflowTemplateJobHiveJob;

  // The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: {0,63} No more than 32 labels can be associated with a given job.
  labels?: Map<string, string>;

  // Job is a Presto job.
  prestoJob?: dataproc_WorkflowTemplateJobPrestoJob;

  // Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
  stepId?: string;

  // Job is a Pig job.
  pigJob?: dataproc_WorkflowTemplateJobPigJob;

  // The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.
  prerequisiteStepIds?: Array<string>;

  // Job is a PySpark job.
  pysparkJob?: dataproc_WorkflowTemplateJobPysparkJob;
}

export function dataproc_WorkflowTemplateJob_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'sparkRJob',
      'Job is a SparkR job.',
      () => dataproc_WorkflowTemplateJobSparkRJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'hiveJob',
      'Job is a Hive job.',
      () => dataproc_WorkflowTemplateJobHiveJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      'labels',
      'The labels to associate with this job. Label keys must be between 1 and 63 characters long, and must conform to the following regular expression: {0,63} No more than 32 labels can be associated with a given job.',
      () => InputType_Map_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'prestoJob',
      'Job is a Presto job.',
      () => dataproc_WorkflowTemplateJobPrestoJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'pigJob',
      'Job is a Pig job.',
      () => dataproc_WorkflowTemplateJobPigJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'prerequisiteStepIds',
      'The optional list of prerequisite job step_ids. If not specified, the job will start at the beginning of workflow.',
      () => InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'scheduling',
      'Job scheduling configuration.',
      () => dataproc_WorkflowTemplateJobScheduling_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sparkJob',
      'Job is a Spark job.',
      () => dataproc_WorkflowTemplateJobSparkJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'stepId',
      'Required. The step id. The id must be unique among all jobs within the template. The step id is used as prefix for job id, as job `goog-dataproc-workflow-step-id` label, and in field from other steps. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'pysparkJob',
      'Job is a PySpark job.',
      () => dataproc_WorkflowTemplateJobPysparkJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'sparkSqlJob',
      'Job is a SparkSql job.',
      () => dataproc_WorkflowTemplateJobSparkSqlJob_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'hadoopJob',
      'Job is a Hadoop job.',
      () => dataproc_WorkflowTemplateJobHadoopJob_GetTypes(),
      false,
      true,
    ),
  ];
}
