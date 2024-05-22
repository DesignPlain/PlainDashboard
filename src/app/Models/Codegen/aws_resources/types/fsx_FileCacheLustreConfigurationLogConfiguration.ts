import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface fsx_FileCacheLustreConfigurationLogConfiguration {
  //
  destination?: string;

  //
  level?: string;
}

export function fsx_FileCacheLustreConfigurationLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "level", "", [], false, false),
    new DynamicUIProps(InputType.String, "destination", "", [], false, false),
  ];
}
