import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkservices_EdgeCacheOriginTimeout {
  /*
The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.
Defaults to 5 seconds. The timeout must be a value between 1s and 15s.
The connectTimeout capped by the deadline set by the request's maxAttemptsTimeout.  The last connection attempt may have a smaller connectTimeout in order to adhere to the overall maxAttemptsTimeout.
*/
  connectTimeout?: string;

  /*
The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client. A HTTP 504 will be returned if the timeout is reached before a response is returned.
Defaults to 15 seconds. The timeout must be a value between 1s and 30s.
If a failoverOrigin is specified, the maxAttemptsTimeout of the first configured origin sets the deadline for all connection attempts across all failoverOrigins.
*/
  maxAttemptsTimeout?: string;

  /*
The maximum duration to wait between reads of a single HTTP connection/stream.
Defaults to 15 seconds.  The timeout must be a value between 1s and 30s.
The readTimeout is capped by the responseTimeout.  All reads of the HTTP connection/stream must be completed by the deadline set by the responseTimeout.
If the response headers have already been written to the connection, the response will be truncated and logged.

<a name="nested_aws_v4_authentication"></a>The `aws_v4_authentication` block supports:
*/
  readTimeout?: string;

  /*
The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream.
Defaults to 30 seconds. The timeout must be a value between 1s and 120s.
The responseTimeout starts after the connection has been established.
This also applies to HTTP Chunked Transfer Encoding responses, and/or when an open-ended Range request is made to the origin. Origins that take longer to write additional bytes to the response than the configured responseTimeout will result in an error being returned to the client.
If the response headers have already been written to the connection, the response will be truncated and logged.
*/
  responseTimeout?: string;
}

export function networkservices_EdgeCacheOriginTimeout_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'responseTimeout',
      'The maximum duration to wait for the last byte of a response to arrive when reading from the HTTP connection/stream.\nDefaults to 30 seconds. The timeout must be a value between 1s and 120s.\nThe responseTimeout starts after the connection has been established.\nThis also applies to HTTP Chunked Transfer Encoding responses, and/or when an open-ended Range request is made to the origin. Origins that take longer to write additional bytes to the response than the configured responseTimeout will result in an error being returned to the client.\nIf the response headers have already been written to the connection, the response will be truncated and logged.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'connectTimeout',
      "The maximum duration to wait for a single origin connection to be established, including DNS lookup, TLS handshake and TCP/QUIC connection establishment.\nDefaults to 5 seconds. The timeout must be a value between 1s and 15s.\nThe connectTimeout capped by the deadline set by the request's maxAttemptsTimeout.  The last connection attempt may have a smaller connectTimeout in order to adhere to the overall maxAttemptsTimeout.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'maxAttemptsTimeout',
      'The maximum time across all connection attempts to the origin, including failover origins, before returning an error to the client. A HTTP 504 will be returned if the timeout is reached before a response is returned.\nDefaults to 15 seconds. The timeout must be a value between 1s and 30s.\nIf a failoverOrigin is specified, the maxAttemptsTimeout of the first configured origin sets the deadline for all connection attempts across all failoverOrigins.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'readTimeout',
      'The maximum duration to wait between reads of a single HTTP connection/stream.\nDefaults to 15 seconds.  The timeout must be a value between 1s and 30s.\nThe readTimeout is capped by the responseTimeout.  All reads of the HTTP connection/stream must be completed by the deadline set by the responseTimeout.\nIf the response headers have already been written to the connection, the response will be truncated and logged.\n\n<a name="nested_aws_v4_authentication"></a>The `aws_v4_authentication` block supports:',
      () => [],
      false,
      false,
    ),
  ];
}
