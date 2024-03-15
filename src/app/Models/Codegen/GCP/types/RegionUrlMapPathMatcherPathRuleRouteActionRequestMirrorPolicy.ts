export interface RegionUrlMapPathMatcherPathRuleRouteActionRequestMirrorPolicy {
  /*
The full or partial URL to the RegionBackendService resource being mirrored to.
The backend service configured for a mirroring policy must reference backends that are of the same type as the original backend service matched in the URL map.
Serverless NEG backends are not currently supported as a mirrored backend service.
*/
  BackendService?: string;
}
