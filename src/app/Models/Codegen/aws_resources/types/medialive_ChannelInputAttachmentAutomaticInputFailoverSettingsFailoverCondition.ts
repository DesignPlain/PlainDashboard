import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings,
  medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings_GetTypes,
} from "./medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings";

export interface medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition {
  // Failover condition type-specific settings. See Failover Condition Settings for more details.
  failoverConditionSettings?: medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings;
}

export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "failoverConditionSettings",
      "Failover condition type-specific settings. See Failover Condition Settings for more details.",
      medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
