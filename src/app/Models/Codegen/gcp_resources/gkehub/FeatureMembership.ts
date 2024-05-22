import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_FeatureMembershipMesh,
  gkehub_FeatureMembershipMesh_GetTypes,
} from "../types/gkehub_FeatureMembershipMesh";
import {
  gkehub_FeatureMembershipPolicycontroller,
  gkehub_FeatureMembershipPolicycontroller_GetTypes,
} from "../types/gkehub_FeatureMembershipPolicycontroller";
import {
  gkehub_FeatureMembershipConfigmanagement,
  gkehub_FeatureMembershipConfigmanagement_GetTypes,
} from "../types/gkehub_FeatureMembershipConfigmanagement";

export interface FeatureMembershipArgs {
  // The name of the feature
  feature?: string;

  // The location of the feature
  location?: string;

  // The name of the membership
  membership?: string;

  // The location of the membership, for example, "us-central1". Default is "global".
  membershipLocation?: string;

  // Service mesh specific spec. Structure is documented below.
  mesh?: gkehub_FeatureMembershipMesh;

  // Policy Controller-specific spec. Structure is documented below.
  policycontroller?: gkehub_FeatureMembershipPolicycontroller;

  // The project of the feature
  project?: string;

  // Config Management-specific spec. Structure is documented below.
  configmanagement?: gkehub_FeatureMembershipConfigmanagement;
}
export class FeatureMembership extends Resource {
  // Service mesh specific spec. Structure is documented below.
  public mesh?: gkehub_FeatureMembershipMesh;

  // Policy Controller-specific spec. Structure is documented below.
  public policycontroller?: gkehub_FeatureMembershipPolicycontroller;

  // The project of the feature
  public project?: string;

  // Config Management-specific spec. Structure is documented below.
  public configmanagement?: gkehub_FeatureMembershipConfigmanagement;

  // The name of the feature
  public feature?: string;

  // The location of the feature
  public location?: string;

  // The name of the membership
  public membership?: string;

  // The location of the membership, for example, "us-central1". Default is "global".
  public membershipLocation?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "configmanagement",
        "Config Management-specific spec. Structure is documented below.",
        gkehub_FeatureMembershipConfigmanagement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "feature",
        "The name of the feature",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the feature",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "membership",
        "The name of the membership",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "membershipLocation",
        'The location of the membership, for example, "us-central1". Default is "global".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mesh",
        "Service mesh specific spec. Structure is documented below.",
        gkehub_FeatureMembershipMesh_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "policycontroller",
        "Policy Controller-specific spec. Structure is documented below.",
        gkehub_FeatureMembershipPolicycontroller_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project of the feature",
        [],
        false,
        true,
      ),
    ];
  }
}
