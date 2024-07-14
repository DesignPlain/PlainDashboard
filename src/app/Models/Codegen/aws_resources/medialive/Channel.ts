import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelMaintenance,
  medialive_ChannelMaintenance_GetTypes,
} from "../types/medialive_ChannelMaintenance";
import {
  medialive_ChannelVpc,
  medialive_ChannelVpc_GetTypes,
} from "../types/medialive_ChannelVpc";
import {
  medialive_ChannelCdiInputSpecification,
  medialive_ChannelCdiInputSpecification_GetTypes,
} from "../types/medialive_ChannelCdiInputSpecification";
import {
  medialive_ChannelEncoderSettings,
  medialive_ChannelEncoderSettings_GetTypes,
} from "../types/medialive_ChannelEncoderSettings";
import {
  medialive_ChannelInputSpecification,
  medialive_ChannelInputSpecification_GetTypes,
} from "../types/medialive_ChannelInputSpecification";
import {
  medialive_ChannelDestination,
  medialive_ChannelDestination_GetTypes,
} from "../types/medialive_ChannelDestination";
import {
  medialive_ChannelInputAttachment,
  medialive_ChannelInputAttachment_GetTypes,
} from "../types/medialive_ChannelInputAttachment";

export interface ChannelArgs {
  // The log level to write to Cloudwatch logs.
  logLevel?: string;

  /*
Name of the Channel.

The following arguments are optional:
*/
  name?: string;

  // Concise argument description.
  roleArn?: string;

  // Concise argument description.
  channelClass?: string;

  // Destinations for channel. See Destinations for more details.
  destinations?: Array<medialive_ChannelDestination>;

  // Input attachments for the channel. See Input Attachments for more details.
  inputAttachments?: Array<medialive_ChannelInputAttachment>;

  // Maintenance settings for this channel. See Maintenance for more details.
  maintenance?: medialive_ChannelMaintenance;

  // Whether to start/stop channel. Default: `false`
  startChannel?: boolean;

  // A map of tags to assign to the channel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Settings for the VPC outputs. See VPC for more details.
  vpc?: medialive_ChannelVpc;

  // Specification of CDI inputs for this channel. See CDI Input Specification for more details.
  cdiInputSpecification?: medialive_ChannelCdiInputSpecification;

  // Encoder settings. See Encoder Settings for more details.
  encoderSettings?: medialive_ChannelEncoderSettings;

  // Specification of network and file inputs for the channel.
  inputSpecification?: medialive_ChannelInputSpecification;
}
export class Channel extends Resource {
  // Specification of CDI inputs for this channel. See CDI Input Specification for more details.
  public cdiInputSpecification?: medialive_ChannelCdiInputSpecification;

  // Concise argument description.
  public roleArn?: string;

  //
  public tagsAll?: Map<string, string>;

  // Concise argument description.
  public channelClass?: string;

  // Encoder settings. See Encoder Settings for more details.
  public encoderSettings?: medialive_ChannelEncoderSettings;

  // Whether to start/stop channel. Default: `false`
  public startChannel?: boolean;

  // A map of tags to assign to the channel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Maintenance settings for this channel. See Maintenance for more details.
  public maintenance?: medialive_ChannelMaintenance;

  /*
Name of the Channel.

The following arguments are optional:
*/
  public name?: string;

  // ARN of the Channel.
  public arn?: string;

  // Destinations for channel. See Destinations for more details.
  public destinations?: Array<medialive_ChannelDestination>;

  // Specification of network and file inputs for the channel.
  public inputSpecification?: medialive_ChannelInputSpecification;

  // The log level to write to Cloudwatch logs.
  public logLevel?: string;

  // ID of the channel in MediaPackage that is the destination for this output group.
  public channelId?: string;

  // Input attachments for the channel. See Input Attachments for more details.
  public inputAttachments?: Array<medialive_ChannelInputAttachment>;

  // Settings for the VPC outputs. See VPC for more details.
  public vpc?: medialive_ChannelVpc;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "vpc",
        "Settings for the VPC outputs. See VPC for more details.",
        medialive_ChannelVpc_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cdiInputSpecification",
        "Specification of CDI inputs for this channel. See CDI Input Specification for more details.",
        medialive_ChannelCdiInputSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encoderSettings",
        "Encoder settings. See Encoder Settings for more details.",
        medialive_ChannelEncoderSettings_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Channel.\n\nThe following arguments are optional:",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "Concise argument description.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinations",
        "Destinations for channel. See Destinations for more details.",
        medialive_ChannelDestination_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "inputAttachments",
        "Input attachments for the channel. See Input Attachments for more details.",
        medialive_ChannelInputAttachment_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the channel. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "logLevel",
        "The log level to write to Cloudwatch logs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "channelClass",
        "Concise argument description.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maintenance",
        "Maintenance settings for this channel. See Maintenance for more details.",
        medialive_ChannelMaintenance_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "startChannel",
        "Whether to start/stop channel. Default: `false`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "inputSpecification",
        "Specification of network and file inputs for the channel.",
        medialive_ChannelInputSpecification_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
