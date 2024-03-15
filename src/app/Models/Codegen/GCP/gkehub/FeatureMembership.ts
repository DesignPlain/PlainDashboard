import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FeatureMembershipMesh } from "../types/FeatureMembershipMesh";
import { FeatureMembershipPolicycontroller } from "../types/FeatureMembershipPolicycontroller";
import { FeatureMembershipConfigmanagement } from "../types/FeatureMembershipConfigmanagement";

export interface FeatureMembershipArgs {
  // The location of the feature
  Location?: string;

  // The name of the membership
  Membership?: string;

  // The location of the membership, for example, "us-central1". Default is "global".
  MembershipLocation?: string;

  // Service mesh specific spec. Structure is documented below.
  Mesh?: FeatureMembershipMesh;

  // Policy Controller-specific spec. Structure is documented below.
  Policycontroller?: FeatureMembershipPolicycontroller;

  // The project of the feature
  Project?: string;

  // Config Management-specific spec. Structure is documented below.
  Configmanagement?: FeatureMembershipConfigmanagement;

  // The name of the feature
  Feature?: string;
}
export class FeatureMembership extends Resource {
  // Service mesh specific spec. Structure is documented below.
  public Mesh?: FeatureMembershipMesh;

  // Policy Controller-specific spec. Structure is documented below.
  public Policycontroller?: FeatureMembershipPolicycontroller;

  // The project of the feature
  public Project?: string;

  // Config Management-specific spec. Structure is documented below.
  public Configmanagement?: FeatureMembershipConfigmanagement;

  // The name of the feature
  public Feature?: string;

  // The location of the feature
  public Location?: string;

  // The name of the membership
  public Membership?: string;

  // The location of the membership, for example, "us-central1". Default is "global".
  public MembershipLocation?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Policycontroller",
        "Policy Controller-specific spec. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project of the feature",
      ),
      new DynamicUIProps(
        InputType.String,
        "Configmanagement",
        "Config Management-specific spec. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Feature",
        "The name of the feature",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the feature",
      ),
      new DynamicUIProps(
        InputType.String,
        "Membership",
        "The name of the membership",
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipLocation",
        'The location of the membership, for example, "us-central1". Default is "global".',
      ),
      new DynamicUIProps(
        InputType.String,
        "Mesh",
        "Service mesh specific spec. Structure is documented below.",
      ),
    ];
  }
}
