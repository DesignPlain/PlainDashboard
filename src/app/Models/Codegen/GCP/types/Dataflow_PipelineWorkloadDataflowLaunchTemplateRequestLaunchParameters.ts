import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment,
  Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment_GetTypes,
} from "./Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment";

export interface Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters {
  // The job name to use for the created job.
  JobName?: string;

  /*
The runtime parameters to pass to the job.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  Parameters?: Map<string, string>;

  /*
Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  TransformNameMapping?: Map<string, string>;

  // If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.
  Update?: boolean;

  /*
The runtime environment for the job.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#RuntimeEnvironment
Structure is documented below.
*/
  Environment?: Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment;
}

export function Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "JobName",
      "The job name to use for the created job.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Parameters",
      'The runtime parameters to pass to the job.\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "TransformNameMapping",
      'Map of transform name prefixes of the job to be replaced to the corresponding name prefixes of the new job. Only applicable when updating a pipeline.\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Update",
      "If set, replace the existing pipeline with the name specified by jobName with this pipeline, preserving state.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Environment",
      "The runtime environment for the job.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#RuntimeEnvironment\nStructure is documented below.",
      Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment_GetTypes(),
      false,
      false,
    ),
  ];
}
