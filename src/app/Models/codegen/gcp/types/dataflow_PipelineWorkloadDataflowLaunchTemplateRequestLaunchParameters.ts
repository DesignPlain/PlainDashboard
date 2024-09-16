import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment,
  dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment_GetTypes,
} from './dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment';

export interface dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters {
  // If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.
  update?: boolean;

  /*
The runtime environment for the job.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#RuntimeEnvironment
Structure is documented below.
*/
  environment?: dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;

  // The job name to use for the created job.
  jobName?: string;

  /*
The runtime parameters to pass to the job.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  parameters?: Map<string, string>;

  /*
Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  transformNameMapping?: Map<string, string>;
}

export function dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'update',
      'If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'environment',
      'The runtime environment for the job.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#RuntimeEnvironment\nStructure is documented below.',
      () =>
        dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'jobName',
      'The job name to use for the created job.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'parameters',
      'The runtime parameters to pass to the job.\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'transformNameMapping',
      'Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
