import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface organizations_PolicyRestorePolicy {
  // May only be set to true. If set, then the default Policy is restored.
  default?: boolean;
}

export function organizations_PolicyRestorePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "default",
      "May only be set to true. If set, then the default Policy is restored.",
      () => [],
      true,
      false,
    ),
  ];
}
