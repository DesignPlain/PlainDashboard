import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mwaa_EnvironmentLastUpdatedError {
  //
  errorCode?: string;

  //
  errorMessage?: string;
}

export function mwaa_EnvironmentLastUpdatedError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "errorCode",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "errorMessage",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
