import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_DistributionTrustedSignerItem,
  cloudfront_DistributionTrustedSignerItem_GetTypes,
} from "./cloudfront_DistributionTrustedSignerItem";

export interface cloudfront_DistributionTrustedSigner {
  // `true` if any of the AWS accounts listed as trusted signers have active CloudFront key pairs
  enabled?: boolean;

  // List of nested attributes for each trusted signer
  items?: Array<cloudfront_DistributionTrustedSignerItem>;
}

export function cloudfront_DistributionTrustedSigner_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "`true` if any of the AWS accounts listed as trusted signers have active CloudFront key pairs",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "items",
      "List of nested attributes for each trusted signer",
      () => cloudfront_DistributionTrustedSignerItem_GetTypes(),
      false,
      false,
    ),
  ];
}
