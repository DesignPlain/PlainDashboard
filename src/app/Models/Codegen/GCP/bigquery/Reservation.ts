import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ReservationAutoscale } from "../types/ReservationAutoscale";

export interface ReservationArgs {
  // The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
  Edition?: string;

  /*
Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.
*/
  SlotCapacity?: number;

  /*
The configuration parameters for the auto scaling feature.
Structure is documented below.
*/
  Autoscale?: ReservationAutoscale;

  // Maximum number of queries that are allowed to run concurrently in this reservation. This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.
  Concurrency?: number;

  /*
If false, any query using this reservation will use idle slots from other reservations within
the same admin project. If true, a query using this reservation will execute with the slot
capacity specified above at most.
*/
  IgnoreIdleSlots?: boolean;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  Location?: string;

  /*
Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).
If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.
*/
  MultiRegionAuxiliary?: boolean;

  /*
The name of the reservation. This field must only contain alphanumeric characters or dash.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Reservation extends Resource {
  // Maximum number of queries that are allowed to run concurrently in this reservation. This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.
  public Concurrency?: number;

  // The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS
  public Edition?: string;

  /*
If false, any query using this reservation will use idle slots from other reservations within
the same admin project. If true, a query using this reservation will execute with the slot
capacity specified above at most.
*/
  public IgnoreIdleSlots?: boolean;

  /*
Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).
If set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.
*/
  public MultiRegionAuxiliary?: boolean;

  /*
The configuration parameters for the auto scaling feature.
Structure is documented below.
*/
  public Autoscale?: ReservationAutoscale;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  public Location?: string;

  /*
The name of the reservation. This field must only contain alphanumeric characters or dash.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the
unit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.
*/
  public SlotCapacity?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location where the transfer config should reside.\nExamples: US, EU, asia-northeast1. The default value is US.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "MultiRegionAuxiliary",
        "Applicable only for reservations located within one of the BigQuery multi-regions (US or EU).\nIf set to true, this reservation is placed in the organization's secondary region which is designated for disaster recovery purposes. If false, this reservation is placed in the organization's default region.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the reservation. This field must only contain alphanumeric characters or dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Edition",
        "The edition type. Valid values are STANDARD, ENTERPRISE, ENTERPRISE_PLUS",
      ),
      new DynamicUIProps(
        InputType.Number,
        "SlotCapacity",
        "Minimum slots available to this reservation. A slot is a unit of computational power in BigQuery, and serves as the\nunit of parallelism. Queries using this reservation might use more slots during runtime if ignoreIdleSlots is set to false.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Autoscale",
        "The configuration parameters for the auto scaling feature.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Concurrency",
        "Maximum number of queries that are allowed to run concurrently in this reservation. This is a soft limit due to asynchronous nature of the system and various optimizations for small queries. Default value is 0 which means that concurrency will be automatically set based on the reservation size.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "IgnoreIdleSlots",
        "If false, any query using this reservation will use idle slots from other reservations within\nthe same admin project. If true, a query using this reservation will execute with the slot\ncapacity specified above at most.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}