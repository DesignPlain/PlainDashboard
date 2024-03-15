import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AiMetadataStoreEncryptionSpec } from "../types/AiMetadataStoreEncryptionSpec";
import { AiMetadataStoreState } from "../types/AiMetadataStoreState";

export interface AiMetadataStoreArgs {
  // Description of the MetadataStore.
  Description?: string;

  /*
Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.
Structure is documented below.
*/
  EncryptionSpec?: AiMetadataStoreEncryptionSpec;

  // The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the Metadata Store. eg us-central1
  Region?: string;
}
export class AiMetadataStore extends Resource {
  // Description of the MetadataStore.
  public Description?: string;

  /*
Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.
Structure is documented below.
*/
  public EncryptionSpec?: AiMetadataStoreEncryptionSpec;

  // The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region of the Metadata Store. eg us-central1
  public Region?: string;

  /*
State information of the MetadataStore.
Structure is documented below.
*/
  public States?: Array<AiMetadataStoreState>;

  // The timestamp of when the MetadataStore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // The timestamp of when the MetadataStore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region of the Metadata Store. eg us-central1",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the MetadataStore.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EncryptionSpec",
        "Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
