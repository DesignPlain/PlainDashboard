import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_RegionNetworkEndpointGroupAppEngine,
  Compute_RegionNetworkEndpointGroupAppEngine_GetTypes,
} from "../types/Compute_RegionNetworkEndpointGroupAppEngine";
import {
  Compute_RegionNetworkEndpointGroupCloudFunction,
  Compute_RegionNetworkEndpointGroupCloudFunction_GetTypes,
} from "../types/Compute_RegionNetworkEndpointGroupCloudFunction";
import {
  Compute_RegionNetworkEndpointGroupCloudRun,
  Compute_RegionNetworkEndpointGroupCloudRun_GetTypes,
} from "../types/Compute_RegionNetworkEndpointGroupCloudRun";
import {
  Compute_RegionNetworkEndpointGroupServerlessDeployment,
  Compute_RegionNetworkEndpointGroupServerlessDeployment_GetTypes,
} from "../types/Compute_RegionNetworkEndpointGroupServerlessDeployment";

export interface RegionNetworkEndpointGroupArgs {
  /*
This field is only used for PSC and INTERNET NEGs.
The target service url used to set up private service connection to
a Google API or a PSC Producer Service Attachment.
*/
  PscTargetService?: string;

  /*
A reference to the region where the regional NEGs reside.


- - -
*/
  Region?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  AppEngine?: Compute_RegionNetworkEndpointGroupAppEngine;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  CloudFunction?: Compute_RegionNetworkEndpointGroupCloudFunction;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  CloudRun?: Compute_RegionNetworkEndpointGroupCloudRun;

  /*
Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.
Default value is `SERVERLESS`.
Possible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.
*/
  NetworkEndpointType?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.
Structure is documented below.
*/
  ServerlessDeployment?: Compute_RegionNetworkEndpointGroupServerlessDeployment;

  /*
This field is only used for PSC NEGs.
Optional URL of the subnetwork to which all network endpoints in the NEG belong.
*/
  Subnetwork?: string;

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

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class RegionNetworkEndpointGroup extends Resource {
  /*
Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.
Default value is `SERVERLESS`.
Possible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.
*/
  public NetworkEndpointType?: string;

  /*
A reference to the region where the regional NEGs reside.


- - -
*/
  public Region?: string;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.
Structure is documented below.
*/
  public ServerlessDeployment?: Compute_RegionNetworkEndpointGroupServerlessDeployment;

  /*
This field is only used for PSC NEGs.
Optional URL of the subnetwork to which all network endpoints in the NEG belong.
*/
  public Subnetwork?: string;

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
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public AppEngine?: Compute_RegionNetworkEndpointGroupAppEngine;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public CloudFunction?: Compute_RegionNetworkEndpointGroupCloudFunction;

  /*
This field is only used for SERVERLESS NEGs.
Only one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.
Structure is documented below.
*/
  public CloudRun?: Compute_RegionNetworkEndpointGroupCloudRun;

  /*
An optional description of this resource. Provide this property when
you create the resource.
*/
  public Description?: string;

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
This field is only used for PSC and INTERNET NEGs.
The URL of the network to which all network endpoints in the NEG belong. Uses
"default" project network if unspecified.
*/
  public Network?: string;

  // The URI of the created resource.
  public SelfLink?: string;

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
        InputType.String,
        "PscTargetService",
        "This field is only used for PSC and INTERNET NEGs.\nThe target service url used to set up private service connection to\na Google API or a PSC Producer Service Attachment.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region where the regional NEGs reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        "This field is only used for PSC NEGs.\nOptional URL of the subnetwork to which all network endpoints in the NEG belong.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkEndpointType",
        "Type of network endpoints in this network endpoint group. Defaults to SERVERLESS.\nDefault value is `SERVERLESS`.\nPossible values are: `SERVERLESS`, `PRIVATE_SERVICE_CONNECT`, `INTERNET_IP_PORT`, `INTERNET_FQDN_PORT`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ServerlessDeployment",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloudRun, appEngine, cloudFunction or serverlessDeployment may be set.\nStructure is documented below.",
        Compute_RegionNetworkEndpointGroupServerlessDeployment_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource. Provide this property when\nyou create the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource; provided by the client when the resource is\ncreated. The name must be 1-63 characters long, and comply with\nRFC1035. Specifically, the name must be 1-63 characters long and match\nthe regular expression `a-z?` which means the\nfirst character must be a lowercase letter, and all following\ncharacters must be a dash, lowercase letter, or digit, except the last\ncharacter, which cannot be a dash.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'This field is only used for PSC and INTERNET NEGs.\nThe URL of the network to which all network endpoints in the NEG belong. Uses\n"default" project network if unspecified.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AppEngine",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
        Compute_RegionNetworkEndpointGroupAppEngine_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CloudFunction",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
        Compute_RegionNetworkEndpointGroupCloudFunction_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CloudRun",
        "This field is only used for SERVERLESS NEGs.\nOnly one of cloud_run, app_engine, cloud_function or serverless_deployment may be set.\nStructure is documented below.",
        Compute_RegionNetworkEndpointGroupCloudRun_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
