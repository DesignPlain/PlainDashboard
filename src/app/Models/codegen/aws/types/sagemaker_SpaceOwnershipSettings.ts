import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

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
      () => [],
      true,
      false,
    ),
  ];
}
