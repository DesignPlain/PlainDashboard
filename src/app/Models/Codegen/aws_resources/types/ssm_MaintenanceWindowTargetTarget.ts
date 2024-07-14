import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ssm_MaintenanceWindowTargetTarget {
  //
  key?: string;

  //
  values?: Array<string>;
}

export function ssm_MaintenanceWindowTargetTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "key", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
