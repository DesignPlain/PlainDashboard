import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment,
  dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment_GetTypes,
} from "./dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment";

export interface dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter {
  /*
The runtime environment for the Flex Template job.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexTemplateRuntimeEnvironment
Structure is documented below.
*/
  environment?: dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment;

  // The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.
  jobName?: string;

  /*
Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  launchOptions?: Map<string, string>;

  /*
'The parameters for the Flex Template. Example: {"numWorkers":"5"}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  parameters?: Map<string, string>;

  /*
'Use this to pass transform name mappings for streaming update jobs. Example: {"oldTransformName":"newTransformName",...}'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  transformNameMappings?: Map<string, string>;

  // Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.
  update?: boolean;

  // Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.
  containerSpecGcsPath?: string;
}

export function dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "transformNameMappings",
      '\'Use this to pass transform name mappings for streaming update jobs. Example: {"oldTransformName":"newTransformName",...}\'\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "update",
      "Set this to true if you are sending a request to update a running streaming job. When set, the job name should be the same as the running job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "containerSpecGcsPath",
      "Cloud Storage path to a file with a JSON-serialized ContainerSpec as content.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "environment",
      "The runtime environment for the Flex Template job.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#FlexTemplateRuntimeEnvironment\nStructure is documented below.",
      dataflow_PipelineWorkloadDataflowFlexTemplateRequestLaunchParameterEnvironment_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jobName",
      "The job name to use for the created job. For an update job request, the job name should be the same as the existing running job.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "launchOptions",
      'Launch options for this Flex Template job. This is a common set of options across languages and templates. This should not be used to pass job parameters.\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "parameters",
      '\'The parameters for the Flex Template. Example: {"numWorkers":"5"}\'\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
