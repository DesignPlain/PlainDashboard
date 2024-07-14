import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription {
  //
  text?: string;
}

export function quicksight_getDataSetLogicalTableMapDataTransformTagColumnOperationTagColumnDescription_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "text", "", [], true, false)];
}
