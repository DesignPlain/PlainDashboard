import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lakeformation_getPermissionsLfTagPolicyExpression,
  lakeformation_getPermissionsLfTagPolicyExpression_GetTypes,
} from "./lakeformation_getPermissionsLfTagPolicyExpression";

export interface lakeformation_getPermissionsLfTagPolicy {
  // Resource type for which the tag policy applies. Valid values are `DATABASE` and `TABLE`.
  resourceType?: string;

  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  /*
List of tag conditions that apply to the resource's tag policy. Configuration block for tag conditions that apply to the policy. See `expression` below.

The following argument is optional:
*/
  expressions?: Array<lakeformation_getPermissionsLfTagPolicyExpression>;
}

export function lakeformation_getPermissionsLfTagPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "Resource type for which the tag policy applies. Valid values are `DATABASE` and `TABLE`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "expressions",
      "List of tag conditions that apply to the resource's tag policy. Configuration block for tag conditions that apply to the policy. See `expression` below.\n\nThe following argument is optional:",
      () => lakeformation_getPermissionsLfTagPolicyExpression_GetTypes(),
      true,
      false,
    ),
  ];
}
