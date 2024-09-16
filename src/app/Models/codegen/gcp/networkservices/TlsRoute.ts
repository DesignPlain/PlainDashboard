import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkservices_TlsRouteRule,
  networkservices_TlsRouteRule_GetTypes,
} from '../types/networkservices_TlsRouteRule';

export interface TlsRouteArgs {
  // A free-text description of the resource. Max length 1024 characters.
  description?: string;

  /*
Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  gateways?: Array<string>;

  /*
Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR
*/
  meshes?: Array<string>;

  // Name of the TlsRoute resource.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  rules?: Array<networkservices_TlsRouteRule>;
}
export class TlsRoute extends DS_Resource {
  // A free-text description of the resource. Max length 1024 characters.
  public description?: string;

  /*
Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.
Each mesh reference should match the pattern: projects/-/locations/global/meshes/<mesh_name>
The attached Mesh should be of a type SIDECAR
*/
  public meshes?: Array<string>;

  // Name of the TlsRoute resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Server-defined URL of this resource.
  public selfLink?: string;

  // Time the TlsRoute was created in UTC.
  public createTime?: string;

  /*
Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.
Each gateway reference should match the pattern: projects/-/locations/global/gateways/<gateway_name>
*/
  public gateways?: Array<string>;

  /*
Rules that define how traffic is routed and handled.
Structure is documented below.
*/
  public rules?: Array<networkservices_TlsRouteRule>;

  // Time the TlsRoute was updated in UTC.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'meshes',
        'Meshes defines a list of meshes this TlsRoute is attached to, as one of the routing rules to route the requests served by the mesh.\nEach mesh reference should match the pattern: projects/*/locations/global/meshes/<mesh_name>\nThe attached Mesh should be of a type SIDECAR',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the TlsRoute resource.',
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
      new DynamicUIProps(
        InputType.Array,
        'rules',
        'Rules that define how traffic is routed and handled.\nStructure is documented below.',
        () => networkservices_TlsRouteRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A free-text description of the resource. Max length 1024 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'gateways',
        'Gateways defines a list of gateways this TlsRoute is attached to, as one of the routing rules to route the requests served by the gateway.\nEach gateway reference should match the pattern: projects/*/locations/global/gateways/<gateway_name>',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
