import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  compute_RegionBackendServiceCircuitBreakersConnectTimeout,
  compute_RegionBackendServiceCircuitBreakersConnectTimeout_GetTypes,
} from "./compute_RegionBackendServiceCircuitBreakersConnectTimeout";

export interface compute_RegionBackendServiceCircuitBreakers {
  /*
Maximum requests for a single backend connection. This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.
*/
  maxRequestsPerConnection?: number;

  /*
The maximum number of parallel retries to the backend cluster.
Defaults to 3.
*/
  maxRetries?: number;

  /*
The timeout for new network connections to hosts.
Structure is documented below.
*/
  connectTimeout?: compute_RegionBackendServiceCircuitBreakersConnectTimeout;

  /*
The maximum number of connections to the backend cluster.
Defaults to 1024.
*/
  maxConnections?: number;

  /*
The maximum number of pending requests to the backend cluster.
Defaults to 1024.
*/
  maxPendingRequests?: number;

  /*
The maximum number of parallel requests to the backend cluster.
Defaults to 1024.
*/
  maxRequests?: number;
}

export function compute_RegionBackendServiceCircuitBreakers_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxRequestsPerConnection",
      "Maximum requests for a single backend connection. This parameter\nis respected by both the HTTP/1.1 and HTTP/2 implementations. If\nnot specified, there is no limit. Setting this parameter to 1\nwill effectively disable keep alive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRetries",
      "The maximum number of parallel retries to the backend cluster.\nDefaults to 3.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "connectTimeout",
      "The timeout for new network connections to hosts.\nStructure is documented below.",
      compute_RegionBackendServiceCircuitBreakersConnectTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxConnections",
      "The maximum number of connections to the backend cluster.\nDefaults to 1024.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxPendingRequests",
      "The maximum number of pending requests to the backend cluster.\nDefaults to 1024.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxRequests",
      "The maximum number of parallel requests to the backend cluster.\nDefaults to 1024.",
      [],
      false,
      false,
    ),
  ];
}
