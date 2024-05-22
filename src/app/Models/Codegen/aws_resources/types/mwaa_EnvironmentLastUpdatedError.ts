import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mwaa_EnvironmentLastUpdatedError {
  //
  errorCode?: string;

  //
  errorMessage?: string;
}

export function mwaa_EnvironmentLastUpdatedError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "errorCode", "", [], false, false),
    new DynamicUIProps(InputType.String, "errorMessage", "", [], false, false),
  ];
}
