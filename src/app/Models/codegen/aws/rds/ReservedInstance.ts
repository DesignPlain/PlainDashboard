import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rds_ReservedInstanceRecurringCharge,
  rds_ReservedInstanceRecurringCharge_GetTypes,
} from "../types/rds_ReservedInstanceRecurringCharge";

export interface ReservedInstanceArgs {
  /*
ID of the Reserved DB instance offering to purchase. To determine an `offering_id`, see the `aws.rds.getReservedInstanceOffering` data source.

The following arguments are optional:
*/
  offeringId?: string;

  // Customer-specified identifier to track this reservation.
  reservationId?: string;

  // Map of tags to assign to the DB reservation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Number of instances to reserve. Default value is `1`.
  instanceCount?: number;
}
export class ReservedInstance extends DS_Resource {
  // DB instance class for the reserved DB instance.
  public dbInstanceClass?: string;

  // Fixed price charged for this reserved DB instance.
  public fixedPrice?: number;

  // Number of instances to reserve. Default value is `1`.
  public instanceCount?: number;

  // Unique identifier for the lease associated with the reserved DB instance. Amazon Web Services Support might request the lease ID for an issue related to a reserved DB instance.
  public leaseId?: string;

  // Offering type of this reserved DB instance.
  public offeringType?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // State of the reserved DB instance.
  public state?: string;

  // ARN for the reserved DB instance.
  public arn?: string;

  // Duration of the reservation in seconds.
  public duration?: number;

  // Whether the reservation applies to Multi-AZ deployments.
  public multiAz?: boolean;

  /*
ID of the Reserved DB instance offering to purchase. To determine an `offering_id`, see the `aws.rds.getReservedInstanceOffering` data source.

The following arguments are optional:
*/
  public offeringId?: string;

  // Description of the reserved DB instance.
  public productDescription?: string;

  // Recurring price charged to run this reserved DB instance.
  public recurringCharges?: Array<rds_ReservedInstanceRecurringCharge>;

  // Time the reservation started.
  public startTime?: string;

  // Currency code for the reserved DB instance.
  public currencyCode?: string;

  // Customer-specified identifier to track this reservation.
  public reservationId?: string;

  // Map of tags to assign to the DB reservation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Hourly price charged for this reserved DB instance.
  public usagePrice?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "instanceCount",
        "Number of instances to reserve. Default value is `1`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "offeringId",
        "ID of the Reserved DB instance offering to purchase. To determine an `offering_id`, see the `aws.rds.getReservedInstanceOffering` data source.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "reservationId",
        "Customer-specified identifier to track this reservation.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the DB reservation. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
