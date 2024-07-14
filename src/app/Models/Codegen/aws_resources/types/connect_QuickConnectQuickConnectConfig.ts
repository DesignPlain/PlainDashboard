import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  connect_QuickConnectQuickConnectConfigPhoneConfig,
  connect_QuickConnectQuickConnectConfigPhoneConfig_GetTypes,
} from "./connect_QuickConnectQuickConnectConfigPhoneConfig";
import {
  connect_QuickConnectQuickConnectConfigQueueConfig,
  connect_QuickConnectQuickConnectConfigQueueConfig_GetTypes,
} from "./connect_QuickConnectQuickConnectConfigQueueConfig";
import {
  connect_QuickConnectQuickConnectConfigUserConfig,
  connect_QuickConnectQuickConnectConfigUserConfig_GetTypes,
} from "./connect_QuickConnectQuickConnectConfigUserConfig";

export interface connect_QuickConnectQuickConnectConfig {
  // Specifies the user configuration of the Quick Connect. This is required only if `quick_connect_type` is `USER`. The `user_config` block is documented below.
  userConfigs?: Array<connect_QuickConnectQuickConnectConfigUserConfig>;

  // Specifies the phone configuration of the Quick Connect. This is required only if `quick_connect_type` is `PHONE_NUMBER`. The `phone_config` block is documented below.
  phoneConfigs?: Array<connect_QuickConnectQuickConnectConfigPhoneConfig>;

  // Specifies the queue configuration of the Quick Connect. This is required only if `quick_connect_type` is `QUEUE`. The `queue_config` block is documented below.
  queueConfigs?: Array<connect_QuickConnectQuickConnectConfigQueueConfig>;

  // Specifies the configuration type of the quick connect. valid values are `PHONE_NUMBER`, `QUEUE`, `USER`.
  quickConnectType?: string;
}

export function connect_QuickConnectQuickConnectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "userConfigs",
      "Specifies the user configuration of the Quick Connect. This is required only if `quick_connect_type` is `USER`. The `user_config` block is documented below.",
      connect_QuickConnectQuickConnectConfigUserConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "phoneConfigs",
      "Specifies the phone configuration of the Quick Connect. This is required only if `quick_connect_type` is `PHONE_NUMBER`. The `phone_config` block is documented below.",
      connect_QuickConnectQuickConnectConfigPhoneConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queueConfigs",
      "Specifies the queue configuration of the Quick Connect. This is required only if `quick_connect_type` is `QUEUE`. The `queue_config` block is documented below.",
      connect_QuickConnectQuickConnectConfigQueueConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "quickConnectType",
      "Specifies the configuration type of the quick connect. valid values are `PHONE_NUMBER`, `QUEUE`, `USER`.",
      [],
      true,
      false,
    ),
  ];
}
