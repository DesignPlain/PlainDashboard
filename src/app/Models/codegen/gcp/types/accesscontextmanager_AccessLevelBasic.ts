import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_AccessLevelBasicCondition,
  accesscontextmanager_AccessLevelBasicCondition_GetTypes,
} from "./accesscontextmanager_AccessLevelBasicCondition";

export interface accesscontextmanager_AccessLevelBasic {
  /*
How the conditions list should be combined to determine if a request
is granted this AccessLevel. If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied.
Default value is `AND`.
Possible values are: `AND`, `OR`.
*/
  combiningFunction?: string;

  /*
A set of requirements for the AccessLevel to be granted.
Structure is documented below.
*/
  conditions?: Array<accesscontextmanager_AccessLevelBasicCondition>;
}

export function accesscontextmanager_AccessLevelBasic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "combiningFunction",
      "How the conditions list should be combined to determine if a request\nis granted this AccessLevel. If AND is used, each Condition in\nconditions must be satisfied for the AccessLevel to be applied. If\nOR is used, at least one Condition in conditions must be satisfied\nfor the AccessLevel to be applied.\nDefault value is `AND`.\nPossible values are: `AND`, `OR`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "conditions",
      "A set of requirements for the AccessLevel to be granted.\nStructure is documented below.",
      () => accesscontextmanager_AccessLevelBasicCondition_GetTypes(),
      true,
      false,
    ),
  ];
}
