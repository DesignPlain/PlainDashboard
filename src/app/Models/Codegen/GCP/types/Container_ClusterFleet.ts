import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterFleet {
  // Whether the cluster has been registered via the fleet API.
  PreRegistered?: boolean;

  // The name of the Fleet host project where this cluster will be registered.
  Project?: string;

  // Full resource name of the registered fleet membership of the cluster.
  Membership?: string;

  // Short name of the fleet membership, for example "member-1".
  MembershipId?: string;

  // Location of the fleet membership, for example "us-central1".
  MembershipLocation?: string;
}

export function Container_ClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "PreRegistered",
      "Whether the cluster has been registered via the fleet API.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The name of the Fleet host project where this cluster will be registered.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Membership",
      "Full resource name of the registered fleet membership of the cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MembershipId",
      'Short name of the fleet membership, for example "member-1".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MembershipLocation",
      'Location of the fleet membership, for example "us-central1".',
      [],
      false,
      false,
    ),
  ];
}
