import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
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
      cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem_GetTypes(),
      true,
      false,
    ),
  ];
}
