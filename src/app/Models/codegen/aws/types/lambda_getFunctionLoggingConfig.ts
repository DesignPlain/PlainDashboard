import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lambda_getFunctionLoggingConfig {
  //
  logGroup?: string;

  //
  systemLogLevel?: string;

  //
  applicationLogLevel?: string;

  //
  logFormat?: string;
}

export function lambda_getFunctionLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "applicationLogLevel",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "logFormat",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "logGroup", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "systemLogLevel",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
