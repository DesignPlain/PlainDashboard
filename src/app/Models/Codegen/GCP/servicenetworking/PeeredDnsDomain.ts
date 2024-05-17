import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PeeredDnsDomainArgs {
  // The network in the consumer project.
  Network?: string;

  // The producer project number. If not provided, the provider project is used.
  Project?: string;

  // Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`
  Service?: string;

  // The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).
  DnsSuffix?: string;

  // Internal name used for the peered DNS domain.
  Name?: string;
}
export class PeeredDnsDomain extends Resource {
  // The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).
  public DnsSuffix?: string;

  // Internal name used for the peered DNS domain.
  public Name?: string;

  // The network in the consumer project.
  public Network?: string;

  // an identifier for the resource with format `services/{{service}}/projects/{{project}}/global/networks/{{network}}`
  public Parent?: string;

  // The producer project number. If not provided, the provider project is used.
  public Project?: string;

  // Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`
  public Service?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DnsSuffix",
        "The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Internal name used for the peered DNS domain.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The network in the consumer project.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The producer project number. If not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Service",
        "Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`",
        [],
        false,
        true,
      ),
    ];
  }
}
