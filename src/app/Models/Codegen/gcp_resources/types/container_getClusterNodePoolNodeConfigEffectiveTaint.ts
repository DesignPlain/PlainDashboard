import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterNodePoolNodeConfigEffectiveTaint {
  // Key for taint.
  key?: string;

  // Value for taint.
  value?: string;

  // Effect for taint.
  effect?: string;
}

export function container_getClusterNodePoolNodeConfigEffectiveTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for taint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value for taint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "effect",
      "Effect for taint.",
      [],
      true,
      false,
    ),
  ];
}
