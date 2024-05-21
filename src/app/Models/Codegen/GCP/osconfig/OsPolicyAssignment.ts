import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  osconfig_OsPolicyAssignmentRollout,
  osconfig_OsPolicyAssignmentRollout_GetTypes,
} from "../types/osconfig_OsPolicyAssignmentRollout";
import {
  osconfig_OsPolicyAssignmentInstanceFilter,
  osconfig_OsPolicyAssignmentInstanceFilter_GetTypes,
} from "../types/osconfig_OsPolicyAssignmentInstanceFilter";
import {
  osconfig_OsPolicyAssignmentOsPolicy,
  osconfig_OsPolicyAssignmentOsPolicy_GetTypes,
} from "../types/osconfig_OsPolicyAssignmentOsPolicy";

export interface OsPolicyAssignmentArgs {
  /*
List of OS policies to be applied to the VMs.
Structure is documented below.
*/
  osPolicies?: Array<osconfig_OsPolicyAssignmentOsPolicy>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Rollout to deploy the OS policy assignment. A rollout
is triggered in the following situations: 1) OSPolicyAssignment is created.
2) OSPolicyAssignment is updated and the update contains changes to one of
the following fields: - instance_filter - os_policies 3) OSPolicyAssignment
is deleted. Structure is documented below.
*/
  rollout?: osconfig_OsPolicyAssignmentRollout;

  /*
Set to true to skip awaiting rollout
during resource creation and update.
*/
  skipAwaitRollout?: boolean;

  /*
OS policy assignment description. Length of the
description is limited to 1024 characters.
*/
  description?: string;

  /*
Filter to select VMs. Structure is
documented below.
*/
  instanceFilter?: osconfig_OsPolicyAssignmentInstanceFilter;

  // The location for the resource
  location?: string;

  // Resource name.
  name?: string;
}
export class OsPolicyAssignment extends Resource {
  /*
Output only. Indicates that this revision has been successfully
rolled out in this zone and new VMs will be assigned OS policies from this
revision. For a given OS policy assignment, there is only one revision with
a value of `true` for this field.
*/
  public baseline?: boolean;

  // Resource name.
  public name?: string;

  /*
List of OS policies to be applied to the VMs.
Structure is documented below.
*/
  public osPolicies?: Array<osconfig_OsPolicyAssignmentOsPolicy>;

  /*
Set to true to skip awaiting rollout
during resource creation and update.
*/
  public skipAwaitRollout?: boolean;

  // The location for the resource
  public location?: string;

  /*
Output only. Indicates that reconciliation is in progress
for the revision. This value is `true` when the `rollout_state` is one of:
*/
  public reconciling?: boolean;

  // Output only. OS policy assignment rollout state
  public rolloutState?: string;

  /*
Output only. Server generated unique id for the OS policy assignment
resource.
*/
  public uid?: string;

  /*
Output only. Indicates that this revision deletes the OS policy
assignment.
*/
  public deleted?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Output only. The assignment revision ID A new revision is
committed whenever a rollout is triggered for a OS policy assignment
*/
  public revisionId?: string;

  /*
Rollout to deploy the OS policy assignment. A rollout
is triggered in the following situations: 1) OSPolicyAssignment is created.
2) OSPolicyAssignment is updated and the update contains changes to one of
the following fields: - instance_filter - os_policies 3) OSPolicyAssignment
is deleted. Structure is documented below.
*/
  public rollout?: osconfig_OsPolicyAssignmentRollout;

  /*
OS policy assignment description. Length of the
description is limited to 1024 characters.
*/
  public description?: string;

  /*
The etag for this OS policy assignment. If this is provided on
update, it must match the server's etag.
*/
  public etag?: string;

  /*
Filter to select VMs. Structure is
documented below.
*/
  public instanceFilter?: osconfig_OsPolicyAssignmentInstanceFilter;

  /*
Output only. The timestamp that the revision was
created.
*/
  public revisionCreateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "OS policy assignment description. Length of the\ndescription is limited to 1024 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "instanceFilter",
        "Filter to select VMs. Structure is\ndocumented below.",
        osconfig_OsPolicyAssignmentInstanceFilter_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Resource name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "osPolicies",
        "List of OS policies to be applied to the VMs.\nStructure is documented below.",
        osconfig_OsPolicyAssignmentOsPolicy_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rollout",
        "Rollout to deploy the OS policy assignment. A rollout\nis triggered in the following situations: 1) OSPolicyAssignment is created.\n2) OSPolicyAssignment is updated and the update contains changes to one of\nthe following fields: - instance_filter - os_policies 3) OSPolicyAssignment\nis deleted. Structure is documented below.",
        osconfig_OsPolicyAssignmentRollout_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipAwaitRollout",
        "Set to true to skip awaiting rollout\nduring resource creation and update.",
        [],
        false,
        false,
      ),
    ];
  }
}
