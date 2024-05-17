import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_DomainMappingSpec,
  Cloudrun_DomainMappingSpec_GetTypes,
} from "../types/Cloudrun_DomainMappingSpec";
import {
  Cloudrun_DomainMappingStatus,
  Cloudrun_DomainMappingStatus_GetTypes,
} from "../types/Cloudrun_DomainMappingStatus";
import {
  Cloudrun_DomainMappingMetadata,
  Cloudrun_DomainMappingMetadata_GetTypes,
} from "../types/Cloudrun_DomainMappingMetadata";

export interface DomainMappingArgs {
  // The location of the cloud run instance. eg us-central1
  Location?: string;

  /*
Metadata associated with this DomainMapping.
Structure is documented below.
*/
  Metadata?: Cloudrun_DomainMappingMetadata;

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
  Spec?: Cloudrun_DomainMappingSpec;
}
export class DomainMapping extends Resource {
  // The location of the cloud run instance. eg us-central1
  public Location?: string;

  /*
Metadata associated with this DomainMapping.
Structure is documented below.
*/
  public Metadata?: Cloudrun_DomainMappingMetadata;

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
  public Spec?: Cloudrun_DomainMappingSpec;

  /*
(Output)
Status of the condition, one of True, False, Unknown.
*/
  public Statuses?: Array<Cloudrun_DomainMappingStatus>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the cloud run instance. eg us-central1",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Metadata",
        "Metadata associated with this DomainMapping.\nStructure is documented below.",
        Cloudrun_DomainMappingMetadata_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Spec",
        "The spec for this DomainMapping.\nStructure is documented below.",
        Cloudrun_DomainMappingSpec_GetTypes(),
        true,
        true,
      ),
    ];
  }
}
