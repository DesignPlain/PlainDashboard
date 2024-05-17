import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd {
  // The name of the header to add.
  HeaderName?: string;

  // The value of the header to add.
  HeaderValue?: string;

  // Whether to replace all existing headers with the same name.
  Replace?: boolean;
}

export function Networkservices_EdgeCacheServiceRoutingPathMatcherRouteRuleHeaderActionResponseHeaderToAdd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "HeaderName",
      "The name of the header to add.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "HeaderValue",
      "The value of the header to add.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Replace",
      "Whether to replace all existing headers with the same name.",
      [],
      false,
      false,
    ),
  ];
}
