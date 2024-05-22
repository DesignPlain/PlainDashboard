import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getRouteTableAssociation {
  // Whether the association is due to the main route table.
  main?: boolean;

  // Association ID.
  routeTableAssociationId?: string;

  // ID of the specific Route Table to retrieve.
  routeTableId?: string;

  // ID of a Subnet which is connected to the Route Table (not exported if not passed as a parameter).
  subnetId?: string;

  // ID of an Internet Gateway or Virtual Private Gateway which is connected to the Route Table (not exported if not passed as a parameter).
  gatewayId?: string;
}

export function ec2_getRouteTableAssociation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "routeTableAssociationId",
      "Association ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routeTableId",
      "ID of the specific Route Table to retrieve.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetId",
      "ID of a Subnet which is connected to the Route Table (not exported if not passed as a parameter).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "gatewayId",
      "ID of an Internet Gateway or Virtual Private Gateway which is connected to the Route Table (not exported if not passed as a parameter).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "main",
      "Whether the association is due to the main route table.",
      [],
      true,
      false,
    ),
  ];
}
