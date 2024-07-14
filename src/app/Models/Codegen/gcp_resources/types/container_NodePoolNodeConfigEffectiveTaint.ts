import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_NodePoolNodeConfigEffectiveTaint {
  // Effect for taint.
  effect?: string;

  // Key for taint.
  key?: string;

  // Value for taint.
  value?: string;
}

export function container_NodePoolNodeConfigEffectiveTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "effect",
      "Effect for taint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for taint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value for taint.",
      [],
      false,
      false,
    ),
  ];
}
