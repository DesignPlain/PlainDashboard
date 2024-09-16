import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface RegionTargetHttpsProxyArgs {
  /*
URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.
At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
*/
  sslCertificates?: Array<string>;

  /*
A reference to the Region SslPolicy resource that will be associated with
the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.
*/
  sslPolicy?: string;

  /*
A reference to the RegionUrlMap resource that defines the mapping from URL
to the RegionBackendService.


- - -
*/
  urlMap?: string;

  /*
URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.
Currently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}` or just the self_link `projects/{project}/locations/{location}/certificates/{resourceName}`
*/
  certificateManagerCertificates?: Array<string>;

  // An optional description of this resource.
  description?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The Region in which the created target https proxy should reside.
If it is not provided, the provider region is used.
*/
  region?: string;
}
export class RegionTargetHttpsProxy extends DS_Resource {
  /*
The Region in which the created target https proxy should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  /*
URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.
At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
*/
  public sslCertificates?: Array<string>;

  /*
A reference to the Region SslPolicy resource that will be associated with
the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
resource will not have any SSL policy configured.
*/
  public sslPolicy?: string;

  /*
A reference to the RegionUrlMap resource that defines the mapping from URL
to the RegionBackendService.


- - -
*/
  public urlMap?: string;

  /*
URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.
Currently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
sslCertificates and certificateManagerCertificates fields can not be defined together.
Accepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}` or just the self_link `projects/{project}/locations/{location}/certificates/{resourceName}`
*/
  public certificateManagerCertificates?: Array<string>;

  // An optional description of this resource.
  public description?: string;

  // The unique identifier for the resource.
  public proxyId?: number;

  // The URI of the created resource.
  public selfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'sslCertificates',
        'URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.\nAt least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.\nsslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'sslPolicy',
        'A reference to the Region SslPolicy resource that will be associated with\nthe TargetHttpsProxy resource. If not set, the TargetHttpsProxy\nresource will not have any SSL policy configured.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'urlMap',
        'A reference to the RegionUrlMap resource that defines the mapping from URL\nto the RegionBackendService.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'certificateManagerCertificates',
        'URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.\nCurrently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.\nsslCertificates and certificateManagerCertificates fields can not be defined together.\nAccepted format is `//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}` or just the self_link `projects/{project}/locations/{location}/certificates/{resourceName}`',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.',
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
        InputType.String,
        'region',
        'The Region in which the created target https proxy should reside.\nIf it is not provided, the provider region is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
