import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_URLMapPathMatcherRouteRuleRouteActionRequestMirrorPolicy {
  // The full or partial URL to the BackendService resource being mirrored to.
  BackendService?: string;
}

export function Compute_URLMapPathMatcherRouteRuleRouteActionRequestMirrorPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BackendService",
      "The full or partial URL to the BackendService resource being mirrored to.",
      [],
      true,
      false,
    ),
  ];
}
