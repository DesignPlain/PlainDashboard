import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface EnvReferencesArgs {
  // Optional. A human-readable description of this reference.
  description?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  envId?: string;

  // Required. The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  name?: string;

  // Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resourceType.
  refers?: string;

  // The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.
  resourceType?: string;
}
export class EnvReferences extends DS_Resource {
  // Optional. A human-readable description of this reference.
  public description?: string;

  /*
The Apigee environment group associated with the Apigee environment,
in the format `organizations/{{org_name}}/environments/{{env_name}}`.


- - -
*/
  public envId?: string;

  // Required. The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  public name?: string;

  // Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resourceType.
  public refers?: string;

  // The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.
  public resourceType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Optional. A human-readable description of this reference.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'envId',
        'The Apigee environment group associated with the Apigee environment,\nin the format `organizations/{{org_name}}/environments/{{env_name}}`.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Required. The resource id of this reference. Values must match the regular expression [\\w\\s-.]+.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'refers',
        'Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent environment and is of the given resourceType.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceType',
        "The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
