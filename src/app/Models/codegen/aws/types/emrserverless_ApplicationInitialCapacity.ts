import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emrserverless_ApplicationInitialCapacityInitialCapacityConfig,
  emrserverless_ApplicationInitialCapacityInitialCapacityConfig_GetTypes,
} from "./emrserverless_ApplicationInitialCapacityInitialCapacityConfig";

export interface emrserverless_ApplicationInitialCapacity {
  // The worker type for an analytics framework. For Spark applications, the key can either be set to `Driver` or `Executor`. For Hive applications, it can be set to `HiveDriver` or `TezTask`.
  initialCapacityType?: string;

  // The initial capacity configuration per worker.
  initialCapacityConfig?: emrserverless_ApplicationInitialCapacityInitialCapacityConfig;
}

export function emrserverless_ApplicationInitialCapacity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "initialCapacityType",
      "The worker type for an analytics framework. For Spark applications, the key can either be set to `Driver` or `Executor`. For Hive applications, it can be set to `HiveDriver` or `TezTask`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "initialCapacityConfig",
      "The initial capacity configuration per worker.",
      () =>
        emrserverless_ApplicationInitialCapacityInitialCapacityConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
