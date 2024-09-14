import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lakeformation_PermissionsLfTagPolicyExpression,
  lakeformation_PermissionsLfTagPolicyExpression_GetTypes,
} from "./lakeformation_PermissionsLfTagPolicyExpression";

export interface lakeformation_PermissionsLfTagPolicy {
  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  /*
A list of tag conditions that apply to the resource's tag policy. Configuration block for tag conditions that apply to the policy. See `expression` below.

The following argument is optional:
*/
  expressions?: Array<lakeformation_PermissionsLfTagPolicyExpression>;

  // The resource type for which the tag policy applies. Valid values are `DATABASE` and `TABLE`.
  resourceType?: string;
}

export function lakeformation_PermissionsLfTagPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "expressions",
      "A list of tag conditions that apply to the resource's tag policy. Configuration block for tag conditions that apply to the policy. See `expression` below.\n\nThe following argument is optional:",
      () => lakeformation_PermissionsLfTagPolicyExpression_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "The resource type for which the tag policy applies. Valid values are `DATABASE` and `TABLE`.",
      () => [],
      true,
      true,
    ),
  ];
}
