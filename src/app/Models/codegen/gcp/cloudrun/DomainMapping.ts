import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrun_DomainMappingSpec,
  cloudrun_DomainMappingSpec_GetTypes,
} from "../types/cloudrun_DomainMappingSpec";
import {
  cloudrun_DomainMappingMetadata,
  cloudrun_DomainMappingMetadata_GetTypes,
} from "../types/cloudrun_DomainMappingMetadata";
import {
  cloudrun_DomainMappingStatus,
  cloudrun_DomainMappingStatus_GetTypes,
} from "../types/cloudrun_DomainMappingStatus";

export interface DomainMappingArgs {
  // Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The spec for this DomainMapping.
Structure is documented below.
*/
  spec?: cloudrun_DomainMappingSpec;

  // The location of the cloud run instance. eg us-central1
  location?: string;

  /*
Metadata associated with this DomainMapping.
Structure is documented below.
*/
  metadata?: cloudrun_DomainMappingMetadata;
}
export class DomainMapping extends DS_Resource {
  // The location of the cloud run instance. eg us-central1
  public location?: string;

  /*
Metadata associated with this DomainMapping.
Structure is documented below.
*/
  public metadata?: cloudrun_DomainMappingMetadata;

  // Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The spec for this DomainMapping.
Structure is documented below.
*/
  public spec?: cloudrun_DomainMappingSpec;

  /*
(Output)
Status of the condition, one of True, False, Unknown.
*/
  public statuses?: Array<cloudrun_DomainMappingStatus>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spec",
        "The spec for this DomainMapping.\nStructure is documented below.",
        () => cloudrun_DomainMappingSpec_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the cloud run instance. eg us-central1",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "metadata",
        "Metadata associated with this DomainMapping.\nStructure is documented below.",
        () => cloudrun_DomainMappingMetadata_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain",
        () => [],
        false,
        true,
      ),
    ];
  }
}
