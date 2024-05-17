import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface EnvReferencesArgs {
  // The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.
  ResourceType?: string;

  // Optional. A human-readable description of this reference.
  Description?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  EnvId?: string;

  // Required. The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  Name?: string;

  // Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resourceType.
  Refers?: string;
}
export class EnvReferences extends Resource {
  // Optional. A human-readable description of this reference.
  public Description?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  public EnvId?: string;

  // Required. The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  public Name?: string;

  // Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resourceType.
  public Refers?: string;

  // The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.
  public ResourceType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Refers",
        "Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resourceType.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ResourceType",
        "The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. A human-readable description of this reference.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "EnvId",
        "The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/environments/{{env_name}}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Required. The resource id of this reference. Values must match the regular expression [\\w\\s-.]+.",
        [],
        false,
        true,
      ),
    ];
  }
}
