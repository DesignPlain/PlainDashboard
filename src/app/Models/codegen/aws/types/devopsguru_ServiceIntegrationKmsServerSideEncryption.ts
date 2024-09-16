import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface devopsguru_ServiceIntegrationKmsServerSideEncryption {
  // KMS key ID. This value can be a key ID, key ARN, alias name, or alias ARN.
  kmsKeyId?: string;

  // Specifies whether KMS integration is enabled. Valid values are `DISABLED` and `ENABLED`.
  optInStatus?: string;

  // Type of KMS key used. Valid values are `CUSTOMER_MANAGED_KEY` and `AWS_OWNED_KMS_KEY`.
  type?: string;
}

export function devopsguru_ServiceIntegrationKmsServerSideEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'kmsKeyId',
      'KMS key ID. This value can be a key ID, key ARN, alias name, or alias ARN.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'optInStatus',
      'Specifies whether KMS integration is enabled. Valid values are `DISABLED` and `ENABLED`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Type of KMS key used. Valid values are `CUSTOMER_MANAGED_KEY` and `AWS_OWNED_KMS_KEY`.',
      () => [],
      false,
      false,
    ),
  ];
}
