import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate,
  medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate_GetTypes,
} from "./medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate";

export interface medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior {
  //
  inputLossImageColor?: string;

  //
  inputLossImageSlate?: medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate;

  //
  inputLossImageType?: string;

  //
  repeatFrameMsec?: number;

  //
  blackFrameMsec?: number;
}

export function medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehavior_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "inputLossImageColor",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inputLossImageSlate",
      "",
      medialive_ChannelEncoderSettingsGlobalConfigurationInputLossBehaviorInputLossImageSlate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputLossImageType",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "repeatFrameMsec",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "blackFrameMsec",
      "",
      [],
      false,
      false,
    ),
  ];
}
