import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn {
  //
  name?: string;

  //
  type?: string;
}

export function quicksight_getDataSetPhysicalTableMapRelationalTableInputColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
    new DynamicUIProps(InputType.String, "type", "", [], true, false),
  ];
}
