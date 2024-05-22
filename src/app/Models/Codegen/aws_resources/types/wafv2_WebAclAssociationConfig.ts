import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  wafv2_WebAclAssociationConfigRequestBody,
  wafv2_WebAclAssociationConfigRequestBody_GetTypes,
} from "./wafv2_WebAclAssociationConfigRequestBody";

export interface wafv2_WebAclAssociationConfig {
  // Customizes the request body that your protected resource forward to AWS WAF for inspection. See `request_body` below for details.
  requestBodies?: Array<wafv2_WebAclAssociationConfigRequestBody>;
}

export function wafv2_WebAclAssociationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "requestBodies",
      "Customizes the request body that your protected resource forward to AWS WAF for inspection. See `request_body` below for details.",
      wafv2_WebAclAssociationConfigRequestBody_GetTypes(),
      false,
      false,
    ),
  ];
}
