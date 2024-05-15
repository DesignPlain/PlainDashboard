import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch {
  // The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch.
  ExactMatch?: string;

  // The name of the query parameter to match. The query parameter must exist in the request, in the absence of which the request match fails.
  Name?: string;

  // Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not.
  PresentMatch?: boolean;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleMatchRuleQueryParameterMatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ExactMatch",
      "The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the query parameter to match. The query parameter must exist in the request, in the absence of which the request match fails.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PresentMatch",
      "Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not.",
      [],
      false,
      false,
    ),
  ];
}
