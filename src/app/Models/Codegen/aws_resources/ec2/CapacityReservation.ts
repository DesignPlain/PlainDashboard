import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CapacityReservationArgs {
  // Indicates whether the Capacity Reservation supports instances with temporary, block-level storage.
  ephemeralStorage?: boolean;

  // Indicates the type of instance launches that the Capacity Reservation accepts. Specify either `open` or `targeted`.
  instanceMatchCriteria?: string;

  // The type of operating system for which to reserve capacity. Valid options are `Linux/UNIX`, `Red Hat Enterprise Linux`, `SUSE Linux`, `Windows`, `Windows with SQL Server`, `Windows with SQL Server Enterprise`, `Windows with SQL Server Standard` or `Windows with SQL Server Web`.
  instancePlatform?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Indicates the tenancy of the Capacity Reservation. Specify either `default` or `dedicated`.
  tenancy?: string;

  // Indicates the way in which the Capacity Reservation ends. Specify either `unlimited` or `limited`.
  endDateType?: string;

  // Indicates whether the Capacity Reservation supports EBS-optimized instances.
  ebsOptimized?: boolean;

  // The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  endDate?: string;

  // The number of instances for which to reserve capacity.
  instanceCount?: number;

  // The instance type for which to reserve capacity.
  instanceType?: string;

  // The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.
  outpostArn?: string;

  // The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation.
  placementGroupArn?: string;

  // The Availability Zone in which to create the Capacity Reservation.
  availabilityZone?: string;
}
export class CapacityReservation extends Resource {
  // The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.
  public outpostArn?: string;

  // Indicates whether the Capacity Reservation supports EBS-optimized instances.
  public ebsOptimized?: boolean;

  // Indicates the way in which the Capacity Reservation ends. Specify either `unlimited` or `limited`.
  public endDateType?: string;

  // Indicates the type of instance launches that the Capacity Reservation accepts. Specify either `open` or `targeted`.
  public instanceMatchCriteria?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Indicates the tenancy of the Capacity Reservation. Specify either `default` or `dedicated`.
  public tenancy?: string;

  // Indicates whether the Capacity Reservation supports instances with temporary, block-level storage.
  public ephemeralStorage?: boolean;

  // The instance type for which to reserve capacity.
  public instanceType?: string;

  // The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation.
  public placementGroupArn?: string;

  // The number of instances for which to reserve capacity.
  public instanceCount?: number;

  // The type of operating system for which to reserve capacity. Valid options are `Linux/UNIX`, `Red Hat Enterprise Linux`, `SUSE Linux`, `Windows`, `Windows with SQL Server`, `Windows with SQL Server Enterprise`, `Windows with SQL Server Standard` or `Windows with SQL Server Web`.
  public instancePlatform?: string;

  // The ID of the AWS account that owns the Capacity Reservation.
  public ownerId?: string;

  // The ARN of the Capacity Reservation.
  public arn?: string;

  // The Availability Zone in which to create the Capacity Reservation.
  public availabilityZone?: string;

  // The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  public endDate?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "tenancy",
        "Indicates the tenancy of the Capacity Reservation. Specify either `default` or `dedicated`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "endDateType",
        "Indicates the way in which the Capacity Reservation ends. Specify either `unlimited` or `limited`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ebsOptimized",
        "Indicates whether the Capacity Reservation supports EBS-optimized instances.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "instanceCount",
        "The number of instances for which to reserve capacity.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "placementGroupArn",
        "The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "ephemeralStorage",
        "Indicates whether the Capacity Reservation supports instances with temporary, block-level storage.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceMatchCriteria",
        "Indicates the type of instance launches that the Capacity Reservation accepts. Specify either `open` or `targeted`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instancePlatform",
        "The type of operating system for which to reserve capacity. Valid options are `Linux/UNIX`, `Red Hat Enterprise Linux`, `SUSE Linux`, `Windows`, `Windows with SQL Server`, `Windows with SQL Server Enterprise`, `Windows with SQL Server Standard` or `Windows with SQL Server Web`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The Availability Zone in which to create the Capacity Reservation.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "outpostArn",
        "The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "endDate",
        "The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        "The instance type for which to reserve capacity.",
        [],
        true,
        true,
      ),
    ];
  }
}
