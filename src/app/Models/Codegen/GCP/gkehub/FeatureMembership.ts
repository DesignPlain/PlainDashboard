import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_FeatureMembershipMesh,
  Gkehub_FeatureMembershipMesh_GetTypes,
} from "../types/Gkehub_FeatureMembershipMesh";
import {
  Gkehub_FeatureMembershipPolicycontroller,
  Gkehub_FeatureMembershipPolicycontroller_GetTypes,
} from "../types/Gkehub_FeatureMembershipPolicycontroller";
import {
  Gkehub_FeatureMembershipConfigmanagement,
  Gkehub_FeatureMembershipConfigmanagement_GetTypes,
} from "../types/Gkehub_FeatureMembershipConfigmanagement";

export interface FeatureMembershipArgs {
  // The name of the membership
  Membership?: string;

  // The location of the membership, for example, "us-central1". Default is "global".
  MembershipLocation?: string;

  // Service mesh specific spec. Structure is documented below.
  Mesh?: Gkehub_FeatureMembershipMesh;

  // Policy Controller-specific spec. Structure is documented below.
  Policycontroller?: Gkehub_FeatureMembershipPolicycontroller;

  // The project of the feature
  Project?: string;

  // Config Management-specific spec. Structure is documented below.
  Configmanagement?: Gkehub_FeatureMembershipConfigmanagement;

  // The name of the feature
  Feature?: string;

  // The location of the feature
  Location?: string;
}
export class FeatureMembership extends Resource {
  // The location of the feature
  public Location?: string;

  // The name of the membership
  public Membership?: string;

  // The location of the membership, for example, "us-central1". Default is "global".
  public MembershipLocation?: string;

  // Service mesh specific spec. Structure is documented below.
  public Mesh?: Gkehub_FeatureMembershipMesh;

  // Policy Controller-specific spec. Structure is documented below.
  public Policycontroller?: Gkehub_FeatureMembershipPolicycontroller;

  // The project of the feature
  public Project?: string;

  // Config Management-specific spec. Structure is documented below.
  public Configmanagement?: Gkehub_FeatureMembershipConfigmanagement;

  // The name of the feature
  public Feature?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "MembershipLocation",
        'The location of the membership, for example, "us-central1". Default is "global".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Mesh",
        "Service mesh specific spec. Structure is documented below.",
        Gkehub_FeatureMembershipMesh_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Policycontroller",
        "Policy Controller-specific spec. Structure is documented below.",
        Gkehub_FeatureMembershipPolicycontroller_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project of the feature",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Configmanagement",
        "Config Management-specific spec. Structure is documented below.",
        Gkehub_FeatureMembershipConfigmanagement_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Feature",
        "The name of the feature",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the feature",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Membership",
        "The name of the membership",
        [],
        true,
        true,
      ),
    ];
  }
}
