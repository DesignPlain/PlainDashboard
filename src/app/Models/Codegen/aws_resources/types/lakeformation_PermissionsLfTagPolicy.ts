import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lakeformation_PermissionsLfTagPolicyExpression,
  lakeformation_PermissionsLfTagPolicyExpression_GetTypes,
} from "./lakeformation_PermissionsLfTagPolicyExpression";

export interface lakeformation_PermissionsLfTagPolicy {
  // The resource type for which the tag policy applies. Valid values are `DATABASE` and `TABLE`.
  resourceType?: string;

  // Identifier for the Data Catalog. By default, it is the account ID of the caller.
  catalogId?: string;

  /*
A list of tag conditions that apply to the resource's tag policy. Configuration block for tag conditions that apply to the policy. See `expression` below.

The following argument is optional:
*/
  expressions?: Array<lakeformation_PermissionsLfTagPolicyExpression>;
}

export function lakeformation_PermissionsLfTagPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "The resource type for which the tag policy applies. Valid values are `DATABASE` and `TABLE`.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog. By default, it is the account ID of the caller.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "expressions",
      "A list of tag conditions that apply to the resource's tag policy. Configuration block for tag conditions that apply to the policy. See `expression` below.\n\nThe following argument is optional:",
      lakeformation_PermissionsLfTagPolicyExpression_GetTypes(),
      true,
      false,
    ),
  ];
}
