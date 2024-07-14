import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apigateway_ApiConfigIamBindingCondition {
  //
  expression?: string;

  //
  title?: string;

  //
  description?: string;
}

export function apigateway_ApiConfigIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "expression", "", [], true, true),
    new DynamicUIProps(InputType.String, "title", "", [], true, true),
    new DynamicUIProps(InputType.String, "description", "", [], false, true),
  ];
}
