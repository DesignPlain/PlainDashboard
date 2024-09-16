import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings,
  medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings_GetTypes,
} from './medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings';

export interface medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition {
  // Failover condition type-specific settings. See Failover Condition Settings for more details.
  failoverConditionSettings?: medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings;
}

export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'failoverConditionSettings',
      'Failover condition type-specific settings. See Failover Condition Settings for more details.',
      () =>
        medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
