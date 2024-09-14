import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rbin_RuleLockConfigurationUnlockDelay,
  rbin_RuleLockConfigurationUnlockDelay_GetTypes,
} from "./rbin_RuleLockConfigurationUnlockDelay";

export interface rbin_RuleLockConfiguration {
  // Information about the retention rule unlock delay. See `unlock_delay` below.
  unlockDelay?: rbin_RuleLockConfigurationUnlockDelay;
}

export function rbin_RuleLockConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "unlockDelay",
      "Information about the retention rule unlock delay. See `unlock_delay` below.",
      () => rbin_RuleLockConfigurationUnlockDelay_GetTypes(),
      true,
      false,
    ),
  ];
}
