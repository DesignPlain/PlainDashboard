import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  connect_getQuickConnectQuickConnectConfigPhoneConfig,
  connect_getQuickConnectQuickConnectConfigPhoneConfig_GetTypes,
} from './connect_getQuickConnectQuickConnectConfigPhoneConfig';
import {
  connect_getQuickConnectQuickConnectConfigQueueConfig,
  connect_getQuickConnectQuickConnectConfigQueueConfig_GetTypes,
} from './connect_getQuickConnectQuickConnectConfigQueueConfig';
import {
  connect_getQuickConnectQuickConnectConfigUserConfig,
  connect_getQuickConnectQuickConnectConfigUserConfig_GetTypes,
} from './connect_getQuickConnectQuickConnectConfigUserConfig';

export interface connect_getQuickConnectQuickConnectConfig {
  // Phone configuration of the Quick Connect. This is returned only if `quick_connect_type` is `PHONE_NUMBER`. The `phone_config` block is documented below.
  phoneConfigs?: Array<connect_getQuickConnectQuickConnectConfigPhoneConfig>;

  // Queue configuration of the Quick Connect. This is returned only if `quick_connect_type` is `QUEUE`. The `queue_config` block is documented below.
  queueConfigs?: Array<connect_getQuickConnectQuickConnectConfigQueueConfig>;

  // Configuration type of the Quick Connect. Valid values are `PHONE_NUMBER`, `QUEUE`, `USER`.
  quickConnectType?: string;

  // User configuration of the Quick Connect. This is returned only if `quick_connect_type` is `USER`. The `user_config` block is documented below.
  userConfigs?: Array<connect_getQuickConnectQuickConnectConfigUserConfig>;
}

export function connect_getQuickConnectQuickConnectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'queueConfigs',
      'Queue configuration of the Quick Connect. This is returned only if `quick_connect_type` is `QUEUE`. The `queue_config` block is documented below.',
      () => connect_getQuickConnectQuickConnectConfigQueueConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'quickConnectType',
      'Configuration type of the Quick Connect. Valid values are `PHONE_NUMBER`, `QUEUE`, `USER`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'userConfigs',
      'User configuration of the Quick Connect. This is returned only if `quick_connect_type` is `USER`. The `user_config` block is documented below.',
      () => connect_getQuickConnectQuickConnectConfigUserConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'phoneConfigs',
      'Phone configuration of the Quick Connect. This is returned only if `quick_connect_type` is `PHONE_NUMBER`. The `phone_config` block is documented below.',
      () => connect_getQuickConnectQuickConnectConfigPhoneConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
