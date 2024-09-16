import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  storagegateway_GatewaySmbActiveDirectorySettings,
  storagegateway_GatewaySmbActiveDirectorySettings_GetTypes,
} from '../types/storagegateway_GatewaySmbActiveDirectorySettings';
import {
  storagegateway_GatewayMaintenanceStartTime,
  storagegateway_GatewayMaintenanceStartTime_GetTypes,
} from '../types/storagegateway_GatewayMaintenanceStartTime';
import {
  storagegateway_GatewayGatewayNetworkInterface,
  storagegateway_GatewayGatewayNetworkInterface_GetTypes,
} from '../types/storagegateway_GatewayGatewayNetworkInterface';

export interface GatewayArgs {
  // The average download bandwidth rate limit in bits per second. This is supported for the `CACHED`, `STORED`, and `VTL` gateway types.
  averageDownloadRateLimitInBitsPerSec?: number;

  // Name of the gateway.
  gatewayName?: string;

  // Specifies the type of security strategy. Valid values are: `ClientSpecified`, `MandatorySigning`, and `MandatoryEncryption`. See [Setting a Security Level for Your Gateway](https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-gateway-file.html#security-strategy) for more information.
  smbSecurityStrategy?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the Amazon CloudWatch log group to use to monitor and log events in the gateway.
  cloudwatchLogGroupArn?: string;

  // Type of medium changer to use for tape gateway. This provider cannot detect drift of this argument. Valid values: `STK-L700`, `AWS-Gateway-VTL`, `IBM-03584L32-0402`.
  mediumChangerType?: string;

  // Nested argument with Active Directory domain join information for Server Message Block (SMB) file shares. Only valid for `FILE_S3` and `FILE_FSX_SMB` gateway types. Must be set before creating `ActiveDirectory` authentication SMB file shares. More details below.
  smbActiveDirectorySettings?: storagegateway_GatewaySmbActiveDirectorySettings;

  // Gateway activation key during resource creation. Conflicts with `gateway_ip_address`. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
  activationKey?: string;

  // Time zone for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, `GMT-4:00` indicates the time is 4 hours behind GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.
  gatewayTimezone?: string;

  // VPC endpoint address to be used when activating your gateway. This should be used when your instance is in a private subnet. Requires HTTP access from client computer running this provider. More info on what ports are required by your VPC Endpoint Security group in [Activating a Gateway in a Virtual Private Cloud](https://docs.aws.amazon.com/storagegateway/latest/userguide/gateway-private-link.html).
  gatewayVpcEndpoint?: string;

  // Specifies whether the shares on this gateway appear when listing shares.
  smbFileShareVisibility?: boolean;

  // Guest password for Server Message Block (SMB) file shares. Only valid for `FILE_S3` and `FILE_FSX_SMB` gateway types. Must be set before creating `GuestAccess` authentication SMB file shares. This provider can only detect drift of the existence of a guest password, not its actual value from the gateway. This provider can however update the password with changing the argument.
  smbGuestPassword?: string;

  // Type of tape drive to use for tape gateway. This provider cannot detect drift of this argument. Valid values: `IBM-ULT3580-TD5`.
  tapeDriveType?: string;

  // The average upload bandwidth rate limit in bits per second. This is supported for the `CACHED`, `STORED`, and `VTL` gateway types.
  averageUploadRateLimitInBitsPerSec?: number;

  // Gateway IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. Gateway must be accessible on port 80 from where this provider is running. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
  gatewayIpAddress?: string;

  // Type of the gateway. The default value is `STORED`. Valid values: `CACHED`, `FILE_FSX_SMB`, `FILE_S3`, `STORED`, `VTL`.
  gatewayType?: string;

  // The gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone. More details below.
  maintenanceStartTime?: storagegateway_GatewayMaintenanceStartTime;
}
export class Gateway extends DS_Resource {
  // Time zone for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, `GMT-4:00` indicates the time is 4 hours behind GMT. The time zone is used, for example, for scheduling snapshots and your gateway's maintenance schedule.
  public gatewayTimezone?: string;

  // Nested argument with Active Directory domain join information for Server Message Block (SMB) file shares. Only valid for `FILE_S3` and `FILE_FSX_SMB` gateway types. Must be set before creating `ActiveDirectory` authentication SMB file shares. More details below.
  public smbActiveDirectorySettings?: storagegateway_GatewaySmbActiveDirectorySettings;

  // Type of tape drive to use for tape gateway. This provider cannot detect drift of this argument. Valid values: `IBM-ULT3580-TD5`.
  public tapeDriveType?: string;

  // The average download bandwidth rate limit in bits per second. This is supported for the `CACHED`, `STORED`, and `VTL` gateway types.
  public averageDownloadRateLimitInBitsPerSec?: number;

  // Gateway IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. Gateway must be accessible on port 80 from where this provider is running. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
  public gatewayIpAddress?: string;

  // An array that contains descriptions of the gateway network interfaces. See Gateway Network Interface.
  public gatewayNetworkInterfaces?: Array<storagegateway_GatewayGatewayNetworkInterface>;

  // Guest password for Server Message Block (SMB) file shares. Only valid for `FILE_S3` and `FILE_FSX_SMB` gateway types. Must be set before creating `GuestAccess` authentication SMB file shares. This provider can only detect drift of the existence of a guest password, not its actual value from the gateway. This provider can however update the password with changing the argument.
  public smbGuestPassword?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the Amazon EC2 instance that was used to launch the gateway.
  public ec2InstanceId?: string;

  // The type of endpoint for your gateway.
  public endpointType?: string;

  // Specifies whether the shares on this gateway appear when listing shares.
  public smbFileShareVisibility?: boolean;

  // The type of hypervisor environment used by the host.
  public hostEnvironment?: string;

  // The gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone. More details below.
  public maintenanceStartTime?: storagegateway_GatewayMaintenanceStartTime;

  // Type of medium changer to use for tape gateway. This provider cannot detect drift of this argument. Valid values: `STK-L700`, `AWS-Gateway-VTL`, `IBM-03584L32-0402`.
  public mediumChangerType?: string;

  // Identifier of the gateway.
  public gatewayId?: string;

  // Name of the gateway.
  public gatewayName?: string;

  // VPC endpoint address to be used when activating your gateway. This should be used when your instance is in a private subnet. Requires HTTP access from client computer running this provider. More info on what ports are required by your VPC Endpoint Security group in [Activating a Gateway in a Virtual Private Cloud](https://docs.aws.amazon.com/storagegateway/latest/userguide/gateway-private-link.html).
  public gatewayVpcEndpoint?: string;

  // The Amazon Resource Name (ARN) of the Amazon CloudWatch log group to use to monitor and log events in the gateway.
  public cloudwatchLogGroupArn?: string;

  // Type of the gateway. The default value is `STORED`. Valid values: `CACHED`, `FILE_FSX_SMB`, `FILE_S3`, `STORED`, `VTL`.
  public gatewayType?: string;

  // Specifies the type of security strategy. Valid values are: `ClientSpecified`, `MandatorySigning`, and `MandatoryEncryption`. See [Setting a Security Level for Your Gateway](https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-gateway-file.html#security-strategy) for more information.
  public smbSecurityStrategy?: string;

  // Gateway activation key during resource creation. Conflicts with `gateway_ip_address`. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).
  public activationKey?: string;

  // Amazon Resource Name (ARN) of the gateway.
  public arn?: string;

  // The average upload bandwidth rate limit in bits per second. This is supported for the `CACHED`, `STORED`, and `VTL` gateway types.
  public averageUploadRateLimitInBitsPerSec?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'activationKey',
        'Gateway activation key during resource creation. Conflicts with `gateway_ip_address`. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'smbFileShareVisibility',
        'Specifies whether the shares on this gateway appear when listing shares.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'averageDownloadRateLimitInBitsPerSec',
        'The average download bandwidth rate limit in bits per second. This is supported for the `CACHED`, `STORED`, and `VTL` gateway types.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'mediumChangerType',
        'Type of medium changer to use for tape gateway. This provider cannot detect drift of this argument. Valid values: `STK-L700`, `AWS-Gateway-VTL`, `IBM-03584L32-0402`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayIpAddress',
        'Gateway IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. Gateway must be accessible on port 80 from where this provider is running. Additional information is available in the [Storage Gateway User Guide](https://docs.aws.amazon.com/storagegateway/latest/userguide/get-activation-key.html).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayTimezone',
        'Time zone for the gateway. The time zone is of the format "GMT", "GMT-hr:mm", or "GMT+hr:mm". For example, `GMT-4:00` indicates the time is 4 hours behind GMT. The time zone is used, for example, for scheduling snapshots and your gateway\'s maintenance schedule.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayVpcEndpoint',
        'VPC endpoint address to be used when activating your gateway. This should be used when your instance is in a private subnet. Requires HTTP access from client computer running this provider. More info on what ports are required by your VPC Endpoint Security group in [Activating a Gateway in a Virtual Private Cloud](https://docs.aws.amazon.com/storagegateway/latest/userguide/gateway-private-link.html).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'smbGuestPassword',
        'Guest password for Server Message Block (SMB) file shares. Only valid for `FILE_S3` and `FILE_FSX_SMB` gateway types. Must be set before creating `GuestAccess` authentication SMB file shares. This provider can only detect drift of the existence of a guest password, not its actual value from the gateway. This provider can however update the password with changing the argument.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayType',
        'Type of the gateway. The default value is `STORED`. Valid values: `CACHED`, `FILE_FSX_SMB`, `FILE_S3`, `STORED`, `VTL`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'gatewayName',
        'Name of the gateway.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'smbActiveDirectorySettings',
        'Nested argument with Active Directory domain join information for Server Message Block (SMB) file shares. Only valid for `FILE_S3` and `FILE_FSX_SMB` gateway types. Must be set before creating `ActiveDirectory` authentication SMB file shares. More details below.',
        () => storagegateway_GatewaySmbActiveDirectorySettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tapeDriveType',
        'Type of tape drive to use for tape gateway. This provider cannot detect drift of this argument. Valid values: `IBM-ULT3580-TD5`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'averageUploadRateLimitInBitsPerSec',
        'The average upload bandwidth rate limit in bits per second. This is supported for the `CACHED`, `STORED`, and `VTL` gateway types.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'maintenanceStartTime',
        "The gateway's weekly maintenance start time information, including day and time of the week. The maintenance time is the time in your gateway's time zone. More details below.",
        () => storagegateway_GatewayMaintenanceStartTime_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'smbSecurityStrategy',
        'Specifies the type of security strategy. Valid values are: `ClientSpecified`, `MandatorySigning`, and `MandatoryEncryption`. See [Setting a Security Level for Your Gateway](https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-gateway-file.html#security-strategy) for more information.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'cloudwatchLogGroupArn',
        'The Amazon Resource Name (ARN) of the Amazon CloudWatch log group to use to monitor and log events in the gateway.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
