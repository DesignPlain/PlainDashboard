import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles,
  cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles_GetTypes,
} from "./cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles";

export interface cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig {
  // Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument, fle-profile, is unknown.
  forwardWhenQueryArgProfileIsUnknown?: boolean;

  // Object that contains an attribute `items` that contains the list ofrofiles specified for query argument-profile mapping for field-level encryption. see Query Arg Profile.
  queryArgProfiles?: cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles;
}

export function cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "forwardWhenQueryArgProfileIsUnknown",
      "Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument, fle-profile, is unknown.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "queryArgProfiles",
      "Object that contains an attribute `items` that contains the list ofrofiles specified for query argument-profile mapping for field-level encryption. see Query Arg Profile.",
      cloudfront_FieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles_GetTypes(),
      false,
      false,
    ),
  ];
}
