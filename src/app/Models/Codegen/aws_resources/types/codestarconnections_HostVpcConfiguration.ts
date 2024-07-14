import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codestarconnections_HostVpcConfiguration {
  // ID of the security group or security groups associated with the Amazon VPC connected to the infrastructure where your provider type is installed.
  securityGroupIds?: Array<string>;

  // The ID of the subnet or subnets associated with the Amazon VPC connected to the infrastructure where your provider type is installed.
  subnetIds?: Array<string>;

  // The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.
  tlsCertificate?: string;

  // The ID of the Amazon VPC connected to the infrastructure where your provider type is installed.
  vpcId?: string;
}

export function codestarconnections_HostVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "securityGroupIds",
      "ID of the security group or security groups associated with the Amazon VPC connected to the infrastructure where your provider type is installed.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "The ID of the subnet or subnets associated with the Amazon VPC connected to the infrastructure where your provider type is installed.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tlsCertificate",
      "The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The ID of the Amazon VPC connected to the infrastructure where your provider type is installed.",
      [],
      true,
      false,
    ),
  ];
}
