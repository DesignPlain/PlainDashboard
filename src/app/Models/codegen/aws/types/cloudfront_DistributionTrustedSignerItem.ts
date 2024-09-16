import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudfront_DistributionTrustedSignerItem {
  // AWS account ID or `self`
  awsAccountNumber?: string;

  // Set of active CloudFront key pairs associated with the signer account
  keyPairIds?: Array<string>;
}

export function cloudfront_DistributionTrustedSignerItem_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'keyPairIds',
      'Set of active CloudFront key pairs associated with the signer account',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'awsAccountNumber',
      'AWS account ID or `self`',
      () => [],
      false,
      false,
    ),
  ];
}
