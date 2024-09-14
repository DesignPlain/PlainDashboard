import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_CapacityBlockReservationTimeouts,
  ec2_CapacityBlockReservationTimeouts_GetTypes,
} from "../types/ec2_CapacityBlockReservationTimeouts";

export interface CapacityBlockReservationArgs {
  //
  timeouts?: ec2_CapacityBlockReservationTimeouts;

  // The Capacity Block Reservation ID.
  capacityBlockOfferingId?: string;

  // The type of operating system for which to reserve capacity. Valid options are `Linux/UNIX`, `Red Hat Enterprise Linux`, `SUSE Linux`, `Windows`, `Windows with SQL Server`, `Windows with SQL Server Enterprise`, `Windows with SQL Server Standard` or `Windows with SQL Server Web`.
  instancePlatform?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class CapacityBlockReservation extends DS_Resource {
  // The ARN of the reservation.
  public arn?: string;

  // The date and time at which the Capacity Block Reservation was created.
  public createdDate?: string;

  // Indicates the way in which the Capacity Reservation ends.
  public endDateType?: string;

  // The instance type for which to reserve capacity.
  public instanceType?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block
  public tagsAll?: Map<string, string>;

  // The number of instances for which to reserve capacity.
  public instanceCount?: number;

  // The ARN of the Outpost on which to create the Capacity Block Reservation.
  public outpostArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public timeouts?: ec2_CapacityBlockReservationTimeouts;

  // The Availability Zone in which to create the Capacity Block Reservation.
  public availabilityZone?: string;

  // The type of Capacity Reservation.
  public reservationType?: string;

  // Indicates the tenancy of the Capacity Block Reservation. Specify either `default` or `dedicated`.
  public tenancy?: string;

  // The Capacity Block Reservation ID.
  public capacityBlockOfferingId?: string;

  // Indicates whether the Capacity Reservation supports EBS-optimized instances.
  public ebsOptimized?: boolean;

  // The date and time at which the Capacity Block Reservation expires. When a Capacity Block Reservation expires, the reserved capacity is released and you can no longer launch instances into it. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  public endDate?: string;

  // The type of operating system for which to reserve capacity. Valid options are `Linux/UNIX`, `Red Hat Enterprise Linux`, `SUSE Linux`, `Windows`, `Windows with SQL Server`, `Windows with SQL Server Enterprise`, `Windows with SQL Server Standard` or `Windows with SQL Server Web`.
  public instancePlatform?: string;

  // The ARN of the placement group in which to create the Capacity Block Reservation.
  public placementGroupArn?: string;

  // The date and time at which the Capacity Block Reservation starts. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`)
  public startDate?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => ec2_CapacityBlockReservationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "capacityBlockOfferingId",
        "The Capacity Block Reservation ID.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instancePlatform",
        "The type of operating system for which to reserve capacity. Valid options are `Linux/UNIX`, `Red Hat Enterprise Linux`, `SUSE Linux`, `Windows`, `Windows with SQL Server`, `Windows with SQL Server Enterprise`, `Windows with SQL Server Standard` or `Windows with SQL Server Web`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
