import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface HostedConnectionArgs {
  // The ID of the interconnect or LAG.
  connectionId?: string;

  // The name of the connection.
  name?: string;

  // The ID of the AWS account of the customer for the connection.
  ownerAccountId?: string;

  // The dedicated VLAN provisioned to the hosted connection.
  vlan?: number;

  // The bandwidth of the connection. Valid values for dedicated connections: 1Gbps, 10Gbps. Valid values for hosted connections: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps and 10Gbps. Case sensitive.
  bandwidth?: string;
}
export class HostedConnection extends DS_Resource {
  // The ID of the interconnect or LAG.
  public connectionId?: string;

  // The name of the AWS Direct Connect service provider associated with the connection.
  public partnerName?: string;

  // The dedicated VLAN provisioned to the hosted connection.
  public vlan?: number;

  // The Direct Connect endpoint on which the physical connection terminates.
  public awsDevice?: string;

  // The time of the most recent call to [DescribeLoa](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_DescribeLoa.html) for this connection.
  public loaIssueTime?: string;

  // The AWS Region where the connection is located.
  public region?: string;

  // The state of the connection. Possible values include: ordering, requested, pending, available, down, deleting, deleted, rejected, unknown. See [AllocateHostedConnection](https://docs.aws.amazon.com/directconnect/latest/APIReference/API_AllocateHostedConnection.html) for a description of each connection state.
  public state?: string;

  // Indicates whether the connection supports a secondary BGP peer in the same address family (IPv4/IPv6).
  public hasLogicalRedundancy?: string;

  // The ID of the LAG.
  public lagId?: string;

  // The location of the connection.
  public location?: string;

  // The name of the connection.
  public name?: string;

  // The ID of the AWS account of the customer for the connection.
  public ownerAccountId?: string;

  // The name of the service provider associated with the connection.
  public providerName?: string;

  // The bandwidth of the connection. Valid values for dedicated connections: 1Gbps, 10Gbps. Valid values for hosted connections: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps and 10Gbps. Case sensitive.
  public bandwidth?: string;

  // Boolean value representing if jumbo frames have been enabled for this connection.
  public jumboFrameCapable?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the connection.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ownerAccountId',
        'The ID of the AWS account of the customer for the connection.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'vlan',
        'The dedicated VLAN provisioned to the hosted connection.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bandwidth',
        'The bandwidth of the connection. Valid values for dedicated connections: 1Gbps, 10Gbps. Valid values for hosted connections: 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps and 10Gbps. Case sensitive.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'connectionId',
        'The ID of the interconnect or LAG.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
