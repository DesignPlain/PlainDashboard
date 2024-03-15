import { PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters } from "./PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters";

export interface PipelineWorkloadDataflowLaunchTemplateRequest {
  // A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.
  GcsPath?: string;

  /*
The parameters of the template to launch. This should be part of the body of the POST request.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplateparameters
Structure is documented below.
*/
  LaunchParameters?: PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;

  // The regional endpoint to which to direct the request.
  Location?: string;

  // The ID of the Cloud Platform project that the job belongs to.
  ProjectId?: string;

  // (Optional)
  ValidateOnly?: boolean;
}
