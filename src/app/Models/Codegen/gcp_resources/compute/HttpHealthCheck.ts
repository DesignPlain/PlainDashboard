import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface HttpHealthCheckArgs {
  /*
The request path of the HTTP health check request.
The default value is /.
*/
  requestPath?: string;

  /*
How often (in seconds) to send a health check. The default value is 5
seconds.
*/
  checkIntervalSec?: number;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  description?: string;

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
The TCP port number for the HTTP health check request.
The default value is 80.
*/
  port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  timeoutSec?: number;

  /*
A so-far healthy instance will be marked unhealthy after this many
consecutive failures. The default value is 2.
*/
  unhealthyThreshold?: number;

  /*
A so-far unhealthy instance will be marked healthy after this many
consecutive successes. The default value is 2.
*/
  healthyThreshold?: number;

  /*
The value of the host header in the HTTP health check request. If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.
*/
  host?: string;
}
export class HttpHealthCheck extends Resource {
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
The value of the host header in the HTTP health check request. If
left empty (default value), the public IP on behalf of which this
health check is performed will be used.
*/
  public host?: string;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The URI of the created resource.
  public selfLink?: string;

  // Creation timestamp in RFC3339 text format.
  public creationTimestamp?: string;

  /*
The TCP port number for the HTTP health check request.
The default value is 80.
*/
  public port?: number;

  /*
The request path of the HTTP health check request.
The default value is /.
*/
  public requestPath?: string;

  /*
How long (in seconds) to wait before claiming failure.
The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.
*/
  public timeoutSec?: number;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the resource. Provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035.  Specifically, the name must be 1-63 characters long and\nmatch the regular expression `a-z?` which means\nthe first character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the\nlast character, which cannot be a dash.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "unhealthyThreshold",
        "A so-far healthy instance will be marked unhealthy after this many\nconsecutive failures. The default value is 2.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "requestPath",
        "The request path of the HTTP health check request.\nThe default value is /.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The TCP port number for the HTTP health check request.\nThe default value is 80.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "timeoutSec",
        "How long (in seconds) to wait before claiming failure.\nThe default value is 5 seconds.  It is invalid for timeoutSec to have\ngreater value than checkIntervalSec.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "healthyThreshold",
        "A so-far unhealthy instance will be marked healthy after this many\nconsecutive successes. The default value is 2.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "host",
        "The value of the host header in the HTTP health check request. If\nleft empty (default value), the public IP on behalf of which this\nhealth check is performed will be used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "checkIntervalSec",
        "How often (in seconds) to send a health check. The default value is 5\nseconds.",
        [],
        false,
        false,
      ),
    ];
  }
}
