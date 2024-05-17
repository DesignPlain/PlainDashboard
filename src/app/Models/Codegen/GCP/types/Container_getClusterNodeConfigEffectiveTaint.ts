import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodeConfigEffectiveTaint {
  // Effect for taint.
  Effect?: string;

  // Key for taint.
  Key?: string;

  // Value for taint.
  Value?: string;
}

export function Container_getClusterNodeConfigEffectiveTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Effect",
      "Effect for taint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Key for taint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Value for taint.",
      [],
      true,
      false,
    ),
  ];
}
