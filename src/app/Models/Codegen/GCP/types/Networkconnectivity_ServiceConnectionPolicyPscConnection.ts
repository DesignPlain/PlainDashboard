import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkconnectivity_ServiceConnectionPolicyPscConnectionError,
  networkconnectivity_ServiceConnectionPolicyPscConnectionError_GetTypes,
} from "./networkconnectivity_ServiceConnectionPolicyPscConnectionError";
import {
  networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo,
  networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo_GetTypes,
} from "./networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo";

export interface networkconnectivity_ServiceConnectionPolicyPscConnection {
  // The PSC connection id of the PSC forwarding rule.
  pscConnectionId?: string;

  // The resource reference of the consumer address.
  consumerAddress?: string;

  // The resource reference of the PSC Forwarding Rule within the consumer VPC.
  consumerForwardingRule?: string;

  // The project where the PSC connection is created.
  consumerTargetProject?: string;

  /*
The most recent error during operating this connection.
Structure is documented below.
*/
  error?: networkconnectivity_ServiceConnectionPolicyPscConnectionError;

  /*
The error info for the latest error during operating this connection.
Structure is documented below.
*/
  errorInfo?: networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo;

  // The last Compute Engine operation to setup PSC connection.
  gceOperation?: string;

  /*
The error type indicates whether the error is consumer facing, producer
facing or system internal.
Possible values are: `CONNECTION_ERROR_TYPE_UNSPECIFIED`, `ERROR_INTERNAL`, `ERROR_CONSUMER_SIDE`, `ERROR_PRODUCER_SIDE`.
*/
  errorType?: string;

  /*
The state of the PSC connection.
Possible values are: `STATE_UNSPECIFIED`, `ACTIVE`, `CREATING`, `DELETING`, `FAILED`.
*/
  state?: string;
}

export function networkconnectivity_ServiceConnectionPolicyPscConnection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "error",
      "The most recent error during operating this connection.\nStructure is documented below.",
      networkconnectivity_ServiceConnectionPolicyPscConnectionError_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gceOperation",
      "The last Compute Engine operation to setup PSC connection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "errorType",
      "The error type indicates whether the error is consumer facing, producer\nfacing or system internal.\nPossible values are: `CONNECTION_ERROR_TYPE_UNSPECIFIED`, `ERROR_INTERNAL`, `ERROR_CONSUMER_SIDE`, `ERROR_PRODUCER_SIDE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "consumerTargetProject",
      "The project where the PSC connection is created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "errorInfo",
      "The error info for the latest error during operating this connection.\nStructure is documented below.",
      networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "The state of the PSC connection.\nPossible values are: `STATE_UNSPECIFIED`, `ACTIVE`, `CREATING`, `DELETING`, `FAILED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pscConnectionId",
      "The PSC connection id of the PSC forwarding rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "consumerAddress",
      "The resource reference of the consumer address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "consumerForwardingRule",
      "The resource reference of the PSC Forwarding Rule within the consumer VPC.",
      [],
      false,
      false,
    ),
  ];
}
