import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HttpHealthCheckArgs {
  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  CheckIntervalSec?: number;

  /*
The value of the host header in the HTTP health check request. If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.
*/
  Host?: string;

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
The TCP port number for the HTTP health check request.
The default value is 80.
*/
  Port?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  HealthyThreshold?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The request path of the HTTP health check request.
The default value is /.
*/
  RequestPath?: string;

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
}
export class HttpHealthCheck extends Resource {
  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  public UnhealthyThreshold?: number;

  /*
The value of the host header in the HTTP health check request. If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.
*/
  public Host?: string;

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

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  public TimeoutSec?: number;

  /*
The TCP port number for the HTTP health check request.
The default value is 80.
*/
  public Port?: number;

  /*
The request path of the HTTP health check request.
The default value is /.
*/
  public RequestPath?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  public CheckIntervalSec?: number;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  public HealthyThreshold?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "TimeoutSec",
        "How long (in seconds) to wait before claiming failure.\nThe default value is 5 seconds.  It is invalid for timeoutSec to have\ngreater value than checkIntervalSec.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "UnhealthyThreshold",
        "A so-far healthy instance will be marked unhealthy after this many\nconsecutive failures. The default value is 2.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "CheckIntervalSec",
        "How often (in seconds) to send a health check. The default value is 5\nseconds.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Host",
        "The value of the host header in the HTTP health check request. If\nleft empty (default value), the public IP on behalf of which this\nhealth check is performed will be used.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "The TCP port number for the HTTP health check request.\nThe default value is 80.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "HealthyThreshold",
        "A so-far unhealthy instance will be marked healthy after this many\nconsecutive successes. The default value is 2.",
      ),
      new DynamicUIProps(
        InputType.String,
        "RequestPath",
        "The request path of the HTTP health check request.\nThe default value is /.",
      ),
    ];
  }
}
