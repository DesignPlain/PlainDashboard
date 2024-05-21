import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterNodeConfigEffectiveTaint {
  // Value for taint.
  value?: string;

  // Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.
  effect?: string;

  // The default or custom node affinity label key name.
  key?: string;
}

export function container_ClusterNodeConfigEffectiveTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value for taint.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "effect",
      "Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The default or custom node affinity label key name.",
      [],
      false,
      false,
    ),
  ];
}
