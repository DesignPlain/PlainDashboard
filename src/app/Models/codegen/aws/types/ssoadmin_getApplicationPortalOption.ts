import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ssoadmin_getApplicationPortalOptionSignInOption,
  ssoadmin_getApplicationPortalOptionSignInOption_GetTypes,
} from "./ssoadmin_getApplicationPortalOptionSignInOption";

export interface ssoadmin_getApplicationPortalOption {
  //
  signInOptions?: Array<ssoadmin_getApplicationPortalOptionSignInOption>;

  //
  visibility?: string;
}

export function ssoadmin_getApplicationPortalOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "signInOptions",
      "",
      () => ssoadmin_getApplicationPortalOptionSignInOption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "visibility",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
