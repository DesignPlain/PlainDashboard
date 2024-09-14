import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface eks_getNodeGroupTaint {
  // The effect of the taint.
  effect?: string;

  // The key of the taint.
  key?: string;

  // The value of the taint.
  value?: string;
}

export function eks_getNodeGroupTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "effect",
      "The effect of the taint.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key of the taint.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the taint.",
      () => [],
      true,
      false,
    ),
  ];
}
