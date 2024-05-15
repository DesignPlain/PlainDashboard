import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkconnectivity_ServiceConnectionPolicyPscConnectionError,
  Networkconnectivity_ServiceConnectionPolicyPscConnectionError_GetTypes,
} from "./Networkconnectivity_ServiceConnectionPolicyPscConnectionError";
import {
  Networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo,
  Networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo_GetTypes,
} from "./Networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo";

export interface Networkconnectivity_ServiceConnectionPolicyPscConnection {
  // The resource reference of the PSC Forwarding Rule within the consumer VPC.
  ConsumerForwardingRule?: string;

  // The project where the PSC connection is created.
  ConsumerTargetProject?: string;

  /*
The most recent error during operating this connection.
Structure is documented below.
*/
  Error?: Networkconnectivity_ServiceConnectionPolicyPscConnectionError;

  /*
The error info for the latest error during operating this connection.
Structure is documented below.
*/
  ErrorInfo?: Networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo;

  // The PSC connection id of the PSC forwarding rule.
  PscConnectionId?: string;

  // The resource reference of the consumer address.
  ConsumerAddress?: string;

  /*
The error type indicates whether the error is consumer facing, producer
facing or system internal.
Possible values are: `CONNECTION_ERROR_TYPE_UNSPECIFIED`, `ERROR_INTERNAL`, `ERROR_CONSUMER_SIDE`, `ERROR_PRODUCER_SIDE`.
*/
  ErrorType?: string;

  // The last Compute Engine operation to setup PSC connection.
  GceOperation?: string;

  /*
The state of the PSC connection.
Possible values are: `STATE_UNSPECIFIED`, `ACTIVE`, `CREATING`, `DELETING`, `FAILED`.
*/
  State?: string;
}

export function Networkconnectivity_ServiceConnectionPolicyPscConnection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Error",
      "The most recent error during operating this connection.\nStructure is documented below.",
      Networkconnectivity_ServiceConnectionPolicyPscConnectionError_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ErrorInfo",
      "The error info for the latest error during operating this connection.\nStructure is documented below.",
      Networkconnectivity_ServiceConnectionPolicyPscConnectionErrorInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GceOperation",
      "The last Compute Engine operation to setup PSC connection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "The state of the PSC connection.\nPossible values are: `STATE_UNSPECIFIED`, `ACTIVE`, `CREATING`, `DELETING`, `FAILED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ErrorType",
      "The error type indicates whether the error is consumer facing, producer\nfacing or system internal.\nPossible values are: `CONNECTION_ERROR_TYPE_UNSPECIFIED`, `ERROR_INTERNAL`, `ERROR_CONSUMER_SIDE`, `ERROR_PRODUCER_SIDE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConsumerForwardingRule",
      "The resource reference of the PSC Forwarding Rule within the consumer VPC.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConsumerTargetProject",
      "The project where the PSC connection is created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PscConnectionId",
      "The PSC connection id of the PSC forwarding rule.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ConsumerAddress",
      "The resource reference of the consumer address.",
      [],
      false,
      false,
    ),
  ];
}
