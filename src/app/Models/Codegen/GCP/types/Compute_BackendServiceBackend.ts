import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_BackendServiceBackend {
  /*
Specifies the balancing mode for this backend.
For global HTTP(S) or TCP/SSL load balancing, the default is
UTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))
and CONNECTION (for TCP/SSL).
See the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)
for an explanation of load balancing modes.
Default value is `UTILIZATION`.
Possible values are: `UTILIZATION`, `RATE`, `CONNECTION`.
*/
  BalancingMode?: string;

  /*
The max number of simultaneous connections that a single
backend instance can handle. This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or
maxConnectionsPerInstance must be set.
*/
  MaxConnectionsPerInstance?: number;

  /*
The max requests per second (RPS) that a single backend network
endpoint can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerEndpoint must be set.
*/
  MaxRatePerEndpoint?: number;

  /*
Used when balancingMode is UTILIZATION. This ratio defines the
CPU utilization target for the group. Valid range is [0.0, 1.0].
*/
  MaxUtilization?: number;

  /*
The max requests per second (RPS) that a single backend
instance can handle. This is used to calculate the capacity of
the group. Can be used in either balancing mode. For RATE mode,
either maxRate or maxRatePerInstance must be set.
*/
  MaxRatePerInstance?: number;

  /*
A multiplier applied to the group's maximum servicing capacity
(based on UTILIZATION, RATE or CONNECTION).
Default value is 1, which means the group will serve up to 100%!!(MISSING)
(MISSING)of its configured capacity (depending on balancingMode). A
setting of 0 means the group is completely drained, offering
0%!!(MISSING)o(MISSING)f its available Capacity. Valid range is [0.0,1.0].
*/
  CapacityScaler?: number;

  /*
An optional description of this resource.
Provide this property when you create the resource.
*/
  Description?: string;

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
Note that you must specify an Instance Group or Network Endpoint
Group resource using the fully-qualified URL, rather than a
partial URL.
*/
  Group?: string;

  /*
The max number of simultaneous connections for the group. Can
be used with either CONNECTION or UTILIZATION balancing modes.
For CONNECTION mode, either maxConnections or one
of maxConnectionsPerInstance or maxConnectionsPerEndpoint,
as appropriate for group type, must be set.
*/
  MaxConnections?: number;

  /*
The max number of simultaneous connections that a single backend
network endpoint can handle. This is used to calculate the
capacity of the group. Can be used in either CONNECTION or
UTILIZATION balancing modes.
For CONNECTION mode, either
maxConnections or maxConnectionsPerEndpoint must be set.
*/
  MaxConnectionsPerEndpoint?: number;

  /*
The max requests per second (RPS) of the group.
Can be used with either RATE or UTILIZATION balancing modes,
but required if RATE mode. For RATE mode, either maxRate or one
of maxRatePerInstance or maxRatePerEndpoint, as appropriate for
group type, must be set.
*/
  MaxRate?: number;
}

export function Compute_BackendServiceBackend_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of this resource.\nProvide this property when you create the resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Group",
      "The fully-qualified URL of an Instance Group or Network Endpoint\nGroup resource. In case of instance group this defines the list\nof instances that serve traffic. Member virtual machine\ninstances from each instance group must live in the same zone as\nthe instance group itself. No two backends in a backend service\nare allowed to use same Instance Group resource.\nFor Network Endpoint Groups this defines list of endpoints. All\nendpoints of Network Endpoint Group must be hosted on instances\nlocated in the same zone as the Network Endpoint Group.\nBackend services cannot mix Instance Group and\nNetwork Endpoint Group backends.\nNote that you must specify an Instance Group or Network Endpoint\nGroup resource using the fully-qualified URL, rather than a\npartial URL.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxConnectionsPerEndpoint",
      "The max number of simultaneous connections that a single backend\nnetwork endpoint can handle. This is used to calculate the\ncapacity of the group. Can be used in either CONNECTION or\nUTILIZATION balancing modes.\nFor CONNECTION mode, either\nmaxConnections or maxConnectionsPerEndpoint must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxRate",
      "The max requests per second (RPS) of the group.\nCan be used with either RATE or UTILIZATION balancing modes,\nbut required if RATE mode. For RATE mode, either maxRate or one\nof maxRatePerInstance or maxRatePerEndpoint, as appropriate for\ngroup type, must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "BalancingMode",
      "Specifies the balancing mode for this backend.\nFor global HTTP(S) or TCP/SSL load balancing, the default is\nUTILIZATION. Valid values are UTILIZATION, RATE (for HTTP(S))\nand CONNECTION (for TCP/SSL).\nSee the [Backend Services Overview](https://cloud.google.com/load-balancing/docs/backend-service#balancing-mode)\nfor an explanation of load balancing modes.\nDefault value is `UTILIZATION`.\nPossible values are: `UTILIZATION`, `RATE`, `CONNECTION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxUtilization",
      "Used when balancingMode is UTILIZATION. This ratio defines the\nCPU utilization target for the group. Valid range is [0.0, 1.0].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxRatePerInstance",
      "The max requests per second (RPS) that a single backend\ninstance can handle. This is used to calculate the capacity of\nthe group. Can be used in either balancing mode. For RATE mode,\neither maxRate or maxRatePerInstance must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "CapacityScaler",
      "A multiplier applied to the group's maximum servicing capacity\n(based on UTILIZATION, RATE or CONNECTION).\nDefault value is 1, which means the group will serve up to 100%!\n(MISSING)of its configured capacity (depending on balancingMode). A\nsetting of 0 means the group is completely drained, offering\n0%!o(MISSING)f its available Capacity. Valid range is [0.0,1.0].",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxConnections",
      "The max number of simultaneous connections for the group. Can\nbe used with either CONNECTION or UTILIZATION balancing modes.\nFor CONNECTION mode, either maxConnections or one\nof maxConnectionsPerInstance or maxConnectionsPerEndpoint,\nas appropriate for group type, must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxConnectionsPerInstance",
      "The max number of simultaneous connections that a single\nbackend instance can handle. This is used to calculate the\ncapacity of the group. Can be used in either CONNECTION or\nUTILIZATION balancing modes.\nFor CONNECTION mode, either maxConnections or\nmaxConnectionsPerInstance must be set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxRatePerEndpoint",
      "The max requests per second (RPS) that a single backend network\nendpoint can handle. This is used to calculate the capacity of\nthe group. Can be used in either balancing mode. For RATE mode,\neither maxRate or maxRatePerEndpoint must be set.",
      [],
      false,
      false,
    ),
  ];
}
