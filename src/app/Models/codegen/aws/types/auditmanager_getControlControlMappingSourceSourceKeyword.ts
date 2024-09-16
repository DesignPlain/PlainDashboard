import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface auditmanager_getControlControlMappingSourceSourceKeyword {
  //
  keywordValue?: string;

  //
  keywordInputType?: string;
}

export function auditmanager_getControlControlMappingSourceSourceKeyword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'keywordValue',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keywordInputType',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
