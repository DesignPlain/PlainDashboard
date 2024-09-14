import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  compute_HealthCheckGrpcHealthCheck,
  compute_HealthCheckGrpcHealthCheck_GetTypes,
} from "../types/compute_HealthCheckGrpcHealthCheck";
import {
  compute_HealthCheckHttpHealthCheck,
  compute_HealthCheckHttpHealthCheck_GetTypes,
} from "../types/compute_HealthCheckHttpHealthCheck";
import {
  compute_HealthCheckHttp2HealthCheck,
  compute_HealthCheckHttp2HealthCheck_GetTypes,
} from "../types/compute_HealthCheckHttp2HealthCheck";
import {
  compute_HealthCheckHttpsHealthCheck,
  compute_HealthCheckHttpsHealthCheck_GetTypes,
} from "../types/compute_HealthCheckHttpsHealthCheck";
import {
  compute_HealthCheckLogConfig,
  compute_HealthCheckLogConfig_GetTypes,
} from "../types/compute_HealthCheckLogConfig";
import {
  compute_HealthCheckTcpHealthCheck,
  compute_HealthCheckTcpHealthCheck_GetTypes,
} from "../types/compute_HealthCheckTcpHealthCheck";
import {
  compute_HealthCheckSslHealthCheck,
  compute_HealthCheckSslHealthCheck_GetTypes,
} from "../types/compute_HealthCheckSslHealthCheck";

export interface HealthCheckArgs {
  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  checkIntervalSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  grpcHealthCheck?: compute_HealthCheckGrpcHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  httpHealthCheck?: compute_HealthCheckHttpHealthCheck;

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
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  unhealthyThreshold?: number;

  /*
A nested object resource
Structure is documented below.
*/
  http2HealthCheck?: compute_HealthCheckHttp2HealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  httpsHealthCheck?: compute_HealthCheckHttpsHealthCheck;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  logConfig?: compute_HealthCheckLogConfig;

  /*
A nested object resource
Structure is documented below.
*/
  tcpHealthCheck?: compute_HealthCheckTcpHealthCheck;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  healthyThreshold?: number;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  timeoutSec?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A nested object resource
Structure is documented below.
*/
  sslHealthCheck?: compute_HealthCheckSslHealthCheck;
}
export class HealthCheck extends DS_Resource {
  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  public healthyThreshold?: number;

  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  public unhealthyThreshold?: number;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  public timeoutSec?: number;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public grpcHealthCheck?: compute_HealthCheckGrpcHealthCheck;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  public logConfig?: compute_HealthCheckLogConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public tcpHealthCheck?: compute_HealthCheckTcpHealthCheck;

  // The URI of the created resource.
  public selfLink?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public sslHealthCheck?: compute_HealthCheckSslHealthCheck;

  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  public checkIntervalSec?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public description?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public http2HealthCheck?: compute_HealthCheckHttp2HealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public httpsHealthCheck?: compute_HealthCheckHttpsHealthCheck;

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

  /*
A nested object resource
Structure is documented below.
*/
  public httpHealthCheck?: compute_HealthCheckHttpHealthCheck;

  // The type of the health check. One of HTTP, HTTPS, TCP, or SSL.
  public type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "tcpHealthCheck",
        "A nested object resource\nStructure is documented below.",
        () => compute_HealthCheckTcpHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "checkIntervalSec",
        "How often (in seconds) to send a health check. The default value is 5\nseconds.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "unhealthyThreshold",
        "A so-far healthy instance will be marked unhealthy after this many\nconsecutive failures. The default value is 2.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "httpHealthCheck",
        "A nested object resource\nStructure is documented below.",
        () => compute_HealthCheckHttpHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "httpsHealthCheck",
        "A nested object resource\nStructure is documented below.",
        () => compute_HealthCheckHttpsHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "logConfig",
        "Configure logging on this health check.\nStructure is documented below.",
        () => compute_HealthCheckLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "grpcHealthCheck",
        "A nested object resource\nStructure is documented below.",
        () => compute_HealthCheckGrpcHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "http2HealthCheck",
        "A nested object resource\nStructure is documented below.",
        () => compute_HealthCheckHttp2HealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "healthyThreshold",
        "A so-far unhealthy instance will be marked healthy after this many\nconsecutive successes. The default value is 2.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeoutSec",
        "How long (in seconds) to wait before claiming failure.\nThe default value is 5 seconds.  It is invalid for timeoutSec to have\ngreater value than checkIntervalSec.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sslHealthCheck",
        "A nested object resource\nStructure is documented below.",
        () => compute_HealthCheckSslHealthCheck_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
