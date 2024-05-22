import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_DistributionTrustedSignerItem,
  cloudfront_DistributionTrustedSignerItem_GetTypes,
} from "./cloudfront_DistributionTrustedSignerItem";

export interface cloudfront_DistributionTrustedSigner {
  // List of nested attributes for each trusted signer
  items?: Array<cloudfront_DistributionTrustedSignerItem>;

  // Whether Origin Shield is enabled.
  enabled?: boolean;
}

export function cloudfront_DistributionTrustedSigner_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "List of nested attributes for each trusted signer",
      cloudfront_DistributionTrustedSignerItem_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether Origin Shield is enabled.",
      [],
      false,
      false,
    ),
  ];
}
