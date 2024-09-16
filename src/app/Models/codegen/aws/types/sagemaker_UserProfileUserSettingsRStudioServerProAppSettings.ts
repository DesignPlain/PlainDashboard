import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sagemaker_UserProfileUserSettingsRStudioServerProAppSettings {
  // The level of permissions that the user has within the RStudioServerPro app. This value defaults to `R_STUDIO_USER`. The `R_STUDIO_ADMIN` value allows the user access to the RStudio Administrative Dashboard. Valid values are `R_STUDIO_USER` and `R_STUDIO_ADMIN`.
  userGroup?: string;

  // Indicates whether the current user has access to the RStudioServerPro app. Valid values are `ENABLED` and `DISABLED`.
  accessStatus?: string;
}

export function sagemaker_UserProfileUserSettingsRStudioServerProAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'userGroup',
      'The level of permissions that the user has within the RStudioServerPro app. This value defaults to `R_STUDIO_USER`. The `R_STUDIO_ADMIN` value allows the user access to the RStudio Administrative Dashboard. Valid values are `R_STUDIO_USER` and `R_STUDIO_ADMIN`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accessStatus',
      'Indicates whether the current user has access to the RStudioServerPro app. Valid values are `ENABLED` and `DISABLED`.',
      () => [],
      false,
      false,
    ),
  ];
}
