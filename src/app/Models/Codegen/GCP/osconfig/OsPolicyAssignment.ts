import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Osconfig_OsPolicyAssignmentOsPolicy,
  Osconfig_OsPolicyAssignmentOsPolicy_GetTypes,
} from "../types/Osconfig_OsPolicyAssignmentOsPolicy";
import {
  Osconfig_OsPolicyAssignmentRollout,
  Osconfig_OsPolicyAssignmentRollout_GetTypes,
} from "../types/Osconfig_OsPolicyAssignmentRollout";
import {
  Osconfig_OsPolicyAssignmentInstanceFilter,
  Osconfig_OsPolicyAssignmentInstanceFilter_GetTypes,
} from "../types/Osconfig_OsPolicyAssignmentInstanceFilter";

export interface OsPolicyAssignmentArgs {
  /*
List of OS policies to be applied to the VMs.
Structure is documented below.
*/
  OsPolicies?: Array<Osconfig_OsPolicyAssignmentOsPolicy>;

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
  Rollout?: Osconfig_OsPolicyAssignmentRollout;

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
  InstanceFilter?: Osconfig_OsPolicyAssignmentInstanceFilter;

  // The location for the resource
  Location?: string;

  // Resource name.
  Name?: string;
}
export class OsPolicyAssignment extends Resource {
  /*
Output only. Indicates that reconciliation is in progress
for the revision. This value is `true` when the `rollout_state` is one of:
*/
  public Reconciling?: boolean;

  /*
Output only. The timestamp that the revision was
created.
*/
  public RevisionCreateTime?: string;

  /*
OS policy assignment description. Length of the
description is limited to 1024 characters.
*/
  public Description?: string;

  // The location for the resource
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Output only. Server generated unique id for the OS policy assignment
resource.
*/
  public Uid?: string;

  /*
Output only. Indicates that this revision deletes the OS policy
assignment.
*/
  public Deleted?: boolean;

  /*
List of OS policies to be applied to the VMs.
Structure is documented below.
*/
  public OsPolicies?: Array<Osconfig_OsPolicyAssignmentOsPolicy>;

  /*
The etag for this OS policy assignment. If this is provided on
update, it must match the server's etag.
*/
  public Etag?: string;

  /*
Set to true to skip awaiting rollout
during resource creation and update.
*/
  public SkipAwaitRollout?: boolean;

  // Resource name.
  public Name?: string;

  /*
Output only. The assignment revision ID A new revision is
committed whenever a rollout is triggered for a OS policy assignment
*/
  public RevisionId?: string;

  /*
Rollout to deploy the OS policy assignment. A rollout
is triggered in the following situations: 1) OSPolicyAssignment is created.
2) OSPolicyAssignment is updated and the update contains changes to one of
the following fields: - instance_filter - os_policies 3) OSPolicyAssignment
is deleted. Structure is documented below.
*/
  public Rollout?: Osconfig_OsPolicyAssignmentRollout;

  // Output only. OS policy assignment rollout state
  public RolloutState?: string;

  /*
Output only. Indicates that this revision has been successfully
rolled out in this zone and new VMs will be assigned OS policies from this
revision. For a given OS policy assignment, there is only one revision with
a value of `true` for this field.
*/
  public Baseline?: boolean;

  /*
Filter to select VMs. Structure is
documented below.
*/
  public InstanceFilter?: Osconfig_OsPolicyAssignmentInstanceFilter;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "InstanceFilter",
        "Filter to select VMs. Structure is\ndocumented below.",
        Osconfig_OsPolicyAssignmentInstanceFilter_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Resource name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "OsPolicies",
        "List of OS policies to be applied to the VMs.\nStructure is documented below.",
        Osconfig_OsPolicyAssignmentOsPolicy_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Rollout",
        "Rollout to deploy the OS policy assignment. A rollout\nis triggered in the following situations: 1) OSPolicyAssignment is created.\n2) OSPolicyAssignment is updated and the update contains changes to one of\nthe following fields: - instance_filter - os_policies 3) OSPolicyAssignment\nis deleted. Structure is documented below.",
        Osconfig_OsPolicyAssignmentRollout_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "SkipAwaitRollout",
        "Set to true to skip awaiting rollout\nduring resource creation and update.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "OS policy assignment description. Length of the\ndescription is limited to 1024 characters.",
        [],
        false,
        false,
      ),
    ];
  }
}
