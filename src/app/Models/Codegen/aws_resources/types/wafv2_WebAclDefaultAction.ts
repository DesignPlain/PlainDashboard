import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclDefaultActionAllow,
  wafv2_WebAclDefaultActionAllow_GetTypes,
} from "./wafv2_WebAclDefaultActionAllow";
import {
  wafv2_WebAclDefaultActionBlock,
  wafv2_WebAclDefaultActionBlock_GetTypes,
} from "./wafv2_WebAclDefaultActionBlock";

export interface wafv2_WebAclDefaultAction {
  // Specifies that AWS WAF should allow requests by default. See `allow` below for details.
  allow?: wafv2_WebAclDefaultActionAllow;

  // Specifies that AWS WAF should block requests by default. See `block` below for details.
  block?: wafv2_WebAclDefaultActionBlock;
}

export function wafv2_WebAclDefaultAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "allow",
      "Specifies that AWS WAF should allow requests by default. See `allow` below for details.",
      wafv2_WebAclDefaultActionAllow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "block",
      "Specifies that AWS WAF should block requests by default. See `block` below for details.",
      wafv2_WebAclDefaultActionBlock_GetTypes(),
      false,
      false,
    ),
  ];
}
