import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_RegionUrlMapDefaultRouteActionRequestMirrorPolicy {
  /*
The full or partial URL to the RegionBackendService resource being mirrored to.
The backend service configured for a mirroring policy must reference backends that are of the same type as the original backend service matched in the URL map.
Serverless NEG backends are not currently supported as a mirrored backend service.
*/
  backendService?: string;
}

export function compute_RegionUrlMapDefaultRouteActionRequestMirrorPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'backendService',
      'The full or partial URL to the RegionBackendService resource being mirrored to.\nThe backend service configured for a mirroring policy must reference backends that are of the same type as the original backend service matched in the URL map.\nServerless NEG backends are not currently supported as a mirrored backend service.',
      () => [],
      false,
      false,
    ),
  ];
}
