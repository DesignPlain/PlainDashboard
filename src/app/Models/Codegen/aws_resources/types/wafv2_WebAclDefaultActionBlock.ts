import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafv2_WebAclDefaultActionBlockCustomResponse,
  wafv2_WebAclDefaultActionBlockCustomResponse_GetTypes,
} from "./wafv2_WebAclDefaultActionBlockCustomResponse";

export interface wafv2_WebAclDefaultActionBlock {
  // Defines a custom response for the web request. See `custom_response` below for details.
  customResponse?: wafv2_WebAclDefaultActionBlockCustomResponse;
}

export function wafv2_WebAclDefaultActionBlock_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "customResponse",
      "Defines a custom response for the web request. See `custom_response` below for details.",
      wafv2_WebAclDefaultActionBlockCustomResponse_GetTypes(),
      false,
      false,
    ),
  ];
}
