import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkservices_GrpcRouteRuleMatchHeader,
  networkservices_GrpcRouteRuleMatchHeader_GetTypes,
} from "./networkservices_GrpcRouteRuleMatchHeader";
import {
  networkservices_GrpcRouteRuleMatchMethod,
  networkservices_GrpcRouteRuleMatchMethod_GetTypes,
} from "./networkservices_GrpcRouteRuleMatchMethod";

export interface networkservices_GrpcRouteRuleMatch {
  /*
Specifies a list of HTTP request headers to match against.
Structure is documented below.
*/
  headers?: Array<networkservices_GrpcRouteRuleMatchHeader>;

  /*
A gRPC method to match against. If this field is empty or omitted, will match all methods.
Structure is documented below.
*/
  method?: networkservices_GrpcRouteRuleMatchMethod;
}

export function networkservices_GrpcRouteRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "headers",
      "Specifies a list of HTTP request headers to match against.\nStructure is documented below.",
      () => networkservices_GrpcRouteRuleMatchHeader_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "method",
      "A gRPC method to match against. If this field is empty or omitted, will match all methods.\nStructure is documented below.",
      () => networkservices_GrpcRouteRuleMatchMethod_GetTypes(),
      false,
      false,
    ),
  ];
}
