import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem,
  cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem_GetTypes,
} from "./cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem";

export interface cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles {
  //
  items?: Array<cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem>;
}

export function cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "",
      () =>
        cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem_GetTypes(),
      true,
      false,
    ),
  ];
}
