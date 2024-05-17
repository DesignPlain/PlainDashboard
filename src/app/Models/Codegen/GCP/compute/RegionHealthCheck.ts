import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionHealthCheckHttp2HealthCheck,
  Compute_RegionHealthCheckHttp2HealthCheck_GetTypes,
} from "../types/Compute_RegionHealthCheckHttp2HealthCheck";
import {
  Compute_RegionHealthCheckHttpHealthCheck,
  Compute_RegionHealthCheckHttpHealthCheck_GetTypes,
} from "../types/Compute_RegionHealthCheckHttpHealthCheck";
import {
  Compute_RegionHealthCheckSslHealthCheck,
  Compute_RegionHealthCheckSslHealthCheck_GetTypes,
} from "../types/Compute_RegionHealthCheckSslHealthCheck";
import {
  Compute_RegionHealthCheckTcpHealthCheck,
  Compute_RegionHealthCheckTcpHealthCheck_GetTypes,
} from "../types/Compute_RegionHealthCheckTcpHealthCheck";
import {
  Compute_RegionHealthCheckHttpsHealthCheck,
  Compute_RegionHealthCheckHttpsHealthCheck_GetTypes,
} from "../types/Compute_RegionHealthCheckHttpsHealthCheck";
import {
  Compute_RegionHealthCheckLogConfig,
  Compute_RegionHealthCheckLogConfig_GetTypes,
} from "../types/Compute_RegionHealthCheckLogConfig";
import {
  Compute_RegionHealthCheckGrpcHealthCheck,
  Compute_RegionHealthCheckGrpcHealthCheck_GetTypes,
} from "../types/Compute_RegionHealthCheckGrpcHealthCheck";

export interface RegionHealthCheckArgs {
  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  CheckIntervalSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  HttpsHealthCheck?: Compute_RegionHealthCheckHttpsHealthCheck;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  LogConfig?: Compute_RegionHealthCheckLogConfig;

  /*
A nested object resource
Structure is documented below.
*/
  GrpcHealthCheck?: Compute_RegionHealthCheckGrpcHealthCheck;

  /*
The Region in which the created health check should reside.
If it is not provided, the provider region is used.
*/
  Region?: string;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  HealthyThreshold?: number;

  /*
A nested object resource
Structure is documented below.
*/
  Http2HealthCheck?: Compute_RegionHealthCheckHttp2HealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  HttpHealthCheck?: Compute_RegionHealthCheckHttpHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  SslHealthCheck?: Compute_RegionHealthCheckSslHealthCheck;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  TimeoutSec?: number;

  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  UnhealthyThreshold?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

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
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A nested object resource
Structure is documented below.
*/
  TcpHealthCheck?: Compute_RegionHealthCheckTcpHealthCheck;
}
export class RegionHealthCheck extends Resource {
  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public GrpcHealthCheck?: Compute_RegionHealthCheckGrpcHealthCheck;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  public HealthyThreshold?: number;

  /*
A nested object resource
Structure is documented below.
*/
  public Http2HealthCheck?: Compute_RegionHealthCheckHttp2HealthCheck;

  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  public CheckIntervalSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  public HttpHealthCheck?: Compute_RegionHealthCheckHttpHealthCheck;

  /*
The Region in which the created health check should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  public TimeoutSec?: number;

  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  public UnhealthyThreshold?: number;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  public LogConfig?: Compute_RegionHealthCheckLogConfig;

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
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public SslHealthCheck?: Compute_RegionHealthCheckSslHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public TcpHealthCheck?: Compute_RegionHealthCheckTcpHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public HttpsHealthCheck?: Compute_RegionHealthCheckHttpsHealthCheck;

  // The type of the health check. One of HTTP, HTTP2, HTTPS, TCP, or SSL.
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "LogConfig",
        "Configure logging on this health check.\nStructure is documented below.",
        Compute_RegionHealthCheckLogConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SslHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_RegionHealthCheckSslHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "UnhealthyThreshold",
        "A so-far healthy instance will be marked unhealthy after this many\nconsecutive failures. The default value is 2.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "HttpsHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_RegionHealthCheckHttpsHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GrpcHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_RegionHealthCheckGrpcHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Http2HealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_RegionHealthCheckHttp2HealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "CheckIntervalSec",
        "How often (in seconds) to send a health check. The default value is 5\nseconds.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TcpHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_RegionHealthCheckTcpHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "HttpHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_RegionHealthCheckHttpHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "HealthyThreshold",
        "A so-far unhealthy instance will be marked healthy after this many\nconsecutive successes. The default value is 2.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "TimeoutSec",
        "How long (in seconds) to wait before claiming failure.\nThe default value is 5 seconds.  It is invalid for timeoutSec to have\ngreater value than checkIntervalSec.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the created health check should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
