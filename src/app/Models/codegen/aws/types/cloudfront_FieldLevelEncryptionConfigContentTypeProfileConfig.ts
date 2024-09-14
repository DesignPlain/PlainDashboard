import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles,
  cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles_GetTypes,
} from "./cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles";

export interface cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig {
  // Object that contains an attribute `items` that contains the list of configurations for a field-level encryption content type-profile. See Content Type Profile.
  contentTypeProfiles?: cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles;

  // specifies what to do when an unknown content type is provided for the profile. If true, content is forwarded without being encrypted when the content type is unknown. If false (the default), an error is returned when the content type is unknown.
  forwardWhenContentTypeIsUnknown?: boolean;
}

export function cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "contentTypeProfiles",
      "Object that contains an attribute `items` that contains the list of configurations for a field-level encryption content type-profile. See Content Type Profile.",
      () =>
        cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "forwardWhenContentTypeIsUnknown",
      "specifies what to do when an unknown content type is provided for the profile. If true, content is forwarded without being encrypted when the content type is unknown. If false (the default), an error is returned when the content type is unknown.",
      () => [],
      true,
      false,
    ),
  ];
}
