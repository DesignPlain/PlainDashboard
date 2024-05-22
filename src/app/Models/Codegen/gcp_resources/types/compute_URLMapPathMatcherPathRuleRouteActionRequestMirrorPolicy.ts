import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  // The full or partial URL to the BackendService resource being mirrored to.
  backendService?: string;
}

export function compute_URLMapPathMatcherPathRuleRouteActionRequestMirrorPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "backendService",
      "The full or partial URL to the BackendService resource being mirrored to.",
      [],
      true,
      false,
    ),
  ];
}
