import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface efs_FileSystemLifecyclePolicy {
  // Indicates how long it takes to transition files to the archive storage class. Requires transition_to_ia, Elastic Throughput and General Purpose performance mode. Valid values: `AFTER_1_DAY`, `AFTER_7_DAYS`, `AFTER_14_DAYS`, `AFTER_30_DAYS`, `AFTER_60_DAYS`, `AFTER_90_DAYS`, `AFTER_180_DAYS`, `AFTER_270_DAYS`, or `AFTER_365_DAYS`.
  transitionToArchive?: string;

  // Indicates how long it takes to transition files to the IA storage class. Valid values: `AFTER_1_DAY`, `AFTER_7_DAYS`, `AFTER_14_DAYS`, `AFTER_30_DAYS`, `AFTER_60_DAYS`, `AFTER_90_DAYS`, `AFTER_180_DAYS`, `AFTER_270_DAYS`, or `AFTER_365_DAYS`.
  transitionToIa?: string;

  // Describes the policy used to transition a file from infequent access storage to primary storage. Valid values: `AFTER_1_ACCESS`.
  transitionToPrimaryStorageClass?: string;
}

export function efs_FileSystemLifecyclePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "transitionToArchive",
      "Indicates how long it takes to transition files to the archive storage class. Requires transition_to_ia, Elastic Throughput and General Purpose performance mode. Valid values: `AFTER_1_DAY`, `AFTER_7_DAYS`, `AFTER_14_DAYS`, `AFTER_30_DAYS`, `AFTER_60_DAYS`, `AFTER_90_DAYS`, `AFTER_180_DAYS`, `AFTER_270_DAYS`, or `AFTER_365_DAYS`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transitionToIa",
      "Indicates how long it takes to transition files to the IA storage class. Valid values: `AFTER_1_DAY`, `AFTER_7_DAYS`, `AFTER_14_DAYS`, `AFTER_30_DAYS`, `AFTER_60_DAYS`, `AFTER_90_DAYS`, `AFTER_180_DAYS`, `AFTER_270_DAYS`, or `AFTER_365_DAYS`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "transitionToPrimaryStorageClass",
      "Describes the policy used to transition a file from infequent access storage to primary storage. Valid values: `AFTER_1_ACCESS`.",
      () => [],
      false,
      false,
    ),
  ];
}
