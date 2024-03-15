import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DomainMappingMetadata } from "../types/DomainMappingMetadata";
import { DomainMappingSpec } from "../types/DomainMappingSpec";
import { DomainMappingStatus } from "../types/DomainMappingStatus";

export interface DomainMappingArgs {
  // The location of the cloud run instance. eg us-central1
  Location?: string;

  /*
Metadata associated with this DomainMapping.
Structure is documented below.
*/
  Metadata?: DomainMappingMetadata;

  // Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The spec for this DomainMapping.
Structure is documented below.
*/
  Spec?: DomainMappingSpec;
}
export class DomainMapping extends Resource {
  // The location of the cloud run instance. eg us-central1
  public Location?: string;

  /*
Metadata associated with this DomainMapping.
Structure is documented below.
*/
  public Metadata?: DomainMappingMetadata;

  // Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The spec for this DomainMapping.
Structure is documented below.
*/
  public Spec?: DomainMappingSpec;

  /*
(Output)
Status of the condition, one of True, False, Unknown.
*/
  public Statuses?: Array<DomainMappingStatus>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Spec",
        "The spec for this DomainMapping.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the cloud run instance. eg us-central1",
      ),
      new DynamicUIProps(
        InputType.String,
        "Metadata",
        "Metadata associated with this DomainMapping.\nStructure is documented below.",
      ),
    ];
  }
}
