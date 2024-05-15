import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Iam_AccessBoundaryPolicyRule,
  Iam_AccessBoundaryPolicyRule_GetTypes,
} from "../types/Iam_AccessBoundaryPolicyRule";

export interface AccessBoundaryPolicyArgs {
  /*
Rules to be applied.
Structure is documented below.
*/
  Rules?: Array<Iam_AccessBoundaryPolicyRule>;

  // The display name of the rule.
  DisplayName?: string;

  // The name of the policy.
  Name?: string;

  // The attachment point is identified by its URL-encoded full resource name.
  Parent?: string;
}
export class AccessBoundaryPolicy extends Resource {
  // The name of the policy.
  public Name?: string;

  // The attachment point is identified by its URL-encoded full resource name.
  public Parent?: string;

  /*
Rules to be applied.
Structure is documented below.
*/
  public Rules?: Array<Iam_AccessBoundaryPolicyRule>;

  // The display name of the rule.
  public DisplayName?: string;

  // The hash of the resource. Used internally during updates.
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "Rules",
        "Rules to be applied.\nStructure is documented below.",
        Iam_AccessBoundaryPolicyRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the rule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the policy.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The attachment point is identified by its URL-encoded full resource name.",
        [],
        true,
        true,
      ),
    ];
  }
}
