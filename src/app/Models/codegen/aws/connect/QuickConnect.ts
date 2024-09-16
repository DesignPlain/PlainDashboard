import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_QuickConnectQuickConnectConfig,
  connect_QuickConnectQuickConnectConfig_GetTypes,
} from '../types/connect_QuickConnectQuickConnectConfig';

export interface QuickConnectArgs {
  // Specifies the description of the Quick Connect.
  description?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  instanceId?: string;

  // Specifies the name of the Quick Connect.
  name?: string;

  // A block that defines the configuration information for the Quick Connect: `quick_connect_type` and one of `phone_config`, `queue_config`, `user_config` . The Quick Connect Config block is documented below.
  quickConnectConfig?: connect_QuickConnectQuickConnectConfig;

  // Tags to apply to the Quick Connect. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class QuickConnect extends DS_Resource {
  // A block that defines the configuration information for the Quick Connect: `quick_connect_type` and one of `phone_config`, `queue_config`, `user_config` . The Quick Connect Config block is documented below.
  public quickConnectConfig?: connect_QuickConnectQuickConnectConfig;

  // The identifier for the Quick Connect.
  public quickConnectId?: string;

  // Tags to apply to the Quick Connect. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the Quick Connect.
  public arn?: string;

  // Specifies the description of the Quick Connect.
  public description?: string;

  // Specifies the identifier of the hosting Amazon Connect Instance.
  public instanceId?: string;

  // Specifies the name of the Quick Connect.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Specifies the description of the Quick Connect.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        'Specifies the identifier of the hosting Amazon Connect Instance.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Specifies the name of the Quick Connect.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'quickConnectConfig',
        'A block that defines the configuration information for the Quick Connect: `quick_connect_type` and one of `phone_config`, `queue_config`, `user_config` . The Quick Connect Config block is documented below.',
        () => connect_QuickConnectQuickConnectConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Tags to apply to the Quick Connect. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
