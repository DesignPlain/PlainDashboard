import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_UserProfileUserSettingsRStudioServerProAppSettings {
  // Indicates whether the current user has access to the RStudioServerPro app. Valid values are `ENABLED` and `DISABLED`.
  accessStatus?: string;

  // The level of permissions that the user has within the RStudioServerPro app. This value defaults to `R_STUDIO_USER`. The `R_STUDIO_ADMIN` value allows the user access to the RStudio Administrative Dashboard. Valid values are `R_STUDIO_USER` and `R_STUDIO_ADMIN`.
  userGroup?: string;
}

export function sagemaker_UserProfileUserSettingsRStudioServerProAppSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessStatus",
      "Indicates whether the current user has access to the RStudioServerPro app. Valid values are `ENABLED` and `DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userGroup",
      "The level of permissions that the user has within the RStudioServerPro app. This value defaults to `R_STUDIO_USER`. The `R_STUDIO_ADMIN` value allows the user access to the RStudio Administrative Dashboard. Valid values are `R_STUDIO_USER` and `R_STUDIO_ADMIN`.",
      [],
      false,
      false,
    ),
  ];
}
