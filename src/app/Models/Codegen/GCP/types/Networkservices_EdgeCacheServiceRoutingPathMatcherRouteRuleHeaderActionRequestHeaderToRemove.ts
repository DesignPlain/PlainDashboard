import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove {
  // The name of the header to remove.
  HeaderName?: string;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      "The name of the header to remove.",
      [],
      true,
      false,
    ),
  ];
}
