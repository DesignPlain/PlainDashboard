import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_RegionBackendServiceConnectionTrackingPolicy {
  /*
Specifies how long to keep a Connection Tracking entry while there is
no matching traffic (in seconds).
For L4 ILB the minimum(default) is 10 minutes and maximum is 16 hours.
For NLB the minimum(default) is 60 seconds and the maximum is 16 hours.
*/
  IdleTimeoutSec?: number;

  /*
Specifies the key used for connection tracking. There are two options:
`PER_CONNECTION`: The Connection Tracking is performed as per the
Connection Key (default Hash Method) for the specific protocol.
`PER_SESSION`: The Connection Tracking is performed as per the
configured Session Affinity. It matches the configured Session Affinity.
Default value is `PER_CONNECTION`.
Possible values are: `PER_CONNECTION`, `PER_SESSION`.
*/
  TrackingMode?: string;

  /*
Specifies connection persistence when backends are unhealthy.
If set to `DEFAULT_FOR_PROTOCOL`, the existing connections persist on
unhealthy backends only for connection-oriented protocols (TCP and SCTP)
and only if the Tracking Mode is PER_CONNECTION (default tracking mode)
or the Session Affinity is configured for 5-tuple. They do not persist
for UDP.
If set to `NEVER_PERSIST`, after a backend becomes unhealthy, the existing
connections on the unhealthy backend are never persisted on the unhealthy
backend. They are always diverted to newly selected healthy backends
(unless all backends are unhealthy).
If set to `ALWAYS_PERSIST`, existing connections always persist on
unhealthy backends regardless of protocol and session affinity. It is
generally not recommended to use this mode overriding the default.
Default value is `DEFAULT_FOR_PROTOCOL`.
Possible values are: `DEFAULT_FOR_PROTOCOL`, `NEVER_PERSIST`, `ALWAYS_PERSIST`.
*/
  ConnectionPersistenceOnUnhealthyBackends?: string;

  // Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly.
  EnableStrongAffinity?: boolean;
}

export function Compute_RegionBackendServiceConnectionTrackingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "IdleTimeoutSec",
      "Specifies how long to keep a Connection Tracking entry while there is\nno matching traffic (in seconds).\nFor L4 ILB the minimum(default) is 10 minutes and maximum is 16 hours.\nFor NLB the minimum(default) is 60 seconds and the maximum is 16 hours.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TrackingMode",
      "Specifies the key used for connection tracking. There are two options:\n`PER_CONNECTION`: The Connection Tracking is performed as per the\nConnection Key (default Hash Method) for the specific protocol.\n`PER_SESSION`: The Connection Tracking is performed as per the\nconfigured Session Affinity. It matches the configured Session Affinity.\nDefault value is `PER_CONNECTION`.\nPossible values are: `PER_CONNECTION`, `PER_SESSION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConnectionPersistenceOnUnhealthyBackends",
      "Specifies connection persistence when backends are unhealthy.\nIf set to `DEFAULT_FOR_PROTOCOL`, the existing connections persist on\nunhealthy backends only for connection-oriented protocols (TCP and SCTP)\nand only if the Tracking Mode is PER_CONNECTION (default tracking mode)\nor the Session Affinity is configured for 5-tuple. They do not persist\nfor UDP.\nIf set to `NEVER_PERSIST`, after a backend becomes unhealthy, the existing\nconnections on the unhealthy backend are never persisted on the unhealthy\nbackend. They are always diverted to newly selected healthy backends\n(unless all backends are unhealthy).\nIf set to `ALWAYS_PERSIST`, existing connections always persist on\nunhealthy backends regardless of protocol and session affinity. It is\ngenerally not recommended to use this mode overriding the default.\nDefault value is `DEFAULT_FOR_PROTOCOL`.\nPossible values are: `DEFAULT_FOR_PROTOCOL`, `NEVER_PERSIST`, `ALWAYS_PERSIST`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableStrongAffinity",
      "Enable Strong Session Affinity for Network Load Balancing. This option is not available publicly.",
      [],
      false,
      false,
    ),
  ];
}
