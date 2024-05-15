import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterFleet {
  // Full resource name of the registered fleet membership of the cluster.
  Membership?: string;

  // Short name of the fleet membership, for example "member-1".
  MembershipId?: string;

  // Location of the fleet membership, for example "us-central1".
  MembershipLocation?: string;

  // Whether the cluster has been registered via the fleet API.
  PreRegistered?: boolean;

  /*
The project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;
}

export function Container_getClusterFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Membership",
      "Full resource name of the registered fleet membership of the cluster.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MembershipId",
      'Short name of the fleet membership, for example "member-1".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MembershipLocation",
      'Location of the fleet membership, for example "us-central1".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "PreRegistered",
      "Whether the cluster has been registered via the fleet API.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Project",
      "The project in which the resource belongs. If it\nis not provided, the provider project is used.",
      [],
      true,
      false,
    ),
  ];
}
