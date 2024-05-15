import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_GrpcRouteRuleMatchHeader,
  Networkservices_GrpcRouteRuleMatchHeader_GetTypes,
} from "./Networkservices_GrpcRouteRuleMatchHeader";
import {
  Networkservices_GrpcRouteRuleMatchMethod,
  Networkservices_GrpcRouteRuleMatchMethod_GetTypes,
} from "./Networkservices_GrpcRouteRuleMatchMethod";

export interface Networkservices_GrpcRouteRuleMatch {
  /*
Specifies a list of HTTP request headers to match against.
Structure is documented below.
*/
  Headers?: Array<Networkservices_GrpcRouteRuleMatchHeader>;

  /*
A gRPC method to match against. If this field is empty or omitted, will match all methods.
Structure is documented below.
*/
  Method?: Networkservices_GrpcRouteRuleMatchMethod;
}

export function Networkservices_GrpcRouteRuleMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Method",
      "A gRPC method to match against. If this field is empty or omitted, will match all methods.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleMatchMethod_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Headers",
      "Specifies a list of HTTP request headers to match against.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleMatchHeader_GetTypes(),
      false,
      false,
    ),
  ];
}
