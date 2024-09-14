import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface directoryservice_DirectoryVpcSettings {
  //
  availabilityZones?: Array<string>;

  // The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).
  subnetIds?: Array<string>;

  // The identifier of the VPC that the directory is in.
  vpcId?: string;
}

export function directoryservice_DirectoryVpcSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "availabilityZones",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "subnetIds",
      "The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs).",
      () => InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "The identifier of the VPC that the directory is in.",
      () => [],
      true,
      true,
    ),
  ];
}
