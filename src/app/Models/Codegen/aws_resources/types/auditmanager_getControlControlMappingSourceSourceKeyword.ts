import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface auditmanager_getControlControlMappingSourceSourceKeyword {
  //
  keywordInputType?: string;

  //
  keywordValue?: string;
}

export function auditmanager_getControlControlMappingSourceSourceKeyword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keywordInputType",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "keywordValue", "", [], true, false),
  ];
}
