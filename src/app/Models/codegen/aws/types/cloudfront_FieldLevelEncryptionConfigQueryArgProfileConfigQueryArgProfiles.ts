import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem,
  cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem_GetTypes,
} from "./cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem";

export interface cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles {
  //
  items?: Array<cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem>;
}

export function cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "",
      () =>
        cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItem_GetTypes(),
      false,
      false,
    ),
  ];
}
