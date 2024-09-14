import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_ClusterNodeConfigTaint {
  // Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.
  effect?: string;

  // Key for taint.
  key?: string;

  // Value for taint.
  value?: string;
}

export function container_ClusterNodeConfigTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "effect",
      "Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for taint.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value for taint.",
      () => [],
      true,
      false,
    ),
  ];
}
