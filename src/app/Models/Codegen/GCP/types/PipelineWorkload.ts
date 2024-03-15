import { PipelineWorkloadDataflowLaunchTemplateRequest } from "./PipelineWorkloadDataflowLaunchTemplateRequest";
import { PipelineWorkloadDataflowFlexTemplateRequest } from "./PipelineWorkloadDataflowFlexTemplateRequest";

export interface PipelineWorkload {
  /*
Template information and additional parameters needed to launch a Dataflow job using the flex launch API.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplaterequest
Structure is documented below.
*/
  DataflowFlexTemplateRequest?: PipelineWorkloadDataflowFlexTemplateRequest;

  /*
Template information and additional parameters needed to launch a Dataflow job using the standard launch API.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplaterequest
Structure is documented below.
*/
  DataflowLaunchTemplateRequest?: PipelineWorkloadDataflowLaunchTemplateRequest;
}
