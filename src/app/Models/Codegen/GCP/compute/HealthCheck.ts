import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { HealthCheckSslHealthCheck } from "../types/HealthCheckSslHealthCheck";
import { HealthCheckGrpcHealthCheck } from "../types/HealthCheckGrpcHealthCheck";
import { HealthCheckHttpsHealthCheck } from "../types/HealthCheckHttpsHealthCheck";
import { HealthCheckTcpHealthCheck } from "../types/HealthCheckTcpHealthCheck";
import { HealthCheckHttp2HealthCheck } from "../types/HealthCheckHttp2HealthCheck";
import { HealthCheckLogConfig } from "../types/HealthCheckLogConfig";
import { HealthCheckHttpHealthCheck } from "../types/HealthCheckHttpHealthCheck";

export interface HealthCheckArgs {
  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  HealthyThreshold?: number;

  /*
A nested object resource
Structure is documented below.
*/
  SslHealthCheck?: HealthCheckSslHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  GrpcHealthCheck?: HealthCheckGrpcHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  HttpsHealthCheck?: HealthCheckHttpsHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  TcpHealthCheck?: HealthCheckTcpHealthCheck;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  TimeoutSec?: number;

  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  CheckIntervalSec?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
A nested object resource
Structure is documented below.
*/
  Http2HealthCheck?: HealthCheckHttp2HealthCheck;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  LogConfig?: HealthCheckLogConfig;

  /*
A nested object resource
Structure is documented below.
*/
  HttpHealthCheck?: HealthCheckHttpHealthCheck;

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
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  UnhealthyThreshold?: number;
}
export class HealthCheck extends Resource {
  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  public CheckIntervalSec?: number;

  /*
A nested object resource
Structure is documented below.
*/
  public Http2HealthCheck?: HealthCheckHttp2HealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public TcpHealthCheck?: HealthCheckTcpHealthCheck;

  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  public UnhealthyThreshold?: number;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public GrpcHealthCheck?: HealthCheckGrpcHealthCheck;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  public HealthyThreshold?: number;

  /*
A nested object resource
Structure is documented below.
*/
  public HttpsHealthCheck?: HealthCheckHttpsHealthCheck;

  /*
A nested object resource
Structure is documented below.
*/
  public SslHealthCheck?: HealthCheckSslHealthCheck;

  // The type of the health check. One of HTTP, HTTPS, TCP, or SSL.
  public Type?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  /*
A nested object resource
Structure is documented below.
*/
  public HttpHealthCheck?: HealthCheckHttpHealthCheck;

  /*
Configure logging on this health check.
Structure is documented below.
*/
  public LogConfig?: HealthCheckLogConfig;

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
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  public TimeoutSec?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "SslHealthCheck",
        "A nested object resource\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HttpsHealthCheck",
        "A nested object resource\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "TimeoutSec",
        "How long (in seconds) to wait before claiming failure.\nThe default value is 5 seconds.  It is invalid for timeoutSec to have\ngreater value than checkIntervalSec.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.Number,
        "HealthyThreshold",
        "A so-far unhealthy instance will be marked healthy after this many\nconsecutive successes. The default value is 2.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LogConfig",
        "Configure logging on this health check.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HttpHealthCheck",
        "A nested object resource\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GrpcHealthCheck",
        "A nested object resource\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "CheckIntervalSec",
        "How often (in seconds) to send a health check. The default value is 5\nseconds.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Http2HealthCheck",
        "A nested object resource\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "UnhealthyThreshold",
        "A so-far healthy instance will be marked unhealthy after this many\nconsecutive failures. The default value is 2.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TcpHealthCheck",
        "A nested object resource\nStructure is documented below.",
      ),
    ];
  }
}
