import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter,
  dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter_GetTypes,
} from "./dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter";

export interface dataflow_PipelineWorkloadDataflowFlexTemplateRequest {
  // The regional endpoint to which to direct the request. For example, us-central1, us-west1.
  location?: string;

  // The ID of the Cloud Platform project that the job belongs to.
  projectId?: string;

  // If true, the request is validated but not actually executed. Defaults to false.
  validateOnly?: boolean;

  /*
Parameter to launch a job from a Flex Template.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplateparameter
Structure is documented below.
*/
  launchParameter?: dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;
}

export function dataflow_PipelineWorkloadDataflowFlexTemplateRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "location",
      "The regional endpoint to which to direct the request. For example, us-central1, us-west1.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The ID of the Cloud Platform project that the job belongs to.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "validateOnly",
      "If true, the request is validated but not actually executed. Defaults to false.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "launchParameter",
      "Parameter to launch a job from a Flex Template.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplateparameter\nStructure is documented below.",
      () =>
        dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter_GetTypes(),
      true,
      false,
    ),
  ];
}
