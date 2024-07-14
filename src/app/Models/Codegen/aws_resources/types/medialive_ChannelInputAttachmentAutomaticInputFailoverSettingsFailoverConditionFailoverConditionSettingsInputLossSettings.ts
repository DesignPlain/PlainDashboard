import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings {
  // The amount of time (in milliseconds) that no input is detected. After that time, an input failover will occur.
  inputLossThresholdMsec?: number;
}

export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverConditionFailoverConditionSettingsInputLossSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "inputLossThresholdMsec",
      "The amount of time (in milliseconds) that no input is detected. After that time, an input failover will occur.",
      [],
      false,
      false,
    ),
  ];
}
