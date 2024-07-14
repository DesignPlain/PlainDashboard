import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  directoryservice_ServiceRegionVpcSettings,
  directoryservice_ServiceRegionVpcSettings_GetTypes,
} from "../types/directoryservice_ServiceRegionVpcSettings";

export interface ServiceRegionArgs {
  // The name of the Region where you want to add domain controllers for replication.
  regionName?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // VPC information in the replicated Region. Detailed below.
  vpcSettings?: directoryservice_ServiceRegionVpcSettings;

  // The number of domain controllers desired in the replicated directory. Minimum value of `2`.
  desiredNumberOfDomainControllers?: number;

  // The identifier of the directory to which you want to add Region replication.
  directoryId?: string;
}
export class ServiceRegion extends Resource {
  // The number of domain controllers desired in the replicated directory. Minimum value of `2`.
  public desiredNumberOfDomainControllers?: number;

  // The identifier of the directory to which you want to add Region replication.
  public directoryId?: string;

  // The name of the Region where you want to add domain controllers for replication.
  public regionName?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // VPC information in the replicated Region. Detailed below.
  public vpcSettings?: directoryservice_ServiceRegionVpcSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "regionName",
        "The name of the Region where you want to add domain controllers for replication.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcSettings",
        "VPC information in the replicated Region. Detailed below.",
        directoryservice_ServiceRegionVpcSettings_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "desiredNumberOfDomainControllers",
        "The number of domain controllers desired in the replicated directory. Minimum value of `2`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "directoryId",
        "The identifier of the directory to which you want to add Region replication.",
        [],
        true,
        true,
      ),
    ];
  }
}
