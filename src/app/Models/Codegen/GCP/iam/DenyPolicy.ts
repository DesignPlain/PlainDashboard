import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DenyPolicyRule } from "../types/DenyPolicyRule";

export interface DenyPolicyArgs {
  // The display name of the rule.
  DisplayName?: string;

  // The name of the policy.
  Name?: string;

  // The attachment point is identified by its URL-encoded full resource name.
  Parent?: string;

  /*
Rules to be applied.
Structure is documented below.
*/
  Rules?: Array<DenyPolicyRule>;
}
export class DenyPolicy extends Resource {
  // The display name of the rule.
  public DisplayName?: string;

  // The hash of the resource. Used internally during updates.
  public Etag?: string;

  // The name of the policy.
  public Name?: string;

  // The attachment point is identified by its URL-encoded full resource name.
  public Parent?: string;

  /*
Rules to be applied.
Structure is documented below.
*/
  public Rules?: Array<DenyPolicyRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "Rules",
        "Rules to be applied.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name of the rule.",
      ),
      new DynamicUIProps(InputType.String, "Name", "The name of the policy."),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The attachment point is identified by its URL-encoded full resource name.",
      ),
    ];
  }
}
