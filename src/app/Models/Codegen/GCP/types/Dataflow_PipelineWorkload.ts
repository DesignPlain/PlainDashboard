import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataflow_PipelineWorkloadDataflowFlexTemplateRequest,
  Dataflow_PipelineWorkloadDataflowFlexTemplateRequest_GetTypes,
} from "./Dataflow_PipelineWorkloadDataflowFlexTemplateRequest";
import {
  Dataflow_PipelineWorkloadDataflowLaunchTemplateRequest,
  Dataflow_PipelineWorkloadDataflowLaunchTemplateRequest_GetTypes,
} from "./Dataflow_PipelineWorkloadDataflowLaunchTemplateRequest";

export interface Dataflow_PipelineWorkload {
  /*
Template information and additional parameters needed to launch a Dataflow job using the flex launch API.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplaterequest
Structure is documented below.
*/
  DataflowFlexTemplateRequest?: Dataflow_PipelineWorkloadDataflowFlexTemplateRequest;

  /*
Template information and additional parameters needed to launch a Dataflow job using the standard launch API.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplaterequest
Structure is documented below.
*/
  DataflowLaunchTemplateRequest?: Dataflow_PipelineWorkloadDataflowLaunchTemplateRequest;
}

export function Dataflow_PipelineWorkload_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DataflowFlexTemplateRequest",
      "Template information and additional parameters needed to launch a Dataflow job using the flex launch API.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplaterequest\nStructure is documented below.",
      Dataflow_PipelineWorkloadDataflowFlexTemplateRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DataflowLaunchTemplateRequest",
      "Template information and additional parameters needed to launch a Dataflow job using the standard launch API.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplaterequest\nStructure is documented below.",
      Dataflow_PipelineWorkloadDataflowLaunchTemplateRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
