import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment,
  Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment_GetTypes,
} from "./Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment";

export interface Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter {
  /*
'The parameters for the Flex Template. Example: {"numWorkers":"5"}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  Parameters?: Map<string, string>;

  /*
'Use this to pass transform name mappings for streaming update jobs. Example: {"oldTransformName":"newTransformName",...}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  TransformNameMappings?: Map<string, string>;

  // Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.
  Update?: boolean;

  // Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.
  ContainerSpecGcsPath?: string;

  /*
The runtime environment for the Flex Template job.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexTemplateRuntimeEnvironment
Structure is documented below.
*/
  Environment?: Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;

  // The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.
  JobName?: string;

  /*
Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  LaunchOptions?: Map<string, string>;
}

export function Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Update",
      "Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ContainerSpecGcsPath",
      "Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Environment",
      "The runtime environment for the Flex Template job.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexTemplateRuntimeEnvironment\nStructure is documented below.",
      Dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "JobName",
      "The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "LaunchOptions",
      'Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "Parameters",
      '\'The parameters for the Flex Template. Example: {"numWorkers":"5"}\'\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "TransformNameMappings",
      '\'Use this to pass transform name mappings for streaming update jobs. Example: {"oldTransformName":"newTransformName",...}\'\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
