import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelVpc,
  medialive_ChannelVpc_GetTypes,
} from '../types/medialive_ChannelVpc';
import {
  medialive_ChannelDestination,
  medialive_ChannelDestination_GetTypes,
} from '../types/medialive_ChannelDestination';
import {
  medialive_ChannelInputAttachment,
  medialive_ChannelInputAttachment_GetTypes,
} from '../types/medialive_ChannelInputAttachment';
import {
  medialive_ChannelInputSpecification,
  medialive_ChannelInputSpecification_GetTypes,
} from '../types/medialive_ChannelInputSpecification';
import {
  medialive_ChannelCdiInputSpecification,
  medialive_ChannelCdiInputSpecification_GetTypes,
} from '../types/medialive_ChannelCdiInputSpecification';
import {
  medialive_ChannelEncoderSettings,
  medialive_ChannelEncoderSettings_GetTypes,
} from '../types/medialive_ChannelEncoderSettings';
import {
  medialive_ChannelMaintenance,
  medialive_ChannelMaintenance_GetTypes,
} from '../types/medialive_ChannelMaintenance';

export interface ChannelArgs {
  /*
Name of the Channel.

The following arguments are optional:
*/
  name?: string;

  // Whether to start/stop channel. Default: `false`
  startChannel?: boolean;

  // A map of tags to assign to the channel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Settings for the VPC outputs. See VPC for more details.
  vpc?: medialive_ChannelVpc;

  // Concise argument description.
  channelClass?: string;

  // Destinations for channel. See Destinations for more details.
  destinations?: Array<medialive_ChannelDestination>;

  // Input attachments for the channel. See Input Attachments for more details.
  inputAttachments?: Array<medialive_ChannelInputAttachment>;

  // Specification of network and file inputs for the channel.
  inputSpecification?: medialive_ChannelInputSpecification;

  // Concise argument description.
  roleArn?: string;

  // Specification of CDI inputs for this channel. See CDI Input Specification for more details.
  cdiInputSpecification?: medialive_ChannelCdiInputSpecification;

  // Encoder settings. See Encoder Settings for more details.
  encoderSettings?: medialive_ChannelEncoderSettings;

  // The log level to write to Cloudwatch logs.
  logLevel?: string;

  // Maintenance settings for this channel. See Maintenance for more details.
  maintenance?: medialive_ChannelMaintenance;
}
export class Channel extends DS_Resource {
  // ID of the Channel.
  public channelId?: string;

  // Destinations for channel. See Destinations for more details.
  public destinations?: Array<medialive_ChannelDestination>;

  // Input attachments for the channel. See Input Attachments for more details.
  public inputAttachments?: Array<medialive_ChannelInputAttachment>;

  // The log level to write to Cloudwatch logs.
  public logLevel?: string;

  // Maintenance settings for this channel. See Maintenance for more details.
  public maintenance?: medialive_ChannelMaintenance;

  // A map of tags to assign to the channel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Settings for the VPC outputs. See VPC for more details.
  public vpc?: medialive_ChannelVpc;

  // Concise argument description.
  public channelClass?: string;

  // Encoder settings. See Encoder Settings for more details.
  public encoderSettings?: medialive_ChannelEncoderSettings;

  /*
Name of the Channel.

The following arguments are optional:
*/
  public name?: string;

  // Whether to start/stop channel. Default: `false`
  public startChannel?: boolean;

  //
  public tagsAll?: Map<string, string>;

  // ARN of the Channel.
  public arn?: string;

  // Specification of network and file inputs for the channel.
  public inputSpecification?: medialive_ChannelInputSpecification;

  // Concise argument description.
  public roleArn?: string;

  // Specification of CDI inputs for this channel. See CDI Input Specification for more details.
  public cdiInputSpecification?: medialive_ChannelCdiInputSpecification;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the Channel.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the channel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cdiInputSpecification',
        'Specification of CDI inputs for this channel. See CDI Input Specification for more details.',
        () => medialive_ChannelCdiInputSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'maintenance',
        'Maintenance settings for this channel. See Maintenance for more details.',
        () => medialive_ChannelMaintenance_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'Concise argument description.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'encoderSettings',
        'Encoder settings. See Encoder Settings for more details.',
        () => medialive_ChannelEncoderSettings_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'startChannel',
        'Whether to start/stop channel. Default: `false`',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'vpc',
        'Settings for the VPC outputs. See VPC for more details.',
        () => medialive_ChannelVpc_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'channelClass',
        'Concise argument description.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'destinations',
        'Destinations for channel. See Destinations for more details.',
        () => medialive_ChannelDestination_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'inputAttachments',
        'Input attachments for the channel. See Input Attachments for more details.',
        () => medialive_ChannelInputAttachment_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'inputSpecification',
        'Specification of network and file inputs for the channel.',
        () => medialive_ChannelInputSpecification_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'logLevel',
        'The log level to write to Cloudwatch logs.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
