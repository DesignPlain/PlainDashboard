import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_FlowDefinitionHumanLoopConfig,
  sagemaker_FlowDefinitionHumanLoopConfig_GetTypes,
} from '../types/sagemaker_FlowDefinitionHumanLoopConfig';
import {
  sagemaker_FlowDefinitionHumanLoopRequestSource,
  sagemaker_FlowDefinitionHumanLoopRequestSource_GetTypes,
} from '../types/sagemaker_FlowDefinitionHumanLoopRequestSource';
import {
  sagemaker_FlowDefinitionOutputConfig,
  sagemaker_FlowDefinitionOutputConfig_GetTypes,
} from '../types/sagemaker_FlowDefinitionOutputConfig';
import {
  sagemaker_FlowDefinitionHumanLoopActivationConfig,
  sagemaker_FlowDefinitionHumanLoopActivationConfig_GetTypes,
} from '../types/sagemaker_FlowDefinitionHumanLoopActivationConfig';

export interface FlowDefinitionArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of your flow definition.
  flowDefinitionName?: string;

  // An object containing information about the events that trigger a human workflow. See Human Loop Activation Config details below.
  humanLoopActivationConfig?: sagemaker_FlowDefinitionHumanLoopActivationConfig;

  // An object containing information about the tasks the human reviewers will perform. See Human Loop Config details below.
  humanLoopConfig?: sagemaker_FlowDefinitionHumanLoopConfig;

  // Container for configuring the source of human task requests. Use to specify if Amazon Rekognition or Amazon Textract is used as an integration source. See Human Loop Request Source details below.
  humanLoopRequestSource?: sagemaker_FlowDefinitionHumanLoopRequestSource;

  // An object containing information about where the human review results will be uploaded. See Output Config details below.
  outputConfig?: sagemaker_FlowDefinitionOutputConfig;

  // The Amazon Resource Name (ARN) of the role needed to call other services on your behalf.
  roleArn?: string;
}
export class FlowDefinition extends DS_Resource {
  // An object containing information about the events that trigger a human workflow. See Human Loop Activation Config details below.
  public humanLoopActivationConfig?: sagemaker_FlowDefinitionHumanLoopActivationConfig;

  // Container for configuring the source of human task requests. Use to specify if Amazon Rekognition or Amazon Textract is used as an integration source. See Human Loop Request Source details below.
  public humanLoopRequestSource?: sagemaker_FlowDefinitionHumanLoopRequestSource;

  // The Amazon Resource Name (ARN) of the role needed to call other services on your behalf.
  public roleArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) assigned by AWS to this Flow Definition.
  public arn?: string;

  // The name of your flow definition.
  public flowDefinitionName?: string;

  // An object containing information about the tasks the human reviewers will perform. See Human Loop Config details below.
  public humanLoopConfig?: sagemaker_FlowDefinitionHumanLoopConfig;

  // An object containing information about where the human review results will be uploaded. See Output Config details below.
  public outputConfig?: sagemaker_FlowDefinitionOutputConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'humanLoopActivationConfig',
        'An object containing information about the events that trigger a human workflow. See Human Loop Activation Config details below.',
        () => sagemaker_FlowDefinitionHumanLoopActivationConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'humanLoopConfig',
        'An object containing information about the tasks the human reviewers will perform. See Human Loop Config details below.',
        () => sagemaker_FlowDefinitionHumanLoopConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'humanLoopRequestSource',
        'Container for configuring the source of human task requests. Use to specify if Amazon Rekognition or Amazon Textract is used as an integration source. See Human Loop Request Source details below.',
        () => sagemaker_FlowDefinitionHumanLoopRequestSource_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'outputConfig',
        'An object containing information about where the human review results will be uploaded. See Output Config details below.',
        () => sagemaker_FlowDefinitionOutputConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The Amazon Resource Name (ARN) of the role needed to call other services on your behalf.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'flowDefinitionName',
        'The name of your flow definition.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
