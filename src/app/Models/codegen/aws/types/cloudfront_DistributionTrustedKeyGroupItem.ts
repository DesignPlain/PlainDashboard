import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_DistributionTrustedKeyGroupItem {
  // ID of the key group that contains the public keys.
  keyGroupId?: string;

  // Set of active CloudFront key pairs associated with the signer account
  keyPairIds?: Array<string>;
}

export function cloudfront_DistributionTrustedKeyGroupItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'keyGroupId',
      'ID of the key group that contains the public keys.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'keyPairIds',
      'Set of active CloudFront key pairs associated with the signer account',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
