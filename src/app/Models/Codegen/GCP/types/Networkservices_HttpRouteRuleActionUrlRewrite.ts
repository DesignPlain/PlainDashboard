import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_HttpRouteRuleActionUrlRewrite {
  // Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.
  HostRewrite?: string;

  // Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.
  PathPrefixRewrite?: string;
}

export function Networkservices_HttpRouteRuleActionUrlRewrite_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HostRewrite",
      "Prior to forwarding the request to the selected destination, the requests host header is replaced by this value.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PathPrefixRewrite",
      "Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value.",
      [],
      false,
      false,
    ),
  ];
}
