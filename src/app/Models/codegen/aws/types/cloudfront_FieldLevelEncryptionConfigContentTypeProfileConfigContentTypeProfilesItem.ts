import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem {
  // he content type for a field-level encryption content type-profile mapping. Valid value is `application/x-www-form-urlencoded`.
  contentType?: string;

  // The format for a field-level encryption content type-profile mapping. Valid value is `URLEncoded`.
  format?: string;

  //
  profileId?: string;
}

export function cloudfront_FieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'profileId',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'contentType',
      'he content type for a field-level encryption content type-profile mapping. Valid value is `application/x-www-form-urlencoded`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'format',
      'The format for a field-level encryption content type-profile mapping. Valid value is `URLEncoded`.',
      () => [],
      true,
      false,
    ),
  ];
}
