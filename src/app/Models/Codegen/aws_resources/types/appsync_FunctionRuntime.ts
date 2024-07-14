import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appsync_FunctionRuntime {
  // The name of the runtime to use. Currently, the only allowed value is `APPSYNC_JS`.
  name?: string;

  // The version of the runtime to use. Currently, the only allowed version is `1.0.0`.
  runtimeVersion?: string;
}

export function appsync_FunctionRuntime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the runtime to use. Currently, the only allowed value is `APPSYNC_JS`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "runtimeVersion",
      "The version of the runtime to use. Currently, the only allowed version is `1.0.0`.",
      [],
      true,
      false,
    ),
  ];
}
