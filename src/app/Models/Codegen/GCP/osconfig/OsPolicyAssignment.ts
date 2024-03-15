import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { OsPolicyAssignmentInstanceFilter } from "../types/OsPolicyAssignmentInstanceFilter";
import { OsPolicyAssignmentOsPolicy } from "../types/OsPolicyAssignmentOsPolicy";
import { OsPolicyAssignmentRollout } from "../types/OsPolicyAssignmentRollout";

export interface OsPolicyAssignmentArgs {
  // The location for the resource
  Location?: string;

  // Resource name.
  Name?: string;

  /*
List of OS policies to be applied to the VMs.
Structure is documented below.
*/
  OsPolicies?: Array<OsPolicyAssignmentOsPolicy>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Rollout to deploy the OS policy assignment. A rollout
is triggered in the following situations: 1) OSPolicyAssignment is created.
2) OSPolicyAssignment is updated and the update contains changes to one of
the following fields: - instance_filter - os_policies 3) OSPolicyAssignment
is deleted. Structure is documented below.
*/
  Rollout?: OsPolicyAssignmentRollout;

  /*
Set to true to skip awaiting rollout
during resource creation and update.
*/
  SkipAwaitRollout?: boolean;

  /*
OS policy assignment description. Length of the
description is limited to 1024 characters.
*/
  Description?: string;

  /*
Filter to select VMs. Structure is
documented below.
*/
  InstanceFilter?: OsPolicyAssignmentInstanceFilter;
}
export class OsPolicyAssignment extends Resource {
  /*
Output only. Indicates that this revision deletes the OS policy
assignment.
*/
  public Deleted?: boolean;

  /*
The etag for this OS policy assignment. If this is provided on
update, it must match the server's etag.
*/
  public Etag?: string;

  // The location for the resource
  public Location?: string;

  /*
Output only. Indicates that reconciliation is in progress
for the revision. This value is `true` when the `rollout_state` is one of:
*/
  public Reconciling?: boolean;

  /*
Output only. Server generated unique id for the OS policy assignment
resource.
*/
  public Uid?: string;

  /*
List of OS policies to be applied to the VMs.
Structure is documented below.
*/
  public OsPolicies?: Array<OsPolicyAssignmentOsPolicy>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Output only. OS policy assignment rollout state
  public RolloutState?: string;

  /*
Set to true to skip awaiting rollout
during resource creation and update.
*/
  public SkipAwaitRollout?: boolean;

  /*
OS policy assignment description. Length of the
description is limited to 1024 characters.
*/
  public Description?: string;

  /*
Filter to select VMs. Structure is
documented below.
*/
  public InstanceFilter?: OsPolicyAssignmentInstanceFilter;

  /*
Rollout to deploy the OS policy assignment. A rollout
is triggered in the following situations: 1) OSPolicyAssignment is created.
2) OSPolicyAssignment is updated and the update contains changes to one of
the following fields: - instance_filter - os_policies 3) OSPolicyAssignment
is deleted. Structure is documented below.
*/
  public Rollout?: OsPolicyAssignmentRollout;

  /*
Output only. Indicates that this revision has been successfully
rolled out in this zone and new VMs will be assigned OS policies from this
revision. For a given OS policy assignment, there is only one revision with
a value of `true` for this field.
*/
  public Baseline?: boolean;

  // Resource name.
  public Name?: string;

  /*
Output only. The timestamp that the revision was
created.
*/
  public RevisionCreateTime?: string;

  /*
Output only. The assignment revision ID A new revision is
committed whenever a rollout is triggered for a OS policy assignment
*/
  public RevisionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Rollout",
        "Rollout to deploy the OS policy assignment. A rollout\nis triggered in the following situations: 1) OSPolicyAssignment is created.\n2) OSPolicyAssignment is updated and the update contains changes to one of\nthe following fields: - instance_filter - os_policies 3) OSPolicyAssignment\nis deleted. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "SkipAwaitRollout",
        "Set to true to skip awaiting rollout\nduring resource creation and update.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "OS policy assignment description. Length of the\ndescription is limited to 1024 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceFilter",
        "Filter to select VMs. Structure is\ndocumented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(InputType.String, "Name", "Resource name."),
      new DynamicUIProps(
        InputType.DropDown,
        "OsPolicies",
        "List of OS policies to be applied to the VMs.\nStructure is documented below.",
      ),
    ];
  }
}
