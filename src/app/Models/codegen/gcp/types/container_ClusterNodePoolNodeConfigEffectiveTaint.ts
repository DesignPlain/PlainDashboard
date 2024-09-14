import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterNodePoolNodeConfigEffectiveTaint {
  // Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.
  effect?: string;

  // The default or custom node affinity label key name.
  key?: string;

  // Value for taint.
  value?: string;
}

export function container_ClusterNodePoolNodeConfigEffectiveTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The default or custom node affinity label key name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value for taint.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "effect",
      "Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.",
      () => [],
      false,
      false,
    ),
  ];
}
