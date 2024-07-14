import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository {
  // The URL of the Git repository.
  repositoryUrl?: string;
}

export function sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsCodeRepository_GetTypes(): DynamicUIProps[] {
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
