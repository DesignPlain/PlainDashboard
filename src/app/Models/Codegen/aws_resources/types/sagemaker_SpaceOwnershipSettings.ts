import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sagemaker_SpaceOwnershipSettings {
  // The user profile who is the owner of the private space.
  ownerUserProfileName?: string;
}

export function sagemaker_SpaceOwnershipSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ownerUserProfileName",
      "The user profile who is the owner of the private space.",
      [],
      true,
      false,
    ),
  ];
}
