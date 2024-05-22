import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_SpaceSpaceSharingSettings {
  // Specifies the sharing type of the space. Valid values are `Private` and `Shared`.
  sharingType?: string;
}

export function sagemaker_SpaceSpaceSharingSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sharingType",
      "Specifies the sharing type of the space. Valid values are `Private` and `Shared`.",
      [],
      true,
      false,
    ),
  ];
}
