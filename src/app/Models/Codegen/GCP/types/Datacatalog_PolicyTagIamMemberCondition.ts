import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datacatalog_PolicyTagIamMemberCondition {
  //
  Expression?: string;

  //
  Title?: string;

  //
  Description?: string;
}

export function Datacatalog_PolicyTagIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
    new DynamicUIProps(InputType.String, "Description", "", [], false, true),
  ];
}
