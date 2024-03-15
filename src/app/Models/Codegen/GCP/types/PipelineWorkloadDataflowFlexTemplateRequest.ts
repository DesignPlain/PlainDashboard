import { PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter } from "./PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter";

export interface PipelineWorkloadDataflowFlexTemplateRequest {
  /*
Parameter to launch a job from a Flex Template.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplateparameter
Structure is documented below.
*/
  LaunchParameter?: PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;

  // The regional endpoint to which to direct the request. For example, us-central1, us-west1.
  Location?: string;

  // The ID of the Cloud Platform project that the job belongs to.
  ProjectId?: string;

  // If true, the request is validated but not actually executed. Defaults to false.
  ValidateOnly?: boolean;
}
