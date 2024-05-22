import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DocumentAiProcessorArgs {
  // The display name. Must be unique.
  displayName?: string;

  // The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.
  kmsKeyName?: string;

  /*
The location of the resource.


- - -
*/
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The type of processor. For possible types see the [official list](https://cloud.google.com/document-ai/docs/reference/rest/v1/projects.locations/fetchProcessorTypes#google.cloud.documentai.v1.DocumentProcessorService.FetchProcessorTypes)
  type?: string;
}
export class DocumentAiProcessor extends Resource {
  // The display name. Must be unique.
  public displayName?: string;

  // The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.
  public kmsKeyName?: string;

  /*
The location of the resource.


- - -
*/
  public location?: string;

  // The resource name of the processor.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The type of processor. For possible types see the [official list](https://cloud.google.com/document-ai/docs/reference/rest/v1/projects.locations/fetchProcessorTypes#google.cloud.documentai.v1.DocumentProcessorService.FetchProcessorTypes)
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name. Must be unique.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the resource.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "The type of processor. For possible types see the [official list](https://cloud.google.com/document-ai/docs/reference/rest/v1/projects.locations/fetchProcessorTypes#google.cloud.documentai.v1.DocumentProcessorService.FetchProcessorTypes)",
        [],
        true,
        true,
      ),
    ];
  }
}
