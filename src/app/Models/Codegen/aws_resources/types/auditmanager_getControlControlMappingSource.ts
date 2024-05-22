import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  auditmanager_getControlControlMappingSourceSourceKeyword,
  auditmanager_getControlControlMappingSourceSourceKeyword_GetTypes,
} from "./auditmanager_getControlControlMappingSourceSourceKeyword";

export interface auditmanager_getControlControlMappingSource {
  //
  sourceKeyword?: auditmanager_getControlControlMappingSourceSourceKeyword;

  //
  sourceName?: string;

  //
  sourceSetUpOption?: string;

  //
  sourceType?: string;

  //
  troubleshootingText?: string;

  //
  sourceDescription?: string;

  //
  sourceFrequency?: string;

  //
  sourceId?: string;
}

export function auditmanager_getControlControlMappingSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "sourceType", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "troubleshootingText",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceDescription",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceFrequency",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "sourceId", "", [], true, false),
    new DynamicUIProps(
      InputType.Object,
      "sourceKeyword",
      "",
      auditmanager_getControlControlMappingSourceSourceKeyword_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "sourceName", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "sourceSetUpOption",
      "",
      [],
      true,
      false,
    ),
  ];
}
