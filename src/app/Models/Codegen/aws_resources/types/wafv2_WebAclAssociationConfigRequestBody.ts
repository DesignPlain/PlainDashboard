import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclAssociationConfigRequestBodyCloudfront,
  wafv2_WebAclAssociationConfigRequestBodyCloudfront_GetTypes,
} from "./wafv2_WebAclAssociationConfigRequestBodyCloudfront";

export interface wafv2_WebAclAssociationConfigRequestBody {
  // Customizes the request body that your protected CloudFront distributions forward to AWS WAF for inspection. See `cloudfront` below for details.
  cloudfronts?: Array<wafv2_WebAclAssociationConfigRequestBodyCloudfront>;
}

export function wafv2_WebAclAssociationConfigRequestBody_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "cloudfronts",
      "Customizes the request body that your protected CloudFront distributions forward to AWS WAF for inspection. See `cloudfront` below for details.",
      wafv2_WebAclAssociationConfigRequestBodyCloudfront_GetTypes(),
      false,
      false,
    ),
  ];
}
