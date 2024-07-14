import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codepipeline_PipelineArtifactStore,
  codepipeline_PipelineArtifactStore_GetTypes,
} from "../types/codepipeline_PipelineArtifactStore";
import {
  codepipeline_PipelineTrigger,
  codepipeline_PipelineTrigger_GetTypes,
} from "../types/codepipeline_PipelineTrigger";
import {
  codepipeline_PipelineVariable,
  codepipeline_PipelineVariable_GetTypes,
} from "../types/codepipeline_PipelineVariable";
import {
  codepipeline_PipelineStage,
  codepipeline_PipelineStage_GetTypes,
} from "../types/codepipeline_PipelineStage";

export interface PipelineArgs {
  // A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.
  roleArn?: string;

  // A stage block. Stages are documented below.
  stages?: Array<codepipeline_PipelineStage>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // One or more artifact_store blocks. Artifact stores are documented below.
  artifactStores?: Array<codepipeline_PipelineArtifactStore>;

  /*
The method that the pipeline will use to handle multiple executions. The default mode is `SUPERSEDED`. For value values, refer to the [AWS documentation](https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PipelineDeclaration.html#CodePipeline-Type-PipelineDeclaration-executionMode).

--Note:-- `QUEUED` or `PARALLEL` mode can only be used with V2 pipelines.
*/
  executionMode?: string;

  // The name of the pipeline.
  name?: string;

  // Type of the pipeline. Possible values are: `V1` and `V2`. Default value is `V1`.
  pipelineType?: string;

  // A trigger block. Valid only when `pipeline_type` is `V2`. Triggers are documented below.
  triggers?: Array<codepipeline_PipelineTrigger>;

  // A pipeline-level variable block. Valid only when `pipeline_type` is `V2`. Variable are documented below.
  variables?: Array<codepipeline_PipelineVariable>;
}
export class Pipeline extends Resource {
  // The codepipeline ARN.
  public arn?: string;

  // One or more artifact_store blocks. Artifact stores are documented below.
  public artifactStores?: Array<codepipeline_PipelineArtifactStore>;

  // The name of the pipeline.
  public name?: string;

  // A stage block. Stages are documented below.
  public stages?: Array<codepipeline_PipelineStage>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The method that the pipeline will use to handle multiple executions. The default mode is `SUPERSEDED`. For value values, refer to the [AWS documentation](https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PipelineDeclaration.html#CodePipeline-Type-PipelineDeclaration-executionMode).

--Note:-- `QUEUED` or `PARALLEL` mode can only be used with V2 pipelines.
*/
  public executionMode?: string;

  // Type of the pipeline. Possible values are: `V1` and `V2`. Default value is `V1`.
  public pipelineType?: string;

  // A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.
  public roleArn?: string;

  // A trigger block. Valid only when `pipeline_type` is `V2`. Triggers are documented below.
  public triggers?: Array<codepipeline_PipelineTrigger>;

  // A pipeline-level variable block. Valid only when `pipeline_type` is `V2`. Variable are documented below.
  public variables?: Array<codepipeline_PipelineVariable>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "stages",
        "A stage block. Stages are documented below.",
        codepipeline_PipelineStage_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionMode",
        "The method that the pipeline will use to handle multiple executions. The default mode is `SUPERSEDED`. For value values, refer to the [AWS documentation](https://docs.aws.amazon.com/codepipeline/latest/APIReference/API_PipelineDeclaration.html#CodePipeline-Type-PipelineDeclaration-executionMode).\n\n**Note:** `QUEUED` or `PARALLEL` mode can only be used with V2 pipelines.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the pipeline.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "pipelineType",
        "Type of the pipeline. Possible values are: `V1` and `V2`. Default value is `V1`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "triggers",
        "A trigger block. Valid only when `pipeline_type` is `V2`. Triggers are documented below.",
        codepipeline_PipelineTrigger_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "A service role Amazon Resource Name (ARN) that grants AWS CodePipeline permission to make calls to AWS services on your behalf.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "variables",
        "A pipeline-level variable block. Valid only when `pipeline_type` is `V2`. Variable are documented below.",
        codepipeline_PipelineVariable_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "artifactStores",
        "One or more artifact_store blocks. Artifact stores are documented below.",
        codepipeline_PipelineArtifactStore_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
