import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VoiceConnectorArgs {
  // The AWS Region in which the Amazon Chime Voice Connector is created. Default value: `us-east-1`
  awsRegion?: string;

  // The name of the Amazon Chime Voice Connector.
  name?: string;

  /*
When enabled, requires encryption for the Amazon Chime Voice Connector.

The following arguments are optional:
*/
  requireEncryption?: boolean;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VoiceConnector extends DS_Resource {
  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN (Amazon Resource Name) of the Amazon Chime Voice Connector.
  public arn?: string;

  // The AWS Region in which the Amazon Chime Voice Connector is created. Default value: `us-east-1`
  public awsRegion?: string;

  // The name of the Amazon Chime Voice Connector.
  public name?: string;

  // The outbound host name for the Amazon Chime Voice Connector.
  public outboundHostName?: string;

  /*
When enabled, requires encryption for the Amazon Chime Voice Connector.

The following arguments are optional:
*/
  public requireEncryption?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'awsRegion',
        'The AWS Region in which the Amazon Chime Voice Connector is created. Default value: `us-east-1`',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the Amazon Chime Voice Connector.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'requireEncryption',
        'When enabled, requires encryption for the Amazon Chime Voice Connector.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
