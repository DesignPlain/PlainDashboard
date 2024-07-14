import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove {
  // The name of the header to remove.
  headerName?: string;
}

export function networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionRequestHeaderToRemove_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "headerName",
      "The name of the header to remove.",
      [],
      true,
      false,
    ),
  ];
}
