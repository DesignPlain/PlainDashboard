import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy,
  Compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes,
} from "./Compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy";
import {
  Compute_ResourcePolicySnapshotSchedulePolicySchedule,
  Compute_ResourcePolicySnapshotSchedulePolicySchedule_GetTypes,
} from "./Compute_ResourcePolicySnapshotSchedulePolicySchedule";
import {
  Compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties,
  Compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties_GetTypes,
} from "./Compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties";

export interface Compute_ResourcePolicySnapshotSchedulePolicy {
  /*
Retention policy applied to snapshots created by this resource policy.
Structure is documented below.
*/
  RetentionPolicy?: Compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy;

  /*
Contains one of an `hourlySchedule`, `dailySchedule`, or `weeklySchedule`.
Structure is documented below.
*/
  Schedule?: Compute_ResourcePolicySnapshotSchedulePolicySchedule;

  /*
Properties with which the snapshots are created, such as labels.
Structure is documented below.
*/
  SnapshotProperties?: Compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties;
}

export function Compute_ResourcePolicySnapshotSchedulePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "RetentionPolicy",
      "Retention policy applied to snapshots created by this resource policy.\nStructure is documented below.",
      Compute_ResourcePolicySnapshotSchedulePolicyRetentionPolicy_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Schedule",
      "Contains one of an `hourlySchedule`, `dailySchedule`, or `weeklySchedule`.\nStructure is documented below.",
      Compute_ResourcePolicySnapshotSchedulePolicySchedule_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "SnapshotProperties",
      "Properties with which the snapshots are created, such as labels.\nStructure is documented below.",
      Compute_ResourcePolicySnapshotSchedulePolicySnapshotProperties_GetTypes(),
      false,
      true,
    ),
  ];
}
