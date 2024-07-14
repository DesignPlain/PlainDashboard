import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  pipes_PipeTargetParametersBatchJobParametersArrayProperties,
  pipes_PipeTargetParametersBatchJobParametersArrayProperties_GetTypes,
} from "./pipes_PipeTargetParametersBatchJobParametersArrayProperties";
import {
  pipes_PipeTargetParametersBatchJobParametersContainerOverrides,
  pipes_PipeTargetParametersBatchJobParametersContainerOverrides_GetTypes,
} from "./pipes_PipeTargetParametersBatchJobParametersContainerOverrides";
import {
  pipes_PipeTargetParametersBatchJobParametersDependsOn,
  pipes_PipeTargetParametersBatchJobParametersDependsOn_GetTypes,
} from "./pipes_PipeTargetParametersBatchJobParametersDependsOn";
import {
  pipes_PipeTargetParametersBatchJobParametersRetryStrategy,
  pipes_PipeTargetParametersBatchJobParametersRetryStrategy_GetTypes,
} from "./pipes_PipeTargetParametersBatchJobParametersRetryStrategy";

export interface pipes_PipeTargetParametersBatchJobParameters {
  // The overrides that are sent to a container. Detailed below.
  containerOverrides?: pipes_PipeTargetParametersBatchJobParametersContainerOverrides;

  // A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a SEQUENTIAL type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an N_TO_N type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin. Detailed below.
  dependsOns?: Array<pipes_PipeTargetParametersBatchJobParametersDependsOn>;

  // The job definition used by this job. This value can be one of name, name:revision, or the Amazon Resource Name (ARN) for the job definition. If name is specified without a revision then the latest active revision is used.
  jobDefinition?: string;

  // The name of the job. It can be up to 128 letters long.
  jobName?: string;

  // Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters included here override any corresponding parameter defaults from the job definition. Detailed below.
  parameters?: Map<string, string>;

  // The retry strategy to use for failed jobs. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition. Detailed below.
  retryStrategy?: pipes_PipeTargetParametersBatchJobParametersRetryStrategy;

  // The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job. Detailed below.
  arrayProperties?: pipes_PipeTargetParametersBatchJobParametersArrayProperties;
}

export function pipes_PipeTargetParametersBatchJobParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "arrayProperties",
      "The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job. Detailed below.",
      pipes_PipeTargetParametersBatchJobParametersArrayProperties_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "containerOverrides",
      "The overrides that are sent to a container. Detailed below.",
      pipes_PipeTargetParametersBatchJobParametersContainerOverrides_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dependsOns",
      "A list of dependencies for the job. A job can depend upon a maximum of 20 jobs. You can specify a SEQUENTIAL type dependency without specifying a job ID for array jobs so that each child array job completes sequentially, starting at index 0. You can also specify an N_TO_N type dependency with a job ID for array jobs. In that case, each index child of this job must wait for the corresponding index child of each dependency to complete before it can begin. Detailed below.",
      pipes_PipeTargetParametersBatchJobParametersDependsOn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jobDefinition",
      "The job definition used by this job. This value can be one of name, name:revision, or the Amazon Resource Name (ARN) for the job definition. If name is specified without a revision then the latest active revision is used.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "jobName",
      "The name of the job. It can be up to 128 letters long.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "parameters",
      "Additional parameters passed to the job that replace parameter substitution placeholders that are set in the job definition. Parameters are specified as a key and value pair mapping. Parameters included here override any corresponding parameter defaults from the job definition. Detailed below.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "retryStrategy",
      "The retry strategy to use for failed jobs. When a retry strategy is specified here, it overrides the retry strategy defined in the job definition. Detailed below.",
      pipes_PipeTargetParametersBatchJobParametersRetryStrategy_GetTypes(),
      false,
      false,
    ),
  ];
}
