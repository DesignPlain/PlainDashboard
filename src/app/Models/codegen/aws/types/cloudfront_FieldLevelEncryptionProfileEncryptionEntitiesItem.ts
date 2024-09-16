import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns,
  cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns_GetTypes,
} from './cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns';

export interface cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem {
  // Object that contains an attribute `items` that contains the list of field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted.
  fieldPatterns?: cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns;

  // The provider associated with the public key being used for encryption.
  providerId?: string;

  // The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match the patterns.
  publicKeyId?: string;
}

export function cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'fieldPatterns',
      'Object that contains an attribute `items` that contains the list of field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted.',
      () =>
        cloudfront_FieldLevelEncryptionProfileEncryptionEntitiesItemFieldPatterns_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'providerId',
      'The provider associated with the public key being used for encryption.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'publicKeyId',
      'The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match the patterns.',
      () => [],
      true,
      false,
    ),
  ];
}
