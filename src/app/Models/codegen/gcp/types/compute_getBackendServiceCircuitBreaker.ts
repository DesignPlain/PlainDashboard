import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_getBackendServiceCircuitBreakerConnectTimeout,
  compute_getBackendServiceCircuitBreakerConnectTimeout_GetTypes,
} from './compute_getBackendServiceCircuitBreakerConnectTimeout';

export interface compute_getBackendServiceCircuitBreaker {
  /*
The maximum number of parallel requests to the backend cluster.
Defaults to 1024.
*/
  maxRequests?: number;

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

  // The timeout for new network connections to hosts.
  connectTimeouts?: Array<compute_getBackendServiceCircuitBreakerConnectTimeout>;

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
}

export function compute_getBackendServiceCircuitBreaker_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'maxConnections',
      'The maximum number of connections to the backend cluster.\nDefaults to 1024.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxPendingRequests',
      'The maximum number of pending requests to the backend cluster.\nDefaults to 1024.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxRequests',
      'The maximum number of parallel requests to the backend cluster.\nDefaults to 1024.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxRequestsPerConnection',
      'Maximum requests for a single backend connection. This parameter\nis respected by both the HTTP/1.1 and HTTP/2 implementations. If\nnot specified, there is no limit. Setting this parameter to 1\nwill effectively disable keep alive.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxRetries',
      'The maximum number of parallel retries to the backend cluster.\nDefaults to 3.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'connectTimeouts',
      'The timeout for new network connections to hosts.',
      () => compute_getBackendServiceCircuitBreakerConnectTimeout_GetTypes(),
      true,
      false,
    ),
  ];
}
