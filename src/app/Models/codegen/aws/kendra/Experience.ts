import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_ExperienceConfiguration,
  kendra_ExperienceConfiguration_GetTypes,
} from "../types/kendra_ExperienceConfiguration";
import {
  kendra_ExperienceEndpoint,
  kendra_ExperienceEndpoint_GetTypes,
} from "../types/kendra_ExperienceEndpoint";

export interface ExperienceArgs {
  /*
The Amazon Resource Name (ARN) of a role with permission to access `Query API`, `QuerySuggestions API`, `SubmitFeedback API`, and `AWS SSO` that stores your user and group information. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).

The following arguments are optional:
*/
  roleArn?: string;

  // Configuration information for your Amazon Kendra experience. The provider will only perform drift detection of its value when present in a configuration. Detailed below.
  configuration?: kendra_ExperienceConfiguration;

  // A description for your Amazon Kendra experience.
  description?: string;

  // The identifier of the index for your Amazon Kendra experience.
  indexId?: string;

  // A name for your Amazon Kendra experience.
  name?: string;
}
export class Experience extends DS_Resource {
  // The unique identifier of the experience.
  public experienceId?: string;

  // A name for your Amazon Kendra experience.
  public name?: string;

  /*
The Amazon Resource Name (ARN) of a role with permission to access `Query API`, `QuerySuggestions API`, `SubmitFeedback API`, and `AWS SSO` that stores your user and group information. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).

The following arguments are optional:
*/
  public roleArn?: string;

  // The current processing status of your Amazon Kendra experience.
  public status?: string;

  // The identifier of the index for your Amazon Kendra experience.
  public indexId?: string;

  // ARN of the Experience.
  public arn?: string;

  // Configuration information for your Amazon Kendra experience. The provider will only perform drift detection of its value when present in a configuration. Detailed below.
  public configuration?: kendra_ExperienceConfiguration;

  // A description for your Amazon Kendra experience.
  public description?: string;

  // Shows the endpoint URLs for your Amazon Kendra experiences. The URLs are unique and fully hosted by AWS.
  public endpoints?: Array<kendra_ExperienceEndpoint>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "indexId",
        "The identifier of the index for your Amazon Kendra experience.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for your Amazon Kendra experience.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of a role with permission to access `Query API`, `QuerySuggestions API`, `SubmitFeedback API`, and `AWS SSO` that stores your user and group information. For more information, see [IAM roles for Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html).\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "Configuration information for your Amazon Kendra experience. The provider will only perform drift detection of its value when present in a configuration. Detailed below.",
        () => kendra_ExperienceConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description for your Amazon Kendra experience.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
