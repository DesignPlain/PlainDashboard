import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository {
  // The URL of the Git repository.
  repositoryUrl?: string;
}

export function sagemaker_UserProfileUserSettingsJupyterLabAppSettingsCodeRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "repositoryUrl",
      "The URL of the Git repository.",
      [],
      true,
      false,
    ),
  ];
}
