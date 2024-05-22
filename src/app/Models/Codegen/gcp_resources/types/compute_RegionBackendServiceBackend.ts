import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionBackendServiceBackend {
  /*
The max requests per second (RPS) that a single backend
instance can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set. Cannot be set
for INTERNAL backend services.
*/
  maxRatePerInstance?: number;

  /*
Used when balancingMode is UTILIZATION. This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
Cannot be set for INTERNAL backend services.
*/
  maxUtilization?: number;

  /*
The max number of simultaneous connections that a single backend
network endpoint can handle. Cannot be set
for INTERNAL backend services.
This is used to calculate the capacity of the group. Can be
used in either CONNECTION or UTILIZATION balancing modes. For
CONNECTION mode, either maxConnections or
maxConnectionsPerEndpoint must be set.
*/
  maxConnectionsPerEndpoint?: number;

  /*
The max number of simultaneous connections that a single
backend instance can handle. Cannot be set for INTERNAL backend
services.
This is used to calculate the capacity of the group.
Can be used in either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.
*/
  maxConnectionsPerInstance?: number;

  /*
The max requests per second (RPS) of the group. Cannot be set
for INTERNAL backend services.
Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. Either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.
*/
  maxRate?: number;

  /*
This field designates whether this is a failover backend. More
than one failover backend can be configured for a given RegionBackendService.
*/
  failover?: boolean;

  /*
The fully-qualified URL of an Instance Group or Network Endpoint
Group resource. In case of instance group this defines the list
of instances that serve traffic. Member virtual machine
instances from each instance group must live in the same zone as
the instance group itself. No two backends in a backend service
are allowed to use same Instance Group resource.
For Network Endpoint Groups this defines list of endpoints. All
endpoints of Network Endpoint Group must be hosted on instances
located in the same zone as the Network Endpoint Group.
Backend services cannot mix Instance Group and
Network Endpoint Group backends.
When the `load_balancing_scheme` is INTERNAL, only instance groups
are supported.
Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.
*/
  group?: string;

  /*
The max number of simultaneous connections for the group. Can
be used with either CONNECTION or UTILIZATION balancing modes.
Cannot be set for INTERNAL backend services.
For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.
*/
  maxConnections?: number;

  /*
The max requests per second (RPS) that a single backend network
endpoint can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set. Cannot be set
for INTERNAL backend services.
*/
  maxRatePerEndpoint?: number;

  /*
Specifies the balancing mode for this backend.
See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes.
Default value is `CONNECTION`.
Possible values are: `UTILIZATION`, `RATE`, `CONNECTION`.
*/
  balancingMode?: string;

  /*
A multiplier applied to the group's maximum servicing capacity
(based on UTILIZATION, RATE or CONNECTION).
~>--NOTE--: This field cannot be set for
INTERNAL region backend services (default loadBalancingScheme),
but is required for non-INTERNAL backend service. The total
capacity_scaler for all backends must be non-zero.
A setting of 0 means the group is completely drained, offering
0%!!(MISSING)o(MISSING)f its available Capacity. Valid range is [0.0,1.0].
*/
  capacityScaler?: number;

  /*
An optional description of this resource.
Provide this property when you create the resource.
*/
  description?: string;
}

export function compute_RegionBackendServiceBackend_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxConnectionsPerInstance",
      "The max number of simultaneous connections that a single\nbackend instance can handle. Cannot be set for INTERNAL backend\nservices.\nThis is used to calculate the capacity of the group.\nCan be used in either CONNECTION or UTILIZATION balancing modes.\nFor CONNECTION mode, either maxConnections or\nmaxConnectionsPerInstance must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "failover",
      "This field designates whether this is a failover backend. More\nthan one failover backend can be configured for a given RegionBackendService.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "group",
      "The fully-qualified URL of an Instance Group or Network Endpoint\nGroup resource. In case of instance group this defines the list\nof instances that serve traffic. Member virtual machine\ninstances from each instance group must live in the same zone as\nthe instance group itself. No two backends in a backend service\nare allowed to use same Instance Group resource.\nFor Network Endpoint Groups this defines list of endpoints. All\nendpoints of Network Endpoint Group must be hosted on instances\nlocated in the same zone as the Network Endpoint Group.\nBackend services cannot mix Instance Group and\nNetwork Endpoint Group backends.\nWhen the `load_balancing_scheme` is INTERNAL, only instance groups\nare supported.\nNote that you must specify an Instance Group or Network Endpoint\nGroup resource using the fully-qualified URL, rather than a\npartial URL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of this resource.\nProvide this property when you create the resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRatePerInstance",
      "The max requests per second (RPS) that a single backend\ninstance can handle. This is used to calculate the capacity of\nthe group. Can be used in either balancing mode. For RATE mode,\neither maxRate or maxRatePerInstance must be set. Cannot be set\nfor INTERNAL backend services.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxUtilization",
      "Used when balancingMode is UTILIZATION. This ratio defines the\nCPU utilization target for the group. Valid range is [0.0, 1.0].\nCannot be set for INTERNAL backend services.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxConnections",
      "The max number of simultaneous connections for the group. Can\nbe used with either CONNECTION or UTILIZATION balancing modes.\nCannot be set for INTERNAL backend services.\nFor CONNECTION mode, either maxConnections or one\nof maxConnectionsPerInstance or maxConnectionsPerEndpoint,\nas appropriate for group type, must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRatePerEndpoint",
      "The max requests per second (RPS) that a single backend network\nendpoint can handle. This is used to calculate the capacity of\nthe group. Can be used in either balancing mode. For RATE mode,\neither maxRate or maxRatePerEndpoint must be set. Cannot be set\nfor INTERNAL backend services.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "balancingMode",
      "Specifies the balancing mode for this backend.\nSee the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)\nfor an explanation of load balancing modes.\nDefault value is `CONNECTION`.\nPossible values are: `UTILIZATION`, `RATE`, `CONNECTION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "capacityScaler",
      "A multiplier applied to the group's maximum servicing capacity\n(based on UTILIZATION, RATE or CONNECTION).\n~>**NOTE**: This field cannot be set for\nINTERNAL region backend services (default loadBalancingScheme),\nbut is required for non-INTERNAL backend service. The total\ncapacity_scaler for all backends must be non-zero.\nA setting of 0 means the group is completely drained, offering\n0%!o(MISSING)f its available Capacity. Valid range is [0.0,1.0].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxConnectionsPerEndpoint",
      "The max number of simultaneous connections that a single backend\nnetwork endpoint can handle. Cannot be set\nfor INTERNAL backend services.\nThis is used to calculate the capacity of the group. Can be\nused in either CONNECTION or UTILIZATION balancing modes. For\nCONNECTION mode, either maxConnections or\nmaxConnectionsPerEndpoint must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRate",
      "The max requests per second (RPS) of the group. Cannot be set\nfor INTERNAL backend services.\nCan be used with either RATE or UTILIZATION balancing modes,\nbut required if RATE mode. Either maxRate or one\nof maxRatePerInstance or maxRatePerEndpoint, as appropriate for\ngroup type, must be set.",
      [],
      false,
      false,
    ),
  ];
}
