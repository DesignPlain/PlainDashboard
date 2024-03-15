import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LiteReservationArgs {
  /*
Name of the reservation.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the pubsub lite reservation.
  Region?: string;

  /*
The reserved throughput capacity. Every unit of throughput capacity is
equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed
messages.
*/
  ThroughputCapacity?: number;
}
export class LiteReservation extends Resource {
  /*
Name of the reservation.


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region of the pubsub lite reservation.
  public Region?: string;

  /*
The reserved throughput capacity. Every unit of throughput capacity is
equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed
messages.
*/
  public ThroughputCapacity?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the pubsub lite reservation.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "ThroughputCapacity",
        "The reserved throughput capacity. Every unit of throughput capacity is\nequivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed\nmessages.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the reservation.\n\n\n- - -",
      ),
    ];
  }
}
