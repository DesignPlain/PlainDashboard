import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface wafv2_WebAclAssociationConfigRequestBodyAppRunnerService {
  // Specifies the maximum size of the web request body component that an associated Amazon App Runner services should send to AWS WAF for inspection. This applies to statements in the web ACL that inspect the body or JSON body. Valid values are `KB_16`, `KB_32`, `KB_48` and `KB_64`.
  defaultSizeInspectionLimit?: string;
}

export function wafv2_WebAclAssociationConfigRequestBodyAppRunnerService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "defaultSizeInspectionLimit",
      "Specifies the maximum size of the web request body component that an associated Amazon App Runner services should send to AWS WAF for inspection. This applies to statements in the web ACL that inspect the body or JSON body. Valid values are `KB_16`, `KB_32`, `KB_48` and `KB_64`.",
      () => [],
      true,
      false,
    ),
  ];
}
