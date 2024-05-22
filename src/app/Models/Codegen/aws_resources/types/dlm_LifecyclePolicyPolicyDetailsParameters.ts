import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dlm_LifecyclePolicyPolicyDetailsParameters {
  // Indicates whether to exclude the root volume from snapshots created using CreateSnapshots. The default is `false`.
  excludeBootVolume?: boolean;

  // Applies to AMI lifecycle policies only. Indicates whether targeted instances are rebooted when the lifecycle policy runs. `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs. The default is `true` (instances are not rebooted).
  noReboot?: boolean;
}

export function dlm_LifecyclePolicyPolicyDetailsParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "excludeBootVolume",
      "Indicates whether to exclude the root volume from snapshots created using CreateSnapshots. The default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "noReboot",
      "Applies to AMI lifecycle policies only. Indicates whether targeted instances are rebooted when the lifecycle policy runs. `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs. The default is `true` (instances are not rebooted).",
      [],
      false,
      false,
    ),
  ];
}
