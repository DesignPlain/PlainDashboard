import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface glue_ConnectionPhysicalConnectionRequirements {
  // The availability zone of the connection. This field is redundant and implied by `subnet_id`, but is currently an api requirement.
  availabilityZone?: string;

  // The security group ID list used by the connection.
  securityGroupIdLists?: Array<string>;

  // The subnet ID used by the connection.
  subnetId?: string;
}

export function glue_ConnectionPhysicalConnectionRequirements_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "The availability zone of the connection. This field is redundant and implied by `subnet_id`, but is currently an api requirement.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIdLists",
      "The security group ID list used by the connection.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "The subnet ID used by the connection.",
      [],
      false,
      false,
    ),
  ];
}
