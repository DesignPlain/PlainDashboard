import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface CapacityCommitmentArgs {
  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  Location?: string;

  /*
Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan


- - -
*/
  Plan?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The plan this capacity commitment is converted to after commitmentEndTime passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.
  RenewalPlan?: string;

  // Number of slots in this commitment.
  SlotCount?: number;

  /*
The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.
*/
  CapacityCommitmentId?: string;

  // The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
  Edition?: string;

  // If true, fail the request if another project in the organization has a capacity commitment.
  EnforceSingleAdminProjectPerOrg?: string;
}
export class CapacityCommitment extends Resource {
  // The start of the current commitment period. It is applicable only for ACTIVE capacity commitments.
  public CommitmentStartTime?: string;

  // The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
  public Edition?: string;

  // If true, fail the request if another project in the organization has a capacity commitment.
  public EnforceSingleAdminProjectPerOrg?: string;

  // Number of slots in this commitment.
  public SlotCount?: number;

  // State of the commitment
  public State?: string;

  /*
The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is
empty. This field must only contain lower case alphanumeric characters or dashes. The first and last character
cannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split
or merged.
*/
  public CapacityCommitmentId?: string;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  public Location?: string;

  // The resource name of the capacity commitment, e.g., projects/myproject/locations/US/capacityCommitments/123
  public Name?: string;

  /*
Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan


- - -
*/
  public Plan?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The plan this capacity commitment is converted to after commitmentEndTime passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.
  public RenewalPlan?: string;

  // The start of the current commitment period. It is applicable only for ACTIVE capacity commitments.
  public CommitmentEndTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "RenewalPlan",
        "The plan this capacity commitment is converted to after commitmentEndTime passes. Once the plan is changed, committed period is extended according to commitment plan. Only applicable for some commitment plans.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "SlotCount",
        "Number of slots in this commitment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CapacityCommitmentId",
        "The optional capacity commitment ID. Capacity commitment name will be generated automatically if this field is\nempty. This field must only contain lower case alphanumeric characters or dashes. The first and last character\ncannot be a dash. Max length is 64 characters. NOTE: this ID won't be kept if the capacity commitment is split\nor merged.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Edition",
        "The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "EnforceSingleAdminProjectPerOrg",
        "If true, fail the request if another project in the organization has a capacity commitment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location where the transfer config should reside.\nExamples: US, EU, asia-northeast1. The default value is US.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Plan",
        "Capacity commitment plan. Valid values are at https://cloud.google.com/bigquery/docs/reference/reservations/rpc/google.cloud.bigquery.reservation.v1#commitmentplan\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
