import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securitycenter_SourceIamBindingCondition {
  //
  Title?: string;

  // The description of the source (max of 1024 characters).
  Description?: string;

  //
  Expression?: string;
}

export function Securitycenter_SourceIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "The description of the source (max of 1024 characters).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
  ];
}
