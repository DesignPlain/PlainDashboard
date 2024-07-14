import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames {
  // A list of CloudFront domain names for the staging distribution.
  items?: Array<string>;

  // Number of CloudFront domain names in the staging distribution.
  quantity?: number;
}

export function cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "items",
      "A list of CloudFront domain names for the staging distribution.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "quantity",
      "Number of CloudFront domain names in the staging distribution.",
      [],
      true,
      false,
    ),
  ];
}
