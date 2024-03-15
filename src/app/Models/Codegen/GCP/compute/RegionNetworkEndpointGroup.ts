import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RegionNetworkEndpointGroupServerlessDeployment } from "../types/RegionNetworkEndpointGroupServerlessDeployment";
import { RegionNetworkEndpointGroupAppEngine } from "../types/RegionNetworkEndpointGroupAppEngine";
import { RegionNetworkEndpointGroupCloudFunction } from "../types/RegionNetworkEndpointGroupCloudFunction";
import { RegionNetworkEndpointGroupCloudRun } from "../types/RegionNetworkEndpointGroupCloudRun";

export interface RegionNetworkEndpointGroupArgs {
  /*
Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.
Default value is `SERVERLESS`.
Possible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.
*/
  NetworkEndpointType?: string;

  /*
A reference to the region where the regional NEGs reside.


- - -
*/
  Region?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.
Structure is documented below.
*/
  ServerlessDeployment?: RegionNetworkEndpointGroupServerlessDeployment;

  /*
This field is only used for PSC NEGs.
Optional URL of the subnetwork to which all network endpoints in the NEG belong.
*/
  Subnetwork?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
This field is only used for PSC and INTERNET NEGs.
The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.
*/
  PscTargetService?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  AppEngine?: RegionNetworkEndpointGroupAppEngine;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  CloudFunction?: RegionNetworkEndpointGroupCloudFunction;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  CloudRun?: RegionNetworkEndpointGroupCloudRun;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  Description?: string;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  Name?: string;

  /*
This field is only used for PSC and INTERNET NEGs.
The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.
*/
  Network?: string;
}
export class RegionNetworkEndpointGroup extends Resource {
  /*
This field is only used for PSC and INTERNET NEGs.
The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.
*/
  public Network?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.
Structure is documented below.
*/
  public ServerlessDeployment?: RegionNetworkEndpointGroupServerlessDeployment;

  /*
This field is only used for PSC NEGs.
Optional URL of the subnetwork to which all network endpoints in the NEG belong.
*/
  public Subnetwork?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public CloudFunction?: RegionNetworkEndpointGroupCloudFunction;

  /*
Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression `a-z?` which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
*/
  public Name?: string;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

  /*
Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.
Default value is `SERVERLESS`.
Possible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.
*/
  public NetworkEndpointType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
This field is only used for PSC and INTERNET NEGs.
The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.
*/
  public PscTargetService?: string;

  /*
A reference to the region where the regional NEGs reside.


- - -
*/
  public Region?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public AppEngine?: RegionNetworkEndpointGroupAppEngine;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public CloudRun?: RegionNetworkEndpointGroupCloudRun;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        "This field is only used for PSC NEGs.\nOptional URL of the subnetwork to which all network endpoints in the NEG belong.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'This field is only used for PSC and INTERNET NEGs.\nThe URL of the network to which all network endpoints in the NEG belong. Uses\n"default" project network if unspecified.',
      ),
      new DynamicUIProps(
        InputType.String,
        "ServerlessDeployment",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region where the regional NEGs reside.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "PscTargetService",
        "This field is only used for PSC and INTERNET NEGs.\nThe target service url used to set up private service connection to\na Google API or a PSC Producer Service Attachment.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AppEngine",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CloudFunction",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CloudRun",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkEndpointType",
        "Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.\nDefault value is `SERVERLESS`.\nPossible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.",
      ),
    ];
  }
}
