import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opensearch_OutboundConnectionRemoteDomainInfo,
  opensearch_OutboundConnectionRemoteDomainInfo_GetTypes,
} from "../types/opensearch_OutboundConnectionRemoteDomainInfo";
import {
  opensearch_OutboundConnectionConnectionProperties,
  opensearch_OutboundConnectionConnectionProperties_GetTypes,
} from "../types/opensearch_OutboundConnectionConnectionProperties";
import {
  opensearch_OutboundConnectionLocalDomainInfo,
  opensearch_OutboundConnectionLocalDomainInfo_GetTypes,
} from "../types/opensearch_OutboundConnectionLocalDomainInfo";

export interface OutboundConnectionArgs {
  // Configuration block for the remote Opensearch domain.
  remoteDomainInfo?: opensearch_OutboundConnectionRemoteDomainInfo;

  // Accepts the connection.
  acceptConnection?: boolean;

  // Specifies the connection alias that will be used by the customer for this connection.
  connectionAlias?: string;

  // Specifies the connection mode. Accepted values are `DIRECT` or `VPC_ENDPOINT`.
  connectionMode?: string;

  // Configuration block for the outbound connection.
  connectionProperties?: opensearch_OutboundConnectionConnectionProperties;

  // Configuration block for the local Opensearch domain.
  localDomainInfo?: opensearch_OutboundConnectionLocalDomainInfo;
}
export class OutboundConnection extends DS_Resource {
  // Accepts the connection.
  public acceptConnection?: boolean;

  // Specifies the connection alias that will be used by the customer for this connection.
  public connectionAlias?: string;

  // Specifies the connection mode. Accepted values are `DIRECT` or `VPC_ENDPOINT`.
  public connectionMode?: string;

  // Configuration block for the outbound connection.
  public connectionProperties?: opensearch_OutboundConnectionConnectionProperties;

  // Status of the connection request.
  public connectionStatus?: string;

  // Configuration block for the local Opensearch domain.
  public localDomainInfo?: opensearch_OutboundConnectionLocalDomainInfo;

  // Configuration block for the remote Opensearch domain.
  public remoteDomainInfo?: opensearch_OutboundConnectionRemoteDomainInfo;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "remoteDomainInfo",
        "Configuration block for the remote Opensearch domain.",
        () => opensearch_OutboundConnectionRemoteDomainInfo_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "acceptConnection",
        "Accepts the connection.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionAlias",
        "Specifies the connection alias that will be used by the customer for this connection.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "connectionMode",
        "Specifies the connection mode. Accepted values are `DIRECT` or `VPC_ENDPOINT`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "connectionProperties",
        "Configuration block for the outbound connection.",
        () => opensearch_OutboundConnectionConnectionProperties_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "localDomainInfo",
        "Configuration block for the local Opensearch domain.",
        () => opensearch_OutboundConnectionLocalDomainInfo_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
