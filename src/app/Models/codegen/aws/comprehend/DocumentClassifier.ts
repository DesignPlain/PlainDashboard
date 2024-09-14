import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  comprehend_DocumentClassifierInputDataConfig,
  comprehend_DocumentClassifierInputDataConfig_GetTypes,
} from "../types/comprehend_DocumentClassifierInputDataConfig";
import {
  comprehend_DocumentClassifierOutputDataConfig,
  comprehend_DocumentClassifierOutputDataConfig_GetTypes,
} from "../types/comprehend_DocumentClassifierOutputDataConfig";
import {
  comprehend_DocumentClassifierVpcConfig,
  comprehend_DocumentClassifierVpcConfig_GetTypes,
} from "../types/comprehend_DocumentClassifierVpcConfig";

export interface DocumentClassifierArgs {
  /*
Creates a unique version name beginning with the specified prefix.
Has a maximum length of 37 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).
Conflicts with `version_name`.
*/
  versionNamePrefix?: string;

  /*
KMS Key used to encrypt storage volumes during job processing.
Can be a KMS Key ID or a KMS Key ARN.
*/
  volumeKmsKeyId?: string;

  /*
Configuration for the training and testing data.
See the `input_data_config` Configuration Block section below.
*/
  inputDataConfig?: comprehend_DocumentClassifierInputDataConfig;

  /*
Two-letter language code for the language.
One of `en`, `es`, `fr`, `it`, `de`, or `pt`.
*/
  languageCode?: string;

  /*
KMS Key used to encrypt trained Document Classifiers.
Can be a KMS Key ID or a KMS Key ARN.
*/
  modelKmsKeyId?: string;

  /*
Configuration for the output results of training.
See the `output_data_config` Configuration Block section below.
*/
  outputDataConfig?: comprehend_DocumentClassifierOutputDataConfig;

  /*
Name for the version of the Document Classifier.
Each version must have a unique name within the Document Classifier.
If omitted, the provider will assign a random, unique version name.
If explicitly set to `""`, no version name will be set.
Has a maximum length of 63 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).
Conflicts with `version_name_prefix`.
*/
  versionName?: string;

  /*
Configuration parameters for VPC to contain Document Classifier resources.
See the `vpc_config` Configuration Block section below.
*/
  vpcConfig?: comprehend_DocumentClassifierVpcConfig;

  // The ARN for an IAM Role which allows Comprehend to read the training and testing data.
  dataAccessRoleArn?: string;

  /*
The document classification mode.
One of `MULTI_CLASS` or `MULTI_LABEL`.
`MULTI_CLASS` is also known as "Single Label" in the AWS Console.
*/
  mode?: string;

  /*
Name for the Document Classifier.
Has a maximum length of 63 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).

The following arguments are optional:
*/
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` Configuration Block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class DocumentClassifier extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
KMS Key used to encrypt storage volumes during job processing.
Can be a KMS Key ID or a KMS Key ARN.
*/
  public volumeKmsKeyId?: string;

  // The ARN for an IAM Role which allows Comprehend to read the training and testing data.
  public dataAccessRoleArn?: string;

  /*
Two-letter language code for the language.
One of `en`, `es`, `fr`, `it`, `de`, or `pt`.
*/
  public languageCode?: string;

  /*
Configuration for the output results of training.
See the `output_data_config` Configuration Block section below.
*/
  public outputDataConfig?: comprehend_DocumentClassifierOutputDataConfig;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` Configuration Block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
Name for the version of the Document Classifier.
Each version must have a unique name within the Document Classifier.
If omitted, the provider will assign a random, unique version name.
If explicitly set to `""`, no version name will be set.
Has a maximum length of 63 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).
Conflicts with `version_name_prefix`.
*/
  public versionName?: string;

  /*
Creates a unique version name beginning with the specified prefix.
Has a maximum length of 37 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).
Conflicts with `version_name`.
*/
  public versionNamePrefix?: string;

  /*
Configuration parameters for VPC to contain Document Classifier resources.
See the `vpc_config` Configuration Block section below.
*/
  public vpcConfig?: comprehend_DocumentClassifierVpcConfig;

  // ARN of the Document Classifier version.
  public arn?: string;

  /*
Configuration for the training and testing data.
See the `input_data_config` Configuration Block section below.
*/
  public inputDataConfig?: comprehend_DocumentClassifierInputDataConfig;

  /*
The document classification mode.
One of `MULTI_CLASS` or `MULTI_LABEL`.
`MULTI_CLASS` is also known as "Single Label" in the AWS Console.
*/
  public mode?: string;

  /*
KMS Key used to encrypt trained Document Classifiers.
Can be a KMS Key ID or a KMS Key ARN.
*/
  public modelKmsKeyId?: string;

  /*
Name for the Document Classifier.
Has a maximum length of 63 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).

The following arguments are optional:
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "languageCode",
        "Two-letter language code for the language.\nOne of `en`, `es`, `fr`, `it`, `de`, or `pt`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "modelKmsKeyId",
        "KMS Key used to encrypt trained Document Classifiers.\nCan be a KMS Key ID or a KMS Key ARN.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionName",
        'Name for the version of the Document Classifier.\nEach version must have a unique name within the Document Classifier.\nIf omitted, the provider will assign a random, unique version name.\nIf explicitly set to `""`, no version name will be set.\nHas a maximum length of 63 characters.\nCan contain upper- and lower-case letters, numbers, and hypen (`-`).\nConflicts with `version_name_prefix`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataAccessRoleArn",
        "The ARN for an IAM Role which allows Comprehend to read the training and testing data.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the Document Classifier.\nHas a maximum length of 63 characters.\nCan contain upper- and lower-case letters, numbers, and hypen (`-`).\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` Configuration Block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionNamePrefix",
        "Creates a unique version name beginning with the specified prefix.\nHas a maximum length of 37 characters.\nCan contain upper- and lower-case letters, numbers, and hypen (`-`).\nConflicts with `version_name`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "volumeKmsKeyId",
        "KMS Key used to encrypt storage volumes during job processing.\nCan be a KMS Key ID or a KMS Key ARN.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputDataConfig",
        "Configuration for the training and testing data.\nSee the `input_data_config` Configuration Block section below.",
        () => comprehend_DocumentClassifierInputDataConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "outputDataConfig",
        "Configuration for the output results of training.\nSee the `output_data_config` Configuration Block section below.",
        () => comprehend_DocumentClassifierOutputDataConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration parameters for VPC to contain Document Classifier resources.\nSee the `vpc_config` Configuration Block section below.",
        () => comprehend_DocumentClassifierVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "mode",
        'The document classification mode.\nOne of `MULTI_CLASS` or `MULTI_LABEL`.\n`MULTI_CLASS` is also known as "Single Label" in the AWS Console.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
