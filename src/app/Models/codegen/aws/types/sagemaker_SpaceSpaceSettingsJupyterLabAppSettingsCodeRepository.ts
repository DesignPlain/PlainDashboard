import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository {
  // The URL of the Git repository.
  repositoryUrl?: string;
}

export function sagemaker_SpaceSpaceSettingsJupyterLabAppSettingsCodeRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'repositoryUrl',
      'The URL of the Git repository.',
      () => [],
      true,
      false,
    ),
  ];
}
