import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem {
  // he content type for a field-level encryption content type-profile mapping. Valid value is `application/x-www-form-urlencoded`.
  contentType?: string;

  // The format for a field-level encryption content type-profile mapping. Valid value is `URLEncoded`.
  format?: string;

  // The profile ID for a field-level encryption content type-profile mapping.
  profileId?: string;
}

export function cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contentType",
      "he content type for a field-level encryption content type-profile mapping. Valid value is `application/x-www-form-urlencoded`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "format",
      "The format for a field-level encryption content type-profile mapping. Valid value is `URLEncoded`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "profileId",
      "The profile ID for a field-level encryption content type-profile mapping.",
      [],
      false,
      false,
    ),
  ];
}
