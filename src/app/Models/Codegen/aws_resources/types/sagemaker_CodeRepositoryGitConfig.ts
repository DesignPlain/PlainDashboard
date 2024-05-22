import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_CodeRepositoryGitConfig {
  // The default branch for the Git repository.
  branch?: string;

  // The URL where the Git repository is located.
  repositoryUrl?: string;

  // The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of AWSCURRENT and must be in the following format: `{"username": UserName, "password": Password}`
  secretArn?: string;
}

export function sagemaker_CodeRepositoryGitConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "branch",
      "The default branch for the Git repository.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "repositoryUrl",
      "The URL where the Git repository is located.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "secretArn",
      'The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the credentials used to access the git repository. The secret must have a staging label of AWSCURRENT and must be in the following format: `{"username": UserName, "password": Password}`',
      [],
      false,
      false,
    ),
  ];
}
