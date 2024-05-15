import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelsAccessLevelBasicCondition,
  Accesscontextmanager_AccessLevelsAccessLevelBasicCondition_GetTypes,
} from "./Accesscontextmanager_AccessLevelsAccessLevelBasicCondition";

export interface Accesscontextmanager_AccessLevelsAccessLevelBasic {
  /*
How the conditions list should be combined to determine if a request
is granted this AccessLevel. If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied.
Default value is `AND`.
Possible values are: `AND`, `OR`.
*/
  CombiningFunction?: string;

  /*
A set of requirements for the AccessLevel to be granted.
Structure is documented below.
*/
  Conditions?: Array<Accesscontextmanager_AccessLevelsAccessLevelBasicCondition>;
}

export function Accesscontextmanager_AccessLevelsAccessLevelBasic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Conditions",
      "A set of requirements for the AccessLevel to be granted.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelsAccessLevelBasicCondition_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CombiningFunction",
      "How the conditions list should be combined to determine if a request\nis granted this AccessLevel. If AND is used, each Condition in\nconditions must be satisfied for the AccessLevel to be applied. If\nOR is used, at least one Condition in conditions must be satisfied\nfor the AccessLevel to be applied.\nDefault value is `AND`.\nPossible values are: `AND`, `OR`.",
      [],
      false,
      false,
    ),
  ];
}
