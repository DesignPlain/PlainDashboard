import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  comprehend_EntityRecognizerVpcConfig,
  comprehend_EntityRecognizerVpcConfig_GetTypes,
} from "../types/comprehend_EntityRecognizerVpcConfig";
import {
  comprehend_EntityRecognizerInputDataConfig,
  comprehend_EntityRecognizerInputDataConfig_GetTypes,
} from "../types/comprehend_EntityRecognizerInputDataConfig";

export interface EntityRecognizerArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` Configuration Block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Configuration parameters for VPC to contain Entity Recognizer resources.
See the `vpc_config` Configuration Block section below.
*/
  vpcConfig?: comprehend_EntityRecognizerVpcConfig;

  // The ID or ARN of a KMS Key used to encrypt trained Entity Recognizers.
  modelKmsKeyId?: string;

  /*
Configuration for the training and testing data.
See the `input_data_config` Configuration Block section below.
*/
  inputDataConfig?: comprehend_EntityRecognizerInputDataConfig;

  /*
Two-letter language code for the language.
One of `en`, `es`, `fr`, `it`, `de`, or `pt`.
*/
  languageCode?: string;

  /*
Name for the Entity Recognizer.
Has a maximum length of 63 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).

The following arguments are optional:
*/
  name?: string;

  /*
Name for the version of the Entity Recognizer.
Each version must have a unique name within the Entity Recognizer.
If omitted, the provider will assign a random, unique version name.
If explicitly set to `""`, no version name will be set.
Has a maximum length of 63 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).
Conflicts with `version_name_prefix`.
*/
  versionName?: string;

  /*
Creates a unique version name beginning with the specified prefix.
Has a maximum length of 37 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).
Conflicts with `version_name`.
*/
  versionNamePrefix?: string;

  // ID or ARN of a KMS Key used to encrypt storage volumes during job processing.
  volumeKmsKeyId?: string;

  // The ARN for an IAM Role which allows Comprehend to read the training and testing data.
  dataAccessRoleArn?: string;
}
export class EntityRecognizer extends DS_Resource {
  // ID or ARN of a KMS Key used to encrypt storage volumes during job processing.
  public volumeKmsKeyId?: string;

  /*
Two-letter language code for the language.
One of `en`, `es`, `fr`, `it`, `de`, or `pt`.
*/
  public languageCode?: string;

  /*
Name for the Entity Recognizer.
Has a maximum length of 63 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).

The following arguments are optional:
*/
  public name?: string;

  /*
Name for the version of the Entity Recognizer.
Each version must have a unique name within the Entity Recognizer.
If omitted, the provider will assign a random, unique version name.
If explicitly set to `""`, no version name will be set.
Has a maximum length of 63 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).
Conflicts with `version_name_prefix`.
*/
  public versionName?: string;

  // The ID or ARN of a KMS Key used to encrypt trained Entity Recognizers.
  public modelKmsKeyId?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` Configuration Block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Creates a unique version name beginning with the specified prefix.
Has a maximum length of 37 characters.
Can contain upper- and lower-case letters, numbers, and hypen (`-`).
Conflicts with `version_name`.
*/
  public versionNamePrefix?: string;

  /*
Configuration parameters for VPC to contain Entity Recognizer resources.
See the `vpc_config` Configuration Block section below.
*/
  public vpcConfig?: comprehend_EntityRecognizerVpcConfig;

  // ARN of the Entity Recognizer version.
  public arn?: string;

  // The ARN for an IAM Role which allows Comprehend to read the training and testing data.
  public dataAccessRoleArn?: string;

  /*
Configuration for the training and testing data.
See the `input_data_config` Configuration Block section below.
*/
  public inputDataConfig?: comprehend_EntityRecognizerInputDataConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "vpcConfig",
        "Configuration parameters for VPC to contain Entity Recognizer resources.\nSee the `vpc_config` Configuration Block section below.",
        () => comprehend_EntityRecognizerVpcConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "modelKmsKeyId",
        "The ID or ARN of a KMS Key used to encrypt trained Entity Recognizers.",
        () => [],
        false,
        false,
      ),
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
        "name",
        "Name for the Entity Recognizer.\nHas a maximum length of 63 characters.\nCan contain upper- and lower-case letters, numbers, and hypen (`-`).\n\nThe following arguments are optional:",
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
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` Configuration Block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "versionName",
        'Name for the version of the Entity Recognizer.\nEach version must have a unique name within the Entity Recognizer.\nIf omitted, the provider will assign a random, unique version name.\nIf explicitly set to `""`, no version name will be set.\nHas a maximum length of 63 characters.\nCan contain upper- and lower-case letters, numbers, and hypen (`-`).\nConflicts with `version_name_prefix`.',
        () => [],
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
        "ID or ARN of a KMS Key used to encrypt storage volumes during job processing.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputDataConfig",
        "Configuration for the training and testing data.\nSee the `input_data_config` Configuration Block section below.",
        () => comprehend_EntityRecognizerInputDataConfig_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
