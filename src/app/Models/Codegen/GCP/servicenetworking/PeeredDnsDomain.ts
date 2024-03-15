import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PeeredDnsDomainArgs {
  // The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).
  DnsSuffix?: string;

  // Internal name used for the peered DNS domain.
  Name?: string;

  // The network in the consumer project.
  Network?: string;

  // The producer project number. If not provided, the provider project is used.
  Project?: string;

  // Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`
  Service?: string;
}
export class PeeredDnsDomain extends Resource {
  // The network in the consumer project.
  public Network?: string;

  // an identifier for the resource with format `services/{{service}}/projects/{{project}}/global/networks/{{network}}`
  public Parent?: string;

  // The producer project number. If not provided, the provider project is used.
  public Project?: string;

  // Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`
  public Service?: string;

  // The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).
  public DnsSuffix?: string;

  // Internal name used for the peered DNS domain.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Service",
        "Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`",
      ),
      new DynamicUIProps(
        InputType.String,
        "DnsSuffix",
        "The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Internal name used for the peered DNS domain.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "The network in the consumer project.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The producer project number. If not provided, the provider project is used.",
      ),
    ];
  }
}
