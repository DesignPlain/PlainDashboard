import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securesourcemanager_InstancePrivateConfig,
  securesourcemanager_InstancePrivateConfig_GetTypes,
} from '../types/securesourcemanager_InstancePrivateConfig';
import {
  securesourcemanager_InstanceHostConfig,
  securesourcemanager_InstanceHostConfig_GetTypes,
} from '../types/securesourcemanager_InstanceHostConfig';

export interface InstanceArgs {
  /*
Labels as key value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the Instance.
  location?: string;

  /*
Private settings for private instance.
Structure is documented below.
*/
  privateConfig?: securesourcemanager_InstancePrivateConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The name for the Instance.


- - -
*/
  instanceId?: string;

  // Customer-managed encryption key name, in the format projects/-/locations/-/keyRings/-/cryptoKeys/-.
  kmsKey?: string;
}
export class Instance extends DS_Resource {
  // Time the Instance was created in UTC.
  public createTime?: string;

  /*
The name for the Instance.


- - -
*/
  public instanceId?: string;

  // The resource name for the Instance.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The current state of the Instance.
  public state?: string;

  // Time the Instance was updated in UTC.
  public updateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Labels as key value pairs.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The location for the Instance.
  public location?: string;

  /*
Private settings for private instance.
Structure is documented below.
*/
  public privateConfig?: securesourcemanager_InstancePrivateConfig;

  /*
A list of hostnames for this instance.
Structure is documented below.
*/
  public hostConfigs?: Array<securesourcemanager_InstanceHostConfig>;

  // Customer-managed encryption key name, in the format projects/-/locations/-/keyRings/-/cryptoKeys/-.
  public kmsKey?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Provides information about the current instance state.
  public stateNote?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        'The name for the Instance.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKey',
        'Customer-managed encryption key name, in the format projects/*/locations/*/keyRings/*/cryptoKeys/*.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Labels as key value pairs.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The location for the Instance.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'privateConfig',
        'Private settings for private instance.\nStructure is documented below.',
        () => securesourcemanager_InstancePrivateConfig_GetTypes(),
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
