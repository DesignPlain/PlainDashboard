import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition,
  medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition_GetTypes,
} from "./medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition";

export interface medialive_ChannelInputAttachmentAutomaticInputFailoverSettings {
  // Input preference when deciding which input to make active when a previously failed input has recovered.
  inputPreference?: string;

  // The input ID of the secondary input in the automatic input failover pair.
  secondaryInputId?: string;

  // This clear time defines the requirement a recovered input must meet to be considered healthy. The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input\_preference for the failover pair is set to PRIMARY\_INPUT\_PREFERRED, because after this time, MediaLive will switch back to the primary input.
  errorClearTimeMsec?: number;

  // A list of failover conditions. If any of these conditions occur, MediaLive will perform a failover to the other input. See Failover Condition Block for more details.
  failoverConditions?: Array<medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition>;
}

export function medialive_ChannelInputAttachmentAutomaticInputFailoverSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "inputPreference",
      "Input preference when deciding which input to make active when a previously failed input has recovered.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secondaryInputId",
      "The input ID of the secondary input in the automatic input failover pair.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "errorClearTimeMsec",
      "This clear time defines the requirement a recovered input must meet to be considered healthy. The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input\\_preference for the failover pair is set to PRIMARY\\_INPUT\\_PREFERRED, because after this time, MediaLive will switch back to the primary input.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "failoverConditions",
      "A list of failover conditions. If any of these conditions occur, MediaLive will perform a failover to the other input. See Failover Condition Block for more details.",
      medialive_ChannelInputAttachmentAutomaticInputFailoverSettingsFailoverCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
