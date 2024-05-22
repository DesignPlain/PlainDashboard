import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface redshiftdata_StatementParameter {
  //
  name?: string;

  //
  value?: string;
}

export function redshiftdata_StatementParameter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", [], true, true),
    new DynamicUIProps(InputType.String, "value", "", [], true, true),
  ];
}
