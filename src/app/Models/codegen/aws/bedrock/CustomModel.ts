import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_CustomModelTrainingMetric,
  bedrock_CustomModelTrainingMetric_GetTypes,
} from "../types/bedrock_CustomModelTrainingMetric";
import {
  bedrock_CustomModelTimeouts,
  bedrock_CustomModelTimeouts_GetTypes,
} from "../types/bedrock_CustomModelTimeouts";
import {
  bedrock_CustomModelVpcConfig,
  bedrock_CustomModelVpcConfig_GetTypes,
} from "../types/bedrock_CustomModelVpcConfig";
import {
  bedrock_CustomModelOutputDataConfig,
  bedrock_CustomModelOutputDataConfig_GetTypes,
} from "../types/bedrock_CustomModelOutputDataConfig";
import {
  bedrock_CustomModelTrainingDataConfig,
  bedrock_CustomModelTrainingDataConfig_GetTypes,
} from "../types/bedrock_CustomModelTrainingDataConfig";
import {
  bedrock_CustomModelValidationDataConfig,
  bedrock_CustomModelValidationDataConfig_GetTypes,
} from "../types/bedrock_CustomModelValidationDataConfig";
import {
  bedrock_CustomModelValidationMetric,
  bedrock_CustomModelValidationMetric_GetTypes,
} from "../types/bedrock_CustomModelValidationMetric";

export interface CustomModelArgs {
  // A name for the customization job.
  jobName?: string;

  // The Amazon Resource Name (ARN) of an IAM role that Bedrock can assume to perform tasks on your behalf.
  roleArn?: string;

  // A map of tags to assign to the customization job and custom model. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: bedrock_CustomModelTimeouts;

  // Configuration parameters for the private Virtual Private Cloud (VPC) that contains the resources you are using for this job.
  vpcConfig?: bedrock_CustomModelVpcConfig;

  // The customization type. Valid values: `FINE_TUNING`, `CONTINUED_PRE_TRAINING`.
  customizationType?: string;

  // The custom model is encrypted at rest using this key. Specify the key ARN.
  customModelKmsKeyId?: string;

  // Name for the custom model.
  customModelName?: string;

  // [Parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html) related to tuning the model.
  hyperparameters?: Map<string, string>;

  // S3 location for the output data.
  outputDataConfig?: bedrock_CustomModelOutputDataConfig;

  // Information about the training dataset.
  trainingDataConfig?: bedrock_CustomModelTrainingDataConfig;

  // Information about the validation dataset.
  validationDataConfig?: bedrock_CustomModelValidationDataConfig;

  // The Amazon Resource Name (ARN) of the base model.
  baseModelIdentifier?: string;
}
export class CustomModel extends DS_Resource {
  // The status of the customization job. A successful job transitions from `InProgress` to `Completed` when the output model is ready to use.
  public jobStatus?: string;

  // S3 location for the output data.
  public outputDataConfig?: bedrock_CustomModelOutputDataConfig;

  // The Amazon Resource Name (ARN) of an IAM role that Bedrock can assume to perform tasks on your behalf.
  public roleArn?: string;

  // The ARN of the output model.
  public customModelArn?: string;

  // Name for the custom model.
  public customModelName?: string;

  // The customization type. Valid values: `FINE_TUNING`, `CONTINUED_PRE_TRAINING`.
  public customizationType?: string;

  // The ARN of the customization job.
  public jobArn?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The custom model is encrypted at rest using this key. Specify the key ARN.
  public customModelKmsKeyId?: string;

  // The loss metric for each validator that you provided.
  public validationMetrics?: Array<bedrock_CustomModelValidationMetric>;

  // Configuration parameters for the private Virtual Private Cloud (VPC) that contains the resources you are using for this job.
  public vpcConfig?: bedrock_CustomModelVpcConfig;

  // A map of tags to assign to the customization job and custom model. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public timeouts?: bedrock_CustomModelTimeouts;

  // Information about the training dataset.
  public trainingDataConfig?: bedrock_CustomModelTrainingDataConfig;

  // Metrics associated with the customization job.
  public trainingMetrics?: Array<bedrock_CustomModelTrainingMetric>;

  // Information about the validation dataset.
  public validationDataConfig?: bedrock_CustomModelValidationDataConfig;

  // The Amazon Resource Name (ARN) of the base model.
  public baseModelIdentifier?: string;

  // [Parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html) related to tuning the model.
  public hyperparameters?: Map<string, string>;

  // A name for the customization job.
  public jobName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "customizationType",
        "The customization type. Valid values: `FINE_TUNING`, `CONTINUED_PRE_TRAINING`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customModelKmsKeyId",
        "The custom model is encrypted at rest using this key. Specify the key ARN.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "hyperparameters",
        "[Parameters](https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models-hp.html) related to tuning the model.",
        () => InputType_Map_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "jobName",
        "A name for the customization job.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of an IAM role that Bedrock can assume to perform tasks on your behalf.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the customization job and custom model. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => bedrock_CustomModelTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration parameters for the private Virtual Private Cloud (VPC) that contains the resources you are using for this job.",
        () => bedrock_CustomModelVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "customModelName",
        "Name for the custom model.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outputDataConfig",
        "S3 location for the output data.",
        () => bedrock_CustomModelOutputDataConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "trainingDataConfig",
        "Information about the training dataset.",
        () => bedrock_CustomModelTrainingDataConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "validationDataConfig",
        "Information about the validation dataset.",
        () => bedrock_CustomModelValidationDataConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "baseModelIdentifier",
        "The Amazon Resource Name (ARN) of the base model.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
