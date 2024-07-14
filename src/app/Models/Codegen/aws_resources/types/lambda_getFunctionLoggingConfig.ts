import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_getFunctionLoggingConfig {
  //
  applicationLogLevel?: string;

  //
  logFormat?: string;

  //
  logGroup?: string;

  //
  systemLogLevel?: string;
}

export function lambda_getFunctionLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "systemLogLevel", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "applicationLogLevel",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "logFormat", "", [], true, false),
    new DynamicUIProps(InputType.String, "logGroup", "", [], true, false),
  ];
}
