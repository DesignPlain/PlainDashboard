import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_HealthCheckHttp2HealthCheck,
  Compute_HealthCheckHttp2HealthCheck_GetTypes,
} from "../types/Compute_HealthCheckHttp2HealthCheck";
import {
  Compute_HealthCheckHttpsHealthCheck,
  Compute_HealthCheckHttpsHealthCheck_GetTypes,
} from "../types/Compute_HealthCheckHttpsHealthCheck";
import {
  Compute_HealthCheckGrpcHealthCheck,
  Compute_HealthCheckGrpcHealthCheck_GetTypes,
} from "../types/Compute_HealthCheckGrpcHealthCheck";
import {
  Compute_HealthCheckSslHealthCheck,
  Compute_HealthCheckSslHealthCheck_GetTypes,
} from "../types/Compute_HealthCheckSslHealthCheck";
import {
  Compute_HealthCheckLogConfig,
  Compute_HealthCheckLogConfig_GetTypes,
} from "../types/Compute_HealthCheckLogConfig";
import {
  Compute_HealthCheckHttpHealthCheck,
  Compute_HealthCheckHttpHealthCheck_GetTypes,
} from "../types/Compute_HealthCheckHttpHealthCheck";
import {
  Compute_HealthCheckTcpHealthCheck,
  Compute_HealthCheckTcpHealthCheck_GetTypes,
} from "../types/Compute_HealthCheckTcpHealthCheck";

export interface HealthCheckArgs {
  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  LogConfig?: Compute_HealthCheckLogConfig;

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
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  TimeoutSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  HttpHealthCheck?: Compute_HealthCheckHttpHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  TcpHealthCheck?: Compute_HealthCheckTcpHealthCheck;

  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  UnhealthyThreshold?: number;

  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  CheckIntervalSec?: number;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  HealthyThreshold?: number;

  /*
A nested object resource
Structure is documented below.
*/
  Http2HealthCheck?: Compute_HealthCheckHttp2HealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  HttpsHealthCheck?: Compute_HealthCheckHttpsHealthCheck;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A nested object resource
Structure is documented below.
*/
  GrpcHealthCheck?: Compute_HealthCheckGrpcHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  SslHealthCheck?: Compute_HealthCheckSslHealthCheck;
}
export class HealthCheck extends Resource {
  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  public CheckIntervalSec?: number;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  public HealthyThreshold?: number;

  /*
A nested object resource
Structure is documented below.
*/
  public Http2HealthCheck?: Compute_HealthCheckHttp2HealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public HttpHealthCheck?: Compute_HealthCheckHttpHealthCheck;

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
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public GrpcHealthCheck?: Compute_HealthCheckGrpcHealthCheck;

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
A nested object resource
Structure is documented below.
*/
  public SslHealthCheck?: Compute_HealthCheckSslHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public TcpHealthCheck?: Compute_HealthCheckTcpHealthCheck;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public HttpsHealthCheck?: Compute_HealthCheckHttpsHealthCheck;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  public LogConfig?: Compute_HealthCheckLogConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The type of the health check. One of HTTP, HTTPS, TCP, or SSL.
  public Type?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "SslHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_HealthCheckSslHealthCheck_GetTypes(),
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
        InputType.Number,
        "CheckIntervalSec",
        "How often (in seconds) to send a health check. The default value is 5\nseconds.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Http2HealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_HealthCheckHttp2HealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LogConfig",
        "Configure logging on this health check.\nStructure is documented below.",
        Compute_HealthCheckLogConfig_GetTypes(),
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
        InputType.Number,
        "HealthyThreshold",
        "A so-far unhealthy instance will be marked healthy after this many\nconsecutive successes. The default value is 2.",
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
        "HttpHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_HealthCheckHttpHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "GrpcHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_HealthCheckGrpcHealthCheck_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "TcpHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_HealthCheckTcpHealthCheck_GetTypes(),
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
        InputType.Object,
        "HttpsHealthCheck",
        "A nested object resource\nStructure is documented below.",
        Compute_HealthCheckHttpsHealthCheck_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
