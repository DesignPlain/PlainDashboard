import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /*
The full or partial URL to the RegionBackendService resource being mirrored to.
The backend service configured for a mirroring policy must reference backends that are of the same type as the original backend service matched in the URL map.
Serverless NEG backends are not currently supported as a mirrored backend service.
*/
  BackendService?: string;
}

export function Compute_RegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "BackendService",
      "The full or partial URL to the RegionBackendService resource being mirrored to.\nThe backend service configured for a mirroring policy must reference backends that are of the same type as the original backend service matched in the URL map.\nServerless NEG backends are not currently supported as a mirrored backend service.",
      [],
      true,
      false,
    ),
  ];
}
