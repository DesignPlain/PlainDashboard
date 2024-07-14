import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface transfer_ServerProtocolDetails {
  // Indicates the transport method for the AS2 messages. Currently, only `HTTP` is supported.
  as2Transports?: Array<string>;

  // Indicates passive mode, for FTP and FTPS protocols. Enter a single IPv4 address, such as the public IP address of a firewall, router, or load balancer.
  passiveIp?: string;

  // Use to ignore the error that is generated when the client attempts to use `SETSTAT` on a file you are uploading to an S3 bucket. Valid values: `DEFAULT`, `ENABLE_NO_OP`.
  setStatOption?: string;

  // A property used with Transfer Family servers that use the FTPS protocol. Provides a mechanism to resume or share a negotiated secret key between the control and data connection for an FTPS session. Valid values: `DISABLED`, `ENABLED`, `ENFORCED`.
  tlsSessionResumptionMode?: string;
}

export function transfer_ServerProtocolDetails_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "as2Transports",
      "Indicates the transport method for the AS2 messages. Currently, only `HTTP` is supported.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "passiveIp",
      "Indicates passive mode, for FTP and FTPS protocols. Enter a single IPv4 address, such as the public IP address of a firewall, router, or load balancer.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "setStatOption",
      "Use to ignore the error that is generated when the client attempts to use `SETSTAT` on a file you are uploading to an S3 bucket. Valid values: `DEFAULT`, `ENABLE_NO_OP`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tlsSessionResumptionMode",
      "A property used with Transfer Family servers that use the FTPS protocol. Provides a mechanism to resume or share a negotiated secret key between the control and data connection for an FTPS session. Valid values: `DISABLED`, `ENABLED`, `ENFORCED`.",
      [],
      false,
      false,
    ),
  ];
}
