import { AccessLevelsAccessLevelBasicCondition } from "./AccessLevelsAccessLevelBasicCondition";

export interface AccessLevelsAccessLevelBasic {
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
  Conditions?: Array<AccessLevelsAccessLevelBasicCondition>;
}
