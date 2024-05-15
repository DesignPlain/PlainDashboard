import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters,
  Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters_GetTypes,
} from "./Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters";

export interface Dataflow_PipelineWorkloadDataflowLaunchTemplateRequest {
  // (Optional)
  ValidateOnly?: boolean;

  // A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.
  GcsPath?: string;

  /*
The parameters of the template to launch. This should be part of the body of the POST request.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplateparameters
Structure is documented below.
*/
  LaunchParameters?: Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;

  // The regional endpoint to which to direct the request.
  Location?: string;

  // The ID of the Cloud Platform project that the job belongs to.
  ProjectId?: string;
}

export function Dataflow_PipelineWorkloadDataflowLaunchTemplateRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ValidateOnly",
      "(Optional)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GcsPath",
      "A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "LaunchParameters",
      "The parameters of the template to launch. This should be part of the body of the POST request.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplateparameters\nStructure is documented below.",
      Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Location",
      "The regional endpoint to which to direct the request.",
      [],
      false,
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
  ];
}
