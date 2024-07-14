import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataflow_PipelineWorkloadDataflowFlexTemplateRequest,
  dataflow_PipelineWorkloadDataflowFlexTemplateRequest_GetTypes,
} from "./dataflow_PipelineWorkloadDataflowFlexTemplateRequest";
import {
  dataflow_PipelineWorkloadDataflowLaunchTemplateRequest,
  dataflow_PipelineWorkloadDataflowLaunchTemplateRequest_GetTypes,
} from "./dataflow_PipelineWorkloadDataflowLaunchTemplateRequest";

export interface dataflow_PipelineWorkload {
  /*
Template information and additional parameters needed to launch a Dataflow job using the flex launch API.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplaterequest
Structure is documented below.
*/
  dataflowFlexTemplateRequest?: dataflow_PipelineWorkloadDataflowFlexTemplateRequest;

  /*
Template information and additional parameters needed to launch a Dataflow job using the standard launch API.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplaterequest
Structure is documented below.
*/
  dataflowLaunchTemplateRequest?: dataflow_PipelineWorkloadDataflowLaunchTemplateRequest;
}

export function dataflow_PipelineWorkload_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dataflowFlexTemplateRequest",
      "Template information and additional parameters needed to launch a Dataflow job using the flex launch API.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplaterequest\nStructure is documented below.",
      dataflow_PipelineWorkloadDataflowFlexTemplateRequest_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dataflowLaunchTemplateRequest",
      "Template information and additional parameters needed to launch a Dataflow job using the standard launch API.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplaterequest\nStructure is documented below.",
      dataflow_PipelineWorkloadDataflowLaunchTemplateRequest_GetTypes(),
      false,
      false,
    ),
  ];
}
