import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiMetadataStoreEncryptionSpec,
  Vertex_AiMetadataStoreEncryptionSpec_GetTypes,
} from "../types/Vertex_AiMetadataStoreEncryptionSpec";
import {
  Vertex_AiMetadataStoreState,
  Vertex_AiMetadataStoreState_GetTypes,
} from "../types/Vertex_AiMetadataStoreState";

export interface AiMetadataStoreArgs {
  // The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the Metadata Store. eg us-central1
  Region?: string;

  // Description of the MetadataStore.
  Description?: string;

  /*
Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.
Structure is documented below.
*/
  EncryptionSpec?: Vertex_AiMetadataStoreEncryptionSpec;
}
export class AiMetadataStore extends Resource {
  // The region of the Metadata Store. eg us-central1
  public Region?: string;

  /*
State information of the MetadataStore.
Structure is documented below.
*/
  public States?: Array<Vertex_AiMetadataStoreState>;

  // The timestamp of when the MetadataStore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public UpdateTime?: string;

  // The timestamp of when the MetadataStore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public CreateTime?: string;

  // Description of the MetadataStore.
  public Description?: string;

  /*
Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.
Structure is documented below.
*/
  public EncryptionSpec?: Vertex_AiMetadataStoreEncryptionSpec;

  // The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the MetadataStore.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EncryptionSpec",
        "Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.\nStructure is documented below.",
        Vertex_AiMetadataStoreEncryptionSpec_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
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
        InputType.String,
        "Region",
        "The region of the Metadata Store. eg us-central1",
        [],
        false,
        true,
      ),
    ];
  }
}
