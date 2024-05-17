import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_BareMetalNodePoolNodePoolConfigTaint {
  // Value associated with the effect.
  Value?: string;

  /*
Specifies the nodes operating system (default: LINUX).
Possible values are: `EFFECT_UNSPECIFIED`, `PREFER_NO_SCHEDULE`, `NO_EXECUTE`.

- - -
*/
  Effect?: string;

  // Key associated with the effect.
  Key?: string;
}

export function Gkeonprem_BareMetalNodePoolNodePoolConfigTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Value associated with the effect.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Effect",
      "Specifies the nodes operating system (default: LINUX).\nPossible values are: `EFFECT_UNSPECIFIED`, `PREFER_NO_SCHEDULE`, `NO_EXECUTE`.\n\n- - -",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Key associated with the effect.",
      [],
      false,
      false,
    ),
  ];
}
