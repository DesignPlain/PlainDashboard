import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datazone_DomainSingleSignOn {
  //
  type?: string;

  //
  userAssignment?: string;
}

export function datazone_DomainSingleSignOn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "type", "", () => [], false, false),
    new DynamicUIProps(
      InputType.String,
      "userAssignment",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
