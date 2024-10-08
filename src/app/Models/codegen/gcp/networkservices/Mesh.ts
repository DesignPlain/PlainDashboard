import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface MeshArgs {
  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the
specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to
be redirected to this port regardless of its actual ip:port destination. If unset, a port
'15001' is used as the interception port. This will is applicable only for sidecar proxy
deployments.
*/
  interceptionPort?: number;

  /*
Set of label tags associated with the Mesh resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Short name of the Mesh resource to be created.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Mesh extends DS_Resource {
  /*
Short name of the Mesh resource to be created.


- - -
*/
  public name?: string;

  /*
Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the
specified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to
be redirected to this port regardless of its actual ip:port destination. If unset, a port
'15001' is used as the interception port. This will is applicable only for sidecar proxy
deployments.
*/
  public interceptionPort?: number;

  /*
Set of label tags associated with the Mesh resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

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

  // Server-defined URL of this resource.
  public selfLink?: string;

  // Time the Mesh was updated in UTC.
  public updateTime?: string;

  // Time the Mesh was created in UTC.
  public createTime?: string;

  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'A free-text description of the resource. Max length 1024 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'interceptionPort',
        "Optional. If set to a valid TCP port (1-65535), instructs the SIDECAR proxy to listen on the\nspecified port of localhost (127.0.0.1) address. The SIDECAR proxy will expect all traffic to\nbe redirected to this port regardless of its actual ip:port destination. If unset, a port\n'15001' is used as the interception port. This will is applicable only for sidecar proxy\ndeployments.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Set of label tags associated with the Mesh resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Short name of the Mesh resource to be created.\n\n\n- - -',
        () => [],
        false,
        false,
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
