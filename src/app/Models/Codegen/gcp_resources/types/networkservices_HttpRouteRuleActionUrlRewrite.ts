import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkservices_HttpRouteRuleActionUrlRewrite {
  // Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.
  pathPrefixRewrite?: string;

  // Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.
  hostRewrite?: string;
}

export function networkservices_HttpRouteRuleActionUrlRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "pathPrefixRewrite",
      "Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "hostRewrite",
      "Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.",
      [],
      false,
      false,
    ),
  ];
}
