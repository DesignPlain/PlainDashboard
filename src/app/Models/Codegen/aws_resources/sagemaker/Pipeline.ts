import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_PipelinePipelineDefinitionS3Location,
  sagemaker_PipelinePipelineDefinitionS3Location_GetTypes,
} from "../types/sagemaker_PipelinePipelineDefinitionS3Location";
import {
  sagemaker_PipelineParallelismConfiguration,
  sagemaker_PipelineParallelismConfiguration_GetTypes,
} from "../types/sagemaker_PipelineParallelismConfiguration";

export interface PipelineArgs {
  // The [JSON pipeline definition](https://aws-sagemaker-mlops.github.io/sagemaker-model-building-pipeline-definition-JSON-schema/) of the pipeline.
  pipelineDefinition?: string;

  // The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location. see Pipeline Definition S3 Location details below.
  pipelineDefinitionS3Location?: sagemaker_PipelinePipelineDefinitionS3Location;

  // A description of the pipeline.
  pipelineDescription?: string;

  // The display name of the pipeline.
  pipelineDisplayName?: string;

  // The name of the pipeline.
  pipelineName?: string;

  // The name of the Pipeline (must be unique).
  roleArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // This is the configuration that controls the parallelism of the pipeline. If specified, it applies to all runs of this pipeline by default. see Parallelism Configuration details below.
  parallelismConfiguration?: sagemaker_PipelineParallelismConfiguration;
}
export class Pipeline extends Resource {
  // This is the configuration that controls the parallelism of the pipeline. If specified, it applies to all runs of this pipeline by default. see Parallelism Configuration details below.
  public parallelismConfiguration?: sagemaker_PipelineParallelismConfiguration;

  // The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location. see Pipeline Definition S3 Location details below.
  public pipelineDefinitionS3Location?: sagemaker_PipelinePipelineDefinitionS3Location;

  // The name of the pipeline.
  public pipelineName?: string;

  // The name of the Pipeline (must be unique).
  public roleArn?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) assigned by AWS to this Pipeline.
  public arn?: string;

  // A description of the pipeline.
  public pipelineDescription?: string;

  // The display name of the pipeline.
  public pipelineDisplayName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The [JSON pipeline definition](https://aws-sagemaker-mlops.github.io/sagemaker-model-building-pipeline-definition-JSON-schema/) of the pipeline.
  public pipelineDefinition?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "parallelismConfiguration",
        "This is the configuration that controls the parallelism of the pipeline. If specified, it applies to all runs of this pipeline by default. see Parallelism Configuration details below.",
        sagemaker_PipelineParallelismConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pipelineDefinition",
        "The [JSON pipeline definition](https://aws-sagemaker-mlops.github.io/sagemaker-model-building-pipeline-definition-JSON-schema/) of the pipeline.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "pipelineDefinitionS3Location",
        "The location of the pipeline definition stored in Amazon S3. If specified, SageMaker will retrieve the pipeline definition from this location. see Pipeline Definition S3 Location details below.",
        sagemaker_PipelinePipelineDefinitionS3Location_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pipelineDescription",
        "A description of the pipeline.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pipelineDisplayName",
        "The display name of the pipeline.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pipelineName",
        "The name of the pipeline.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The name of the Pipeline (must be unique).",
        [],
        false,
        false,
      ),
    ];
  }
}
