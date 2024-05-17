import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter,
  Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter_GetTypes,
} from "./Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter";

export interface Dataflow_PipelineWorkloadDataflowFlexTemplateRequest {
  /*
Parameter to launch a job from a Flex Template.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplateparameter
Structure is documented below.
*/
  LaunchParameter?: Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter;

  // The regional endpoint to which to direct the request. For example, us-central1, us-west1.
  Location?: string;

  // The ID of the Cloud Platform project that the job belongs to.
  ProjectId?: string;

  // If true, the request is validated but not actually executed. Defaults to false.
  ValidateOnly?: boolean;
}

export function Dataflow_PipelineWorkloadDataflowFlexTemplateRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "LaunchParameter",
      "Parameter to launch a job from a Flex Template.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchflextemplateparameter\nStructure is documented below.",
      Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The regional endpoint to which to direct the request. For example, us-central1, us-west1.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The ID of the Cloud Platform project that the job belongs to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ValidateOnly",
      "If true, the request is validated but not actually executed. Defaults to false.",
      [],
      false,
      false,
    ),
  ];
}
