import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionBackendServiceCircuitBreakersConnectTimeout,
  Compute_RegionBackendServiceCircuitBreakersConnectTimeout_GetTypes,
} from "./Compute_RegionBackendServiceCircuitBreakersConnectTimeout";

export interface Compute_RegionBackendServiceCircuitBreakers {
  /*
The timeout for new network connections to hosts.
Structure is documented below.
*/
  ConnectTimeout?: Compute_RegionBackendServiceCircuitBreakersConnectTimeout;

  /*
The maximum number of connections to the backend cluster.
Defaults to 1024.
*/
  MaxConnections?: number;

  /*
The maximum number of pending requests to the backend cluster.
Defaults to 1024.
*/
  MaxPendingRequests?: number;

  /*
The maximum number of parallel requests to the backend cluster.
Defaults to 1024.
*/
  MaxRequests?: number;

  /*
Maximum requests for a single backend connection. This parameter
is respected by both the HTTP/1.1 and HTTP/2 implementations. If
not specified, there is no limit. Setting this parameter to 1
will effectively disable keep alive.
*/
  MaxRequestsPerConnection?: number;

  /*
The maximum number of parallel retries to the backend cluster.
Defaults to 3.
*/
  MaxRetries?: number;
}

export function Compute_RegionBackendServiceCircuitBreakers_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "MaxRequests",
      "The maximum number of parallel requests to the backend cluster.\nDefaults to 1024.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxRequestsPerConnection",
      "Maximum requests for a single backend connection. This parameter\nis respected by both the HTTP/1.1 and HTTP/2 implementations. If\nnot specified, there is no limit. Setting this parameter to 1\nwill effectively disable keep alive.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxRetries",
      "The maximum number of parallel retries to the backend cluster.\nDefaults to 3.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ConnectTimeout",
      "The timeout for new network connections to hosts.\nStructure is documented below.",
      Compute_RegionBackendServiceCircuitBreakersConnectTimeout_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxConnections",
      "The maximum number of connections to the backend cluster.\nDefaults to 1024.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxPendingRequests",
      "The maximum number of pending requests to the backend cluster.\nDefaults to 1024.",
      [],
      false,
      false,
    ),
  ];
}
