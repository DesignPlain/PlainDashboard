import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiMetadataStoreEncryptionSpec,
  vertex_AiMetadataStoreEncryptionSpec_GetTypes,
} from "../types/vertex_AiMetadataStoreEncryptionSpec";
import {
  vertex_AiMetadataStoreState,
  vertex_AiMetadataStoreState_GetTypes,
} from "../types/vertex_AiMetadataStoreState";

export interface AiMetadataStoreArgs {
  // Description of the MetadataStore.
  description?: string;

  /*
Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.
Structure is documented below.
*/
  encryptionSpec?: vertex_AiMetadataStoreEncryptionSpec;

  // The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The region of the Metadata Store. eg us-central1
  region?: string;
}
export class AiMetadataStore extends Resource {
  // The region of the Metadata Store. eg us-central1
  public region?: string;

  /*
State information of the MetadataStore.
Structure is documented below.
*/
  public states?: Array<vertex_AiMetadataStoreState>;

  // The timestamp of when the MetadataStore was last updated in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public updateTime?: string;

  // The timestamp of when the MetadataStore was created in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  public createTime?: string;

  // Description of the MetadataStore.
  public description?: string;

  /*
Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.
Structure is documented below.
*/
  public encryptionSpec?: vertex_AiMetadataStoreEncryptionSpec;

  // The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the MetadataStore.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionSpec",
        "Customer-managed encryption key spec for a MetadataStore. If set, this MetadataStore and all sub-resources of this MetadataStore will be secured by this key.\nStructure is documented below.",
        vertex_AiMetadataStoreEncryptionSpec_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the MetadataStore. This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.",
        [],
        false,
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
        "region",
        "The region of the Metadata Store. eg us-central1",
        [],
        false,
        true,
      ),
    ];
  }
}
