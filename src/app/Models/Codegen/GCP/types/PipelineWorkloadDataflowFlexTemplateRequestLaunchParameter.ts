import { PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment } from "./PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment";

export interface PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter {
  // Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.
  ContainerSpecGcsPath?: string;

  /*
The runtime environment for the Flex Template job.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexTemplateRuntimeEnvironment
Structure is documented below.
*/
  Environment?: PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;

  // The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.
  JobName?: string;

  /*
Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  LaunchOptions?: Map<string, string>;

  /*
'The parameters for the Flex Template. Example: {"numWorkers":"5"}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  Parameters?: Map<string, string>;

  /*
'Use this to pass transform name mappings for streaming update jobs. Example: {"oldTransformName":"newTransformName",...}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  TransformNameMappings?: Map<string, string>;

  // Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.
  Update?: boolean;
}
