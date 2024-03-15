import { ServiceConnectionPolicyPscConnectionErrorInfo } from "./ServiceConnectionPolicyPscConnectionErrorInfo";
import { ServiceConnectionPolicyPscConnectionError } from "./ServiceConnectionPolicyPscConnectionError";

export interface ServiceConnectionPolicyPscConnection {
  // The resource reference of the PSC Forwarding Rule within the consumer VPC.
  ConsumerForwardingRule?: string;

  // The project where the PSC connection is created.
  ConsumerTargetProject?: string;

  // The last Compute Engine operation to setup PSC connection.
  GceOperation?: string;

  // The resource reference of the consumer address.
  ConsumerAddress?: string;

  /*
The most recent error during operating this connection.
Structure is documented below.
*/
  Error?: ServiceConnectionPolicyPscConnectionError;

  /*
The error info for the latest error during operating this connection.
Structure is documented below.
*/
  ErrorInfo?: ServiceConnectionPolicyPscConnectionErrorInfo;

  /*
The error type indicates whether the error is consumer facing, producer
facing or system internal.
Possible values are: `CONNECTION_ERROR_TYPE_UNSPECIFIED`, `ERROR_INTERNAL`, `ERROR_CONSUMER_SIDE`, `ERROR_PRODUCER_SIDE`.
*/
  ErrorType?: string;

  // The PSC connection id of the PSC forwarding rule.
  PscConnectionId?: string;

  /*
The state of the PSC connection.
Possible values are: `STATE_UNSPECIFIED`, `ACTIVE`, `CREATING`, `DELETING`, `FAILED`.
*/
  State?: string;
}
