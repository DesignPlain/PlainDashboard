import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters,
  dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters_GetTypes,
} from './dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters';

export interface dataflow_PipelineWorkloadDataflowLaunchTemplateRequest {
  // A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.
  gcsPath?: string;

  /*
The parameters of the template to launch. This should be part of the body of the POST request.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplateparameters
Structure is documented below.
*/
  launchParameters?: dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters;

  // The regional endpoint to which to direct the request.
  location?: string;

  // The ID of the Cloud Platform project that the job belongs to.
  projectId?: string;

  // (Optional)
  validateOnly?: boolean;
}

export function dataflow_PipelineWorkloadDataflowLaunchTemplateRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'projectId',
      'The ID of the Cloud Platform project that the job belongs to.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'validateOnly',
      '(Optional)',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'gcsPath',
      "A Cloud Storage path to the template from which to create the job. Must be a valid Cloud Storage URL, beginning with 'gs://'.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'launchParameters',
      'The parameters of the template to launch. This should be part of the body of the POST request.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#launchtemplateparameters\nStructure is documented below.',
      () =>
        dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'The regional endpoint to which to direct the request.',
      () => [],
      false,
      false,
    ),
  ];
}
