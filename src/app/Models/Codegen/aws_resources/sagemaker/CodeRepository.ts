import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_CodeRepositoryGitConfig,
  sagemaker_CodeRepositoryGitConfig_GetTypes,
} from "../types/sagemaker_CodeRepositoryGitConfig";

export interface CodeRepositoryArgs {
  // The name of the Code Repository (must be unique).
  codeRepositoryName?: string;

  // Specifies details about the repository. see Git Config details below.
  gitConfig?: sagemaker_CodeRepositoryGitConfig;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class CodeRepository extends Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this Code Repository.
  public arn?: string;

  // The name of the Code Repository (must be unique).
  public codeRepositoryName?: string;

  // Specifies details about the repository. see Git Config details below.
  public gitConfig?: sagemaker_CodeRepositoryGitConfig;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "codeRepositoryName",
        "The name of the Code Repository (must be unique).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gitConfig",
        "Specifies details about the repository. see Git Config details below.",
        sagemaker_CodeRepositoryGitConfig_GetTypes(),
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
    ];
  }
}
