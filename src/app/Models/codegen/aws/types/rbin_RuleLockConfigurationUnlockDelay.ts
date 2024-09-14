import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface rbin_RuleLockConfigurationUnlockDelay {
  // The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days.
  unlockDelayUnit?: string;

  // The unlock delay period, measured in the unit specified for UnlockDelayUnit.
  unlockDelayValue?: number;
}

export function rbin_RuleLockConfigurationUnlockDelay_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "unlockDelayUnit",
      "The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "unlockDelayValue",
      "The unlock delay period, measured in the unit specified for UnlockDelayUnit.",
      () => [],
      true,
      false,
    ),
  ];
}
