import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_DistributionTrustedKeyGroupItem,
  cloudfront_DistributionTrustedKeyGroupItem_GetTypes,
} from "./cloudfront_DistributionTrustedKeyGroupItem";

export interface cloudfront_DistributionTrustedKeyGroup {
  // List of nested attributes for each trusted signer
  items?: Array<cloudfront_DistributionTrustedKeyGroupItem>;

  // `true` if any of the AWS accounts listed as trusted signers have active CloudFront key pairs
  enabled?: boolean;
}

export function cloudfront_DistributionTrustedKeyGroup_GetTypes(): DynamicUIProps[] {
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
      () => cloudfront_DistributionTrustedKeyGroupItem_GetTypes(),
      false,
      false,
    ),
  ];
}
