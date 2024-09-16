import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ServiceBindingArgs {
  /*
The full Service Directory Service name of the format
projects/-/locations/-/namespaces/-/services/-
*/
  service?: string;

  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Set of label tags associated with the ServiceBinding resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Name of the ServiceBinding resource.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class ServiceBinding extends DS_Resource {
  // Time the ServiceBinding was created in UTC.
  public createTime?: string;

  /*
Set of label tags associated with the ServiceBinding resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The full Service Directory Service name of the format
projects/-/locations/-/namespaces/-/services/-
*/
  public service?: string;

  // Time the ServiceBinding was updated in UTC.
  public updateTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Name of the ServiceBinding resource.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'service',
        'The full Service Directory Service name of the format\nprojects/*/locations/*/namespaces/*/services/*',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A free-text description of the resource. Max length 1024 characters.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Set of label tags associated with the ServiceBinding resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the ServiceBinding resource.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
