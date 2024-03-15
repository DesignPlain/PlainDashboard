import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DocumentAiProcessorArgs {
  // The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.
  KmsKeyName?: string;

  /*
The location of the resource.


- - -
*/
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The type of processor. For possible types see the [official list](https://cloud.google.com/document-ai/docs/reference/rest/v1/projects.locations/fetchProcessorTypes#google.cloud.documentai.v1.DocumentProcessorService.FetchProcessorTypes)
  Type?: string;

  // The display name. Must be unique.
  DisplayName?: string;
}
export class DocumentAiProcessor extends Resource {
  // The display name. Must be unique.
  public DisplayName?: string;

  // The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.
  public KmsKeyName?: string;

  /*
The location of the resource.


- - -
*/
  public Location?: string;

  // The resource name of the processor.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The type of processor. For possible types see the [official list](https://cloud.google.com/document-ai/docs/reference/rest/v1/projects.locations/fetchProcessorTypes#google.cloud.documentai.v1.DocumentProcessorService.FetchProcessorTypes)
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        "The type of processor. For possible types see the [official list](https://cloud.google.com/document-ai/docs/reference/rest/v1/projects.locations/fetchProcessorTypes#google.cloud.documentai.v1.DocumentProcessorService.FetchProcessorTypes)",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name. Must be unique.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The KMS key used for encryption/decryption in CMEK scenarios. See https://cloud.google.com/security-key-management.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the resource.\n\n\n- - -",
      ),
    ];
  }
}
