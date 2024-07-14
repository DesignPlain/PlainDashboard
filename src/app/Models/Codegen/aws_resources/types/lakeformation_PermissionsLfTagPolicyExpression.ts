import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lakeformation_PermissionsLfTagPolicyExpression {
  // The key-name of an LF-Tag.
  key?: string;

  // A list of possible values of an LF-Tag.
  values?: Array<string>;
}

export function lakeformation_PermissionsLfTagPolicyExpression_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key-name of an LF-Tag.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "A list of possible values of an LF-Tag.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
