import { PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment } from "./PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment";

export interface PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters {
  /*
The runtime environment for the job.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#RuntimeEnvironment
Structure is documented below.
*/
  Environment?: PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;

  // The job name to use for the created job.
  JobName?: string;

  /*
The runtime parameters to pass to the job.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  Parameters?: Map<string, string>;

  /*
Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  TransformNameMapping?: Map<string, string>;

  // If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.
  Update?: boolean;
}
