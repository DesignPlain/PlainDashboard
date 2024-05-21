import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PeeredDnsDomainArgs {
  // Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`
  service?: string;

  // The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).
  dnsSuffix?: string;

  // Internal name used for the peered DNS domain.
  name?: string;

  // The network in the consumer project.
  network?: string;

  // The producer project number. If not provided, the provider project is used.
  project?: string;
}
export class PeeredDnsDomain extends Resource {
  // The producer project number. If not provided, the provider project is used.
  public project?: string;

  // Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`
  public service?: string;

  // The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).
  public dnsSuffix?: string;

  // Internal name used for the peered DNS domain.
  public name?: string;

  // The network in the consumer project.
  public network?: string;

  // an identifier for the resource with format `services/{{service}}/projects/{{project}}/global/networks/{{network}}`
  public parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "service",
        "Private service connection between service and consumer network, defaults to `servicenetworking.googleapis.com`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dnsSuffix",
        "The DNS domain suffix of the peered DNS domain. Make sure to suffix with a `.` (dot).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Internal name used for the peered DNS domain.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "The network in the consumer project.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The producer project number. If not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
