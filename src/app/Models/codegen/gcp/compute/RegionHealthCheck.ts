import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  compute_RegionHealthCheckSslHealthCheck,
  compute_RegionHealthCheckSslHealthCheck_GetTypes,
} from '../types/compute_RegionHealthCheckSslHealthCheck';
import {
  compute_RegionHealthCheckHttp2HealthCheck,
  compute_RegionHealthCheckHttp2HealthCheck_GetTypes,
} from '../types/compute_RegionHealthCheckHttp2HealthCheck';
import {
  compute_RegionHealthCheckLogConfig,
  compute_RegionHealthCheckLogConfig_GetTypes,
} from '../types/compute_RegionHealthCheckLogConfig';
import {
  compute_RegionHealthCheckGrpcHealthCheck,
  compute_RegionHealthCheckGrpcHealthCheck_GetTypes,
} from '../types/compute_RegionHealthCheckGrpcHealthCheck';
import {
  compute_RegionHealthCheckHttpHealthCheck,
  compute_RegionHealthCheckHttpHealthCheck_GetTypes,
} from '../types/compute_RegionHealthCheckHttpHealthCheck';
import {
  compute_RegionHealthCheckHttpsHealthCheck,
  compute_RegionHealthCheckHttpsHealthCheck_GetTypes,
} from '../types/compute_RegionHealthCheckHttpsHealthCheck';
import {
  compute_RegionHealthCheckTcpHealthCheck,
  compute_RegionHealthCheckTcpHealthCheck_GetTypes,
} from '../types/compute_RegionHealthCheckTcpHealthCheck';

export interface RegionHealthCheckArgs {
  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.


- - -
*/
  name?: string;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  timeoutSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  grpcHealthCheck?: compute_RegionHealthCheckGrpcHealthCheck;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  healthyThreshold?: number;

  /*
A nested object resource
Structure is documented below.
*/
  httpHealthCheck?: compute_RegionHealthCheckHttpHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  httpsHealthCheck?: compute_RegionHealthCheckHttpsHealthCheck;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
The Region in which the created health check should reside.
If it is not provided, the provider region is used.
*/
  region?: string;

  /*
A nested object resource
Structure is documented below.
*/
  tcpHealthCheck?: compute_RegionHealthCheckTcpHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  sslHealthCheck?: compute_RegionHealthCheckSslHealthCheck;

  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  unhealthyThreshold?: number;

  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  checkIntervalSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  http2HealthCheck?: compute_RegionHealthCheckHttp2HealthCheck;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  logConfig?: compute_RegionHealthCheckLogConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class RegionHealthCheck extends DS_Resource {
  /*
A nested object resource
Structure is documented below.
*/
  public http2HealthCheck?: compute_RegionHealthCheckHttp2HealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public sslHealthCheck?: compute_RegionHealthCheckSslHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public tcpHealthCheck?: compute_RegionHealthCheckTcpHealthCheck;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  public healthyThreshold?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The Region in which the created health check should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public grpcHealthCheck?: compute_RegionHealthCheckGrpcHealthCheck;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  public timeoutSec?: number;

  // The type of the health check. One of HTTP, HTTP2, HTTPS, TCP, or SSL.
  public type?: string;

  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  public unhealthyThreshold?: number;

  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  public checkIntervalSec?: number;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public httpHealthCheck?: compute_RegionHealthCheckHttpHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public httpsHealthCheck?: compute_RegionHealthCheckHttpsHealthCheck;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  public logConfig?: compute_RegionHealthCheckLogConfig;

  /*
Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression `a-z?` which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.


- - -
*/
  public name?: string;

  // The URI of the created resource.
  public selfLink?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'unhealthyThreshold',
        'A so-far healthy instance will be marked unhealthy after this many\nconsecutive failures. The default value is 2.',
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
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'healthyThreshold',
        'A so-far unhealthy instance will be marked healthy after this many\nconsecutive successes. The default value is 2.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The Region in which the created health check should reside.\nIf it is not provided, the provider region is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'logConfig',
        'Configure logging on this health check.\nStructure is documented below.',
        () => compute_RegionHealthCheckLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'timeoutSec',
        'How long (in seconds) to wait before claiming failure.\nThe default value is 5 seconds.  It is invalid for timeoutSec to have\ngreater value than checkIntervalSec.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'grpcHealthCheck',
        'A nested object resource\nStructure is documented below.',
        () => compute_RegionHealthCheckGrpcHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'httpHealthCheck',
        'A nested object resource\nStructure is documented below.',
        () => compute_RegionHealthCheckHttpHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'tcpHealthCheck',
        'A nested object resource\nStructure is documented below.',
        () => compute_RegionHealthCheckTcpHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'checkIntervalSec',
        'How often (in seconds) to send a health check. The default value is 5\nseconds.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'httpsHealthCheck',
        'A nested object resource\nStructure is documented below.',
        () => compute_RegionHealthCheckHttpsHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description of this resource. Provide this property when\nyou create the resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sslHealthCheck',
        'A nested object resource\nStructure is documented below.',
        () => compute_RegionHealthCheckSslHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'http2HealthCheck',
        'A nested object resource\nStructure is documented below.',
        () => compute_RegionHealthCheckHttp2HealthCheck_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
