import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_DistributionTrustedKeyGroupItem,
  cloudfront_DistributionTrustedKeyGroupItem_GetTypes,
} from "./cloudfront_DistributionTrustedKeyGroupItem";

export interface cloudfront_DistributionTrustedKeyGroup {
  // Whether Origin Shield is enabled.
  enabled?: boolean;

  // List of nested attributes for each trusted signer
  items?: Array<cloudfront_DistributionTrustedKeyGroupItem>;
}

export function cloudfront_DistributionTrustedKeyGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether Origin Shield is enabled.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "items",
      "List of nested attributes for each trusted signer",
      cloudfront_DistributionTrustedKeyGroupItem_GetTypes(),
      false,
      false,
    ),
  ];
}
