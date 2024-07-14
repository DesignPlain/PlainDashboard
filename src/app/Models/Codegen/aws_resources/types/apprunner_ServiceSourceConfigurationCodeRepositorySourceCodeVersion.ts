import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion {
  // Type of version identifier. For a git-based repository, branches represent versions. Valid values: `BRANCH`.
  type?: string;

  // Source code version. For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.
  value?: string;
}

export function apprunner_ServiceSourceConfigurationCodeRepositorySourceCodeVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of version identifier. For a git-based repository, branches represent versions. Valid values: `BRANCH`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Source code version. For a git-based repository, a branch name maps to a specific version. App Runner uses the most recent commit to the branch.",
      [],
      true,
      false,
    ),
  ];
}
